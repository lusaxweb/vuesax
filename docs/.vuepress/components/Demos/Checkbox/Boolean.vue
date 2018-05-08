<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vs-checkbox v-model="checkBox1">{{checkBox1}}</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox2">{{checkBox2}}</vs-checkbox>
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
    }
  }
}
</script>

<style lang="css">
</style>
