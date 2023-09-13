<template>
  <div class="flex-col">
    <div class="flex items-center mb-8 cursor-pointer" @click="$router.push({ name: 'products' })">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8" viewBox="0 0 512 512">
        <title>ionicons-v5-a</title>
        <polyline points="244 400 100 256 244 112"
          style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
        <line x1="120" y1="256" x2="412" y2="256"
          style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      </svg>
      <span class="ml-4 font-bold text-xl">Go Back</span>
    </div>
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