<template>
  <div class='w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
    <div class='max-w-md mx-auto'>
      <img class="w-full max-w-xs max-h-80 mx-auto" :src="image" />

      <div class='p-4 sm:p-6'>
        <p class='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{{ title }}</p>
        <div v-if="subtitle" class='flex flex-row'>
          <p class='text-[17px] font-bold text-[#0FB478]'>{{ subtitle }}</p>
        </div>
        <p class='text-[#7C7C80] font-[15px] mt-6'>{{ description }}</p>


        <UiButton 
          class="w-full mt-4"
          @click="$emit('click-cta')">
          {{ cta }}
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/Ui/Button.vue'

export default {
  name: 'UiCard',

  components: {
    UiButton
  },

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
