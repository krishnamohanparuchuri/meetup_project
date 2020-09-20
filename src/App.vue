<template>
  <div id="app">
    <div id="nav">
      <NavigationPage />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavigationPage from "@/components/NavigationPage";
export default {
  name: "App",
  components: {
    NavigationPage,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
body {
  width: 1400px;
  min-height: 600px;
  background: linear-gradient(
      180deg,
      #bae2cf 0%,
      rgba(167, 214, 197, 0.67) 68.75%,
      rgba(23, 118, 72, 0) 100%
    ),
    #e8e8e8;
  mix-blend-mode: normal;
  box-sizing: border-box;
  backdrop-filter: blur(4px);
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
