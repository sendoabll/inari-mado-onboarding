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
        { title: 'HR' },
        { title: 'Operations' },
        { title: 'Product' },
        { title: 'Sales' },
        { title: 'Marketing' },
        { title: 'Backend' },
        { title: 'Frontend' },
        { title: 'Data' },
        { title: 'DevOps' },
        { title: 'QA' },
        { title: 'Project Management' },
        { title: 'Service Desk' },
      ],
    }
  },

  emits: {
    'change-step': null
  },
}
</script>