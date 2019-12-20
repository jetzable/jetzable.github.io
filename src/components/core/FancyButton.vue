<template>
  <component
    v-on="$listeners"
    :is="to ? 'router-link' : 'button'"
    class="min-h-8 min-w-32 rounded shadow-lg
      p-2 text-pink font-bold uppercase
      text-lg tracking-wider bg-green-300 hover:bg-green-500
      active:bg-green-700"
    :class="{'border border-green-900': outline}"
    :type="submit ? 'submit' : 'button'"
    >
    <div class="flex items-center justify-center">
      <span>{{ label }}</span>
      <FancyIcon
        :icon="icon"
        style="margin-bottom:1px"
        class="mx-1"
        />
    </div>
  </component>
</template>
<script>
import FancyIcon from './FancyIcon'

export default {
  name: 'FancyButton',
  props: {
    label: {
      type: String,
      required: true
    },
    outline: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    submit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FancyIcon
  }
}
</script>
<style scoped>
button:focus {
  outline: none;
}
</style>>
