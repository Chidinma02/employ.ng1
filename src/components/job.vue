<template>
    <dash/>
    <navc />  
</template>

<script>
import dash from "../components/CandidateJob/dash.vue";
import  navc from "../components/CandidateJob/navc.vue";

export default {
  components: { dash, navc, },
  name: "job",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
