<template>
  <div>
    <vs-check-button v-model="selected1">Primary</vs-check-button>
    <vs-check-button v-model="selected2" color="success">Success</vs-check-button>
    <vs-check-button v-model="selected3" color="danger">Danger</vs-check-button>
    <vs-check-button v-model="selected4" color="warning">Warning</vs-check-button>
    <vs-check-button v-model="selected5" color="dark">Dark</vs-check-button>
    <vs-check-button v-model="selected6" color="rgb(11, 189, 135)">RGB</vs-check-button>
    <vs-check-button disabled>Disabled</vs-check-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected6: false,
    }
  }
}
</script>