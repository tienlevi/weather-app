<script setup>
const { data } = defineProps(["data"]);

const date = new Date().toDateString();
</script>

<template>
  <div
    class="flex flex-col justify-between bg-gradient px-4 py-6 w-[350px] rounded-l-3xl"
  >
    <div class="text-white">
      <p class="text-[32px] font-bold">Tuesday</p>
      <p class="text-[18px]">{{ date }}</p>
      <p class="text-[18px]">{{ data?.name }}, {{ data?.sys?.country }}</p>
    </div>
    <div class="text-white">
      <p class="text-[40px] font-bold">
        {{ Math.round(data?.main?.temp - 272.15) }}°C
      </p>
      <p class="text-[18px]">{{ data?.weather[0]?.main }}</p>
    </div>
  </div>
</template>
