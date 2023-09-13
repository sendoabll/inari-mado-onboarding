<template>
  <div class="flex-col">    
    <UiSteps :steps="steps" class="px-8" @change-step="$emit('change-step', $event)" />
  </div>
</template>

<script>
import UiSteps from '@/components/Ui/Steps.vue'

export default {
  name: 'SaihokenPageStepsSection',

  components: {
    UiSteps,
  },

  data() {
    return {
      steps: [
        { title: '1. Introduction' },
        { title: '2. Environments and Users' },
        { title: '3. Preparing the backend ' },
        { title: '4. Preparing the frontend ' },
        { title: '5. E2E Testing (Himura)' },
      ],
    }
  },

  emits: {
    'change-step': null
  },
}
</script>