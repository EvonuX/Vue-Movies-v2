<template>
  <div class="starredIn">
    <h3 class="section-title">Starred In</h3>
    <Card :movies="movies"/>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card";

export default {
  name: "StarredIn",
  components: {
    Card
  },
  data() {
    return {
      movies: [],
      personId: this.$route.params.id
    };
  },
  methods: {
    getMovies() {
      axios
        .get(
          `https://api.themoviedb.org/3/person/${
            this.personId
          }/movie_credits?api_key=9b6598c5f631237fa93584a37f08c691&language=en-US`
        )
        .then(res => {
          this.movies = res.data.cast;
        })
        .catch(err => console.error(err));
    }
  },
  mounted() {
    this.getMovies();
  }
};
</script>