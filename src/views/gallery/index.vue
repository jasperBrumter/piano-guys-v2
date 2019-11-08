<template>
  <div class="about">
  	<div class="container">
  		<img src="../../assets/gallery/1917SteinwayA3/1.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/1917SteinwayA3/2.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/1917SteinwayA3/3.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/1917SteinwayA3/4.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/1917SteinwayA3/5.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/1917SteinwayA3/6.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/1917SteinwayA3/7.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/1917SteinwayA3/8.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/HenryMiller/HenryMiller1.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/HenryMiller/HenryMiller2.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/1925SteinwayB/SteinwayB1.jpg" class="gallerypicture" alt="">
  		<img src="../../assets/gallery/1925SteinwayB/SteinwayB2.jpg" class="gallerypicture" alt="">
		<img src="../../assets/section2/background1.jpg" class="gallerypicture" alt="">
		<img src="../../assets/section2/background2.jpg" class="gallerypicture" alt="">
		<img src="../../assets/section2/background3.jpg" class="gallerypicture" alt="">
		<img src="../../assets/section2/background4.jpg" class="gallerypicture" alt="">
		<img src="../../assets/section2/background5.jpg" class="gallerypicture" alt="">
  	</div>
  </div>
</template>
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
