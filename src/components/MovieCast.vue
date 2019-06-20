<template>
  <div class="movieCastWrapper">
    <h2 class="section-title">Cast</h2>
    <div class="movieCast grid">
      <div v-for="person in movieCast" :key="person.id" class="person">
        <img :src="'https://image.tmdb.org/t/p/w200' + person.profile_path" :alt="person.name">
        <p class="actor">{{ person.name }}</p>
        <hr>
        <p>{{person.character}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieCast",
  props: ["movie"],
  data() {
    return {
      movieCast: []
    };
  },
  created() {
    this.getCredits();
  },
  methods: {
    getCredits() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${
            this.movie
          }/credits?api_key=9b6598c5f631237fa93584a37f08c691`
        )
        .then(res => {
          this.movieCast = res.data.cast;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style lang="scss">
.movieCast .person {
  width: 15.2%;
  margin: 10px;

  hr {
    margin: 10px 0;
  }

  .actor {
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  img {
    filter: none;
    height: 315px;
    object-fit: cover;
  }
}
</style>
