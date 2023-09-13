<template>
  <ol class="relative text-gray-500 border-l border-gray-200">
    <li @click="onClickStep(index)" class="mb-10 ml-6 cursor-pointer" v-for="(step, index) in steps">
      <span class="absolute flex items-center justify-center w-8 h-8 rounded-full -left-2 ring-2" :class="{
        'bg-transparent text-gray-500': selected !== index,
        'bg-blue-100 text-blue-500': selected === index
      }">
        <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          viewBox="0 0 20 16">
          <path
            d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
        </svg>
      </span>
      <h3 class="font-medium leading-tight">{{ step.title }}</h3>
      <p class="text-sm">{{ step.description }}</p>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'UiSteps',

  props: {
    steps: {
      type: Array,
      default: () => []
    }
  },

  emits: {
    'change-step': null
  },

  data () {
    return {
      selected: 0
    }
  },

  methods: {
    onClickStep (index) {
      this.selected = index
      this.$emit('change-step', index)
    }
  }
}
</script>