<template lang="html">
  <div class="examplex">

    <vs-dropdown vs-custom-content vs-trigger-click >
      <a class="a-icon" href.prevent>
        Click me open login
        <vs-icon icon="expand_more"></vs-icon>
      </a>

      <vs-dropdown-menu class="loginx">
        <h3>Login</h3>
        <p>Welcome to vuesax, add your data to enter</p>


        <vs-input
    :valid.sync="valid.email"
    success-text="Valid mail"
    danger-text="The email does not meet the requirements"
    type="email" label-placeholder="Email" v-model="value1"/>

    <vs-input
        :valid.sync="valid.password"
        success-text="Password Valida"
        danger-text="The password must have at least 8 characters, 1 number, 1 special character"
        type="password"
        label-placeholder="Password" v-model="value2"/>

        <vs-button width="100%" color="success" type="gradient">Login</vs-button>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    value1:'',
    value2:'',
    valid:{
      email:false,
      password:false,
    }
  })
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
.vs-dropdown-menu
  .con-input
    margin-bottom: 20px;
.loginx
  h3
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
  p
    max-width: 200px;
    font-size: 11px;
    padding: 5px;
</style>
