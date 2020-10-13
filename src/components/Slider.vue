<template>
	<section>
		<h1>{{title}}</h1>
		<div class="Wrapper">
			<SliderItem v-for="item of items" :key="item.product_id" :item="item" />
		</div>
	</section>
</template>

<script>
import SliderItem from '@/components/SliderItem'
export default {
	name:'Slider',
	components:{
		SliderItem
	},
	props:{
		title:{
			type:String,
			default:''

		},
		items:{
			type:Array,
			default:()=>[]
		}
	}

}
</script>

<style scoped>
	section{
		width:100%;
		position:relative;
		background-color: #fefefe;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.16);
		padding: 30px;
	}
	h1{
		font-size: 2rem;

	}
	.Wrapper{
		overflow: scroll;
		transition: 450ms all;
		white-space: nowrap;
		margin: 60px 0px;
		height: 300px;
		padding-bottom: 10px;
	}
	.Wrapper:hover div{
		opacity:0.3;
	}
	.Wrapper:hover div:hover{
		transform: scale(1.5);
		opacity:1;
	}
	

</style>