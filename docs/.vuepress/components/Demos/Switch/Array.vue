<template lang="html">
  <ul class="ul examplex">
    <li class="modelx">
      {{switchArray}}
    </li>
    <li>
      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="luis">
        <span slot="off">
          Luis
        </span>
      </vs-switch>
    </li>
    <li>
      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="carols">
        <span slot="off">
          Carols
        </span>
      </vs-switch>
    </li>
    <li>
      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="summer">
        <span slot="off">
          Summer
        </span>
      </vs-switch>
    </li>
    <li>
      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="lyon">
        <span slot="off">
          Lyon
        </span>
      </vs-switch>
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

<style lang="stylus">
.ul
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
.modelx
  padding: 10px;
  margin-left: 10px;
  background: rgb(235, 235, 235);
  border-radius: 5px;

</style>
