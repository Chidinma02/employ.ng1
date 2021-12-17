<template>
    <snav />  
    <sdash/>
    
</template>

<script>
import sdash from "../components/shortlistC/sdash.vue";
import snav from "../components/shortlistC/snav.vue";

export default {
  components: { sdash, snav, },
  name: "cShort",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
