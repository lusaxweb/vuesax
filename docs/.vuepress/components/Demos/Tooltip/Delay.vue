<template lang="html">
  <div class="centerx examplex">
    <vs-tooltip text="Tooltip default delay">
      <vs-button>Delay default</vs-button>
    </vs-tooltip>
    <vs-tooltip delay=".5s" text="Tooltip delay 0.5s">
      <vs-button>Delay 0.5s</vs-button>
    </vs-tooltip>
    <vs-tooltip delay="2s" text="Tooltip delay 2s">
      <vs-button>Delay 2s</vs-button>
    </vs-tooltip>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
