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
    <UiButton @click="$router.push({ name: 'products' })" class="m-2">
      Send
    </UiButton>
  </div>
</template>

<script>
import UiSection from '@/components/Ui/Section.vue'
import UiCard from '@/components/Ui/Card.vue'
import UiCodeblock from '@/components/Ui/Codeblock.vue'
import UiButton from '@/components/Ui/Button.vue'

export default {
  name: 'SaihokenPageContentSection',

  components: {
    UiSection,
    UiCard,
    UiCodeblock,
    UiButton,
  },

  data() {
    return {
      cards: [
        { title: 'Saihoken', subtitle: 'Lorem ipsum', description: 'Long lorem ipsum', onClickCTA: () => this.$router.push({ name: 'products.developers.saihoken' }) },
        { title: 'Orca', subtitle: 'Lorem ipsum', description: 'Long lorem ipsum', onClickCTA: () => this.$router.push({ name: 'products.developers.saihoken' }) },
        { title: 'Kitsune', subtitle: 'Lorem ipsum', description: 'Long lorem ipsum', onClickCTA: () => this.$router.push({ name: 'products.developers.saihoken' }) },
        { title: 'Test', subtitle: 'Lorem ipsum', description: 'Long lorem ipsum', onClickCTA: () => this.$router.push({ name: 'products.developers.saihoken' }) },
      ],
    }
  },
}
</script>