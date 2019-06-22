<template>
  <footer>
    <div class="copyright">Djordje Stevanovic &copy; {{ new Date().getFullYear() }}</div>
    <div class="poweredBy">
      <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
        Powered by
        <img src="@/assets/moviedbLogo.png" width="50px" class="regImg">
      </a>
    </div>
    <div class="github">
      <a
        href="https://github.com/EvonuX/Vue-Movies-v2"
        target="_blank"
        rel="noreferrer"
      >View on GitHub</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
footer {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: #212121;
  color: #fff;

  a {
    color: #fff;
  }

  .poweredBy a {
    color: #fff;
    display: flex;
    align-items: center;

    img {
      margin-left: 15px;
    }
  }
}
</style>
