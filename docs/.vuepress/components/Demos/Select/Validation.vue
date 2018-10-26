<template lang="html">
  <div class="con-select-example">
    <vs-select
     :success="true"
      success-text="This field is valid"
      placeholder="Select"
      class="selectExample"
      label="Success"
      multiple
      v-model="select1"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in exampleOptions" />
    </vs-select>
       <vs-select
      :danger="true"
      danger-text="This field is invalid"
      placeholder="Select"
      class="selectExample"
      label="Danger"
      multiple
      v-model="select2"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in exampleOptions" />
    </vs-select>
       <vs-select
      :warning="true"
      warning-text="This field is invalid"
      placeholder="Select"
      class="selectExample"
      label="Warning"
      multiple
      v-model="select3"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in exampleOptions" />
    </vs-select>
       <vs-select
      description-text="Simple info for multiple select"
      placeholder="Select"
      class="selectExample"
      label="Description"
      multiple
      v-model="select4"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in exampleOptions" />
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
      select4:[],
      exampleOptions:[
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
