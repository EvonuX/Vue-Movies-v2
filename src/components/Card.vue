<template>
  <div class="card">
    <div v-for="movie in movies" :key="movie.id">
      <img
        class="w-full"
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        alt="Sunset in the mountains"
      >
      <h2>{{ movie.title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["movies"]
};
</script>
