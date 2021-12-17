<template>
  <div class="navbar navbar-expand-lg navbar -light bg-light mb-5 gt">
    <a class="navbar-brand" href="#"
      ><img src="../../assets/EMPLOYED.NG-LOGO-ICON.png" class="lo"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- <li>ddd</li> -->
      </ul>
      <button class="menu-btn">
        <span class="count">1</span>
        <span class="icon la la-bell l"></span>
      </button>
    </div>
  </div>
  <!-- 
      <sidebar />
      <div>
        <Navbar />
        <Routes>
          <Route component={<Dashboard />} />
          <Route component={<Profile />} />
          
        </Routes>
      </div>
     -->
</template>

<script>
export default {
  name: "navc",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l {
  font-size: 30px;
}
.count {
  position: absolute;
  /* right: -8px; */
  /* top: -4px; */
  height: 16px;
  width: 16px;
  background: #1967d2;
  border-radius: 50%;
  color: #ffffff;
  line-height: 16px;
  font-size: 14px;
}
.lo {
  height: 50px;
}
.se{
  /* position: relative;
  left: 30px; */
  /* padding-left:315px; */
  /* margin-right: 90px;; */

  /* position:absolute; */
}
@media (min-width: 1200px) {
  .se{
    /* padding-top:10000px; */
    /* position:relative;
      left:30px;  */
    /* padding-left:500px; */
    /* padding-left: 110000000000px; */
  }
}
</style>
