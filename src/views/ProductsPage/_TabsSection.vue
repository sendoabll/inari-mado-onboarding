<template>
  <div class="col-span-12 md:col-span-6">
    <UiTabs :tabs="tabs" class="w-full" @change-tab="$emit('change-tab', $event)" />
  </div>
</template>

<script>
import UiTabs from '@/components/Ui/Tabs.vue'

export default {
  name: 'ProductsPageTabsSection',

  components: {
    UiTabs,
  },

  data() {
    return {
      tabs: [
        { title: 'Development' },
        { title: 'Data Science' },
        { title: 'Marketing' },
        { title: 'Sales' },
      ],
    }
  },

  emits: {
    'change-tab': null
  },
}
</script>