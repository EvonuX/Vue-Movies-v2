<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" class="regImg" width="50px">
        <span>VueMovies</span>
      </router-link>
    </div>
    <form @submit.prevent="search">
      <input type="text" v-model="searchTerm" placeholder="Search for movies...">
      <button :disabled="this.searchTerm.length < 1">Search</button>
    </form>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/upcoming">Upcoming</router-link>
        </li>
        <li>
          <router-link to="/popular">Popular</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    search() {
      this.$store.commit("searchMovie", this.searchTerm);
      this.searchTerm = "";
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #212121;
  padding: 15px 30px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

  .logo a {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #fff;

    span {
      margin-left: 15px;
    }
  }

  form {
    margin-left: 50px;

    @media screen and (max-width: 480px) {
      margin: 10px 0;
    }

    input {
      padding: 10px;
      border: 0;
      border-radius: 5px 0 0 5px;
    }

    button {
      padding: 10px;
      border: none;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
    }
  }

  nav ul li {
    list-style-type: none;
    display: inline-block;
    margin-left: 10px;
    font-weight: bold;

    a {
      color: #fff;
    }
  }
}
</style>
