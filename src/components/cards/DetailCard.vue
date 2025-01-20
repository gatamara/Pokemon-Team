<template>
  <div class="p-6 flex justify-center">
    <div class="w-fit bg-black/80 rounded-[10px] p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 ">
        <div class=" flex flex-col items-center justify-center relative">
          <div class="font-bold text-[250px] absolute text-slate-500/30 z-0 ">{{ id }}</div>
          <h1 class="text-white text-2xl p-2 uppercase text-center">{{ props.name }}</h1>
          <div class=" z-50 flex ">
            <img class="h-[300px] w-[300px]  animation-pokemon "
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`"
              alt="raichu" />
            <img class="h-[300px] w-[300px]  animation-pokemon "
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${props.id}.png`"
              alt="raichu" />
          </div>

          <div class="flex flex-row gap-2 p-2">
            <span v-if="props.typeA"
              :style="{ backgroundColor: getBgColor(props.typeA), color: getFontColor(props.typeA) }"
              class="py-1 px-2 rounded-md uppercase font-semibold">{{ getPokemonTypeInSpanish(props.typeA) }}</span>
            <span v-if="props.typeB"
              :style="{ backgroundColor: getBgColor(props.typeB), color: getFontColor(props.typeB) }"
              class="py-1 px-2 rounded-md uppercase font-semibold">{{ getPokemonTypeInSpanish(props.typeB) }}</span>
          </div>
        </div>
        <div class="">
          <div class="py-4 text-center">
            <h1 class="font-semibold pb-4 text-white">Descripcion</h1>
            <p class="text-white/80">{{ props.description }}</p>
          </div>
          <div class="flex">
            <div class="pr-8">
              <h1 class="font-semibold text-white py-2">Altura</h1>
              <h2 class="text-white/80">{{ props.height }}</h2>
            </div>
            <div>
              <h1 class="font-semibold text-white py-2">Peso:</h1>
              <h2 class="text-white/80">{{ props.weight }}</h2>
            </div>
          </div>
          <div class="p-4">
            <audio class="w-full" :src="props.cries?.latest" controls />
          </div>
          <div v-if="props.stats" class="p-2 h-full">
            <GraphStats :stats="props.stats" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { PokemonCries, PokemonStat } from '@/interfaces/pokemon'
import GraphStats from '../graph/GraphStats.vue'
import { getBgColor, getFontColor, getPokemonTypeInSpanish } from '@/utils'


interface Props {
  id: string
  name: string
  image: string
  typeA?: string | undefined
  typeB?: string | undefined
  stats?: PokemonStat[] | undefined
  cries?: PokemonCries | undefined
  height?: number | undefined
  weight?: number | undefined
  description?: string | undefined
}

const props = defineProps<Props>()




</script>
<style scoped>
.animation-pokemon {
  @apply transition ease-in-out hover:scale-[1.05] duration-300
}
</style>
