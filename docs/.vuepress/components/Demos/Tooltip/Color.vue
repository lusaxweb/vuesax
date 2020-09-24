<template lang="html">
  <div class="centerx examplex">
    <vs-tooltip text="Tooltip default delay">
      <vs-button type="gradient">Default Color</vs-button>
    </vs-tooltip>
    <vs-tooltip color="primary" text="Tooltip default delay">
      <vs-button type="border">Color primary</vs-button>
    </vs-tooltip>
    <vs-tooltip color="success" text="Tooltip default delay">
      <vs-button color="success" type="border">Color success</vs-button>
    </vs-tooltip>
    <vs-tooltip color="danger" text="Tooltip default delay">
      <vs-button color="danger" type="border">Color danger</vs-button>
    </vs-tooltip>
    <vs-tooltip color="warning" text="Tooltip default delay">
      <vs-button color="warning" type="border">Color warning</vs-button>
    </vs-tooltip>
    <vs-tooltip color="dark" text="Tooltip default delay">
      <vs-button color="dark" type="border">Color dark</vs-button>
    </vs-tooltip>
    <vs-tooltip color="rgb(42, 207, 133)" text="Tooltip default delay">
      <vs-button color="rgb(42, 207, 133)" type="border">Color RGB</vs-button>
    </vs-tooltip>
    <vs-tooltip color="#4a0d6b" text="Tooltip default delay">
      <vs-button color="#4a0d6b" type="border">Color HEX</vs-button>
    </vs-tooltip>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
