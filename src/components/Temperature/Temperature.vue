<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
const { data, forecastData, search } = defineProps([
  "data",
  "forecastData",
  "search",
]);

const emit = defineEmits(["submit", "change"]);
</script>

<template>
  <div
    class="flex flex-col justify-between w-[400px] bg-second p-6 rounded-r-3xl"
  >
    <div class="text-white">
      <div class="flex justify-between leading-7">
        <p class="font-bold">CLOUD</p>
        <p>{{ data?.clouds?.all }}</p>
      </div>
      <div class="flex justify-between leading-7">
        <p class="font-bold">HUMIDITY</p>
        <p>{{ data?.main?.humidity }}%</p>
      </div>
      <div class="flex justify-between leading-7">
        <p class="font-bold">WIND</p>
        <p>{{ data?.wind?.speed }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2 mt-5 rounded-[10px]">
      <div
        v-for="list in forecastData"
        class="flex flex-col items-center bg-white p-3 rounded-[10px]"
      >
        <img
          :src="`https://openweathermap.org/img/wn/${list.weather[0].icon}.png`"
          alt=""
        />
        <div class="text-center">{{ list?.dt_txt }}</div>
        <div>{{ Math.round(list?.main?.temp - 272.15) }}°C</div>
      </div>
    </div>
    <form
      @submit.prevent="emit('submit')"
      class="relative mt-5 flex items-center bg-gray-700 rounded-md"
    >
      <input
        placeholder="Find Location"
        class="w-full bg-gray-700 text-gray-200 border-0 p-2 pr-10 rounded-md focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        type="text"
        :value="search"
        @input="(e) => emit('change', e.target.value)"
      />
      <button type="submit" class="absolute right-3 text-white cursor-pointer">
        <Icon icon="material-symbols:search" width="24" height="24" />
      </button>
    </form>
  </div>
</template>
