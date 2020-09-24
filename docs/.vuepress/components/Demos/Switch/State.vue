<template lang="html">
  <ul class="con-s examplex">
    <li>
      <label for="">true / active</label>
      <vs-switch v-model="switch1"/>
    </li>
    <li>
      <label for="">false / inactive</label>
      <vs-switch v-model="switch2"/>
    </li>
    <li>
      <label for="">disabled / active</label>
      <vs-switch disabled="true" v-model="switch3"/>
    </li>
    <li>
      <label for="">disabled / inactive</label>
      <vs-switch disabled="true" v-model="switch4"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      switch2:false,
      switch3:true,
      switch4:false,
    }
  },
  methods:{
    logx(){
      console.log("hola mundo");
    }
  }
}
</script>

<style lang="css">
  .con-s{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .con-s li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 550px) {
    .con-s {
      flex-direction: column;
      align-items: baseline;
    }
  }
</style>
