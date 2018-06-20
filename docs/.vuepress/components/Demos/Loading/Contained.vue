<template lang="html">
  <div class="centerx">
    <vs-button id="button-with-loading" class="vs-con-loading__container" @click="openLoadingContained" vs-type="relief" vs-color="primary">Button with Loading</vs-button>
    <vs-button @click="openLoadingInDiv" vs-type="relief" vs-color="primary">Div with Loading</vs-button>
    <div class="fill-row">
      <div id="div-with-loading" class="vs-con-loading__container">Load Me!</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      backgroundLoading:'primary',
      colorLoading:'#fff',
    }
  },
  methods:{
    openLoadingContained(){
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: '#button-with-loading',
        scale: 0.3
      })
      setTimeout( ()=> {
        this.$vs.loading.close({
          container: '#button-with-loading > .vs-con-loading'
        })
      }, 2000);
    },
    openLoadingInDiv(){
      this.$vs.loading({
        container: '#div-with-loading',
        scale: 0.6
      })
      setTimeout( ()=> {
        this.$vs.loading.close({
          container: '#div-with-loading > .vs-con-loading'
        })
      }, 2000);
    },
  }
}
</script>

<style lang="css">
.fill-row {
  flex: 0 0 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
#div-with-loading {
  width: 200px;
  height: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #444;
  border-radius: 5px;
}
</style>
