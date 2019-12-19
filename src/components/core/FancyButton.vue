<template>
  <button class="min-h-8 min-w-22 rounded shadow-lg p-2">
    {{ label }}
  </button>
</template>
<script>
export default {
  name: 'FancyButton',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>