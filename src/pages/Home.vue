<script setup>
import { onMounted, ref } from "vue";
import Location from "../components/Location/Location.vue";
import Temperature from "../components/Temperature/Temperature.vue";
import { currentWeather } from "../services";

const search = ref("");
const data = ref(null);
const searchLocation = async () => {
  const response = await currentWeather(search.value);
  data.value = response;
};

const handleChange = (newValue) => {
  search.value = newValue;
};

onMounted(async () => {
  const response = await currentWeather(search.value || "Ha Noi");
  data.value = response;
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto h-screen">
    <div
      class="absolute h-[350px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex"
    >
      <Location :data="data" />
      <Temperature
        v-model="search"
        :search="search"
        :data="data"
        @submit="searchLocation"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<style scoped></style>
