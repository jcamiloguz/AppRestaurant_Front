<template>
  <section class="Container">
		<div class="List">
		<Card v-for="card of cards" :key="card.id" :buyer="card" ></Card>
		</div>
  </section>
</template>

<script>
import Card from "@/components/Card";

export default {
	name: 'Buyers',
  components: {
		Card
	},
	data(){
		return{
			cards:
				[
					{id:"f56fae34",name:"Mila",age:48},{id:"c7709d2a",name:"Ahola",age:66},{id:"d1b3dcb7",name:"Philemon",age:57},{id:"b9a2f920",name:"Merrick",age:34},{id:"5d9f6f5b",name:"Vories",age:45},{id:"aced5b2b",name:"Melisandra",age:19},{id:"1c5b2120",name:"Heywood",age:40},{id:"4973df91",name:"Pruter",age:47},{id:"a58faf6f",name:"Blainey",age:25},{id:"7de28454",name:"Gleason",age:78},{id:"7e152a67",name:"Kopans",age:63},{id:"e22f1346",name:"Buehrer",age:48},{id:"ff07955",name:"Corotto",age:37},{id:"dd825cb5",name:"Burch",age:45}
					]
			
		}
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