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
      :options="options1"
      ></vs-select>
      <span class="modelx">{{select2}}</span>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return {
      select1:[{text:'Romboide',value:4}],
      select2:[{text:'Rectángulo',value:2}],
      options1:[
        {text:'Cuadrado',value:1},
        {text:'Rectángulo',value:2},
        {text:'Rombo',value:3},
        {text:'Romboide',value:4},
        {text:'Trapecio',value:5},
        {text:'Triángulo',value:6},
        {text:'Polígono',value:7},
        {text:'Polígono regular',value:8},
        {text:'Circunferencia',value:9},
        {text:'Círculo',value:10},
        {text:'Sector circular',value:11},
        {text:'Trapecio circular',value:12},
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
