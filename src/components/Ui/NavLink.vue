<template>
  <div class="w-full">
    <RouterLink 
      class="min-w-min	md:px-4 py-2 text-sm bg-transparent rounded-lg focus:outline-none focus:shadow-outline"
      :to="{ name: url }">
      <slot />
      {{ name }}
  </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'UiNavLink',

  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>