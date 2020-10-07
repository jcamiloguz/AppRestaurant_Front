<template>
  <section class="Container">
			<div  v-if="isLoading" class="loader">
				<DotLoader :loading="isLoading" :color="'#0791E6'" :size="100" />
			</div>
		<div class="List">
			<Card v-for="card of cards" :key="card.id" :buyer="card" ></Card>
			<div class="error" v-if="!isLoading" >{{error}}</div>
		</div>

  </section>
</template>

<script>
import Card from "@/components/Card";
import api from "@/api"
export default {
	name: 'Buyers',
  components: {
		Card
	},
	data(){
		return{
			cards:
				[],
				error:'',
				isLoading:false
			
		}
	},
	created(){
		this.isLoading=true
		api.getBuyers()
			.then(buyers =>(this.cards = buyers))
			.catch(()=>this.error="Server Error")
			.finally(()=>this.isLoading=false)
	}
}
</script>
<style scoped>
.Container{
	width: 100%;
}
.List{
	width: 100%;
	max-width: 700px;
	margin: 0 auto;
}
.error{
	margin: 40px;
	text-align: center;
	font-size: 3rem;
	color: #bd2f2f;
	width: 100%;
	background-color: #FEFEFE;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.16);
	padding: 26px;
}
.loader{
	display: flex;
	margin: 60px; 
	justify-content: center;
	width: 100%;
}
</style>