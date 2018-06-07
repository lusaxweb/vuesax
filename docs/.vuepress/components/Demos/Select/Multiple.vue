<template lang="html">
  <div class="con-select-example">
    <vs-select
      vs-multiple
      class="selectExample"
      label="Peliculas"
      v-model="select1"
      :options="options1"
      ></vs-select>
      <span class="modelx">{{select1}}</span>

      <h4 style="padding:10px">Max selected (3)</h4>
    <vs-select
      vs-multiple
      vs-max-selected="3"
      class="selectExample"
      label="Peliculas"
      v-model="select2"
      :options="options2"
      ></vs-select>
      <span class="modelx">{{select2}}</span>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return {
      select1:[{text: 'Red', value: 1}],
      select2:[{text: 'Romboid', value: 4}],
      options1:[
        {text: 'Red', value: 1},
        {text: 'Green', value: 2},
        {text: 'Blue', value: 3},
        {text: 'Purple', value: 4},
      ],
      options2:[
        {text: 'Square', value: 1},
        {text: 'Rectangle', value: 2},
        {text: 'Rombo', value: 3},
        {text: 'Romboid', value: 4},
        {text: 'Trapeze', value: 5},
        {text: 'Triangle', value: 6},
        {text: 'Polygon', value: 7},
        {text: 'Regular polygon', value: 8},
        {text: 'Circumference', value: 9},
        {text: 'Circle', value: 10},
        {text: 'Circular sector', value: 11},
        {text: 'Circular trapeze', value: 12},
      ]
    }
  },
  methods:{
    prueba(){
      console.log("prueba de focsu");
    }
  }
}
</script>

<style lang="css" scoped>
.selectExample {
  margin: 10px;
}
.con-select-example {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.con-select .vs-select {
  width: 100%
}
@media (max-width: 550px) {
  .con-select {
    flex-direction: column;
  }
  .con-select .vs-select {
    width: 100%
  }
}
</style>
