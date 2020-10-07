<template>
	<section>
		<div class="Wrapper">
			<SliderItem/>
			<SliderItem/>
			<SliderItem/>
			<SliderItem/>
			<SliderItem/>
		</div>
	</section>
</template>

<script>
import SliderItem from '@/components/SliderItem'
export default {
	name:'Slider',
	components:{
		SliderItem
	}
}
</script>

<style scoped>
	section{
		width:100%;
		position:relative;
		overflow: scroll;
		background-color: #fefefe;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.16);
	}
	.Wrapper{
		transition: 450ms all;
		white-space: nowrap;
		margin: 60px 0px;
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