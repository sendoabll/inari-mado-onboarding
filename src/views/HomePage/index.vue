<template>
  <MainLayout>
    <HeroSection />

    <VideoSection />

    <FaqSection />
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/App/MainLayout.vue';
import HeroSection from '@/views/HomePage/_HeroSection.vue'
import VideoSection from '@/views/HomePage/_VideoSection.vue'
import FaqSection from '@/views/HomePage/_FaqSection.vue'

export default {
  name: 'HomePage',

  components: {
    MainLayout,
    HeroSection,
    VideoSection,
    FaqSection,
  },
}
</script>
