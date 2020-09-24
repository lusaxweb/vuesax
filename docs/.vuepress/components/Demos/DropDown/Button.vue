<template lang="html">
  <div class="examplex">
    <vs-button class="btnx" type="filled">Dropdown</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          option 2
        </vs-dropdown-item>
        <vs-dropdown-group >
          <vs-dropdown-item>
            option 1
          </vs-dropdown-item>
          <vs-dropdown-item>
            option 2
          </vs-dropdown-item>

        </vs-dropdown-group>
        <vs-dropdown-item divider>
          option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>


    <vs-button class="btnx" color="success" type="gradient">Dropdown</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" color="success" type="gradient" icon="more_horiz"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Home
        </vs-dropdown-item>
        <vs-dropdown-item>
          Contributors
        </vs-dropdown-item>
        <vs-dropdown-item divider>
          Logout
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>


    <vs-button class="btnx" color="danger" type="line">Icons</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" color="danger" type="line" icon="mood"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          <vs-icon icon="mood"></vs-icon>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <vs-icon icon="mood_bad"></vs-icon>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <vs-icon icon="sentiment_dissatisfied"></vs-icon>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <vs-icon icon="sentiment_satisfied"></vs-icon>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <vs-icon icon="sentiment_very_dissatisfied"></vs-icon>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <vs-icon icon="sentiment_very_satisfied"></vs-icon>
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  button
    margin: 0px !important
    &.btnx
      margin-left: 10px !important;
      border-radius: 5px 0px 0px 5px;
    &.btn-drop
      border-radius: 0px 5px 5px 0px;
      border-left: 1px solid rgba(255, 255, 255,.2);
</style>
