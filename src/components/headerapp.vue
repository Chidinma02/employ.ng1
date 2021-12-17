<template>
  <!-- <nav class="nav_bar"> -->
  <!-- <div class="icon_div auto-container">
      <img src="../assets/EMPLOYED.NG-LOGO-ICON.png" alt="" class="logo" />
      <i v-if="!navOpen" @click="toggleNav" class="fas fa-bars toggle_icon"></i>
      <i v-if="navOpen" @click="toggleNav" class="fas fa-times toggle_icon"></i>
    </div>
    <ul :class="{ open: navOpen, submenu: !navOpen }" class="submenu_div">
       <a href="login-popup.html" class="theme-btn btn-style-three call-modal">Login / Register</a>
      <li class="mar">Upload cv</li>
    </ul> -->
  <!-- </nav> -->
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    v-if="
      ![
        'loginapp',
        'register',
        'candidate',
        'employedash',
        'profiledashboard',
        'da',
        'CResume',
        'CApplied',
        'CResume',
        'Cshort',
        ,'cvmanager'
      ].includes($route.name)
    "
  >
    <a class="navbar-brand" href="#"
      ><img src="../assets/EMPLOYED.NG-LOGO-ICON.png" alt="" class="logo"
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
      <ul class="navbar-nav mr-auto"></ul>
      <form class="form-inline my-2 my-lg-0">
        <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
        <button
          class="btn btn-primary my-2 my-sm-0 pl-4 pr-4 mr-5"
          type="submit"
          @click="gotoHome()"
        >
          Login/Register
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "headerapp",
  data() {
    return {
      // navOpen: false,
    };
  },

  methods: {
    gotoHome() {
      // this.navOpen = !this.navOpen;
      this.$router.push("/loginapp");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  z-index: 1;
}
.logo {
  /* width: 200px; */
  height: 50px;
}
/* .nav_bar {
  color: #fff;
  position: relative;
  z-index: 99;
}


@media (min-width: 768px) {
  .nav_bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

.icon_div {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  background-color: #fff;
  padding: 25px 20px;
}

.logo {
  height: 30px;
  max-width: 100%;
}

.toggle_icon {
  color: #1967d2;
  font-size: 1.25rem;
}

@media (min-width: 768px) {
  .toggle_icon {
    display: none;
  }
}

.submenu_div {
  background-color: #000000bf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  transition: all 250ms ease-in;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 100%;
  height: calc(100vh - 100%);
  z-index: inherit;
}

@media (min-width: 768px) {
  .submenu_div {
    flex-direction: row;
    background-color: transparent;
    color: #1967d2;
    padding: 25px 20px;
    position: static;
    justify-content: space-around;
  }
}

.submenu_div li {
  margin: 15px 0;
}

@media (min-width: 768px) {
  .submenu_div li {
    margin: 0;
    margin-left: 20px;
  }
}

.submenu {
  transform: translateX(-100%);
}

@media (min-width: 768px) {
  .submenu {
    transform: translateX(0);
  }
}

open {
  transform: translateX(0);
} */
</style>
