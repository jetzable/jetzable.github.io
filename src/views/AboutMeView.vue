<template>
  <GeneralLayout>
    <AboutMe />
  </GeneralLayout>
</template>

<script>
import GeneralLayout from './GeneralLayout.vue'
import AboutMe from '../components/AboutMe'

export default {
  name: 'AboutMeView',
  components: {
    GeneralLayout,
    AboutMe
  }
}
</script>
