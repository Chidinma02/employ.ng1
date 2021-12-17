<template>
   
  <navbarpro/>
   <dashboardpro />  
</template>

<script>
import dashboardpro from "../components/myprofile/dashboardpro.vue";
import navbarpro from "../components/myprofile/navbarpro.vue";
export default {
  components: { dashboardpro, navbarpro },
  name: "profiledashboard",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
