<template>
  <section class="Container">
		<div class="List">
		<Card v-for="card of cards" :key="card.id" :buyer="card" ></Card>
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
				[]
			
		}
	},
	created(){
		api.getBuyers()
			.then(buyers =>(this.cards = buyers))
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

</style>