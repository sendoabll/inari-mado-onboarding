<template>
  <nav class="relative z-10 w-full text-neutral-800">
    <div class="flex max-w-screen-xl px-8 mx-auto items-center justify-between flex-row py-4">
      <div class="flex items-center space-x-4">
        <InariLogo class="w-40 cursor-pointer" @click="$router.push({ name: 'root' })" />
      </div>
      <div class="flex items-center space-x-3">
        <div class="px-4 text-gradient border-b border-[#0c66ee]">
          John Doe
        </div>
        <UiButton>
          Logout
        </UiButton>
      </div>
    </div>
  </nav>
</template>
<script>
import InariLogo from '@/assets/images/inari.vue';

import UiButton from '@/components/Ui/Button.vue';
import UiNavLink from '@/components/Ui/NavLink.vue';

export default {
  name: 'AppNavbar',

  components: {
    InariLogo,
    UiButton,
    UiNavLink,
  },

  data() {
    return {
      open: false,
      dropdownNavbar: false,
    }
  },

  methods: {
    dropdownToggler () {
      this.dropdownNavbar = !this.dropdownNavbar
    }
  }
}
</script>