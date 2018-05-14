<template lang="html">
  <div class="">
    <vs-tabs >
      <vs-tab vs-label="Home">
        <div class="con-tab-ejemplo">
          Home
        </div>
      </vs-tab>
      <vs-tab vs-label="Service">
        <div class="con-tab-ejemplo">

          Service
        </div>
      </vs-tab>
      <vs-tab vs-label="login">
        <div class="con-tab-ejemplo">
          login

        </div>
      </vs-tab>
      <vs-tab :disabled="true" vs-label="Disabled">
        <div class="con-tab-ejemplo">
          Disabled

        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
