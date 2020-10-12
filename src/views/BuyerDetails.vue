<template>
  <section>
    <div v-if="isLoading" class="loader">
      <DotLoader :loading="isLoading" :color="'#0791E6'" :size="100" />
    </div>
    <Card :details="true" :buyer="details.Details.Buyer[0]" />
    <div class="Relatedbuyers">
      <h2>Same ip buyers</h2>
      <div class="list">
        <Card
          v-for="buyer of details.Details.buyers"
          :key="buyer.id"
          :buyer="buyer"
        />
      </div>
    </div>
    <Slider title="Recomended Products" :items="details.History.products" />
  </section>
</template>
<script>
import Card from '@/components/Card'
import Slider from '@/components/Slider'
import api from '@/api'
import utils from '@/utils'
export default {
  name: 'BuyerDetails',
  components: {
    Card,
    Slider,
  },
  data() {
    return { details: {}, error: '', isLoading: false }
  },
  created() {
    this.isLoading = true
    this.getData()
  },
  methods: {
    getData() {
      const id = this.$route.params.id
      api.getDetails(id).then((details) => {
        details.Details.buyers = utils.deleteDuplicate(details.Details.buyers)
        return (this.details = details)
			})
			.finally(()=>this.isLoading=false)
    },
    
  },
}
</script>

<style scoped>
section {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
.Relatedbuyers {
  background-color: #fefefe;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.16);
  margin: 30px 0px;
  padding: 26px;
}
.list {
  padding: 26px;
  height: 600px;
  overflow: scroll;
}
h2 {
  font-size: 2rem;
}
.loader {
  display: flex;
  margin: 60px;
  justify-content: center;
  width: 100%;
}
</style>
