<template lang="html">
  <div class="">
    <vs-tabs vs-color="rgb(93, 32, 122)">
      <vs-tab vs-label="top">
        <!-- top -->
        <vs-tabs vs-color="rgb(29, 55, 194)">
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
            <div class="">
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
      <vs-tab vs-label="right">

        <!-- right -->
        <vs-tabs vs-position="right" vs-color="rgb(29, 55, 194)">
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

      </vs-tab>
      <vs-tab vs-label="bottom">

        <!-- bottom -->
        <vs-tabs vs-position="bottom" vs-color="rgb(29, 55, 194)">
          <vs-tab vs-label="Home">
            <div class="con-tab-ejemplo">
              Home
            </div>
          </vs-tab>
          <vs-tab vs-label="Service">
            <div class="">
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

      </vs-tab>
      <vs-tab vs-label="left">
        <!-- left -->
        <vs-tabs vs-position="left" vs-color="rgb(29, 55, 194)">
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
