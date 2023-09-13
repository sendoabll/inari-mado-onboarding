<template>
  <div class="w-full px-8">
    <UiCodeblock>
      Install the VPN to be able to connect to the different customers.<br>
      Please follow the next instructions:<br>
      <br>
      <ol>
        <li>
          Install Wireguard: sudo apt install wireguard resolvconf.

        </li>
        <li>
          Go to your client minami URL:
          <ul>
            <li>
              https://convex-minami.inari.io/
            </li>
            <li>
              https://conduit-minami.inari.io/
            </li>
            <li>
              https://redray-minami.inari.io/
            </li>
            <li>
              https://beat-minami.inari.io/
            </li>
          </ul>
        </li>
        <li>
          Add a Device with your desired name, e.g. Convex or Redray or Conduit or Beat.
        </li>
        <li>
          Download the WireGuard.conf file, and place it on /etc/wireguard (e.g. mv WireGuard.conf /etc/wireguard/WireGuard.conf
        </li>
        <li>
          To connect to Wireguard and use the VPN: wg-quick up WireGuard
        </li>
        <li>
          To disconnect: wg-quick down WireGuard<br>
        </li>
      </ol>
      <br>
      To check that it is correct, please connect to Beat VPN and then click on Send button.
    </UiCodeblock>
    <UiButton @click="onsubmit" class="m-2">
      Send
    </UiButton>
    
    <div class="flex">
      <img v-if="resultImagePath" :src="resultImagePath" width="100" class="m-2"/>
      <span v-if="resultMessage" class="m-2">
        {{ resultMessage }}
      </span>
    </div>
  </div>
</template>

<script>
import UiCodeblock from '@/components/Ui/Codeblock.vue'
import UiButton from '@/components/Ui/Button.vue'

import OkImage from '@/assets/images/OK.png'
import KoImage from '@/assets/images/KO.png'

export default {
  name: 'SaihokenPageContentSection',

  components: {
    UiCodeblock,
    UiButton,
  },

  data() {
    return {
      resultImagePath: '',
      resultMessage: '',
    }
  },

  methods: {
    onsubmit() {
      const random = Math.floor(Math.random() * 100);
      if (random % 2 == 0) {
        this.resultImagePath = OkImage
        this.resultMessage = "\
        Good job! You rock! \
This exercise is estimated in X minutes and you have spent X; so you won X horse-points\
        "
      } else {
        this.resultImagePath = KoImage
        this.resultMessage = "\
        Ops! Something is wrong! \
        Don't give up and try again"
      }
    }
  }
}
</script>