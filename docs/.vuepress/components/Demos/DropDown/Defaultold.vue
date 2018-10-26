<template lang="html">
  <div class="examplex">
    <vs-button class="btnx" type="filled">Dropdown</vs-button>
    <vs-dropdown @focus="logx">
      <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item @click="logx">
          option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          option 2
        </vs-dropdown-item>
        <vs-dropdown-group >
          <vs-dropdown-item @click="logx">
            option 1
          </vs-dropdown-item>
          <vs-dropdown-item>
            option 2
          </vs-dropdown-item>

          <vs-dropdown-group>
            <vs-dropdown-item @click="logx">
              sub Options 1
            </vs-dropdown-item>
            <vs-dropdown-item>
              sub Options 2
            </vs-dropdown-item>
          </vs-dropdown-group>

        </vs-dropdown-group>
        <vs-dropdown-item divider>
          option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

    <vs-dropdown  vs-trigger-click >
      <a href="#">Hola mundo</a>

      <vs-dropdown-menu>
        <vs-dropdown-item @click="logx">
          option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          option 2
        </vs-dropdown-item>

        <vs-dropdown-group vs-cascading vs-label="prueba de label nuevo para ver">
          <vs-dropdown-item @click="logx">
            option 1 prueba de el ancho
          </vs-dropdown-item>
          <vs-dropdown-item to="/components/">
           option 2
          </vs-dropdown-item>
          <vs-dropdown-group>
            <vs-dropdown-item @click="logx">
              sub Options 1
            </vs-dropdown-item>
            <vs-dropdown-item>
              sub Options 2
            </vs-dropdown-item>
          </vs-dropdown-group>
        </vs-dropdown-group>

        <vs-dropdown-item divider>
          option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  methods:{
    logx(){
      console.log("click");
    }
  }
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
      border-radius: 5px 0px 0px 5px;
    &.btn-drop
      border-radius: 0px 5px 5px 0px;
      border-left: 1px solid rgba(255, 255, 255,.2);
</style>
