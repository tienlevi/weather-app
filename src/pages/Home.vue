<script setup>
import { onMounted, ref } from "vue";
import Location from "../components/Location/Location.vue";
import Temperature from "../components/Temperature/Temperature.vue";
import {
  currentLocation,
  forecastCurrentLocation,
  forecastNextDay,
  searchLocation,
} from "../services";

const search = ref("");
const data = ref(null);
const forecastData = ref(null);
const handleSearchLocation = async () => {
  const location = await searchLocation(search.value);
  const forecast = await forecastNextDay(search.value);
  data.value = location;
  forecastData.value = forecast?.list.slice(0, 6);
};

const handleChange = (newValue) => {
  search.value = newValue;
};

onMounted(() => {
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      if (search.value === "") {
        const location = await currentLocation(
          pos.coords.latitude,
          pos.coords.longitude,
        );
        const forecast = await forecastCurrentLocation(
          pos.coords.latitude,
          pos.coords.longitude,
        );
        data.value = location;
        forecastData.data = forecast?.list.slice(0, 6);
      }
    },
    (err) => console.log(err),
  );
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <div
      class="absolute h-[500px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex"
    >
      <Location :data="data" />
      <Temperature
        v-model="search"
        :search="search"
        :data="data"
        :forecastData="forecastData"
        @submit="handleSearchLocation"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<style scoped></style>
