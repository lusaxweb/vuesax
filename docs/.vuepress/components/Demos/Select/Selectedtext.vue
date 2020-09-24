<template lang="html">
  <div class="con-select-example">
    <vs-select
      class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vs-select-item :is-selected.sync="item.isSelected" :key="index" :value="item.value" :text="item.isSelected?item.selectedText:item.label" v-for="item,index in options1" />
    </vs-select>
  </div>
</template>

<script>
export default {
  data(){
    return {
      select1:3,
      options1:[
        {value: 1, label: 'label 1 --------', selectedText: 'label 1', isSelected: false },
        {value: 2, label: 'label 2 ------', selectedText: 'label 2', isSelected: false },
        {value: 3, label: 'label 3 ---', selectedText: 'label 3', isSelected: false },
      ],
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
