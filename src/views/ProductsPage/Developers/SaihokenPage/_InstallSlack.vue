<template>
  <div class="w-full px-8">
    <UiCodeblock>
      Install Slack on your laptop and once installed click on send to check.<br>
      The platform will check automatically that slack is installed in your laptop once you press Send button.
    </UiCodeblock>
    <UiButton @click="$router.push({ name: 'products' })" class="m-2">
      Send
    </UiButton>
  </div>
</template>

<script>
import UiSection from '@/components/Ui/Section.vue'
import UiCard from '@/components/Ui/Card.vue'
import UiCodeblock from '@/components/Ui/Codeblock.vue'
import UiButton from '@/components/Ui/Button.vue'

export default {
  name: 'SaihokenPageContentSection',

  components: {
    UiSection,
    UiCard,
    UiCodeblock,
    UiButton,
  },

  data() {
    return {
      cards: [
        { title: 'Saihoken', subtitle: 'Lorem ipsum', description: 'Long lorem ipsum', onClickCTA: () => this.$router.push({ name: 'products.developers.saihoken' }) },
        { title: 'Orca', subtitle: 'Lorem ipsum', description: 'Long lorem ipsum', onClickCTA: () => this.$router.push({ name: 'products.developers.saihoken' }) },
        { title: 'Kitsune', subtitle: 'Lorem ipsum', description: 'Long lorem ipsum', onClickCTA: () => this.$router.push({ name: 'products.developers.saihoken' }) },
        { title: 'Test', subtitle: 'Lorem ipsum', description: 'Long lorem ipsum', onClickCTA: () => this.$router.push({ name: 'products.developers.saihoken' }) },
      ],
    }
  },
}
</script>