<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vs-checkbox @change="logx" v-model="checkBox1">Primary - active</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox2">Primary - inactive</vs-checkbox>
      </li>
      <li>
        <vs-checkbox disabled="true" v-model="checkBox3">Primary - active - disabled</vs-checkbox>
      </li>
      <li>
        <vs-checkbox disabled="true" v-model="checkBox4">Primary - inactive - disabled</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:false,
      checkBox3:true,
      checkBox4:false,
    }
  },
  methods:{
    logx(value){
      console.log("hola check",value);
    }
  }
}
</script>

<style lang="css">
</style>
