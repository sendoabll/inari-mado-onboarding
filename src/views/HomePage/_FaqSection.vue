<template>
  <UiSection>
    <div class="col-span-12 md:col-span-6">
      <div class="w-full">
        <img src="@/assets/images/faq.webp" class="w-full h-full" alt="" />
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 px-4 sm:px-6 mt-8">
      <UiSectionHeader title="Support" subtitle="Frequently asked questions" />

      <ul class="shadow-box">
        <UiAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
      </ul>
    </div>
  </UiSection>
</template>

<script>
import UiSectionHeader from '@/components/Ui/SectionHeader.vue'
import UiSection from '@/components/Ui/Section.vue'
import UiAccordion from '@/components/Ui/Accordion.vue'

export default {
  name: 'HomePageFaqSection',

  components: {
    UiSection,
    UiSectionHeader,
    UiAccordion,
  },

  data() {
    return {
      accordions: [
        {
          title: 'Why should I choose NEFA?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: 'How secure is NEFA?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: 'Do I have to buy a whole Bitcoin?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: 'How do I actually buy Bitcoin?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
      ],
    }
  },
}
</script>