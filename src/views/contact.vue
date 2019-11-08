<template>
  <div class="contact">
  	<div class="left">
  	</div>
  	<div class="right">
  		<div class="titleContainer">
	      <div class="bordered">
	        <h3 class="hide-small">
	          {{ $t('contact.quote')}}
	        </h3>
	        <h2> <img src="../assets/icons/003-pin.svg" alt="mail icon" class="contact-icon">
	          {{ $t('contact.address')}} <br>
	          <img src="../assets/icons/004-mail.svg" alt="mail icon" class="contact-icon">
	          {{ $t('contact.email')}}<br>
	          <img src="../assets/icons/005-phone.svg" alt="phone icon" class="contact-icon">
	          {{ $t('contact.phone')}}
	        </h2>
	      </div>
	    </div>
  	</div>
  </div>
</template>
<style scoped>
.contact-icon {
	height: 25px;
	width: 25px;
	max-height: 25px;
	max-width: 25px;
	color: white;
}
	.contact {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: row;
	}
	.left {
		width: 50vw;
		height: 100vh;
		background-image: url('../assets/section2/background5.jpg');
		background-position: center;
		background-size: cover;
	}
	.right {
		max-width: 50vw;
		width: 50vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px 20px;
	}
	.titleContainer {

    border: 2px solid rgba(180,160,67,1);
    border-radius: 2px;
    padding: 5px;
    max-width: 90%;
    max-height: 90%;
  }
  .bordered {
    margin: auto;
    border: 4px solid rgba(180,160,67,1);
    border-radius: 2px;
    padding: 5px;
    max-width: 95%;
    max-height: 90%;
    background-color: rgba(230,198,62,.7);
  }

@media only screen and (max-width: 800px) {
	.contact-icon {
	height: 18px;
	width: 18px;
}
.hide-small {
	display: none;
}
  .contact {
		flex-direction: column-reverse;
	}
	.left {
		width: 100vw;
		height: 50%;
		background-image: url('../assets/section2/background5.jpg');
	}
  .right {
  	max-width: 100%;
    width: 100%;
    height: 50%;
    padding: 30px 0 0 0 !important;
  }
}
</style>
