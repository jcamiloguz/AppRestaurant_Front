<template>
	<header>
    <nav>
			<div class="menu">
  		    <router-link to="/sync">Sync</router-link>
		      <router-link to="/buyers">Buyers</router-link>
			</div>
			<div class="about">
      	<router-link to="/about">About</router-link>
			</div>
    </nav>
	</header>
</template>

<script>
export default {
	name:"Header"
}
</script>

<style scoped>
header{
	width: 100%;
}
a{
	color:#707070;	
	text-decoration: none;
}
nav {
	display: grid;
	height: 80px;
	grid-template-columns: 180px 1fr 180px;
  padding: 5px 20px;
	margin: 0 auto;
	background-color: #FEFEFE;
	box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.16);
}
.menu {
	grid-column: 2/3;
	display: flex;
	width: 100%;
	max-width: 700px;
	margin: 0 auto		;
	justify-content: space-between;
}
.about{
	display: flex;
	justify-items: end;
}
nav a {
	padding: 5px 30px;
	font-size: 2.9rem;
}

nav a.router-link-exact-active {
  color: #FEFEFE;
	background-color:#5D7787 ;
	border-radius:14px ;
}
</style>