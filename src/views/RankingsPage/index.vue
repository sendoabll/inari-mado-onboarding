<template>
  <MainLayout>
    <UiSectionHeader title="Global Rankings" />
    
    <div class="flex mt-8">
      <AreasSection class="w-3/12" @change-step="onChangeTab" />

      <HRSection class="w-9/12" v-if="step === 0" />
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/App/MainLayout.vue'
import UiSectionHeader from '@/components/Ui/SectionHeader.vue'
import AreasSection from '@/views/RankingsPage/_AreasSection.vue'
import HRSection from '@/views/RankingsPage/_HRSection.vue'

export default {
  name: 'RankingPage',

  components: { 
    MainLayout,
    UiSectionHeader,
    AreasSection,
    HRSection,
  },

  data () {
    return {
      step: 0
    }
  },

  methods: {
    onChangeTab (index) {
      this.step = index
    }
  }
}
</script>