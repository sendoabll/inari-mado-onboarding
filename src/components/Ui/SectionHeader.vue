<template>
  <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">{{ title }}</span>
  <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">{{ subtitle }}</h2>
</template>

<script>
export default {
  name: 'UiSectionHeader',

  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    }
  },
}
</script>