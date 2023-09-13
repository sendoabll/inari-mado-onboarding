<template>
  <footer class="max-w-screen-xl px-8 mx-auto mt-12">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="w-full flex text-center py-6 border-t border-[#DDDDDD]">
        <UiNavLink name="Careers" url="root" />
        <UiNavLink name="Report a bug" url="root" />
        <UiNavLink name="Help Center" url="root" />
      </div>
    </div>
  </footer>
</template>

<script>
import UiNavLink from '@/components/Ui/NavLink.vue';

export default {
  name: 'AppFooter',

  components: {
    UiNavLink,
  }
}
</script>