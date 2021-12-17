<template>
    
    <navbarres/>
    <dashboardres />  
</template>

<script>
import dashboardres from "./candidateresumefolder/dashboardres.vue";
import navbarres from "./candidateresumefolder/navbarres.vue";

export default {
  components: { dashboardres, navbarres, },
  name: "CResume",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
