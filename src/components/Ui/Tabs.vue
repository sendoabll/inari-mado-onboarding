<template>
  <div
    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
    <ul class="flex flex-wrap -mb-px">
      <li class="mr-2 cursor-pointer" v-for="(tab, index) in tabs">
        <div @click="onClickTab(index)" :class="{
          'border-transparent': selected !== index,
          'border-blue-500 text-blue-500': selected === index
        }"
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300">
          {{ tab.title }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UiTabs',

  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },

  emits: {
    'change-tab': null
  },

  data () {
    return {
      selected: 0
    }
  },

  methods: {
    onClickTab (index) {
      this.selected = index
      this.$emit('change-tab', index)
    }
  }
}
</script>