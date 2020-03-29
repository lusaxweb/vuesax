<template>
  <div>
    <vs-check-button v-model="checkbutton1">Primary</vs-check-button>
    <vs-check-button v-model="checkbutton2" color="success">Success</vs-check-button>
    <vs-check-button v-model="checkbutton3" color="danger">Danger</vs-check-button>
    <vs-check-button v-model="checkbutton4" color="warning">Warning</vs-check-button>
    <vs-check-button v-model="checkbutton5" color="dark">Dark</vs-check-button>
    <vs-check-button v-model="checkbutton6" color="rgb(11, 189, 135)">RGB</vs-check-button>
    <vs-check-button disabled>Disabled</vs-check-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      checkbutton1: false,
      checkbutton2: false,
      checkbutton3: false,
      checkbutton4: false,
      checkbutton5: false,
      checkbutton6: false,
    }
  }
}
</script>