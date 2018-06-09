<template lang="html">
  <ul class="leftx">
    <li class="modelx">
      {{radios1}}
    </li>
    <li>
      <vs-radio v-model="radios1" vs-value="luis">Luis</vs-radio>
    </li>
    <li>
      <vs-radio v-model="radios1" vs-value="carols">Carols</vs-radio>
    </li>
    <li>
      <vs-radio v-model="radios1" vs-value="summer">summer</vs-radio>
    </li>
    <li>
      <vs-radio disabled="true" v-model="radios1" vs-value="lyon">Lyon - disabled</vs-radio>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      radios1:'lyon',
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
</style>
