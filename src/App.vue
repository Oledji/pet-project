<template>
  <div id="app">
    <myHeader @toggle-menu="toggleMenu"/>
    <div class="app__container">
      <LeftMenu :menuActive="menuActive"/>
      <main class="main__container"><router-view/></main>
    </div>
    <div class="app__footer"></div>
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue";
import LeftMenu from "./components/LeftMenu.vue";

export default {
  components: {
    myHeader,
    LeftMenu
  },
  data() {
    return {
      menuActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
      console.log(this.menuActive);
    },
    isLogged() {
      this.$store.commit('isAuthorize')
    }
  },
  mounted() {
    this.isLogged();    
  },
  watch: {
    '$route.query.code'(){
      this.$store.state.AuthModule.auth_code = this.$route.query.code
    }
  },
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0px;
}

.app__container {
  width: 100%;
  min-height: 100vh;
  background-color: var(--main-color);
  padding-top: 80px;
}

.main__container {
  width: 1300px;
  margin: 0 auto;
}

</style>
