<template>
    <navapp />  
    <dba/>
</template>

<script>
import navapp from "../components/CandidateApplied/navapp.vue";
import dba from "../components/CandidateApplied/dba.vue";
export default {
  components: { dba, navapp },
  name: "CApplied",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
