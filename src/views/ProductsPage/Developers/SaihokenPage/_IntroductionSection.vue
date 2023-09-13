<template>
  <div class="w-full px-8">
    <span>
      Nombre de pod muy elegante para unos puteros, cuyo estilo de vida es un ticket de ida para la diabetes y no se merecen el aire que respiran. Por suerte, tenemos unos giga-chads en el equipo que arrasan. Atila hubiera sido su mayordomo.
      <br><br>
      This list of exercises if for new incoming members to the backend of Matsuri.<br>
      Each exercise will be evaluated with passng the test and the time that the use takes to do it.<br>
      Every time the user select the exercise the time will start counting, and the platform will take into account the exercise finished with the fewer time.
    </span>
  </div>
</template>

<script>
import UiSection from '@/components/Ui/Section.vue'
import UiCard from '@/components/Ui/Card.vue'
import UiCodeblock from '@/components/Ui/Codeblock.vue'

export default {
  name: 'SaihokenPageContentSection',

  components: {
    UiSection,
    UiCard,
    UiCodeblock,
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