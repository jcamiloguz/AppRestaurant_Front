<template>
	<div class="Card">
		<div class="Card__info">
			<p class="Id">ID:{{buyer.id}}</p>
			<p class="Name">Name:{{buyer.name}}</p>
			<p class="Age">Age:{{buyer.age}} years</p>
		</div>
		<div class="Actions">
			<a href="">See</a>
		</div>
	</div>
</template>
<script>
export default {
	name:"Card",
	props:{
		buyer:{
			type:Object,
			default:()=>{}
		}
	}
}
</script>
<style scoped>
.Card{
	display: flex;
	justify-content: space-between;
	padding: 26px;
	width: 500px;
	height: 150px;
	margin: 20px auto;
	background-color: #FEFEFE;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.16);
}
.Id{
	font-size:2.1rem ;
}
.Name, .Age{
	font-size:1rem ;
}
.Actions{
	display: flex;
	align-items: center;
}
.Actions a{
font-size: 1.7rem;
color: #FEFEFE;
padding: 5px 40px;
background-color: #0791E6;
border-radius: 15px;
}
</style>