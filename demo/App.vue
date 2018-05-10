<template>
	<div id="app">
		<swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide :key='index' v-for="(banner,index) in bnaners">
		    	<img :src="banner">
		    </swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
  name: 'app',
  components:{
  },
  data(){
	return {
		bnaners:['http://www.swiper.com.cn/demo/img/nature3.jpg','http://www.swiper.com.cn/demo/img/nature3.jpg','http://www.swiper.com.cn/demo/img/nature3.jpg'],
		swiperOption: {
          	notNextTick: true,
	        loop:true,
	        slidesPerView: 1.45,
	        centeredSlides: true,
	        spaceBetween: -10
        }
	}
  },
}
</script>

