<template lang="html">
  <div class="">
    <vs-tabs color="rgb(32, 201, 192)">
      <vs-tab vs-label="Top">
        <!-- top -->
        <vs-tabs color="rgb(201, 32, 178)">
          <vs-tab vs-label="Home">
            <div>
              Home
            </div>
          </vs-tab>
          <vs-tab vs-label="Service">
            <div>
              Service
            </div>
          </vs-tab>
          <vs-tab vs-label="login">
            <div>
              login
            </div>
          </vs-tab>
          <vs-tab disabled vs-label="Disabled">
            <div class="">
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
      <vs-tab vs-label="Right">

        <!-- right -->
        <vs-tabs vs-position="right" color="rgb(29, 55, 194)">
          <vs-tab vs-label="Home">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus. Vestibulum hendrerit nibh at quam ullamcorper tempus id at nulla.
            </div>
          </vs-tab>
          <vs-tab vs-label="Service">
            <div>
              Service
            </div>
          </vs-tab>
          <vs-tab vs-label="login">
            <div>
              login
            </div>
          </vs-tab>
          <vs-tab disabled vs-label="Disabled">
            <div>
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
      <vs-tab vs-label="Bottom">

        <!-- bottom -->
        <vs-tabs vs-position="bottom" color="rgb(29, 55, 194)">
          <vs-tab vs-label="Home">
            <div>
              Home
            </div>
          </vs-tab>
          <vs-tab vs-label="Service">
            <div class="">
              Service
            </div>
          </vs-tab>
          <vs-tab vs-label="login">
            <div>
              login
            </div>
          </vs-tab>
          <vs-tab :disabled="true" vs-label="Disabled">
            <div>
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
      <vs-tab vs-label="Left">
        <!-- left -->
        <vs-tabs vs-position="left" color="danger">
          <vs-tab vs-label="Home">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus. Vestibulum hendrerit nibh at quam ullamcorper tempus id at nulla.
            </div>
          </vs-tab>
          <vs-tab vs-label="Service">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </vs-tab>
          <vs-tab vs-label="login">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus.
            </div>
          </vs-tab>
          <vs-tab :disabled="true" vs-label="Disabled">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus. Vestibulum hendrerit nibh at quam ullamcorper tempus id at nulla.
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
