<template>
  <div id="home">
    <CSSRotatingBackgrounds />
  </div>
</template>

<script>
// components
import CSSRotatingBackgrounds from '../components/CSSRotatingBackgrounds.vue';

export default {
  name: 'home',
  components: {
    CSSRotatingBackgrounds,
  },
};
</script>

<style>
  body {
    margin: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  #home {
    margin: 0;
    font-family: 'Playfair Display', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  p {
    font-size: 20px;
    letter-spacing: 1px;
  }
  h1 {
    font-weight: lighter;
    letter-spacing: 3px;
    font-size: 42px;
  }
  h2 {
    font-weight: lighter;
    letter-spacing: 2px;
  }
  .container {
  max-width: 960px;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 0 auto;
  text-align: center;
}
</style>
