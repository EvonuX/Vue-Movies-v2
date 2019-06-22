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
  // width: 22.8%;
  // margin: 15px;
  width: 100%;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.03);
  }

  img {
    height: 480px;
    object-fit: cover;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.6);

    @media screen and (max-width: 780px) {
      height: 335px;
    }

    @media screen and (max-width: 480px) {
      height: 265px;
    }
  }

  a {
    color: #212121;
  }

  h4 {
    margin-top: 5px;
  }
}
</style>
