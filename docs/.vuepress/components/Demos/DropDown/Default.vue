<template lang="html">
  <div class="examplex">

    <vs-dropdown >
      <a class="a-icon" href="#">
        Dropdown hover
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          Option 2
        </vs-dropdown-item>
        <vs-dropdown-item vs-divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

    <vs-dropdown >
      <a class="a-icon" href.prevent>
        Dropdown Option Disabled
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item disabled>
          Option 2
        </vs-dropdown-item >
        <vs-dropdown-item disabled vs-divider>
          Option 3
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
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
