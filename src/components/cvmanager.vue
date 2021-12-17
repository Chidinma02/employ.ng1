<template>
    <managernav/>
    <managerdash />  
    
</template>

<script>
import managerdash from "./CcvManager/managerdash.vue";
import managernav from "./CcvManager/managernav.vue";

export default {
  components: { managernav, managerdash },
  name: "ccvmanager",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
