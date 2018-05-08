<template lang="html">
  <ul class="con-s">
    <li>
      <label for="">Primary</label>
      <vs-switch vs-type="primary" v-model="switch1"/>
    </li>
    <li>
      <label for="">success</label>
      <vs-switch vs-type="success" v-model="switch2"/>
    </li>
    <li>
      <label for="">danger</label>
      <vs-switch vs-type="danger" v-model="switch3"/>
    </li>
    <li>
      <label for="">warning</label>
      <vs-switch vs-type="warning" v-model="switch4"/>
    </li>
    <li>
      <label for="">dark</label>
      <vs-switch vs-type="dark" v-model="switch5"/>
    </li>
    <li>
      <label for="">rgb(color) / #color</label>
      <vs-switch vs-type="rgb(177, 9, 165)" v-model="switch6"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      switch2:true,
      switch3:true,
      switch4:true,
      switch5:true,
      switch6:true,
    }
  }
}
</script>

<style lang="css">
</style>
