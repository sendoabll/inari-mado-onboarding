<template>
  <div class="w-full max-w-md mx-auto bg-white rounded-3xl shadow hover:shadow-xl overflow-hidden cursor-pointer"
  @click="$emit('click-cta')">
    <div class="max-w-md mx-auto h-full flex flex-col">
      <img class="w-full w-48 max-h-48 mx-auto px-8" :src="image" />

      <div class="p-4 sm:p-6 flex-1 flex-col h-full">
        <div class="flex-1">
          <p class="font-bold text-gray-700 text-[22px] leading-7 mb-1 text-center">{{ title }}</p>
          <div v-if="subtitle" class="flex flex-row">
            <p class="text-[17px] font-bold text-[#0FB478]">{{ subtitle }}</p>
          </div>
          <p class="text-[#7C7C80] text-sm mt-6">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiCard',

  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    cta: {
      type: String,
      default: 'View in detail',
    },
  },

  emits: {
    'click-cta': null
  },
}
</script>
