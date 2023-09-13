<template>
  <div class="w-full px-8">
    <UiCodeblock class="m-2">
      Open in an internet explorer, the page of confluence of your pod.<br>
      Once you get it, please copy it in the next texfield to check it:<br>
    </UiCodeblock>
    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" v-model="model"
    >

    <UiButton  @click="onsubmit" class="m-2">
      Send
    </UiButton>
    <img v-if="resultImagePath" :src="resultImagePath" width="100" class="m-2"/>
    <span v-if="resultMessage" class="m-2">
      {{ resultMessage }}
    </span>
    

  </div>
</template>

<script>
import UiCodeblock from '@/components/Ui/Codeblock.vue'
import UiButton from '@/components/Ui/Button.vue'

import OkImage from '@/assets/images/OK.png'
import KoImage from '@/assets/images/KO.png'

export default {
  name: 'SaihokenPageContentSection',

  components: {
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