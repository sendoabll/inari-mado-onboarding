<template>
  <UiSectionHeader title="Backoffice" />

  <div class="grid grid-cols-3 gap-2">
    <div class="m-4 bg-white shadow rounded flex items-center px-6 py-4 cursor-pointer hover:shadow-xl" v-for="card in cards.backoffice" @click="goToArea(card.id)">
      <component class="shadow rounded-full p-4 w-8" :size="24" :is="card.icon" />
      <div class="ml-8 flex-col">
        <div class="mb-2 font-bold">
          {{ card.title }}
        </div>
        <div class="text-xs">
          {{ card.description }}
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 mb-2"></div>
  
  <UiSectionHeader title="Tech" />

  <div class="grid grid-cols-3 gap-2">
    <div class="m-4 bg-white shadow rounded flex items-center px-6 py-4 cursor-pointer hover:shadow-xl" v-for="card in cards.tech" @click="goToArea(card.id)">
      <component class="shadow rounded-full p-4 w-8" :size="24" :is="card.icon" />
      <div class="ml-8 flex-col">
        <div class="mb-2 font-bold">
          {{ card.title }}
        </div>
        <div class="text-xs">
          {{ card.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue'
import UiSectionHeader from '@/components/Ui/SectionHeader.vue'

import HumanCapacityIncreaseIcon from 'vue-material-design-icons/HumanCapacityIncrease.vue';
import AccountTieHatIcon from 'vue-material-design-icons/AccountTieHat.vue';
import HandCoinIcon from 'vue-material-design-icons/HandCoin.vue';
import CashIcon from 'vue-material-design-icons/Cash.vue';
import AccountEditIcon from 'vue-material-design-icons/AccountEdit.vue';
import ToolsIcon from 'vue-material-design-icons/Tools.vue';
import XMLIcon from 'vue-material-design-icons/Xml.vue';
import DataBaseOutlineIcon from 'vue-material-design-icons/DatabaseOutline.vue'
import AllInclusiveIcon from 'vue-material-design-icons/AllInclusive.vue'
import CommentCheckIcon from 'vue-material-design-icons/CommentCheck.vue'
import AccountGroupIcon from 'vue-material-design-icons/AccountGroup.vue'
import HeadsetIcon from 'vue-material-design-icons/Headset.vue'

export default {
  name: 'AreasPageAreaSection',

  components: {
    UiSectionHeader
  },

  data() {
    return {
      cards: {
        backoffice: [
        {
          id: 'hr',
          title: 'Human Resources',
          icon: markRaw(HumanCapacityIncreaseIcon),
          description: "If you're ever feeling lost, just remember that there's always someone in HR who can help you find your way to the exit."
        },
        {
          id: 'operations',
          title: 'Operations',
          icon: markRaw(AccountTieHatIcon),
          description: "If the operations department isn't working, nothing else is."
        },
        {
          id: 'product',
          title: 'Product',
          icon: markRaw(HandCoinIcon),
          description: "The product department is where dreams are made...and then crushed."
        },
        {
          id: 'sales',
          title: 'Sales',
          icon: markRaw(CashIcon),
          description: "If you're ever feeling lost, just remember that there's always someone in sales who can help you find your way to the client's wallet."
        },
        {
          id: 'marketing',
          title: 'Marketing',
          icon: markRaw(AccountEditIcon),
          description: "If you're ever feeling lost, just remember that there's always someone in marketing who can help you find your way to the nearest bar."
        },
        ],
        tech: [
        {
          id: 'backend',
          title: 'Back',
          icon: markRaw(ToolsIcon),
          description: "A back-end is someone who can write code that even they don't understand."
        },
        {
          id: 'frontend',
          title: 'Front',
          icon: markRaw(XMLIcon),
          description: "Frontend's Code is a lot like Spanish: No one knows how to use semicolons properly."
        },
        {
          id: 'data',
          title: 'Data',
          icon: markRaw(DataBaseOutlineIcon),
          description: "The data department is like a library. It's full of information, but it can be hard to find what you're looking for."
        },
        {
          id: 'devops',
          title: 'Devops',
          icon: markRaw(AllInclusiveIcon),
          description: "Why would a DevOps go to Mars? - To Terraform it"
        },
        {
          id: 'qa',
          title: 'QA',
          icon: markRaw(CommentCheckIcon),
          description: "If QA is like a torture chamber, then the QA engineer is the torturer. They're the ones who find all the bugs and make the developers' lives miserable."
        },
        {
          id: 'project-management',
          title: 'Project Management',
          icon: markRaw(AccountGroupIcon),
          description: "Project management is a department where no one is ever on time."
        },
        {
          id: 'service-desk',
          title: 'Service Desk',
          icon: markRaw(HeadsetIcon),
          description: "If you don't know what to do with your life, reboot or format"
        },
      ],
    }
    }
  },

  methods: {
    goToArea (id) {
      this.$router.push({ name: 'area', params: { id } })
    }
  }
}
</script>