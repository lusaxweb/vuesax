<template lang="html">
  <div class="con-select-example">

    <vs-select
      placeholder="Multiple"
      multiple
      class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
    </vs-select>
    <vs-select
      placeholder="Multiple and autocomplete"
      multiple
      autocomplete
      class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options2" />
    </vs-select>
    <vs-select
      placeholder="Max Selected"
      max-selected="2"
      multiple
      class="selectExample"
      label="Figuras"
      v-model="select3"
      >
      <vs-select-item :key="index" :value="item.value"  :text="item.text" v-for="item,index in options3" />
    </vs-select>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return {
      select1Normal:'',
      select1:[],
      select2:[],
      select3:[],
      options1:[
        {text:'IT',value:0},
        {text:'Blade Runner',value:2},
        {text:'Thor Ragnarok',value:3},
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
      ],
      options3:[
        {text: 'Red', value: 1},
        {text: 'Green', value: 2},
        {text: 'Blue', value: 3},
        {text: 'Purple', value: 4},
      ],
    }
  },
  methods:{
    prueba(){
      console.log("prueba de focsu");
    }
  }
}
</script>

<style lang="css">
.selectExample {
  margin: 10px;
}
.con-select-example {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap
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
