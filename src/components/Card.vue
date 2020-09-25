<template>
	<div class="Card">
		<div class="Card__info">
			<p class="Id">ID:{{2}}</p>
			<p class="Name">Name:{{"Ernesta"}}</p>
			<p class="Age">Age:{{40}} years</p>
		</div>
		<div class="Actions">
			<a href="">See</a>
		</div>
	</div>
</template>
<script>
export default {
	name:"Card"
}
</script>
<style scoped>
.Card{
	display: flex;
	justify-content: space-between;
	padding: 26px;
	width: 700px;
	height: 200px;
	margin-top: 40px;
	background-color: #FEFEFE;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.16);
}
.Id{
	font-size:3.1rem ;
}
.Name, .Age{
	font-size:2rem ;
}
.Actions{
	display: flex;
	align-items: center;
}
.Actions a{
font-size: 2.7rem;
color: #FEFEFE;
padding: 5px 100px;
background-color: #0791E6;
border-radius: 20px;
}
</style>