<template lang="html">
  <ul class="con-s">
    <li>
      <label for="">Primary</label>
      <vs-switch v-model="switch1" vs-icon-off="notifications_none" vs-icon-on="done"/>
    </li>
    <li>
      <label for="">success</label>
      <vs-switch vs-color="success" v-model="switch2" vs-icon="done"/>
    </li>
    <li>
      <label for="">danger</label>
      <vs-switch vs-color="danger" v-model="switch3" vs-icon="close"/>
    </li>
    <li>
      <label for="">warning</label>
      <vs-switch vs-color="warning" v-model="switch4" vs-icon="error_outline"/>
    </li>
    <li>
      <label for="">dark</label>
      <vs-switch vs-color="dark" v-model="switch5" vs-icon="volume_off"/>
    </li>
    <li>
      <label for="">rgb(color) / #color</label>
      <vs-switch vs-color="rgb(51, 53, 83)" v-model="switch6" vs-icon="photo_camera"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false,
      switch5:false,
      switch6:false
    }
  }
}
</script>

<style lang="css">
</style>
