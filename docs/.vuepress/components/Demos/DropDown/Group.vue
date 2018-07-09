<template lang="html">
  <div class="examplex">
    <vs-dropdown @focus="logx">
      <a class="a-icon" href.prevent>
        Dropdown Option Group
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
        <vs-dropdown-group >
          <vs-dropdown-item>
            Option 1
          </vs-dropdown-item>
          <vs-dropdown-item>
            Option 2
          </vs-dropdown-item>

          <vs-dropdown-group>
            <vs-dropdown-item>
              sub Options 1
            </vs-dropdown-item>
            <vs-dropdown-item>
              sub Options 2
            </vs-dropdown-item>
          </vs-dropdown-group>

        </vs-dropdown-group>
        <vs-dropdown-item vs-divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

    <vs-dropdown  >
      <a class="a-icon" href.prevent>
        Dropdown Group Collapse
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item to="/components/">
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          Option 2
        </vs-dropdown-item>

        <vs-dropdown-group vs-collapse vs-label="Group Collapse">
          <vs-dropdown-item>
            Option Collapse 1
          </vs-dropdown-item>
          <vs-dropdown-item >
           Option Collapse 2
          </vs-dropdown-item>
          <vs-dropdown-group>
            <vs-dropdown-item>
              Sub Options 1
            </vs-dropdown-item>
            <vs-dropdown-item>
              Sub Options 2
            </vs-dropdown-item>

            <vs-dropdown-group vs-collapse>
              <vs-dropdown-item vs-label="Sub Collapse">
                Sub Collapse 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                Sub Collapse 2
              </vs-dropdown-item>
            </vs-dropdown-group>

          </vs-dropdown-group>
        </vs-dropdown-group>

        <vs-dropdown-item vs-divider>
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
