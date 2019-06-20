<template>
  <div class="movieWrapper">
    <div class="movie">
      <img
        class="movieImg"
        :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
        :alt="movie.title"
      >
      <div class="movieMeta container">
        <img
          class="regImg"
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          :alt="movie.title"
        >
        <div class="movieInfo">
          <h1>{{ movie.title }}</h1>
          <h2>{{ movie.tagline }}</h2>
          <hr>
          <h4>{{ movie.overview }}</h4>
          <hr>
          <p>
            <span class="title">Runtime:</span>
            {{ movie.runtime }}min
          </p>
          <p>
            <span class="title">Release Date:</span>
            {{ movie.release_date }}
          </p>
          <p>
            <span class="title">Rating:</span>
            {{ movie.vote_average }}
          </p>
          <div class="genres">
            <span class="title">Genres:&nbsp;</span>
            <p v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <MovieCast :movie="this.movieId"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieCast from "@/components/MovieCast";

export default {
  name: "Movie",
  components: {
    MovieCast
  },
  data() {
    return {
      movieId: this.$route.params.id,
      movie: []
    };
  },
  created() {
    this.getMovieDetails();
  },
  methods: {
    getMovieDetails() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${
            this.movieId
          }?api_key=9b6598c5f631237fa93584a37f08c691&language=en-US`
        )
        .then(res => {
          // console.log(res.data);
          this.movie = res.data;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style lang="scss">
.movieWrapper {
  img {
    filter: brightness(30%);
  }

  .movie {
    position: relative;
    display: flex;
    align-items: center;

    .movieImg {
      height: calc(100vh - 80px);
      object-fit: cover;
      object-position: top;
    }

    .movieMeta {
      color: #fff;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;

      img {
        filter: none;
      }

      .movieInfo {
        margin-left: 50px;

        .genres p {
          display: inline-block;
        }
      }
    }
  }
}
</style>
