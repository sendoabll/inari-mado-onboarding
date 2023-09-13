<template>
  <MainLayout>
    <TabsSection @change-tab="onChangeTab" />

    <DevelopersSection v-if="tab === 0" />
    <UnderConstructionSection v-if="tab !== 0" />
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/App/MainLayout.vue';
import TabsSection from '@/views/ProductsPage/_TabsSection.vue';
import DevelopersSection from '@/views/ProductsPage/_DevelopersSection.vue';
import UnderConstructionSection from '@/views/ProductsPage/_UnderConstructionSection.vue';

export default {
  name: 'ProductsPage',

  components: {
    MainLayout,
    TabsSection,
    DevelopersSection,
    UnderConstructionSection,
  },

  data () {
    return {
      tab: 0
    }
  },

  methods: {
    onChangeTab (index) {
      this.tab = index
    }
  }
}
</script>
