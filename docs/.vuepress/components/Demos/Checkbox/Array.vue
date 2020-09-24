<template lang="html">
  <div class="">
    <ul class="centerx">
      <li class="modelx">
        {{checkBox1}}
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="luis">Luis</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="carols">carols</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="summer">summer</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="lyon">Lyon</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:['luis']
    }
  }
}
</script>

<style lang="css">
  .modelx {
    padding: 10px;
    background: rgb(245, 245, 245);
  }
</style>
