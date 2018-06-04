<template lang="html">
  <div class="centerx">
    <vs-button v-tooltip="{text:'Default Color'}">Default Color</vs-button>
    <vs-button  vs-type="primary-border" v-tooltip="{text:'Color primary',color:'primary'}">Color primary</vs-button>
    <vs-button vs-type="success-border" v-tooltip="{text:'Color success',color:'success'}">Color success</vs-button>
    <vs-button vs-type="danger-border" v-tooltip="{text:'Color danger',color:'danger'}">Color danger</vs-button>
    <vs-button vs-type="warning-border" v-tooltip="{text:'Color warning',color:'warning'}">Color warning</vs-button>
    <vs-button vs-type="dark-border" v-tooltip="{text:'Color dark',color:'dark'}">Color dark</vs-button>
    <vs-button vs-type="success-gradient" v-tooltip="{text:'Color RGB',color:'rgb(42, 207, 133)'}">Color RGB</vs-button>
    <vs-button vs-type="danger-gradient" v-tooltip="{text:'Color HEX',color:'rgb(74, 13, 107)'}">Color HEX</vs-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
