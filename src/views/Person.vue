<template>
  <div class="personWrapper container">
    <div class="person">
      <img
        class="regImg"
        v-lazy="'https://image.tmdb.org/t/p/w400' + person.profile_path"
        :alt="person.name"
      >
      <div class="personBio">
        <h1>{{ person.name }}</h1>
        <hr v-if="person.biography">
        <h4>{{ person.biography }}</h4>
        <hr v-if="person.biography">
        <p v-if="person.birthday">
          <span class="title--regular">Born on:</span>
          {{ person.birthday | moment("Do MMM YYYY") }} in {{ person.place_of_birth }}
        </p>
        <p v-if="person.deathday">
          <span class="title--regular">Died on:</span>
          {{ person.deathday | moment("Do MMM YYYY") }}
        </p>
      </div>
    </div>
    <StarredIn/>
  </div>
</template>

<script>
import axios from "axios";
import StarredIn from "@/components/StarredIn";

export default {
  name: "Person",
  components: {
    StarredIn
  },
  data() {
    return {
      personId: this.$route.params.id,
      person: []
    };
  },
  methods: {
    getPersonInfo() {
      axios
        .get(
          `https://api.themoviedb.org/3/person/${
            this.personId
          }?api_key=9b6598c5f631237fa93584a37f08c691&language=en-US`
        )
        .then(res => {
          this.person = res.data;
        });
    }
  },
  created() {
    this.getPersonInfo();
  }
};
</script>

<style lang="scss">
.person {
  display: flex;
  align-items: center;
  margin: 50px auto;

  .personBio {
    margin-left: 50px;
  }
}
</style>
