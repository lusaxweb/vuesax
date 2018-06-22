<template lang="html">
  <ul class="con-s">
    <li>
      <label for="">Primary</label>
      <vs-switch v-model="switch1"/>
    </li>
    <li>
      <label for="">success</label>
      <vs-switch vs-color="success" v-model="switch2"/>
    </li>
    <li>
      <label for="">danger</label>
      <vs-switch vs-color="danger" v-model="switch3"/>
    </li>
    <li>
      <label for="">warning</label>
      <vs-switch vs-color="warning" v-model="switch4"/>
    </li>
    <li>
      <label for="">dark</label>
      <vs-switch vs-color="dark" v-model="switch5"/>
    </li>
    <li class="con-input-color">
      <label for="">Color: <span>{{color}}</span></label>
      <input v-model="color" type="color" name="" value="">
      <vs-switch :vs-color="color" v-model="switch6"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      color:'#5a3cc4',
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

<style lang="stylus">
.con-input-color
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
</style>
