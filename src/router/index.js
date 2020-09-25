import Vue from 'vue'
import Router from 'vue-router'
import Buyers from '../views/Buyers.vue'

Vue.use(Router)

export default new Router(
	{
		mode:"history",
		routes:[
  {
    path: '/buyers',
    name: 'Buyers',
    component: Buyers
  }
]}
)



