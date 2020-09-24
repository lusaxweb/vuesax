<template lang="html">
  <div class="">
    <vs-tabs color="rgb(32, 201, 192)">
      <vs-tab label="Top">
        <!-- top -->
        <vs-tabs color="rgb(201, 32, 178)">
          <vs-tab label="Home">
            <div>
              Home
            </div>
          </vs-tab>
          <vs-tab label="Service">
            <div>
              Service
            </div>
          </vs-tab>
          <vs-tab label="login">
            <div>
              login
            </div>
          </vs-tab>
          <vs-tab disabled label="Disabled">
            <div class="">
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
      <vs-tab label="Right">

        <!-- right -->
        <vs-tabs position="right" color="rgb(29, 55, 194)">
          <vs-tab label="Home">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus. Vestibulum hendrerit nibh at quam ullamcorper tempus id at nulla.
            </div>
          </vs-tab>
          <vs-tab label="Service">
            <div>
              Service
            </div>
          </vs-tab>
          <vs-tab label="login">
            <div>
              login
            </div>
          </vs-tab>
          <vs-tab disabled label="Disabled">
            <div>
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
      <vs-tab label="Bottom">

        <!-- bottom -->
        <vs-tabs position="bottom" color="rgb(29, 55, 194)">
          <vs-tab label="Home">
            <div>
              Home
            </div>
          </vs-tab>
          <vs-tab label="Service">
            <div class="">
              Service
            </div>
          </vs-tab>
          <vs-tab label="login">
            <div>
              login
            </div>
          </vs-tab>
          <vs-tab :disabled="true" label="Disabled">
            <div>
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
      <vs-tab label="Left">
        <!-- left -->
        <vs-tabs position="left" color="danger">
          <vs-tab label="Home">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus. Vestibulum hendrerit nibh at quam ullamcorper tempus id at nulla.
            </div>
          </vs-tab>
          <vs-tab label="Service">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </vs-tab>
          <vs-tab label="login">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus.
            </div>
          </vs-tab>
          <vs-tab :disabled="true" label="Disabled">
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
