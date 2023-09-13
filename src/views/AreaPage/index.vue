<template>
  <MainLayout>
    <UiGoBack route="areas" />
    
    <component :is="resolveComponent" :id="id" />
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/App/MainLayout.vue';
import UiGoBack from '@/components/Ui/GoBack.vue'
import BackendSection from '@/views/AreaPage/_BackendSection.vue'
import UnderConstructionSection from '@/views/AreaPage/_UnderConstructionSection.vue'

export default {
  name: 'HomePage',

  props: {
    id: {
      type: String,
      required: true
    }
  },
  
  components: {
    MainLayout,
    UiGoBack,
  },

  computed: {
    resolveComponent () {
      switch (this.id) {
        case 'backend':
          return BackendSection

        default: 
          return UnderConstructionSection
      }
    }
  }
}
</script>
