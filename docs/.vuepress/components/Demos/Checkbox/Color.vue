<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vs-checkbox v-model="checkBox1">Primary</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="success" v-model="checkBox2">Success</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="danger" v-model="checkBox3">Danger</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="warning" v-model="checkBox4">Warning</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="dark" v-model="checkBox5">Dark</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="rgb(38, 187, 174)" v-model="checkBox6">Color RGB</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="#720ea8" v-model="checkBox7">Color HEX</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:true,
      checkBox3:true,
      checkBox4:true,
      checkBox5:true,
      checkBox6:true,
      checkBox7:true,
    }
  }
}
</script>

<style lang="css">
</style>
