<template>
  <div class="about">
  	<div class="container">
      <img v-for="image in images" class="gallerypicture"
      :src="require(`../../assets/gallery/${image.source}`)"
        :alt="image.alt" :key="image.source">
  	</div>
  </div>
</template>
<script>
export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        {
          source: '1917SteinwayA3/1.jpg',
          alt: this.$t('gallery.1917SteinwayA3-1'),
        },
        {
          source: '1917SteinwayA3/2.jpg',
          alt: this.$t('gallery.1917SteinwayA3-2'),
        },
        {
          source: '1917SteinwayA3/3.jpg',
          alt: this.$t('gallery.1917SteinwayA3-3'),
        },
        {
          source: '1917SteinwayA3/4.jpg',
          alt: this.$t('gallery.1917SteinwayA3-4'),
        },
        {
          source: '1917SteinwayA3/5.jpg',
          alt: this.$t('gallery.1917SteinwayA3-5'),
        },
        {
          source: '1917SteinwayA3/6.jpg',
          alt: this.$t('gallery.1917SteinwayA3-6'),
        },
        {
          source: '1917SteinwayA3/7.jpg',
          alt: this.$t('gallery.1917SteinwayA3-7'),
        },
        {
          source: '1917SteinwayA3/8.jpg',
          alt: this.$t('gallery.1917SteinwayA3-8'),
        },
        {
          source: 'HenryMiller/HenryMiller1.jpg',
          alt: this.$t('gallery.HenryMiller1'),
        },
        {
          source: 'HenryMiller/HenryMiller2.jpg',
          alt: this.$t('gallery.HenryMiller2'),
        },
        {
          source: '1925SteinwayB/SteinwayB1.jpg',
          alt: this.$t('gallery.1925SteinwayB-1'),
        },
        {
          source: '1925SteinwayB/SteinwayB2.jpg',
          alt: this.$t('gallery.1925SteinwayB-2'),
        },
        {
          source: 'section2/background1.jpg',
          alt: this.$t('gallery.background1'),
        },
        {
          source: 'section2/background2.jpg',
          alt: this.$t('gallery.background2'),
        },
        {
          source: 'section2/background3.jpg',
          alt: this.$t('gallery.background3'),
        },
        {
          source: 'section2/background4.jpg',
          alt: this.$t('gallery.background4'),
        },
        {
          source: 'section2/background5.jpg',
          alt: this.$t('gallery.background5'),
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: this.$t('meta.gallery.title'),
      meta: [
        {
          vmid: 'title',
          name: 'title',
          content: this.$t('meta.gallery.title'),
        },
        {
          vmid: 'description',
          name: 'description',
          content: this.$t('meta.gallery.description'),
        },
        {
          vmid: 'og:description',
          name: 'og:description',
          content: this.$t('meta.gallery.description'),
        },
        {
          property: 'og:title',
          content: this.$t('meta.gallery.title'),
          vmid: 'og:title',
        },
      ],
    };
  },
};
</script>
<style scoped>
	.container {
		padding-top: 30px;
	  width: 80%;
	  min-width: 310px;
	  max-width: 1200px;
	  column-count: 3;
	}
	.gallerypicture {
		width: 100%;
	}

	@media only screen and (max-width: 600px) {
    .container {
      column-count: 1;
    }
  }
  @media only screen and (max-width: 1900px) {
    .container {
      column-count: 2;
    }
  }
</style>
