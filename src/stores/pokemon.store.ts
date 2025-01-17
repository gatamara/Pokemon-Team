import { pokemonApi } from '@/api/pokemon.api'
import usePagination from '@/composables/usePagination'
import type { Pokemon } from '@/interfaces/pokemon'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
  //state
  const pokemonList = ref<Pokemon[]>([])
  const pokemonTeam = ref<Pokemon[]>([])

  //getters

  const getPokemonDetail = computed(() => (id: string) => {
    const pokemon = pokemonTeam.value.find((pokemon) => pokemon.id === id)
    return pokemon
  })

  //actions (son llamados desde la vista)
  const loadPokemons = async () => {
    const { limit, offset } = usePagination()
    const results = await pokemonApi.getPokemonList(limit, offset)
    pokemonList.value = results.map((pokemon: Pokemon) => {
      const isSelected = pokemonTeam.value.some((team: Pokemon) => team.id === pokemon.id)
      return { ...pokemon, isSelected }
    })
  }

  const selectPokemon = (id: string) => {
    if (pokemonTeam.value.length >= 6) return

    const selectedPokemon = pokemonList.value?.find((pokemon) => pokemon.id == id)

    if (selectedPokemon) {
      selectedPokemon.isSelected = true
      pokemonTeam.value.push(selectedPokemon)
    }
  }
  const loadPokemonDetails = async () => {
    const promises = pokemonTeam.value.map((p) => pokemonApi.getPokemonDetail(p.id))
    pokemonTeam.value = await Promise.all(promises)
  }

  const removePokemonTeam = (id: string) => {
    pokemonTeam.value = pokemonTeam.value.filter((i) => i.id !== id)
  }

  return {
    pokemonList,
    pokemonTeam,
    getPokemonDetail,
    loadPokemons,
    selectPokemon,
    loadPokemonDetails,
    removePokemonTeam,
  }
})
