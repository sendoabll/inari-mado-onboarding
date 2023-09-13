<template>
  <UiSection>
    <div class="col-span-12 md:col-span-6 mt-12 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
      <UiSectionHeader title="Welcome!" subtitle="Who are we?" />

      <p>
        Established in 2017 in Barcelona by experienced reinsurance industry professionals, inari develops the latest
        technology for the insurance and reinsurance industry.
      </p>

      <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
        <UiButton class="w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
          @click="$router.push({ name: 'areas' })">
          Get Started
        </UiButton>
      </div>
    </div>

    <div class="mt-4 sm:flex col-span-12 md:col-span-6 items-center">
      <img src="@/assets/images/hero.jpg" class="w-full h-full" alt="" />
    </div>
  </UiSection>
</template>

<script>
import UiSection from '@/components/Ui/Section.vue'
import UiButton from '@/components/Ui/Button.vue'
import UiSectionHeader from '@/components/Ui/SectionHeader.vue'

export default {
  name: 'HomePageHeroSection',

  components: {
    UiSectionHeader,
    UiSection,
    UiButton,
  }
}
</script>