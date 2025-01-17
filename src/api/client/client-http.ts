import axios from 'axios'

const POKE_API_URL = 'https://pokeapi.co/api/v2'

export const clientHttp = axios.create({
  baseURL: POKE_API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})
