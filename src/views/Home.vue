<template>
  <div class="home">
    <div class="latest container">
      <h1 class="section-title">See What's Playing Now</h1>
      <Card :movies="nowPlaying"/>
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
      nowPlaying: []
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=9b6598c5f631237fa93584a37f08c691&language=en-US&page=1`
      )
      .then(res => {
        this.nowPlaying = res.data.results;
      });
  }
};
</script>
