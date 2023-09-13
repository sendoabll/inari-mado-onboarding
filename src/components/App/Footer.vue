<template>
  <footer class="max-w-screen-xl px-8 mx-auto mt-12">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="grid grid-cols-2">
        <div class="w-full text-center py-6 border-t border-r border-[#DDDDDD]">
          <ul class="space-y-4">
            <UiNavLink name="Products" url="#" />
            <UiNavLink name="Careers" url="#" />
          </ul>
        </div>
        <div class="w-full text-center py-6 border-t border-[#DDDDDD]">
          <ul class="space-y-4">
            <UiNavLink name="Report a bug" url="#" />
            <UiNavLink name="Help Center" url="#" />
          </ul>
        </div>
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