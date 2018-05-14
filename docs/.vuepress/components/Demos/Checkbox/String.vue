<template lang="html">
  <div class="">
    <ul class="ul">
      <li class="modelx">
        {{checkBox1==null?'null':checkBox1}}
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="Luis Daniel" >luis daniel</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:null,
    }
  }
}
</script>

<style lang="css">
</style>
