import { pokemonApi } from '@/api/pokemon.api'
import type { Pokemon } from '@/interfaces/pokemon'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useInfiniteQuery } from '@tanstack/vue-query'

export const usePokemonStore = defineStore('pokemon', () => {
  // State
  const pokemonTeam = ref<Pokemon[]>([])

  // Getters
  const getPokemonDetail = computed(() => (id: string) => {
    const pokemon = pokemonTeam.value.find((pokemon) => pokemon.id === id)
    return pokemon
  })

  // Infinite Query para la lista de pokemones
  const {
    data: pokemonList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['pokemonList'],
    queryFn: async ({ pageParam = 0 }) => {
      const limit = 25
      const maxPokemon = 151
      const offset = pageParam * limit

      if (offset >= maxPokemon) {
        return []
      }

      const results = await pokemonApi.getPokemonList(limit, offset)
      return results.map((pokemon: Pokemon) => {
        const isSelected = pokemonTeam.value.some((team: Pokemon) => team.id === pokemon.id)
        return { ...pokemon, isSelected }
      })
    },
    getNextPageParam: (lastPage, allPages) => {
      const maxPokemon = 151
      const totalLoaded = allPages.flat().length

      if (totalLoaded >= maxPokemon) return undefined

      return allPages.length
    },
    initialPageParam: 0,
  })

  // Actions
  const selectPokemon = (id: string) => {
    if (pokemonTeam.value.length >= 6) return

    const allPokemon = pokemonList.value?.pages.flat()
    const selectedPokemon = allPokemon?.find((pokemon: Pokemon) => pokemon.id === id)

    if (selectedPokemon) {
      selectedPokemon.isSelected = true
      pokemonTeam.value.push({ ...selectedPokemon })
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
    // state
    pokemonTeam,

    // getters
    getPokemonDetail,

    // Infinite Query
    pokemonList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,

    // Actions
    selectPokemon,
    loadPokemonDetails,
    removePokemonTeam,
  }
})
