import Vue from 'vue'
import Router from 'vue-router'
import Buyers from '../views/Buyers.vue'
import Sync from '../views/Sync.vue'
import NotFound from '../views/NotFound.vue'
import BuyerDetails from '../views/BuyerDetails.vue'

Vue.use(Router)

export default new Router(
	{
		mode:"history",
		routes:[
  {
    path: '/buyers',
    name: 'Buyers',
    component: Buyers
  },
  {
    path: '/Sync',
    name: 'Sync',
    component: Sync
	},
	{
		path: "*",
		name: "NotFound",
		component: NotFound
	},
	{
		path: "/buyers/:id",
		name: "BuyerDetails",
		component: BuyerDetails

	},
]}
)



