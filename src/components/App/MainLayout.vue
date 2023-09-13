<template>
  <div class="min-h-screen font-sans antialiased cover-gradient">
    <div class="flex flex-col w-full min-h-screen">
      <AppNavbar class="w-full" />

      <main class="h-full w-full m-auto max-w-screen-xl flex-1 text-neutral-800 px-8">
        <slot />
      </main>

      <AppFooter class="w-full" />
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/App/Navbar.vue'
import AppFooter from '@/components/App/Footer.vue'

export default {
  name: 'MainLayout',

  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style>
.cover-gradient {
  background: linear-gradient(169.4deg,
      rgba(57, 132, 244, 0.04) -6.01%,
      rgba(12, 211, 255, 0.04) 36.87%,
      rgba(47, 124, 240, 0.04) 78.04%,
      rgba(14, 101, 232, 0.04) 103.77%);
}
</style>