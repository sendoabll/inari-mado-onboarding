<template>
  <MainLayout>
    <UiGoBack route="area" :params="{ id }" />
    
    <div class="flex mt-8">
      <StepsSection class="w-3/12" @change-step="onChangeTab" />

      <IntroductionSection class="w-9/12" v-if="step === 0" />
      <InstallSlack class="w-9/12" v-if="step === 1" />
      <InstallTeams class="w-9/12" v-if="step === 2" />
      <CreateGithubAccount class="w-9/12" v-if="step === 3" />
      <InstallPycharm class="w-9/12" v-if="step === 4" />
      <InstallGitKraken class="w-9/12" v-if="step === 5" />
      <InstallPoetry class="w-9/12" v-if="step === 6" />
      <InstallVPN class="w-9/12" v-if="step === 7" />
      <InstallDocker class="w-9/12" v-if="step === 8" />
      <AccessConfluenceSection class="w-9/12" v-if="step === 9" />
      <AccessJIRA class="w-9/12" v-if="step === 10" />
      <CloneRepository class="w-9/12" v-if="step === 11" />
      <AddAttributeDomain class="w-9/12" v-if="step === 12" />
      <AddAttributeEvent class="w-9/12" v-if="step === 13" />
      <AddAttributeModel class="w-9/12" v-if="step === 14" />
      <AddAttributeReadModel class="w-9/12" v-if="step === 15" />
      <AddAttributeCommandHandler class="w-9/12" v-if="step === 16" />
      <AddAttributeMutation class="w-9/12" v-if="step === 17" />
      <MemeTime class="w-9/12" v-if="step === 18" />
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/App/MainLayout.vue';
import StepsSection from '@/views/ProductsPage/Developers/SaihokenPage/_StepsSection.vue';
import IntroductionSection from '@/views/ProductsPage/Developers/SaihokenPage/_IntroductionSection.vue';
import UiGoBack from '@/components/Ui/GoBack.vue'
import AccessConfluenceSection from '@/views/ProductsPage/Developers/SaihokenPage/_AccessConfluence.vue';
import AccessJIRA from '@/views/ProductsPage/Developers/SaihokenPage/_AccessJIRA.vue';
import AddAttributeCommandHandler from '@/views/ProductsPage/Developers/SaihokenPage/_AddAttributeCommandHandler.vue';
import AddAttributeDomain from '@/views/ProductsPage/Developers/SaihokenPage/_AddAttributeDomain.vue';
import AddAttributeEvent from '@/views/ProductsPage/Developers/SaihokenPage/_AddAttributeEvent.vue';
import AddAttributeModel from '@/views/ProductsPage/Developers/SaihokenPage/_AddAttributeModel.vue';
import AddAttributeMutation from '@/views/ProductsPage/Developers/SaihokenPage/_AddAttributeMutation.vue';
import AddAttributeReadModel from '@/views/ProductsPage/Developers/SaihokenPage/_AddAttributeReadModel.vue';
import CloneRepository from '@/views/ProductsPage/Developers/SaihokenPage/_CloneRepository.vue';
import InstallDocker from '@/views/ProductsPage/Developers/SaihokenPage/_InstallDocker.vue';
import InstallGitKraken from '@/views/ProductsPage/Developers/SaihokenPage/_InstallGitKraken.vue';
import InstallPoetry from '@/views/ProductsPage/Developers/SaihokenPage/_InstallPoetry.vue';
import InstallPycharm from '@/views/ProductsPage/Developers/SaihokenPage/_InstallPycharm.vue';
import InstallSlack from '@/views/ProductsPage/Developers/SaihokenPage/_InstallSlack.vue';
import InstallTeams from '@/views/ProductsPage/Developers/SaihokenPage/_InstallTeams.vue';
import InstallVPN from '@/views/ProductsPage/Developers/SaihokenPage/_InstallVPN.vue';
import MemeTime from '@/views/ProductsPage/Developers/SaihokenPage/_MemeTime.vue';
import CreateGithubAccount from '@/views/ProductsPage/Developers/SaihokenPage/_CreateGithubAccount.vue';

export default {
  name: 'ProductsPage',

  components: {
    MainLayout,
    StepsSection,
    IntroductionSection,
    UiGoBack,
    AccessConfluenceSection,
    AccessJIRA,
    AddAttributeCommandHandler,
    AddAttributeDomain,
    AddAttributeEvent,
    AddAttributeModel,
    AddAttributeMutation,
    AddAttributeReadModel,
    CloneRepository,
    InstallDocker,
    InstallGitKraken,
    InstallPoetry,
    InstallPycharm,
    InstallSlack,
    InstallTeams,
    InstallVPN,
    MemeTime,
    CreateGithubAccount,
  },

  props: {
    id: {
      type: String,
      required: true
    },
  },

  data () {
    return {
      step: 0
    }
  },

  methods: {
    onChangeTab (index) {
      this.step = index
    }
  }
}
</script>
