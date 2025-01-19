<template>
  <SectionTitle text="Detalle del Pokemon" />
  <DetailCard v-if="pokemon" v-bind="pokemon" />
  <EvolutionCard>
    <div class="">
      <h3 class="text-center text-xl text-white/50">En construccion ...</h3>
      <PikachuLoading v-if="isLoading" />
    </div>
  </EvolutionCard>
</template>

<script setup lang="ts">
import DetailCard from '@/components/cards/DetailCard.vue';
import EvolutionCard from '@/components/cards/EvolutionCard.vue';
import PikachuLoading from '@/components/loadings/PikachuLoading.vue';
import SectionTitle from '@/components/titles/SectionTitle.vue';
import type { Pokemon } from '@/interfaces/pokemon';

import { usePokemonStore } from '@/stores/pokemon.store';
import { onMounted, ref } from 'vue';


interface Props {
  id: string
}

const props = defineProps<Props>()

const store = usePokemonStore()

const pokemon = ref<Pokemon>()

onMounted(() => {
  pokemon.value = store.getPokemonDetail(props.id)
})
const isLoading = ref(true)


</script>

<style scoped></style>
