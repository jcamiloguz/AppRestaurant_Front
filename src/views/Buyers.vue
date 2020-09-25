<template>
  <section class="Container">
		<div class="List">
		<Card></Card>
		</div>
  </section>
</template>

<script>
import Card from "@/components/Card";

export default {
	name: 'Buyers',
  components: {
		Card
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