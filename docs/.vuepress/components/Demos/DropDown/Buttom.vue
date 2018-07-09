<template lang="html">
  <div class="examplex">
    <vs-button class="btnx" vs-type="filled">Dropdown</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" vs-type="filled" vs-icon="expand_more"></vs-button>
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
        <vs-dropdown-item vs-divider>
          option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>


    <vs-button class="btnx" vs-color="success" vs-type="gradient">Dropdown</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" vs-color="success" vs-type="gradient" vs-icon="more_horiz"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Home
        </vs-dropdown-item>
        <vs-dropdown-item>
          Contributors
        </vs-dropdown-item>
        <vs-dropdown-item vs-divider>
          Logout
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>


    <vs-button class="btnx" vs-color="danger" vs-type="line-down">Icons</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" vs-color="danger" vs-type="line-down" vs-icon="mood"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          <i class="material-icons">
            mood
          </i>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <i class="material-icons">
            mood_bad
          </i>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <i class="material-icons">
            sentiment_dissatisfied
          </i>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <i class="material-icons">
            sentiment_satisfied
          </i>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <i class="material-icons">
            sentiment_very_dissatisfied
          </i>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <i class="material-icons">
            sentiment_very_satisfied
          </i>
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
