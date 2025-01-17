export const colors: { [key: string]: { background: string; font: string } } = {
  fire: { background: '#ff3333', font: '#000000' },
  water: { background: '#3b6cff', font: '#ffffff' },
  grass: { background: '#00cd33', font: '#000000' },
  poison: { background: '#613e5e', font: '#ffffff' },
  bug: { background: '#cece00', font: '#000000' },
  flying: { background: '#add8e6', font: '#000000' },
  normal: { background: '#A8A77A', font: '#000000' },
  ground: { background: '#994d00', font: '#ffffff' },
  electric: { background: '#e6e600', font: '#380B61' },
  fairy: { background: '#F06292', font: '#000000' },
  psychic: { background: '#8332c3', font: '#ffffff' },
  steel: { background: '#5d5d5d', font: '#ffffff' },
  rock: { background: '#85684a', font: '#ffffff' },
  ice: { background: '#b3ebf2', font: '#263238' },
  ghost: { background: '#262626', font: '#ffffff' },
  dragon: { background: '#4000ff', font: '#ffffff' },
  fighting: { background: '#A93226', font: '#ffffff' },
  dark: { background: '#705746', font: '#ffffff' },
}

const defaultColors = { background: '#000000', font: '#ffffff' }

export const getBgColor = (type: string | undefined): string => {
  if (!type) return defaultColors.background
  return colors[type].background || defaultColors.background
}

export const getFontColor = (type: string | undefined): string => {
  if (!type) return defaultColors.font
  return colors[type].font || defaultColors.font
}

export const getPokemonTypeInSpanish = (type: string | undefined): string | undefined => {
  if (!type) return
  const typesInSpanish: { [key: string]: string } = {
    fire: 'fuego',
    water: 'agua',
    grass: 'planta',
    poison: 'veneno',
    bug: 'bicho',
    flying: 'volador',
    normal: 'normal',
    ground: 'tierra',
    electric: 'eléctrico',
    fairy: 'hada',
    psychic: 'psíquico',
    steel: 'acero',
    rock: 'roca',
    ice: 'hielo',
    ghost: 'fantasma',
    dragon: 'dragón',
    fighting: 'lucha',
    dark: 'siniestro',
  }

  return typesInSpanish[type] || undefined
}
