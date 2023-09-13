<template>
  <UiSection>
    <UiCard class="col-span-6 m-4" v-for="card in cards" :title="card.title" :subtitle="card.subtitle"
      :description="card.description" @click-cta="card.onClickCTA" />
  </UiSection>
</template>

<script>
import UiSection from '@/components/Ui/Section.vue'
import UiCard from '@/components/Ui/Card.vue'

export default {
  name: 'ProductsPageCardSection',

  components: {
    UiSection,
    UiCard,
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