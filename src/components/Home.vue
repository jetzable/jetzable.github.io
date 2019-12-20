<template>
  <div class="h-screen p-12 uppercase flex flex-col justify-around items-center backPhoto">
    <infinite-slide-bar :barStyle="{ background: 'transparent' }" duration="5s">
      <p class="flex justify-around text-6xl opacity-75 mx-10">
        <span class="mx-8 text-pink">
          front end
        </span>
        <span class="font-bold mx-12 text-green-300">developer</span>
      </p>
    </infinite-slide-bar>
    <div class="flex flex-col flex-grow w-full items-center justify-center px-8 mb-8 text-green-200 text-center">
      <h2 class="text-4xl">@jetzable</h2>
      <p class="text-3xl">
        <span class="text-pink">VueJs enthusiast, </span>
        <span>Co-chapter lead Vue Vixens Mx, </span>
        <span class="text-pink">Enjoy eating, </span>
        <span>cooking and learning new stuff.</span>
      </p>
    </div>
    <div class="flex flex-col items-center justify-around">
      <FancyButton label="More" class="mb-4"/>
      <FancyIcon icon="more_vert" class="text-green-300" style="font-size:4rem;"/>
    </div>
  </div>
</template>
<script>
import FancyButton from './core/FancyButton'
import FancyIcon from './core/FancyIcon'

export default {
  name: 'Home',
  components: {
    FancyButton,
    FancyIcon
  }
}
</script>
<style scoped>
.backPhoto {
  background: url('../assets/images/vectorpaint.svg');
  background-size: contain;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-attachment: local;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>