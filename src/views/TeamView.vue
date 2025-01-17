<template>
  <div class="flex flex-wrap justify-evenly">
    <TeamCard v-for="team in pokemonStore.pokemonTeam " :key="team.id" v-bind="team" @click="onPokemonClick" />
  </div>
</template>

<script setup lang="ts">
import TeamCard from '@/components/cards/TeamCard.vue';
import router from '@/router';
import { usePokemonStore } from '@/stores/pokemon.store';
import { onMounted } from 'vue';

const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.loadPokemonDetails()
})

const onPokemonClick = (id: string) => {

  router.push({ name: 'team-detail', params: { id } })
}

</script>

<style scoped></style>
