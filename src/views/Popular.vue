<template>
  <div class="popular">
    <div class="container">
      <h1 class="section-title">Here's what's coming soon</h1>
      <Card :movies="popular"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card";

export default {
  name: "Home",
  components: {
    Card
  },
  data() {
    return {
      popular: []
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9b6598c5f631237fa93584a37f08c691&language=en-US&page=1`
      )
      .then(res => {
        console.log(res.data.results);
        this.popular = res.data.results;
      });
  }
};
</script>
