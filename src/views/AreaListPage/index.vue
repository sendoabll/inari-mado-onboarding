<template>
  <MainLayout>
    <AreasSection />
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/App/MainLayout.vue';
import AreasSection from '@/views/AreaListPage/_AreasSection.vue'

export default {
  name: 'HomePage',

  components: {
    MainLayout,
    AreasSection,
  },
}
</script>
