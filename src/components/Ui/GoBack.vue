<template>
  <div class="flex items-center mb-8 cursor-pointer" @click="$router.push({ name: route, params: { ...params  } })">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-8" viewBox="0 0 512 512">
      <polyline points="244 400 100 256 244 112"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="120" y1="256" x2="412" y2="256"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>
    
    <span class="ml-4 font-bold text-xl">Go Back</span>
  </div>
</template>

<script>
export default {
  name: 'UiGoBack',

  props: {
    route: {
      type: String,
      required: true
    }, 
    params: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>