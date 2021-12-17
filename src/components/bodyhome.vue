<template>
   
      <sectionone/>
      <sectiontwo/>
      <sectionthird/>
  
</template>

<script>

import sectionthird from '../components/Homescreen/sectionthird.vue'
import sectiontwo from '../components/Homescreen/sectiontwo.vue'
import sectionone from  '../components/Homescreen/sectionone.vue'
export default {
  components: { 
    sectionthird ,sectiontwo,sectionone
  },
  name: 'bodyhome',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
