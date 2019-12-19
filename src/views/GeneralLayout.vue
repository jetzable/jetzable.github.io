<template>
  <div class="bg-white backPhoto">
    <div><slot /></div>
  </div>
</template>

<script>
export default {
  name: 'GeneralLayout',
}
</script>
<style scoped>
.backPhoto {
  background: url('../assets/images/profilePicture.svg');
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