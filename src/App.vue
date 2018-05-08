<template lang="html">
  <div class="con-prueba">
    <vs-button vs-type="primary-filled">Primary</vs-button>
    <vs-button vs-type="success-filled">Success</vs-button>
    <vs-button vs-type="danger-filled">Danger</vs-button>
    <vs-button vs-type="warning-filled">Warning</vs-button>
    <vs-button vs-type="dark-filled">Dark</vs-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
:root {
  --primary-vuenut: 0, 198, 158;
  --secondary-vuenut: 67, 84, 102;
  --danger-vuenut: 255, 74, 74;
  --fondo-vuenut:255, 255, 255;
  --gris-vuenut:240, 240, 240;
}
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
  color: rgb(var(--secondary-vuenut));
  text-decoration: none;
  font-family: arial;
}
  .con-links {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .myName {
    background: transparent;
    border: 0px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
  }
  .ul-links {

  }
  h2 {
    padding: 5px;
    margin-bottom: 5px;
    margin-top:50px;
    width: 100px;
    text-align: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
  .ul-links li {
    float: left;
    padding: 10px;
    transition: all .2s ease;
  }
  .ul-links li a {
    transition: all .3s ease;
  }
  .ul-links li a:hover {
    color: rgb(var(--primary-vuenut))
  }
  input {
    padding: 10px;
  }
</style>
