<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vs-checkbox v-model="checkBox1">Primary</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-icon="sms" vs-color="success" v-model="checkBox2">sms</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-icon="close" vs-color="danger" v-model="checkBox3">Cancel</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-icon="attach_file" vs-color="warning" v-model="checkBox4">File</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-icon="format_bold" vs-color="dark" v-model="checkBox5">Bold</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-icon="location_searching" vs-color="rgb(38, 187, 174)" v-model="checkBox6">location</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-icon="camera_alt" vs-color="#720ea8" v-model="checkBox7">Camera</vs-checkbox>
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
