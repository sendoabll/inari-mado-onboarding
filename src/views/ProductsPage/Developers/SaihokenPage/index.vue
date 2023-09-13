<template>
  <MainLayout>
    <div class="flex mt-8">
      <StepsSection class="w-3/12" @change-step="onChangeTab" />

      <IntroductionSection class="w-9/12" v-if="step === 0" />
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/App/MainLayout.vue';
import StepsSection from '@/views/ProductsPage/Developers/SaihokenPage/_StepsSection.vue';
import IntroductionSection from '@/views/ProductsPage/Developers/SaihokenPage/_IntroductionSection.vue';

export default {
  name: 'ProductsPage',

  components: {
    MainLayout,
    StepsSection,
    IntroductionSection,
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
