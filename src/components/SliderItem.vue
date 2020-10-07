<template>
	<div class="Item">
		
	</div>
</template>

<script>
export default {
	name:'SliderItem'
}
</script>

<style scoped>
.Item{
	height:200px;
	width:200px;
	border-radius:4px; 
	background-color: #333;
	display:inline-flex;
	margin-left:10px;
	transition:450ms all;
	transform-origin: center left;
}
.Item:hover ~div{
	transform: translate3d(100px, 0, 0);
}

</style>