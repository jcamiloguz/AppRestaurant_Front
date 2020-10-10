<template>
	<section>
		<Card :details="true" :buyer="details.buyer"/>
		<div class="Relatedbuyers">
			<h2>Same ip buyers</h2>
			<div class="list">
				<Card v-for="buyer of details.sameipbuyer" :key="buyer.id" :buyer="buyer"/>
			</div>
		</div>
		<Slider title="Recomended Products" :items="details.relatedProducts"/>
	</section>
</template>
<script>
import Card from '@/components/Card'
import Slider from '@/components/Slider'
import api from '@/api'
export default {
	name:"BuyerDetails",
	components:{
		Card,
		Slider
	},
	data(){
	return	({details:{
			buyer:{
				id:'23dd312',
				name:'Pedro',
				age:2,
			},
			relatedProducts:[
				{
					id:'2313kodf',
					name:'Spaguetti',
					price:4599
				},
				{
					id:'sdad213',
					name:'Rice and meat',
					price:9945,
				},
				{
					id:'sdad323213',
					name:'Rice and meat',
					price:2299,
				},
				{
					id:'1234sads3',
					name:'Meatballs',
					price:2299,
				},
				{
					id:'23saafd',
					name:'Pizza',
					price:1299,
				},
				{
					id:'djsbhg231',
					name:'HotDog',
					price:5299,
				},
			],
			sameipbuyer:[
				{
				id:'ewd123e',
				name:'samuel',
				age:22,
				},
				{
				id:'2wqeqqdw3',
				name:'Pedro',
				age:32,
				},
				{
				id:'skjdalj',
				name:'samuel',
				age:22,
				},
				{
				id:'dvs2123',
				name:'Fabio',
				age:18,
				},
				{
				id:'24sdas23',
				name:'Waald',
				age:20,
				},
				{
				id:'dsf23',
				name:'Fernando',
				age:22,
				}
			]

		}})
	},
	created(){
		this.getData()
	},
	methods:{
		getData(){
			const id=this.$route.params.id
			api.getDetails(id)
			.then(details=>this.details=details)
		}
	}
}
</script>

<style scoped>
section{
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
}
.Relatedbuyers{
	background-color: #FEFEFE;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.16);
	margin: 30px 0px;
	padding: 26px;
}
.list{
	padding: 26px;
	height: 600px;
	overflow: scroll;

}
h2{
	font-size: 2rem;
}
</style>