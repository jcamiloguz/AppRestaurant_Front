<template>
	<div class="Item">
		<h2>Product</h2>
		<p><strong>Name:</strong>{{item.product_name}}</p>
		<p><strong>Price: $</strong>:{{item.price}}</p>
	</div>
</template>

<script>
export default {
	name:'SliderItem',
	props:{
		item:{
			type:Object,
			default:()=>{}
		}
	}
}
</script>

<style scoped>
.Item{
	height:150px;
	width:200px;
	border-radius:4px; 
	background-color: #fefefe;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.16);
	display:inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left:10px;
	transition:450ms all;
	transform-origin: center left;
	padding: 10px;
  white-space: normal;

}
.Item:hover ~div{
	transform: translate3d(100px, 0, 0);
}
p{
	text-align:center
}
</style>