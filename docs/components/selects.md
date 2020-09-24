---
API:
 - name: options
   type: Array
   parameters: {text:'Example',value:'1'}
   description: Options to select.
   default: null
 - name: color
   type: String
   parameters: null
   description: Change the color of the button
   default: primary
 - name: autocomplete
   type: Boolean
   parameters:
   description: Enables the use of autocomplete in the select.
   default: false
 - name: multiple
   type: Boolean
   parameters:
   description: Determines whether the selection is of multiple selection.
   default: false
 - name: max-selected
   type: Number
   parameters:
   description: Determine the number of maximum options to be able to select (only for active multiple).
   default: All options
 - name: label
   type: String
   parameters: null
   description: Label for the input element.
 - name: success
   type: Boolean
   parameters: boolean bind
   description: Activate the status of success in the input.
   default: false
 - name: danger
   type: Boolean
   parameters: boolean bind
   description: Activate the status of danger in the input.
   default: false
 - name: warning
   type: Boolean
   parameters: boolean bind
   description: Activate the status of warning in the input.
   default: false
 - name: description-text
   type: String
   parameters: null
   description: Add a description text to the input.
   default: false
 - name: danger-text
   type: String
   parameters: null
   description: Text to show when the item is invalid.
   default: null
 - name: success-text
   type: String
   parameters: null
   description: Text to show when the item is valid.
   default: null
 - name: warning-text
   type: String
   parameters: null
   description: Text that is displayed in the warning state.
   default: null
 - name: is-selected.sync
   type: Boolean sync
   parameters: null
   description: Determines if the option is selected.
   default: null
 - name: input-changed
   type: Event
   parameters: event (optional)
   description:  Triggers method when input of select is changed (requires autocomplete prop)
 - name: width
   type: String
   parameters: null
   description: Set the width of the select
   default: null
 - name: icon
   type: String
   parameters: icon name
   description: Element icon.
   default: keyboard_arrow_down
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
---

# Select

<box header>

Selects with a clean and smooth animation, that are very easy to implement.

</box>

<box>

## Single selection

To add a select to the application we have the component `vs-select`. You can customize the arrow icon by passing an icon name to `icon`.

::: tip
Vuesax uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).

FontAwesome and other fonts library are supported. Simply use the `icon-pack` with `fa` or `fas`. You still need to include the Font Awesome icons in your project.

:::

<vuecode md>
<div slot="demo">

 <Demos-Select-Default/>

</div>

<div slot="code">

```html
<template lang="html">
  <div class="con-select-example">
    <vs-select
      class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
    </vs-select>
    <vs-select
      class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options2" />
    </vs-select>
    <vs-select
      disabled
      class="selectExample"
      label="Figuras"
      v-model="select3"
      >
      <vs-select-item :key="index" :disabled="index==2" :value="item.value" :text="item.text" v-for="item,index in options3" />
    </vs-select>
    <vs-select
      class="selectExample"
      label="Figuras"
      v-model="select4"
      icon="arrow_downward"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options4" />
    </vs-select>
  </div>
</template>

<script>
export default {
  data(){
    return {
      select1Normal:'',
      select1:2,
      select2:7,
      select3:2,
      select4:5,
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
      options4:[
        {text: 'Square', value: 1},
        {text: 'Rectangle', value: 2},
        {text: 'Rombo', value: 3},
        {text: 'Romboid', value: 4},
        {text: 'Trapeze', value: 5},
        {text: 'Triangle', value: 6},
        {text: 'Polygon', value: 7},
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
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the select with the property `color`

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">

 <Demos-Select-Color />

</div>

<div slot="code">

```html
<template lang="html">
  <div class="con-select-example">
    <input v-model="colorx" type="color" name="" value="">
    <vs-select
      :color="colorx"
      class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
    </vs-select>
    <vs-select
    :color="select2"
    class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />
    </vs-select>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return {
      colorx:'#103767',
      select1:3,
      select2:'primary',
      options1:[
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
      options2:[
        {text: 'Primary', value: 'primary'},
        {text: 'Success', value: 'success'},
        {text: 'Danger', value: 'danger'},
        {text: 'Warning', value: 'warning'},
        {text: 'Dark', value: 'dark'},
      ],
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Autocomplete

You can add the autocomplete functionality in the desired selected with the property `autocomplete`.

<vuecode md>
<div slot="demo">

 <Demos-Select-Autocomplete/>

</div>

<div slot="code">

```html
<template lang="html">
  <div class="con-select-example">
    <vs-select
      autocomplete
      @input-change="autoCompleteFunc"
      class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
    </vs-select>
    <vs-select
      autocomplete
      @input-change="autoCompleteFunc"
      class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />
    </vs-select>
    <vs-select
      autocomplete
      @input-change="autoCompleteFunc"
      disabled="true"
      class="selectExample"
      label="Figuras"
      v-model="select3"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options3" />
    </vs-select>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return {
      select1Normal:'',
      select1:3,
      select2:7,
      select3:2,
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
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Multiple

You can have a selection with multiple selections with the property `multiple`. If you need the user to select only a certain number of options you can use the property `max-selected`.

<vuecode md>
<div slot="demo">

 <Demos-Select-Multiple/>

</div>

<div slot="code">

```html
<template lang="html">
  <div class="con-select-example">
    <vs-select
      placeholder="Multiple"
      multiple
      class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
    </vs-select>
    <vs-select
      placeholder="Multiple and autocomplete"
      multiple
      autocomplete
      class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />
    </vs-select>
    <vs-select
      placeholder="Max Selected"
      max-selected="2"
      multiple
      class="selectExample"
      label="Figuras"
      v-model="select3"
      >
      <vs-select-item :key="index" :value="item.value"  :text="item.text" v-for="(item,index) in options3" />
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
  }
}
</script>
```
</div>
</vuecode>
</box>

<box>

## Labels

Add a label to the input with the property `label`.

<vuecode md>
<div slot="demo">

 <Demos-Select-Labels/>

</div>

<div slot="code">

```html
<template lang="html">
    <div class="con-select-example">
    <vs-select
      placeholder="Select"
      class="selectExample"
      label="Multiple"
      label-placeholder="Multiple"
      multiple
      v-model="select1"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
    </vs-select>
    <vs-select
      placeholder="Search and select"
      class="selectExample"
      label="Autocomplete"
      label-placeholder="Autocomplete"
      multiple
      autocomplete
      v-model="select2"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options2" />
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
      ]
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Validators

