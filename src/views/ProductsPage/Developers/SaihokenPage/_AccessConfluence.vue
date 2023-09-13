<template>
  <div class="w-full px-8">
    <UiCodeblock class="m-2">
      Open in an internet explorer, the page of confluence of your pod.<br>
      Once you get it, please copy it in the next texfield to check it:<br>
    </UiCodeblock>
    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" v-model="model"
    >

    <UiButton class="m-2">
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
      model: "",
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