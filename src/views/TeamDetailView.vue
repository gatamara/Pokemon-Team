<template>
  <SectionTitle text="Detalle del Pokemon" />
  <DetailCard v-if="pokemon" v-bind="pokemon" />
</template>

<script setup lang="ts">
import DetailCard from '@/components/cards/DetailCard.vue';
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



</script>

<style scoped></style>
