<template>
  <div class="h-screen p-12 uppercase flex flex-col justify-around items-center">
    <infinite-slide-bar :barStyle="{ background: 'transparent' }" duration="5s">
      <p class="flex justify-around text-6xl text-black opacity-75 mx-10">
        <span class="mx-8">
          front end
        </span>
        <span class="font-bold mx-12">developer</span>
      </p>
    </infinite-slide-bar>
    <div class="flex flex-col flex-grow w-full items-center justify-center px-8">
      <h2 class="text-4xl">@jetzable</h2>
      <p class="text-3xl">Enjoy eating, cooking and learning new stuff.</p>
    </div>
    <FancyButton label="More" />
  </div>
</template>
<script>
import FancyButton from './core/FancyButton'
export default {
  name: 'Home',
  components: {
    FancyButton
  }
}
</script>
