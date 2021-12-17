<template>
  <!-- Sidebar Backdrop -->
  <div class="sidebar-backdrop"></div>

  <!-- User Sidebar -->
  <sidebar />
  <!-- End User Sidebar -->

  <!-- Dashboard -->

  <!-- End Dashboard -->
  <!-- <div class="black"> -->
    <dashboard/>
  <!-- </div> -->
  
  <!-- Copyright -->
  <div class="copyright-text">
    <p>© 2021 Employ.ng . All Right Reserved.</p>
  </div>
</template>

<script>
import Dashboard from './dashboard.vue';
import sidebar from "./sidebar.vue";
// import dashboard from "./dashboard.vue";

export default {
  components: { sidebar, Dashboard },
  name: "candidatedashboard",

  data() {
    return {
      page: "dashboard",
    };
  },
  methods: {
    changePage(data) {
      this.page = data;
    },
    // link() {
    //   this.$router.push("/register");
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sec {
  position: relative;
  left: 30px;
  /* padding-left:315px; */
  /* margin-right: 90px;; */

  /* position:absolute; */
}
@media (min-width: 1200px) {
  .sec {
    padding-top: 50px;
    /* position:relative;
      left:30px;  */
    /* padding-left:500px; */
    padding-left: 315px;
  }
}
/* .black {
    border: 1px solid black;
} */
</style>
