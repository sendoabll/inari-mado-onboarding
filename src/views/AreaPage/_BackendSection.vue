<template>
  <UiSection>
    <UiCard class="col-span-3 my-4" v-for="card in cards" :title="card.title" :subtitle="card.subtitle"
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
          // description: 'Nombre de pod muy elegante para unos puteros, cuyo estilo de vida es un ticket de ida para la diabetes y no se merecen el aire que respiran. Por suerte, tenemos unos giga-chads en el equipo que arrasan. Atila hubiera sido su mayordomo.', 
          onClickCTA: () => this.$router.push({ name: 'area.project', params: { id: this.id, project: 'matsuri' } }) 
        },
        { 
          title: 'Orca', 
          image: OrcaImage,
          // description: 'Nombre de pod inspirado en un maravilloso animal asesino, a pesar de la peli de liberad a Willy. En ocasiones, más a menudo de lo que deseamos, nos gustaría ver al cliente en una bañera gigante llena de orcas. De este modo, tendrían motivo para sufrir de su trastorno de múltiple de personalidad, combinado con estrés postraumático. Para su fortuna, el talento de Inari invertido en Orca sobrepasa todos los logros de Oppenheimer.', 
          onClickCTA: () => this.$router.push({ name: 'area.project', params: { id: this.id, project: 'orca' } }) 
        },
        { 
          title: 'Saihoken', 
          image: SaihokenImage,
          // description: 'Piensa en lo más complicado del mundo. Añádele, una panda de retardados en una isla donde la recombinación genética es inexistente hasta el punto de que el presidente es primo del repartidor de Amazon. En nuestra próxima visita expandiremos la fauna marina, soltando tiburones de manera que forme una prisión natural para ser testigos del declive inevitable. Ignoramos qué hicieron bien en otra vida para merecer el titánico esfuerzo y destreza de Inari. El karma es una bitch, pero nos quedamos con los lazos de unión internos. HASTA LA VICTORIA!!', 
          onClickCTA: () => this.$router.push({ name: 'area.project', params: { id: this.id, project: 'saihoken' } }) 
        },
        { 
          title: 'Kitsune', 
          image: KitsuneImage,
          // description: 'Si habéis visto la película de freaks, sabréis que los clientes de la fuente primigenia de Inari podrían haber salido de un circo, o un zoo. A pesar de nuestra perfección y precisión, cada vez que un pensamiento de los hiperventilados toma forma en su conciencia y se emite un sonido a modo de frases, el IQ colectivo del planeta baja dos puntos. Por fortuna, la maestría de Inari compensa toda fuerza opuesta, revirtiéndola, cuyo sumatorio de fuerzas rompe la barrera del sonido.', 
          onClickCTA: () => this.$router.push({ name: 'area.project', params: { id: this.id, project: 'kitsune' } }) 
        },
      ],
    }
  },
}
</script>
