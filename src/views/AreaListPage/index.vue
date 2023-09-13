<template>
  <MainLayout>
    <UiGoBack route="root" />

    <AreasSection />
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/App/MainLayout.vue';
import AreasSection from '@/views/AreaListPage/_AreasSection.vue'
import UiGoBack from '@/components/Ui/GoBack.vue'

export default {
  name: 'HomePage',

  components: {
    MainLayout,
    AreasSection,
    UiGoBack,
  },
}
</script>
