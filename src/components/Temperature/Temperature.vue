<script setup>
import Week from "./Week.vue";
import { Icon } from "@iconify/vue/dist/iconify.js";

const { data, search } = defineProps(["data", "search"]);
const emit = defineEmits(["submit", "change"]);
</script>

<template>
  <div
    class="flex flex-col justify-between w-[300px] bg-second p-6 rounded-r-3xl"
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
    <Week />
    <form
      @submit.prevent="emit('submit')"
      class="relative flex items-center bg-gray-700 rounded-md"
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
