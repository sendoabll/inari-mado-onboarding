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
        { title: '2. Install Slack' },
        { title: '3. Install teams ' },
        { title: '4. Create github account' },
        { title: '5. Install Pycharm ' },
        { title: '6. Install gitkraken' },
        { title: '7. Install Poetry' },
        { title: '8. Install VPN' },
        { title: '9. Install docker' },
        { title: '10. Access confluence page' },
        { title: '11. Access JIRA project' },
        { title: '12. Clone repository' },
        { title: '13. Add attribute to domain' },
        { title: '14. Add attribute to event' },
        { title: '15. Add attribute to model' },
        { title: '16. Add attribute to read model' },
        { title: '17. Add attribute to command handler' },
        { title: '18. Add attribute to mutation' },
        { title: '19. Meme time' },
      ],
    }
  },

  emits: {
    'change-step': null
  },
}
</script>