<template>
	<section>
		<div class="container">
			<div class="">
				<h2>Select date</h2>
				<input  v-model="mydate"  type="date">	
				<p>unix: {{toUnix}}</p>
			</div>
			<button class="sync_button"  @click="submitDate">Sync Info</button>			
		</div>
		<div class="container">
			<a class="delete_button" href="#">Delete Data</a>			
		</div>
	</section>
</template>
<script>
import api from '@/api'
export default {
	name: 'Buyers',
	data(){
		return{
			 mydate: ""
		}
	},
	
	computed:{
		toUnix(){

			if (this.mydate===''	) {
				let today = new Date()
				today=today.setHours(0,0,0,0)
				return today/1000
			} 
			return Date.parse(this.mydate)/1000
		}
	},
	methods:{
		submitDate:function(event){
			console.log('touch')
			api.postData(this.toUnix)
			.then(this.$router.push('/buyers'))
		}
	}
}
</script>

<style scoped>
section{
	width: 100%;
max-width: 700px;
margin: 0 auto;
}
.container{
margin: 40PX auto;
width: 100%;
	background-color: #FEFEFE;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.16);
	padding: 26px;
	display: flex;
	align-items: center;
	justify-content: space-around;

}
.sync_button{
font-size: 1.7rem;
color: #FEFEFE;
padding: 5px 40px;
background-color: #0791E6;
border-radius: 15px;
border-color: #fff;

}
.delete_button{
font-size: 1.7rem;
color: #FEFEFE;
padding: 5px 40px;
background-color: #c71818;
border-radius: 15px;

}
</style>