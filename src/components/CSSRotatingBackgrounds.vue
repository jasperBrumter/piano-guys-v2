<template>
  <div class="image_container">
    <img :class="{
      'hidden': selectedBackground !== 2,
      'background-image-mobile': false,
      'background-image': true,
      'animate-image-left': startAnimation,
      'animate-image-right': !startAnimation,
      }"
      role="background-image"
      src="../assets/background/background_picture_2.jpg"
      :alt="$t('seo.home.background2')"/>
    <img :class="{
      'hidden': selectedBackground !== 3,
      'background-image-mobile': false,
      'background-image': true,
      'animate-image-left': startAnimation,
      'animate-image-right': !startAnimation,
      }"
      role="background-image"
      src="../assets/background/background_picture_3.jpg"
      :alt="$t('seo.home.background3')"/>
    <img :class="{
      'hidden': selectedBackground !== 4,
      'background-image-mobile': false,
      'background-image': true,
      'animate-image-left': startAnimation,
      'animate-image-right': !startAnimation,
      }"
      role="background-image"
      src="../assets/background/background_picture_4.jpg"
      :alt="$t('seo.home.background4')"/>
    <img :class="{
      'hidden': selectedBackground !== 5,
      'background-image-mobile': false,
      'background-image': true,
      'animate-image-left': startAnimation,
      'animate-image-right': !startAnimation,
      }"
      role="background-image"
      src="../assets/background/background_picture_5.jpg"
      :alt="$t('seo.home.background5')"/>
    <img :class="{
      'hidden': selectedBackground !== 6,
      'background-image-mobile': false,
      'background-image': true,
      'animate-image-left': startAnimation,
      'animate-image-right': !startAnimation,
      }"
      role="background-image"
      src="../assets/background/background_picture_6.jpg"
      :alt="$t('seo.home.background6')"/>

    <div class="image_overlay"></div>
    <div class="image_overlay_text">
      <h1>{{ $t('home.title1')}}</h1>
      <h2>{{ $t('home.subtitle1')}}</h2>
      <router-link to="restoration"><div class="cta">
        {{ $t('home.discover')}}
      </div></router-link>
      <!-- <h1>{{ $t('section1.title1') }}</h1>
      <h2>{{ $t('section1.subtitle1')}}</h2>
      <div class="cta">
        {{ $t('section1.discover')}}
      </div> -->
    </div>
    <div class="curve"></div>
  </div>
</template>
<script>

export default {
  name: 'CSSRotatingBackgrounds',
  data: () => ({
    backgrounds: [2, 3, 4, 5, 6],
    selectedBackground: 2,
    startAnimation: true,
  }),
  mounted() {
    this.changeBackground();
  },
  methods: {
    changeBackground() {
      setInterval(() => {
        if (this.selectedBackground === this.backgrounds.length) {
          this.selectedBackground = 2;
        } else {
          this.selectedBackground += 1;
        }
        this.startAnimation = !this.startAnimation;
      }, 4000);
    },
    scrollDown() {
      const height = 'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
      window.scrollTo(0, height);
    },
  },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none !important;
}
* {
  box-sizing: border-box;
}
.image_container {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 200;
  justify-content: center;
  color: rgba(230,198,62,1);
  background-color: blue;
}

.curve {
  position: absolute;
  bottom: -100px;
  right: -200px;
  width: 250%;
  height: 160px;
  z-index: 9;
  border-radius: 100%;
  background-color: #000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23b6ab1c' fill-opacity='0.16'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
  border: 4px solid rgba(100,50,22,1);
}

@media only screen and (max-width: 600px) {
  .curve {
    height: 150px;
  }
}

.background-image {
  position: absolute;
    display: block;
    max-width:800%;
    max-height:110%;
    width: auto;
    height: auto;
    min-height: 100%;
}
 a {
     text-decoration: none ;
  }
a:hover
  {
    text-decoration:none;
    cursor:pointer;
   }
.cta {
  color: rgba(230,198,62,1);
  transition: .5s ease;
  width: 250px;
  height: 60px;
  border-radius: 5px;
  border: 2px solid rgba(100,50,22,1);
  margin: 30px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  &:hover {
    transition: .5s ease;
    background-color: rgba(100,50,22,1);
    color: white;
  }
}
.background-image-mobile {
    position: absolute;
    display: block;
    max-width:300vw;
    min-width: 120vw;
    max-height:110vh;
    width: auto;
    height: auto;
}
.animate-image-right {
  min-width: 100%;
  height: auto;
  -webkit-animation: rightmove 4s linear both;
          animation: rightmove 4s linear both;
}
.animate-image-left {
  min-width: 100%;
  height: auto;
  -webkit-animation: leftmove 4s linear both;
          animation: leftmove 4s linear both;
}

.image_overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(11,11,11,.8);
  z-index: 1;
}
.image_overlay_text {
  max-width: 960px;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: auto;
  text-align: center;
  z-index: 2;
  margin: auto;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes rightmove {
 0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 84% 50%;
            transform-origin: 84% 50%;
  }
  100% {
    -webkit-transform: scale(1.25) translateX(20px);
            transform: scale(1.25) translateX(20px);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}

/* Standard syntax */
@keyframes rightmove {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 84% 50%;
            transform-origin: 84% 50%;
  }
  100% {
    -webkit-transform: scale(1.25) translateX(20px);
            transform: scale(1.25) translateX(20px);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}

/* Standard syntax */
@keyframes leftmove {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 50%;
            transform-origin: 16% 50%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(-20px, 15px);
            transform: scale(1.25) translate(-20px, 15px);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}

@-webkit-keyframes leftmove {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 50%;
            transform-origin: 16% 50%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(-20px, 15px);
            transform: scale(1.25) translate(-20px, 15px);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}

</style>
