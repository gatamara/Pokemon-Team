import type { PokemonDetailResponse } from '@/api/responses/pokemon-detail.response'
import type { PokemonListResponse } from '@/api/responses/pokemon-list.response'
import type { Pokemon } from '@/interfaces/pokemon'

export const mapResponseToPokemonList = (response: PokemonListResponse): Pokemon[] => {
  return response.results.map((result) => {
    const pokemonNumber = Number(result.url.match(/\/(\d+)\/$/)?.[1] || 1)

    const item: Pokemon = {
      id: pokemonNumber.toString(),
      name: result.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`,
      isSelected: false,
    }
    return item
  })
}

export const mapResponseToPokemonDetail = (
  response: PokemonDetailResponse,
  description: string,
): Pokemon => {
  return {
    id: response.id.toString(),
    name: response.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`,
    isSelected: false,
    typeA: response.types.find((type) => type.slot == 1)?.type.name,
    typeB: response.types.find((type) => type.slot == 2)?.type.name,
    stats: response.stats.map((stat) => {
      return {
        name: stat.stat.name,
        base: stat.base_stat,
      }
    }),
    cries: response.cries,
    height: response.height,
    weight: response.weight,
    description: description,
  }
}
