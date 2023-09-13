<template>
  <button class="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-6 py-3 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
}
</script>