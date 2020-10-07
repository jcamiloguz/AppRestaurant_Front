<template>
	<section>
		<Card :details="true"/>
		<div class="Related buyers">
			<div class="list">
				<h2>Same ip buyers</h2>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
		<Slider title="Recomended Products"/>
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
		buyer:{}
	},
	created(){
		this.getData()
	},
	methods:{
		getData(){
			const id=this.$route.params.id
			api.getBuyer(id)
			.then(buyer=>this.buyer=buyer)
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
.list{
	background-color: #FEFEFE;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.16);
	padding: 26px;
	margin: 30px 0px;
}

</style>