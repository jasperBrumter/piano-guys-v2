<template>
  <div id="app">
    <router-link to="/">
      <img class="logo" src="./assets/logo.png" alt="Piano Guys Logo"/>
    </router-link>
    <div id="nav">
      <div class="nav-central-menu">
        <router-link to="/">Home</router-link> |
        <router-link to="/gallery">Gallery</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// components

export default {
  name: 'home',
  mounted() {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > 20) {
        document.querySelector('.logo').classList.add('logo-small');
        document.querySelector('#nav').classList.add('nav-hidden');
      } else {
        document.querySelector('.logo').classList.remove('logo-small');
        document.querySelector('#nav').classList.remove('nav-hidden');
      }
    });
  },
};
</script>

<style lang="scss">
$font-stack: 'Playfair Display', serif;
$primary-color: #2c3e50;
$secondary-color: #444;

.hidden {
  display: none;
}

#app {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 998;
  padding: 30px;
  transition: .4s ease;
  background-color: #000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23b6ab1c' fill-opacity='0.16'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-central-menu {
  display: block;
}
@media only screen and (max-width: 800px) {
  .nav-central-menu {
    display: none;
  }
}

.nav-hidden {
  top: -80px !important;
}

.logo {
  position: fixed;
  height: 120px;
  top: 1rem;
  left: 1rem;
  z-index: 999;
  transition: .4s ease;
}

.logo-small {
  height: 80px;
  transition: .4s ease;
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
