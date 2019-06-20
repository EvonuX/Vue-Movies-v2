<template>
  <div class="grid">
    <div class="card" v-for="movie in movies" :key="movie.id">
      <router-link :to="'/movie/' + movie.id">
        <img v-lazy="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title">
        <h4>{{ movie.title }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["movies"]
};
</script>

<style lang="scss">
.card {
  width: 22.8%;
  margin: 15px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.03);
  }

  img {
    height: 430px;
    object-fit: cover;
  }

  a {
    color: #212121;
  }

  h4 {
    margin-top: 5px;
  }
}
</style>
