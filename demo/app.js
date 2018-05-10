import Vue from 'vue'
import App from './App.vue'

// 全局可引用
import VueAwesomeSwiper from '../dist'
Vue.use(VueAwesomeSwiper)

new Vue({
	el: '#app',
	data() {
		return {

		}
	},
	template: '<App/>',
	components: { App },
	created() {
	}
})
