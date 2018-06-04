<template lang="html">
  <div class="centerx">

    <vs-input :vs-valid.sync="validos.email" vs-success-text="Correo Valido" vs-danger-text="The email does not meet the requirements" vs-type="email" vs-label-placeholder="Email" v-model="value1"/>
    <vs-input :vs-valid.sync="validos.number" vs-success-text="Numero Valido" vs-danger-text="The minimum is 10 and the maximum 20" vs-max="20" vs-min="10" vs-type="number" vs-label-placeholder="Number" v-model="value2"/>
    <vs-input :vs-valid.sync="validos.url" vs-success-text="Correo Valido" vs-danger-text="The email does not meet the requirements" vs-type="url" vs-label-placeholder="url" v-model="value3"/>
    <vs-input :vs-valid.sync="validos.password" vs-success-text="Password Valida" vs-danger-text="The password must have at least 8 characters, 1 number, 1 special character" vs-type="password" vs-label-placeholder="Password" v-model="value4"/>
    <vs-input :vs-valid.sync="validos.custom"
    vs-success-text="Field is valid"
    vs-danger-text="Field must have at least 5 characters"
    :vs-validation-function="(value) => value.length > 5"
    vs-type="custom" vs-label-placeholder="Custom" v-model="value5"/>
    <pre class="pre">Valid: {{validos}}</pre>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      validos:{
        email:false,
        number:false,
        url:false,
        password:false,
        custom: false
      },
    }
  }
}
</script>

<style lang="css" scoped>
  pre {
    width: 100%;
    color: rgba(255, 255, 255,.8);
  }
</style>
