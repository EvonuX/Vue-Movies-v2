<template>
  <div class="upcoming">
    <div class="container">
      <h1 class="section-title">Here are the upcoming movies</h1>
      <Card :movies="upcoming"/>
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
      upcoming: []
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=9b6598c5f631237fa93584a37f08c691&language=en-US&page=1`
      )
      .then(res => {
        console.log(res.data.results);
        this.upcoming = res.data.results;
      });
  }
};
</script>
