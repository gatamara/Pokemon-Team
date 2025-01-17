<template>
  <div class="flex flex-wrap justify-center">
    <h1 class="text-white/70 uppercase font-medium text-lg w-full text-center">Stats base</h1>
    <div class="w-[400px]">
      <Bar :data="chartData" :options="chartOptions" />
    </div>

  </div>
</template>

<script setup lang="ts">
import type { PokemonStat } from '@/interfaces/pokemon';
import { computed } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
interface Props {
  stats: PokemonStat[]
}

const props = defineProps<Props>()

const statNames = computed(() => props.stats.map((s) => s.name.toLowerCase()))
const statValues = computed(() => props.stats.map((s) => s.base))
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = {
  labels: statNames.value,
  datasets: [{
    data: statValues.value,
    backgroundColor: '#2bff88',
    label: 'Base stats',

  }]
}
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,


}
</script>

<style scoped></style>
