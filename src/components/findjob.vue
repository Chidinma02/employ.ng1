<template>
   
      <search/>
      <job/>
      
  
</template>

<script>

import job from './secondscreen/job.vue'
import search from './secondscreen/search.vue'

export default {
  components: { job ,search,
  },
  name: 'findjob',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
