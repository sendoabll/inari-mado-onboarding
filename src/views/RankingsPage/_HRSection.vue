<template>
  <table class="min-w-full h-fit">
    <thead class="bg-white border-b">
      <tr>
        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left" />
        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Name
        </th>
        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Point
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-gray-100 border-b">
        <img class="mx-4 flex items-center w-12" :src="GoldImage" />
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">John Doe</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">455677</td>
      </tr>
      <tr class="bg-white border-b">
        <img class="mx-4 flex items-center w-12" :src="SilverImage" />
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Pepa Estabien</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">322900</td>
      </tr>
      <tr class="bg-gray-100 border-b">
        <img class="mx-4 flex items-center w-12" :src="BronzeImage" />
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Andrea Ramos</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">155009</td>
      </tr>
      <tr class="bg-white border-b">
        <img class="mx-px flex items-center w-20" :src="PooImage" />
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Jordi Pullol</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">2000</td>
      </tr>        
      <tr class="bg-gray-100 border-b">
        <img class="mx-px flex items-center w-20" :src="PooImage" />
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Evan You</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">2000</td>
      </tr>        
      <tr class="bg-white border-b">
        <img class="mx-px flex items-center w-20" :src="PooImage" />
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Sara Drasner</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">2000</td>
      </tr>        

    </tbody>
  </table>
</template>

<script>
import GoldImage from '@/assets/images/gold.png'
import SilverImage from '@/assets/images/silver.png'
import BronzeImage from '@/assets/images/bronze.png'
import PooImage from '@/assets/images/poo.png'

export default {
  name: 'RankingsPageHRSection',

  data () {
    return {
      GoldImage,
      SilverImage,
      BronzeImage,
      PooImage,
    }
  }
}
</script>
