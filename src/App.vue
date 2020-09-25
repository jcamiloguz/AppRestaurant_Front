<template>
<main>
		<Header></Header>
		<router-view/>
</main>
</template>
<script>
import Header from './components/Header'
export default {
	name:"App",
	components:{
		Header
	}
}
</script>
<style>
main{
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html{
	font-size: 16px;
	background-color:#EDEDED ;
	color:#707070;	
}
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
a{
	text-decoration: none;
}

</style>
