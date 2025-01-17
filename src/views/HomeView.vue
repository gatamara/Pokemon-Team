<template>
  <section class="relative" ref="scrollComponent">
    <SectionTitle text="Elige 6 pokemon para tu equipo" />
    <div class="flex flex-row flex-wrap justify-center p-2 sm:p-3 md:p-5">
      <ItemCard v-for="(item, index) in pokemonStore.pokemonList" :key="index" v-bind="item"
        @selected="onCardSelected(item.id)" />
    </div>
    <!-- <FloatButton :total="totalTeam" @click="onFloatButtonClick" />
    <div class="p-3" v-if="isPaginationLoading">
      <PikachuLoading />
    </div> -->
  </section>
</template>

<script setup lang="ts">
import ItemCard from '@/components/cards/ItemCard.vue';
import SectionTitle from '@/components/titles/SectionTitle.vue';

import { usePokemonStore } from '@/stores/pokemon.store';
import { onMounted } from 'vue';

const pokemonStore = usePokemonStore()


onMounted(async () => {
  await pokemonStore.loadPokemons()
  //   window.addEventListener('scroll', handleScroll)
})


const onCardSelected = (id: string) => {
  pokemonStore.selectPokemon(id)
}



</script>

<style scoped></style>
