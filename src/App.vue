<template>
  <div id="app">
    <router-link to="/">
      <img class="logo" src="./assets/logo.png" alt="Piano Guys Logo"/>
    </router-link>
    <div v-if="fullMenu"
      :class="{
        'fullMenu': true,
        'appear': fullMenu,
      }">
      <h1 class="close" @click="toggleMenu">X</h1>
      <h2 class="options"
      to="/" @click="redirectTo('/')">{{ $t('menu.home') }}</h2> |
      <h2 class="options"
      to="/gallery" @click="redirectTo('/gallery')">{{ $t('menu.gallery') }}</h2> |
      <h2 class="options"
      to="/restoration" @click="redirectTo('/restoration')">{{ $t('menu.restoration') }}</h2> |
      <h2 class="options"
      to="/contact" @click="redirectTo('/contact')">{{ $t('menu.contact') }}</h2>
      <div class="options">
          <img v-if="$i18n.locale === 'en'"
            @click="toggleLanguage"
            src="./assets/icons/001-france.svg"
            alt="Voir le contenu en Français"/>
          <img v-if="$i18n.locale === 'fr'"
            @click="toggleLanguage"
            src="./assets/icons/002-united-kingdom.svg"
            alt="See all content in English"/>
          <div class="image_overlay"></div>
        </div>

    </div>
    <div id="nav">
      <div class="nav-left">
      </div>
      <div class="nav-central-menu">
        <router-link to="/"><h2>{{ $t('menu.home') }}</h2></router-link> |
        <router-link to="/gallery"><h2>{{ $t('menu.gallery') }}</h2></router-link> |
        <router-link to="/restoration"><h2>{{ $t('menu.restoration') }}</h2></router-link> |
        <router-link to="/contact"><h2>{{ $t('menu.contact') }}</h2></router-link>
      </div>
      <div class="nav-right">
        <div class="langswitcher">
          <img v-if="$i18n.locale === 'en'"
            @click="toggleLanguage"
            src="./assets/icons/001-france.svg"
            alt="Voir le contenu en Français"/>
          <img v-if="$i18n.locale === 'fr'"
            @click="toggleLanguage"
            src="./assets/icons/002-united-kingdom.svg"
            alt="See all content in English"/>
          <div class="image_overlay"></div>
        </div>
        <div class="menu-mobile">
          <img src="./assets/PianoMenu.png" alt="Open Menu" @click="toggleMenu">
        </div>
      </div>
    </div>
    <router-view v-if="!fullMenu"/>
  </div>
</template>

<script>
// components

export default {
  name: 'home',
  data() {
    return {
      fullMenu: false,
      lastScroll: 0,
    };
  },
  mounted() {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > this.lastScroll) {
        document.querySelector('.logo').classList.add('logo-small');
        document.querySelector('#nav').classList.add('nav-hidden');
      } else {
        document.querySelector('.logo').classList.remove('logo-small');
        document.querySelector('#nav').classList.remove('nav-hidden');
      }
      this.lastScroll = window.pageYOffset;
    });
  },
  methods: {
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'fr' ? 'en' : 'fr';
      this.fullMenu = false;
    },
    toggleMenu() {
      this.fullMenu = !this.fullMenu;
    },
    redirectTo(path) {
      this.toggleMenu();
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Dosis:300&display=swap');

$font-stack: 'Playfair Display', serif;
$primary-color: rgba(100,50,22,1);
$secondary-color: rgba(230,198,62,1);

* {
  font-family: 'Dosis', sans-serif;
}
html {
  background-color: black;
}
.hidden {
  display: none;
}


.nav-left, .nav-right {
  width: 32px;
  height: 100%;

}
.langswitcher {
  margin: auto;
  width: 32px;
  height: 32px;
  z-index: 200;
  border-radius: 100%;
}
.menu-mobile {
  display: none;
  img {
    width: 32px;
    height: 32px;
  }
}

.fullMenu {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 0;
  opacity: 0;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: $secondary-color;
}

.appear {
  opacity: 1 !important;
  z-index: 900 !important;
}
.close {
  margin: 0;
  position: fixed;
  top: 5px;
  right: 20px;

}
.options {
  font-size: 25px;
  color: $primary-color;
  text-decoration: none;
  color: $secondary-color;
  min-width: 32px;
}

#app {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  font-family: 'Open Sans Condensed', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 700;
  padding: 15px 20px;
  transition: .4s ease;
  background-color: #000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23b6ab1c' fill-opacity='0.16'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
  a {
    text-decoration: none;
    margin: 0px 5px;
    font-weight: bold;
    color: $secondary-color;
    &:hover {
      color: $primary-color;
    }

    &.router-link-exact-active {
      color: $primary-color;
      opacity: .8;
    }
  }
}

.nav-central-menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
@media only screen and (max-width: 800px) {
  .nav-central-menu {
    display: none;
  }
  .langswitcher {
    display: none;
  }
  .menu-mobile {
    display: block;
  }
}

.nav-hidden {
  top: -80px !important;
}

.nav-full {
  bottom: 0 !important;
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
