<template>
  <div id="app">
    <headerapp />

    <router-view />
    <!-- <div class="uzor-links">
      <ul>
        <li class="link"><router-link to="/">Home</router-link></li>
        <li class="link"><router-link to="/findjob">FindJob</router-link></li>
      </ul>
    </div> -->
    <footerapp />
  </div>
</template>

<script>
import headerapp from "./components/headerapp.vue";
// import bodyhome from './components/bodyhome.vue'
import footerapp from "./components/footerapp.vue";
export default {
  name: "App",
  components: {
    headerapp,
    footerapp,
  },
};
</script>

<style scoped>
.uzor-links {
  height: 30vh;
  color: black;
}

.link {
  color: red;
}
</style>
