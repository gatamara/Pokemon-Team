<template>
  <div class="p-6 flex justify-center cursor-pointer " @click="onClick">
    <div class="w-fit bg-black/80 rounded-[10px] p-6">
      <div class="flex flex-col w-[350px]">
        <div class=" flex flex-col items-center justify-center relative  p-2 rounded-3xl">
          <div class="font-bold text-[250px] absolute text-slate-500/50 z-0 ">{{ id }}</div>
          <div class="absolute right-3 top-2">
            <DeleteButton @click="store.removePokemonTeam(id)" />
          </div>
          <h1 class="text-white text-2xl p-2 uppercase text-center">{{ name }}</h1>
          <img class="h-[300px] w-[300px] z-50  "
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`"
            alt="raichu" />
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

          <div class="p-4">
            <audio class="w-full" :src="cries?.latest" controls />
          </div>
          <div v-if="stats" class="p-2 h-full">
            <GraphStats :stats="stats" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { PokemonCries, PokemonStat } from '@/interfaces/pokemon'
import GraphStats from '../graph/GraphStats.vue'
import DeleteButton from '../buttons/DeleteButton.vue'
import { usePokemonStore } from '@/stores/pokemon.store'
import { getBgColor, getFontColor, getPokemonTypeInSpanish } from '@/utils'


interface Props {
  id: string
  name: string
  image: string
  typeA?: string | undefined
  typeB?: string | undefined
  stats?: PokemonStat[] | undefined
  cries?: PokemonCries | undefined
}
interface Emits {
  click: [id: string]
}

const props = defineProps<Props>()

const emits = defineEmits<Emits>()

const onClick = () => {
  emits('click', props.id)
}

const store = usePokemonStore()



</script>
<style scoped></style>
