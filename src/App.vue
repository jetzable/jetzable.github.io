<template>
  <vue-page-transition id="#app" name="flip-y">
    <router-view/>
  </vue-page-transition>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
}
</style>
