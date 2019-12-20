<template>
  <vue-page-transition name="flip-y">
  <router-view />
</vue-page-transition>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
}
</style>
