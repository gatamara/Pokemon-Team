<template>
  <section class="relative" ref="scrollComponent">
    <SectionTitle text="Elige 6 Pokémon para tu equipo" />
    <div class="flex flex-wrap justify-between p-3">
      <ItemCard v-for="(item, index) in combinedPokemonList" :key="index" :id="item.id" :name="item.name"
        :image="item.image" :isSelected="pokemonStore.pokemonTeam.some(pokemon => pokemon.id === item.id)"
        @selected="onCardSelected" />
    </div>
    <FloatButton :total="pokemonStore.pokemonTeam.length" @click="onFloatButtonClick" />
    <div class="w-full flex justify-center">
      <LoadButton :disabled="!pokemonStore.hasNextPage || pokemonStore.isFetchingNextPage" @click="onLoadMore" />
    </div>
  </section>
</template>

<script setup lang="ts">
import FloatButton from '@/components/buttons/FloatButton.vue';
import LoadButton from '@/components/buttons/LoadButton.vue';
import ItemCard from '@/components/cards/ItemCard.vue';
import SectionTitle from '@/components/titles/SectionTitle.vue';
import router from '@/router';

import { computed } from 'vue';
import { usePokemonStore } from '@/stores/pokemon.store';

const pokemonStore = usePokemonStore();


const combinedPokemonList = computed(() => {
  return pokemonStore.pokemonList?.pages.flat() || [];
});

const onCardSelected = (id: string) => {
  pokemonStore.selectPokemon(id);
};

const onFloatButtonClick = () => {
  router.push({ name: 'team' });
};

const onLoadMore = async () => {
  await pokemonStore.fetchNextPage();
};
</script>

<style scoped></style>
