<template lang="html">
  <div class="centerx">
    <vs-slider :min="50" @change="cambio" color="rgb(45, 208, 129)" v-model="value1"/>
    <div :style="{'width':widthx+'px','height':heightx+'px'}" class="cuadrox">
      {{value1}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:55,
      widthx:55,
      heightx:55
    }
  },
  methods:{
    cambio(value){
      this.widthx = value
      this.heightx = value
    }
  }
}
</script>

<style lang="css">
  .cuadrox {
    padding: 10px;
    background: rgb(45, 208, 129);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    font-size: 20px;
    border-radius: 10px;
  }
</style>
