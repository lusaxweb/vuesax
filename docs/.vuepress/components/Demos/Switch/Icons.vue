<template lang="html">
  <ul class="con-s examplex">
    <li>
      <label for="">Primary</label>
      <vs-switch v-model="switch1" vs-icon-off="notifications_none" vs-icon-on="done"/>
    </li>
    <li>
      <label for="">success</label>
      <vs-switch color="success" v-model="switch2" vs-icon="done"/>
    </li>
    <li>
      <label for="">danger</label>
      <vs-switch color="danger" v-model="switch3" vs-icon="close"/>
    </li>
    <li>
      <label for="">warning</label>
      <vs-switch color="warning" v-model="switch4" vs-icon="error_outline"/>
    </li>
    <li>
      <label for="">dark</label>
      <vs-switch color="dark" v-model="switch5" vs-icon="volume_off"/>
    </li>
    <li>
      <label for="">rgb(color) / #color</label>
      <vs-switch color="rgb(51, 53, 83)" v-model="switch6" vs-icon="photo_camera"/>
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
