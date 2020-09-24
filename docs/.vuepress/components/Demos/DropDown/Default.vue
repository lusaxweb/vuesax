<template lang="html">
  <div class="examplex">

    <vs-dropdown >
      <a class="a-icon" href="#">
        Dropdown hover
        <vs-icon icon="expand_more"></vs-icon>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          Option 2
        </vs-dropdown-item>
        <vs-dropdown-item divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

    <vs-dropdown >
      <a class="a-icon" href.prevent>
        Dropdown Option Disabled
        <vs-icon icon="expand_more"></vs-icon>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item disabled>
          Option 2
        </vs-dropdown-item >
        <vs-dropdown-item disabled divider>
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