You can add a state for example of in affirmative response to a validation with `success` and if it is necessary to add a description or help to the user you can do it with the property `description`

:::tip
  Each of the states you can change the text, for example in the case of `danger-text` for the state of danger.
:::

<vuecode md>
<div slot="demo">

 <Demos-Select-Validation/>

</div>

<div slot="code">

```html
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
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Is Selected Item

You can validate if an option is selected with the property `is-selected.sync` and do with it multiple variants with changing the text of the selected options

<vuecode md>
<div slot="demo">

 <Demos-Select-Selectedtext/>

</div>

<div slot="code">

```html
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
        {value: 1, label: 'label 1', selectedText: 'show after select label 1', isSelected: false },
        {value: 2, label: 'label 2', selectedText: 'show after select label 2', isSelected: false },
        {value: 3, label: 'label 3', selectedText: 'show after select label 3', isSelected: false },
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
```

</div>
</vuecode>
</box>

<box>

## Group items

You can group elements with the sub component `vs-select-group`

<vuecode md>
<div slot="demo">

 <Demos-Select-Group/>

</div>

<div slot="code">

```html
<template lang="html">
  <div class="con-select-example">
    <vs-select
        class="selectExample"
        label="Default"
        v-model="select1"
        >
        <div :key="index" v-for="item,index in options1">
          <vs-select-group :title="item.title" v-if="item.group">
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in item.group"/>
          </vs-select-group>
        </div>
    </vs-select>
    <vs-select
        multiple
        class="selectExample"
        label="Multiple"
        v-model="select2"
        >
        <div :key="index" v-for="item,index in options2">
          <vs-select-group :title="item.title" v-if="item.group">
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in item.group"/>
          </vs-select-group>
        </div>
    </vs-select>
    <vs-select
        autocomplete
        class="selectExample"
        label="Autocomplete"
        v-model="select3"
        >
        <div :key="index" v-for="item,index in options3">
          <vs-select-group :title="item.title" v-if="item.group">
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in item.group"/>
          </vs-select-group>
        </div>
    </vs-select>
  </div>
</template>

<script>
export default {
  data(){
    return {
      select1:6,
      select2:[6],
      select3:['red'],
      options1:[
        {
          title:'Figures',
          group:[
            {text: 'Romboid', value: 4},
            {text: 'Trapeze', value: 5},
            {text: 'Triangle', value: 6},
            {text: 'Polygon', value: 7},
          ]
        },
        {
          title:'Colors',
          group:[
            {text: 'Red', value: 'red'},
            {text: 'Green', value: 'green'},
            {text: 'Blue', value: 'blue'},
            {text: 'Purple', value: 'purple'},
          ]
        }
      ],
      options2:[
        {
          title:'Figures',
          group:[
            {text: 'Romboid', value: 4},
            {text: 'Trapeze', value: 5},
            {text: 'Triangle', value: 6},
            {text: 'Polygon', value: 7},
          ]
        },
        {
          title:'Colors',
          group:[
            {text: 'Red', value: 'red'},
            {text: 'Green', value: 'green'},
            {text: 'Blue', value: 'blue'},
            {text: 'Purple', value: 'purple'},
          ]
        }
      ],
      options3:[
        {
          title:'Figures',
          group:[
            {text: 'Romboid', value: 4},
            {text: 'Trapeze', value: 5},
            {text: 'Triangle', value: 6},
            {text: 'Polygon', value: 7},
          ]
        },
        {
          title:'Colors',
          group:[
            {text: 'Red', value: 'red'},
            {text: 'Green', value: 'green'},
            {text: 'Blue', value: 'blue'},
            {text: 'Purple', value: 'purple'},
          ]
        }
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
```

</div>
</vuecode>
</box>

<box>

## Width

You can set the width of the select width the `width` property

<vuecode md>
<div slot="demo">

 <Demos-Select-Width/>

</div>

<div slot="code">

```html
<template lang="html">
  <div class="con-select-example">
    <vs-select
      class="selectExample"
      label="Width 120px"
      v-model="select1"
      width="120px"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
    </vs-select>
    <vs-select
      class="selectExample"
      label="Width 400px"
      v-model="select2"
      width="400px"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options2" />
    </vs-select>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return {
      select1:2,
      select2:7,
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
        {text: 'Circular trapeze', value: 12}
      ]
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
```

</div>
</vuecode>
</box>
