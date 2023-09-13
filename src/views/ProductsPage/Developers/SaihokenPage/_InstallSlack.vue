<template>
  <div class="w-full px-8">
    <UiCodeblock>
      Install Slack on your laptop and once installed click on send to check.<br>
      The platform will check automatically that slack is installed in your laptop once you press Send button.
    </UiCodeblock>
    <UiButton @click="onsubmit" class="m-2">
      Send
    </UiButton>
    <img v-if="resultImagePath" :src="resultImagePath" width="100" class="m-2"/>
    <span v-if="resultMessage" class="m-2">
      {{ resultMessage }}
    </span>
  </div>
</template>

<script>
import UiSection from '@/components/Ui/Section.vue'
import UiCard from '@/components/Ui/Card.vue'
import UiCodeblock from '@/components/Ui/Codeblock.vue'
import UiButton from '@/components/Ui/Button.vue'

import OkImage from '@/assets/images/OK.png'
import KoImage from '@/assets/images/KO.png'

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
      resultImagePath: '',
      resultMessage: '',
    }
  },

  methods: {
    onsubmit() {
      const random = Math.floor(Math.random() * 100);
      if (random % 2 == 0) {
        this.resultImagePath = OkImage
        this.resultMessage = "\
        Good job! You rock! \
This exercise is estimated in X minutes and you have spent X; so you won X horse-points\
        "
      } else {
        this.resultImagePath = KoImage
        this.resultMessage = "\
        Ops! Something is wrong! \
        Don't give up and try again"
      }
    }
  }
}
</script>