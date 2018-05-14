<template lang="html">
  <ul class="ul">
    <li class="modelx">
      {{switchArray}}
    </li>
    <li>
      <vs-switch vs-type="success" v-model="switchArray" vs-value="luis">Luis</vs-switch>
    </li>
    <li>
      <vs-switch vs-type="success" v-model="switchArray" vs-value="carols">Carols</vs-switch>
    </li>
    <li>
      <vs-switch vs-type="success" v-model="switchArray" vs-value="summer">Summer</vs-switch>
    </li>
    <li>
      <vs-switch vs-type="success" v-model="switchArray" vs-value="lyon">Lyon</vs-switch>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switchArray:['luis'],
    }
  }
}
</script>

<style lang="css">
.ul {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.modelx {
  padding: 10px;
  margin-left: 10px;
  background: rgb(235, 235, 235);
  border-radius: 5px;
}
</style>
