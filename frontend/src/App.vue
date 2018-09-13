<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar
  },
  data() {
    return {};
  }
};
</script>

<style>
body {
  padding-top: 70px;
}
</style>
