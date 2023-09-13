<template>
  <nav class="relative z-10 w-full text-neutral-800">
    <div class="flex max-w-screen-xl px-8 mx-auto items-center justify-between flex-row py-4">
      <div class="flex items-center space-x-4">
        <InariLogo class="w-40 cursor-pointer" @click="$router.push({ name: 'root' })" />
      </div>
      <div @mouseover="dropdownNavbar = true" @mouseleave="dropdownNavbar = false">
        <div class="relative flex items-center space-x-3">
          <div class="px-4">
            John Doe
          </div>

          <AccountIcon class="cursor-pointer" />
        </div>

        <div v-if="dropdownNavbar" class="absolute min-w-40 px-5 py-3 bg-white rounded-lg shadow">
          <div class="space-y-3">
            <UiNavLink url="areas" name="Mis datos" class="flex items-center">
              <FileDocumentIcon class="mr-3" />
            </UiNavLink>

            <UiNavLink url="areas" name="Mis ejercicios" class="flex items-center">
              <FormatListChecksIcon class="mr-3" />
            </UiNavLink>

            <UiNavLink url="areas" name="Ranking" class="flex items-center">
              <MedalIcon class="mr-3" />
            </UiNavLink>

            <hr class="border-gray-700">

            <UiNavLink url="areas" name="Logout" class="text-red-600 flex items-center">
              <LogoutIcon class="mr-3" />
            </UiNavLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import InariLogo from '@/assets/images/inari.vue';
import AccountIcon from 'vue-material-design-icons/Account.vue';
import FileDocumentIcon from 'vue-material-design-icons/FileDocument.vue';
import FormatListChecksIcon from 'vue-material-design-icons/FormatListChecks.vue';
import MedalIcon from 'vue-material-design-icons/Medal.vue';
import LogoutIcon from 'vue-material-design-icons/Logout.vue';

import UiButton from '@/components/Ui/Button.vue';
import UiNavLink from '@/components/Ui/NavLink.vue';

export default {
  name: 'AppNavbar',

  components: {
    AccountIcon,
    FileDocumentIcon,
    FormatListChecksIcon,
    MedalIcon,
    LogoutIcon,
    InariLogo,
    UiButton,
    UiNavLink,
  },

  data() {
    return {
      dropdownNavbar: false,
    }
  },
}
</script>