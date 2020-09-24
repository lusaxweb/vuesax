<template lang="html">
  <div class="con-colors">
    <ul>
      <li class="colorprimaryx">
        <input @change="changeColor($event.target.value,'primary')" type="color" name="" value="">
        Primary
      </li>
      <li class="colorsuccessx">
        <input @change="changeColor($event.target.value,'success')" type="color" name="" value="">
        Success
      </li>
      <li class="colordangerx">
        <input @change="changeColor($event.target.value,'danger')" type="color" name="" value="">
        Danger
      </li>
      <li class="colorwarningx">
        <input @change="changeColor($event.target.value,'warning')" type="color" name="" value="">
        Warning
      </li>
      <li class="colordarkx">
        <input @change="changeColor($event.target.value,'dark')" type="color" name="" value="">
        Dark
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    saludo: 'Hola mundo'
  }),
  methods:{
    changeColor(colorx, whatColor){
      this.$vs.theme({
        [whatColor]:colorx
      })
    }
  }
}
</script>

<style lang="css" scoped>
.con-colors ul{
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-colors li{
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  cursor: default;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  transition: all .2s ease;
  cursor: pointer;
}
.con-colors li:hover {
  transform: translate(0,8px);
  box-shadow: 0px 0px 40px -10px rgba(255, 255, 255,0) !important;
}
.con-colors li input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.colorprimaryx {
  background: rgb(var(--vs-primary)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--vs-primary),.9);
}
.colorsuccessx {
  background: rgb(var(--vs-success)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--vs-success),.9);
}
.colordangerx {
  background: rgb(var(--vs-danger)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--vs-danger),.9);
}
.colorwarningx {
  background: rgb(var(--vs-warning)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--vs-warning),.9);
}
.colordarkx {
  background: rgb(var(--vs-dark)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--vs-dark),.9);
}
</style>
