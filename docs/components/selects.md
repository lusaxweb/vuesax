---
API:
 - name: options
   type: Array
   parameters: {text:'Example',value:'1'}
   description: Options to select.
   default: null
 - name: vs-autocomplete
   type: Boolean
   parameters:
   description: Enables the use of autocomplete in the select.
   default: false
 - name: vs-multiple
   type: Boolean
   parameters:
   description: Determines whether the selection is of multiple selection.
   default: false
 - name: vs-max-selected
   type: Number
   parameters:
   description: Determine the number of maximum options to be able to select (only for active vs-multiple).
   default: All options
 - name: vs-label
   type: String
   parameters: null
   description: Label for the input element.
 - name: vs-success
   type: Boolean
   parameters: boolean bind
   description: Activate the status of success in the input.
   default: false
 - name: vs-danger
   type: Boolean
   parameters: boolean bind
   description: Activate the status of danger in the input.
   default: false
 - name: vs-warning
   type: Boolean
   parameters: boolean bind
   description: Activate the status of warning in the input.
   default: false
 - name: vs-description-text
   type: String
   parameters: null
   description: Add a description text to the input.
   default: false
 - name: vs-danger-text
   type: String
   parameters: null
   description: Text to show when the item is invalid.
   default: null
 - name: vs-success-text
   type: String
   parameters: null
   description: Text to show when the item is valid.
   default: null
 - name: vs-warning-text
   type: String
   parameters: null
   description: Text that is displayed in the warning state.
   default: null
 - name: is-selected.sync
   type: Boolean sync
   parameters: null
   description: Determines if the option is selected.
   default: null
---

# Select **- ssr**

<box header>

Selects clean and with a nice effect, very easy to implement

</box>

<box>

## Single selection

To add a select to the application we have the component `vs-select`.

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
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in options1" />
    </vs-select>
    <vs-select
    class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in options2" />
    </vs-select>
    <vs-select
      disabled="true"
      class="selectExample"
      label="Figuras"
      v-model="select3"
      >
      <vs-select-item :key="index" :disabled="index==2" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in options3" />
    </vs-select>
  </div>
</template>

<script>
export default {
  data(){
    return {
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
  },
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the select with the property `vs-color`

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
    :vs-color="colorx"
    class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in options1" />
    </vs-select>
    <vs-select
    :vs-color="select2"
    class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in options2" />
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

You can add the autocomplete functionality in the desired selected with the property `vs-autocomplete`.

<vuecode md>
<div slot="demo">

 <Demos-Select-Autocomplete/>

</div>

<div slot="code">

```html
<template lang="html">
  <div class="con-select-example">
    <vs-select
      vs-autocomplete
    class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in options1" />
    </vs-select>
    <vs-select
    vs-autocomplete
    class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in options2" />
    </vs-select>
    <vs-select
    vs-autocomplete
      disabled="true"
      class="selectExample"
      label="Figuras"
      v-model="select3"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in options3" />
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

You can have a selection with multiple selections with the property `vs-multiple`. If you need the user to select only a certain number of options you can use the property `vs-max-selected`.

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
    vs-multiple
    class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in options1" />
    </vs-select>
    <vs-select
    placeholder="Multiple and autocomplete"
    vs-multiple
    vs-autocomplete
    class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in options2" />
    </vs-select>
    <vs-select
    placeholder="Max Selected"
    vs-max-selected="2"
    vs-multiple
      class="selectExample"
      label="Figuras"
      v-model="select3"
      >
      <vs-select-item :key="index" :vs-value="item.value"  :vs-text="item.text" v-for="(item,index) in options3" />
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

Add a label to the input with the property `vs-label`.

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
      vs-label="Multiple"
      vs-label-placeholder="vs-Multiple"
      vs-multiple
      v-model="select1"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options1" />
    </vs-select>
    <vs-select
      placeholder="Search and select"
      class="selectExample"
      vs-label="Autocomplete"
      vs-label-placeholder="vs-Autocomplete"
      vs-multiple
      vs-autocomplete
      v-model="select2"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options2" />
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

You can add a state for example of in affirmative response to a validation with `vs-success` and if it is necessary to add a description or help to the user you can do it with the property `vs-description`

:::tip
  Each of the states you can change the text, for example in the case of `vs-danger-text` for the state of danger.
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
     :vs-success="true"
      vs-success-text="This field is valid"
      placeholder="Select"
      class="selectExample"
      vs-label="Success"
      vs-multiple
      v-model="select1"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in exampleOptions" />
    </vs-select>
       <vs-select
      :vs-danger="true"
      vs-danger-text="This field is invalid"
      placeholder="Select"
      class="selectExample"
      vs-label="Danger"
      vs-multiple
      v-model="select2"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in exampleOptions" />
    </vs-select>
       <vs-select
      :vs-warning="true"
      vs-warning-text="This field is invalid"
      placeholder="Select"
      class="selectExample"
      vs-label="Warning"
      vs-multiple
      v-model="select3"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in exampleOptions" />
    </vs-select>
       <vs-select
      vs-description-text="Simple info for multiple select"
      placeholder="Select"
      class="selectExample"
      vs-label="Description"
      vs-multiple
      v-model="select4"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in exampleOptions" />
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

```

</div>
</vuecode>
</box>
