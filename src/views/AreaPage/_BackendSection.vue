<template>
  <UiSection>
    <UiCard class="col-span-4 gap-4 m-4" v-for="card in cards" :title="card.title" :subtitle="card.subtitle"
      :description="card.description" :image="card.image" @click-cta="card.onClickCTA" />
  </UiSection>
</template>

<script>
import UiSection from '@/components/Ui/Section.vue'
import UiCard from '@/components/Ui/Card.vue'
import OrcaImage from '@/assets/images/orca.png'
import SaihokenImage from '@/assets/images/saihoken.png'
import KitsuneImage from '@/assets/images/kitsune.png'
import MatsuriImage from '@/assets/images/matsuri.png'

export default {
  name: 'ProductsPageCardSection',

  components: {
    UiSection,
    UiCard,
  },

  props: {
    id: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      cards: [
        { 
          title: 'Matsuri', 
          image: MatsuriImage,
          description: 'Long lorem ipsum', 
          onClickCTA: () => this.$router.push({ name: 'area.project', params: { id: this.id, project: 'matsuri' } }) 
        },
        { 
          title: 'Orca', 
          image: OrcaImage,
          description: 'Long lorem ipsum', 
          onClickCTA: () => this.$router.push({ name: 'area.project', params: { id: this.id, project: 'orca' } }) 
        },
        { 
          title: 'Saihoken', 
          image: SaihokenImage,
          description: 'Long lorem ipsum', 
          onClickCTA: () => this.$router.push({ name: 'area.project', params: { id: this.id, project: 'saihoken' } }) 
        },
        { 
          title: 'Kitsune', 
          image: KitsuneImage,
          description: 'Long lorem ipsum', 
          onClickCTA: () => this.$router.push({ name: 'area.project', params: { id: this.id, project: 'kitsune' } }) 
        },
      ],
    }
  },
}
</script>
