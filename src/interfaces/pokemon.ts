export interface Pokemon {
  id: string
  name: string
  image: string
  isSelected: boolean
  typeA?: string | undefined
  typeB?: string | undefined
  stats?: PokemonStat[] | undefined
  cries?: PokemonCries | undefined
  height?: number | undefined
  weight?: number | undefined
  description?: string | undefined
  evolutions?: PokemonEvolution[]
}

export interface PokemonStat {
  name: string
  base: number
}

export interface PokemonCries {
  latest: string
  legacy: string
}

export interface PokemonEvolution {
  name: string
  number: number
}
