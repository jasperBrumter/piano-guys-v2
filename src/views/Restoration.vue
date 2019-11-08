<template>
	<div class="restoration">
	  <div class="container">
	    <div class="titleContainer">
	      <div class="bordered">
	        <h3>
	          {{ $t('restoration.main.subtitle')}}
	        </h3>
	        <h1>
	          {{ $t('restoration.main.title')}}
	        </h1>
	      </div>
	    </div>
	    <div class="fields">
	      <div v-for="(field, index) of fields" :key="index"
	      :class="{
	        'field': true,
	        'reverse': index % 2 ===0
	      }">
	        <div class="fieldTextContainer">
	          <h3>
	            {{ $t(`restoration.image${index + 1}.description`)}}
	          </h3>
	        </div>
	        <div class="fieldImageContainer">
	          <img :src="getImgSource(field.image)"
	            :alt="$t(`restoration.image${index + 1}.alt-text`)"
	            :title="$t(`restoration.image${index + 1}.tooltip`)"/>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
</template>
<script>

export default {
  name: 'Restoration',
  data: () => ({
    fields: [
      { image: 'background1.jpg' },
      { image: 'background2.jpg' },
      { image: 'background3.jpg' },
      { image: 'background4.jpg' },
      { image: 'background5.jpg' },
      { image: 'background6.jpg' },
      { image: 'background7.jpg' },
      { image: 'background8.jpg' },
      { image: 'background9.jpg' },
      { image: 'background10.jpg' },
    ],
  }),
  methods: {
    getImgSource(fileName) {
      return require(`../assets/restoration/${fileName}`); //eslint-disable-line
    },
  },
};
</script>

<style scoped>
  .restoration {
  	margin-top: 30px;
    min-height: 100vh;
    width: 100vw;
    background-color: #000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23b6ab1c' fill-opacity='0.16'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
    color: rgba(160,140,47,1);
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
  }

  .transition {
    width: 100%;
    height: 700px;
    z-index: 8;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-attachment: fixed;
  }
  .curve-top, .curve-bottom {
    position: absolute;
    right: -200px;
    width: 250%;
    height: 160px;
    z-index: 9;
    border-radius: 100%;
    background-color: #000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23b6ab1c' fill-opacity='0.16'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
    bottom: -100px;
  }
  .curve-top {
    border-bottom: 4px solid rgba(100,50,22,1);
  }
  .curve-bottom {
    border-top: 4px solid rgba(100,50,22,1);
  }

  @media only screen and (max-width: 600px) {
    .curve-top, .curve-bottom {
      height: 150px;
    }
  }


  .titleContainer {
    width: 95%;
    margin: 0 auto;
    max-width: 900px;
    border: 2px solid rgba(180,160,67,1);
    border-radius: 2px;
    padding: 5px;
  }
  .bordered {
    margin: auto;
    border: 4px solid rgba(180,160,67,1);
    border-radius: 2px;
    padding: 5px;
  }
  .field {
    width: 95%;
    margin: 0 auto;
    margin-top: 50px;
    max-width: 900px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: right;
  }
  .reverse {
    flex-direction: row-reverse;
    text-align: left;
  }
  .fieldTextContainer {
    flex: 1 0 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
  }

  .headerContainer {
  }
  .headerContainer h2 {
    margin: 0;
    font-weight: bolder;
    font-size: 32px;
    letter-spacing: 2px;
  }
  .textSeparator {
    width: 100px;
    height: 5px;
    background-color: rgba(180,160,67,.75);
    margin: 30px auto 10px auto;
  }
  .fieldImageContainer {
    flex: 1 0 65%;
    border: 2px solid black;
    background-color: black;
    padding: 1px;
    box-shadow: 5px 6px 3px rgb(1,1,1);
    border-radius: 5px;
  }
  .fieldImageContainer img {
    border-radius: 2px;
    width: 100%;
    min-height: 100%;
    height: auto;
  }

  @media only screen and (max-width: 800px) {
    .field {
      flex-direction: column;
    }
    .fieldTextContainer {
      flex: 1 0 100%;
    }
    .fieldImageContainer {
      flex: 1 0 100%;
    }
  }
</style>
