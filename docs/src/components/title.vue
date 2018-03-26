<template lang="html">
  <div class="contiene-titulo">
    <div class="con-titulo">
      <h2 v-html="titlex"></h2>
      <h3 v-html="textx"></h3>
      <div class="con-gitHub">
        <span><a v-tooltip="'Edit page'" class="material-icons" href="https://github.com/lusaxweb/vuesax" target="_blank">mode_edit</a></span>
    </div>

  </div>
  </div>
</template>

<script>
import '../assets/font/flaticon.css'
export default {
  props:[
    "titlex",
    "textx"
  ]
}
</script>

<style lang="css" scoped>
.con-gitHub {
  position: absolute;
  top: 10px;
  right: 8px;
  padding: 5px;
  background: rgb(255, 255, 255);
  z-index: 20000;
  border-radius: 10px;
}
.contiene-titulo {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all .3s ease .150s;

 }

  .con-titulo {
    position: relative;
    width: calc(100% - 60px);
    margin-top: 0px;
    background: rgb(255, 255, 255);
    padding: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 0px 0px 15px 15px;
    color: rgba(0, 0, 0, 0.6);
    box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.1);
    z-index: 6000;
    max-width: 1250px;
    transition: all .3s ease-out;
    top: 0px;
  }
  .con-titulo h2 {
      padding: 10px;
      text-align: center;
      font-size: 30px;
      font-weight: lighter;
      color: rgba(var(--morado),1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.050);
      transition: all .3s ease;
  }
  .con-titulo h3 {
    text-align: center;
    font-size: 17px;
    font-weight: lighter;
    padding: 10px;
    transition: all .3s ease;
  }
  .solo-title {
    z-index: 6000;
    position: relative;
  }
  .solo-title .con-titulo{
    width: 100% !important;
    max-width: 100%;
    border-radius: 0px 0px 10px 0px;
    padding-top: 10px;
    padding-bottom: 10px;

  }
  .solo-title .con-titulo h2{
    font-size: 24px !important;
  }
    .solo-title .con-titulo .con-gitHub a {
      font-size: 20px;
    }
  .solo-title h2{
    padding-top: 0px;
    padding-bottom: 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    font-size: 30px;
  }
  .solo-title h3 {
    opacity: 0;
    height: 0px;
    overflow: hidden;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  @media only screen and (max-width: 650px) {
    .con-titulo {
        padding: 5px;
    }

    .con-titulo h2 {
      font-size: 24px;
      padding: 5px;
    }
    .con-titulo h3{
      font-size: 14px;
      padding: 5px;
    }
    .con-titulo {
        width: 100%;
    }
  }
</style>
