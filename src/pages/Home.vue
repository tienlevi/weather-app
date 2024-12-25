<script setup>
import { onMounted, ref } from "vue";
import Location from "../components/Location/Location.vue";
import Temperature from "../components/Temperature/Temperature.vue";
import { currentLocation, searchLocation } from "../services";

const search = ref("");

const data = ref(null);
const handleSearchLocation = async () => {
  const response = await searchLocation(search.value);
  data.value = response;
};

const handleChange = (newValue) => {
  search.value = newValue;
};

onMounted(() => {
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const response = await currentLocation(
        pos.coords.latitude,
        pos.coords.longitude,
      );
      data.value = response;
    },
    (err) => console.log(err),
  );
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
        @submit="handleSearchLocation"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<style scoped></style>
