<template lang="html">
  <div class="centerx">
    <vs-tooltip text="Tooltip default delay">
      <vs-button vs-type="gradient">Default Color</vs-button>
    </vs-tooltip>
    <vs-tooltip color="primary" text="Tooltip default delay">
      <vs-button vs-type="border">Color primary</vs-button>
    </vs-tooltip>
    <vs-tooltip color="success" text="Tooltip default delay">
      <vs-button vs-color="success" vs-type="border">Color success</vs-button>
    </vs-tooltip>
    <vs-tooltip color="danger" text="Tooltip default delay">
      <vs-button vs-color="danger" vs-type="border">Color danger</vs-button>
    </vs-tooltip>
    <vs-tooltip color="warning" text="Tooltip default delay">
      <vs-button vs-color="warning" vs-type="border">Color warning</vs-button>
    </vs-tooltip>
    <vs-tooltip color="dark" text="Tooltip default delay">
      <vs-button vs-color="dark" vs-type="border">Color dark</vs-button>
    </vs-tooltip>
    <vs-tooltip color="rgb(42, 207, 133)" text="Tooltip default delay">
      <vs-button vs-color="rgb(42, 207, 133)" vs-type="border">Color RGB</vs-button>
    </vs-tooltip>
    <vs-tooltip color="#4a0d6b" text="Tooltip default delay">
      <vs-button vs-color="#4a0d6b" vs-type="border">Color HEX</vs-button>
    </vs-tooltip>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
