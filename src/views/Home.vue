<template>
  <GeneralLayout>
    <Home />
  </GeneralLayout>
</template>

<script>
import GeneralLayout from './GeneralLayout.vue'
import Home from '../components/Home'

export default {
  name: 'HomeView',
  components: {
    GeneralLayout,
    Home
  }
}
</script>
