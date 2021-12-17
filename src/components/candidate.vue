<template>
    <candidatenavbar />  
  <candidatedashboard/>
</template>

<script>
import candidatedashboard from "../components/candidatefolder/candidatedashboard.vue";
import candidatenavbar from "../components/candidatefolder/candidatenavbar.vue";
export default {
  components: { candidatedashboard, candidatenavbar },
  name: "candidate",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
