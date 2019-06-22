<template>
  <div class="searchResults container">
    <h1 v-if="this.results.length > 1" class="section-title">Search results for "{{ search }}"</h1>
    <h1 v-else class="section-title">Sorry, no movies found with "{{ search }}"</h1>
    <Card :movies="results"/>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card";

export default {
  name: "SearchResults",
  components: {
    Card
  },
  data() {
    return {
      results: []
    };
  },
  computed: {
    search() {
      return this.$store.state.searchTerm;
    }
  },
  mounted() {
    this.searchMovies();
  },
  updated() {
    this.searchMovies();
  },
  methods: {
    searchMovies() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=9b6598c5f631237fa93584a37f08c691&language=en-US&query=${
            this.search
          }&page=1&include_adult=false`
        )
        .then(res => {
          this.results = res.data.results;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>