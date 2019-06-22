<template>
  <div>
    <Header/>
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Footer v-cloak/>
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn-to-top">&rsaquo;</button>
    </back-to-top>
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
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.8s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
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

img:not(.regImg) {
  width: 100%;
}

.hidden,
[v-cloak] {
  display: none !important;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

hr {
  border-color: #00d373;
  margin: 15px 0;
}

.grid {
  // display: flex;
  // flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 20px;

  @media screen and (max-width: 1400px) {
    grid-column-gap: 20px;
    padding: 0 20px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.personGrid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 30px;

  @media screen and (max-width: 1600px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.section-title {
  font-size: 28px;
  text-align: center;
  margin: 35px 0 50px;
  position: relative;
  text-transform: capitalize;

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

.primary-title {
  text-transform: uppercase;
  color: #00d373;
}

.title {
  text-transform: uppercase;
  color: #00d373;
  font-weight: bold;

  &--regular {
    font-weight: bold;
    text-transform: uppercase;
  }
}

.btn-to-top {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-size: 30px;
  line-height: 0;
  background-color: #212121;
  color: #fff;
  transform: rotate(-90deg);
  padding-bottom: 7px;
  cursor: pointer;
}
</style>
