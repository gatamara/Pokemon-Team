<template>
  <section class="relative" ref="scrollComponent">
    <SectionTitle text="Elige 6 pokemon para tu equipo" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4   xl:grid-cols-5 p-2 sm:p-3 md:p-5">
      <ItemCard v-for="(item, index) in pokemonStore.pokemonList" :key="index" v-bind="item"
        @selected="onCardSelected(item.id)" />
    </div>
    <FloatButton :total="pokemonStore.pokemonTeam.length" @click="onFloatButtonClick" />
    <!-- <div class="p-3" v-if="isPaginationLoading">
      <PikachuLoading />
    </div> -->
    <div class="w-full flex justify-center">
      <LoadButton />
    </div>

  </section>
</template>

<script setup lang="ts">
import FloatButton from '@/components/buttons/FloatButton.vue';
import LoadButton from '@/components/buttons/LoadButton.vue';
import ItemCard from '@/components/cards/ItemCard.vue';
import SectionTitle from '@/components/titles/SectionTitle.vue';
import router from '@/router';

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

const onFloatButtonClick = () => {
  router.push({ name: 'team' })
}


</script>

<style scoped></style>
