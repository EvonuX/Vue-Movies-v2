<template>
  <div>
    <Header/>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

a {
  text-decoration: none;
}

img:not(.logoImg, .poweredLogo) {
  width: 100%;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.section-title {
  font-size: 28px;
  text-align: center;
  margin: 35px 0 50px;
  position: relative;

  &:after {
    content: "";
    display: block;
    height: 3px;
    background-color: #212121;
    width: 150px;
    position: absolute;
    left: 50%;
    top: 130%;
    transform: translateX(-50%);
  }
}
</style>
