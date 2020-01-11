<template lang="html">
  <div class="con-select-example">
    <vs-select class="selectExample" label="Figuras" v-model="select1">
      <vs-select-item
        :key="index"
        use-slot
        :value="item.value"
        :text="item.text"
        v-for="(item, index) in options1"
      >
        <vs-row vs-type="flex" vs-justify="space-between">
          {{ item.text }}
          <vs-avatar
            width="25px"
            src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"
          />
        </vs-row>
      </vs-select-item>
    </vs-select>

    <vs-select
      autocomplete
      @input-change="autoCompleteFunc"
      class="selectExample"
      label="Autocomplete"
      v-model="select3"
    >
      <vs-select-item
        use-slot
        :key="index"
        :value="item.value"
        :text="item.text"
        v-for="(item, index) in options2"
      >
        <vs-row vs-type="flex" vs-justify="space-between">
          {{ item.text }}
          <vs-avatar
            width="25px"
            src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"
          />
        </vs-row>
      </vs-select-item>
    </vs-select>

    <vs-select
      placeholder="Multiple"
      multiple
      class="selectExample"
      label="Multiple"
      v-model="select2"
    >
      <vs-select-item
        :key="index"
        use-slot
        :value="item.value"
        :text="item.text"
        v-for="(item, index) in options2"
      >
        <vs-row vs-type="flex" vs-justify="space-between" vs-align="center">
          {{ item.text }}
          <vs-avatar
            width="25px"
            src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"
          />
        </vs-row>
      </vs-select-item>
    </vs-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select1Normal: "",
      select1: 2,
      select2: [],
      select3: 2,
      select4: 5,
      options1: [
        { text: "IT", value: 0 },
        { text: "Blade Runner", value: 2 },
        { text: "Thor Ragnarok", value: 3 }
      ],
      options2: [
        { text: "Square", value: 1 },
        { text: "Rectangle", value: 2 },
        { text: "Rombo", value: 3 },
        { text: "Romboid", value: 4 },
        { text: "Trapeze", value: 5 },
        { text: "Triangle", value: 6 },
        { text: "Polygon", value: 7 },
        { text: "Regular polygon", value: 8 },
        { text: "Circumference", value: 9 },
        { text: "Circle", value: 10 },
        { text: "Circular sector", value: 11 },
        { text: "Circular trapeze", value: 12 }
      ],
      options3: [
        { text: "Red", value: 1 },
        { text: "Green", value: 2 },
        { text: "Blue", value: 3 },
        { text: "Purple", value: 4 }
      ],
      options4: [
        { text: "Square", value: 1 },
        { text: "Rectangle", value: 2 },
        { text: "Rombo", value: 3 },
        { text: "Romboid", value: 4 },
        { text: "Trapeze", value: 5 },
        { text: "Triangle", value: 6 },
        { text: "Polygon", value: 7 }
      ]
    };
  },
  methods: {
    prueba() {
      console.log("prueba de focsu");
    },
    autoCompleteFunc(event) {
      console.log(event);
    }
  }
};
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
  width: 100%;
}
@media (max-width: 550px) {
  .con-select {
    flex-direction: column;
  }
  .con-select .vs-select {
    width: 100%;
  }
}
</style>
