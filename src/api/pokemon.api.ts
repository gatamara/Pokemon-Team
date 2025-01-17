import { mapResponseToPokemonDetail, mapResponseToPokemonList } from '@/mapper/pokemon.mapper'
import { clientHttp } from './client/client-http'
import type { PokemonListResponse } from './responses/pokemon-list.response'
import type { Pokemon } from '@/interfaces/pokemon'
import type { PokemonDetailResponse } from './responses/pokemon-detail.response'
import type { PokemonSpeciesResponse } from './responses/pokemon-species.response'

const getPokemonDescription = async (id: string): Promise<string> => {
  try {
    const response = await clientHttp.get<PokemonSpeciesResponse>(`/pokemon-species/${id}`)
    const description = response.data.flavor_text_entries.find((e) => e.language.name === 'es')
    return description?.flavor_text ?? ''
  } catch (error) {
    console.log(error)
    throw new Error('Ocurrio un error al obtener la descripcion del pokemon')
  }
}

const getPokemonEvolutions = () => {}

export const pokemonApi = {
  getPokemonList: async (limit: number, offset: number): Promise<Pokemon[]> => {
    try {
      const response = await clientHttp.get<PokemonListResponse>(`/pokemon`, {
        params: { limit, offset },
      })
      const pokemonList: Pokemon[] = mapResponseToPokemonList(response.data)
      return pokemonList
    } catch (error) {
      console.log(error)
      throw new Error('Ocurrio un error al obtener el listado de pokemones')
    }
  },
  getPokemonDetail: async (id: string): Promise<Pokemon> => {
    try {
      const response = await clientHttp.get<PokemonDetailResponse>(`/pokemon/${id}`)
      const description = await getPokemonDescription(id)

      const pokemon: Pokemon = mapResponseToPokemonDetail(response.data, description)
      return pokemon
    } catch (error) {
      console.log(error)
      throw new Error('Ocurrio un error al obtener dealle del pokemon')
    }
  },
}
