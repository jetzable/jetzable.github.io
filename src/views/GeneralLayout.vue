<template>
  <div class="h-screen bg-yellow">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.8"
      :particlesNumber="150"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.3"
      :linesDistance="130"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="h-screen"
    >
    <slot />
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'GeneralLayout'
}
</script>
