<template>
  <UiSection>
    <div class="col-span-12 mt-12 space-y-4 px-6 text-center">
      <UiSectionHeader title="Ooopssssss!" subtitle="This site is still under construction, please, come back later." />
    </div>
  </UiSection>
</template>

<script>
import UiSection from '@/components/Ui/Section.vue'
import UiSectionHeader from '@/components/Ui/SectionHeader.vue'

export default {
  name: 'HomePageVideoSection',

  components: {
    UiSectionHeader,
    UiSection,
  }
}
</script>