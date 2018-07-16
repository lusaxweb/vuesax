<template lang="html">
  <div class="">
    <vs-tabs >
      <vs-tab @click="consolex" title="peuba" vs-label="Home">
        <div class="con-tab-ejemplo">
          Home
        </div>
      </vs-tab>
      <vs-tab @focus="consolex" vs-label="Service">
        <div class="con-tab-ejemplo">

          Service
        </div>
      </vs-tab>
      <vs-tab vs-label="login">
        <div class="con-tab-ejemplo">
          login

        </div>
      </vs-tab>
      <vs-tab disabled vs-label="Disabled">
        <div class="con-tab-ejemplo">
          Disabled

        </div>
      </vs-tab>
            <vs-tab vs-label="Disabled de prueba para el ancho">
        <div class="con-tab-ejemplo">
          Disabled de prueba para el ancho
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  methods:{
    consolex(){
      console.log('hola mundo')
    }
  }
}
</script>

<style lang="css">
</style>
