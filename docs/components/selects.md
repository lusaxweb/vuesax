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
---

# Select <!--#update-->

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
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options1" />
    </vs-select>
    <vs-select
    class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options2" />
    </vs-select>
    <vs-select
      disabled="true"
      class="selectExample"
      label="Figuras"
      v-model="select3"
      >
      <vs-select-item :key="index" :disabled="index==2" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options3" />
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
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options1" />
    </vs-select>
    <vs-select
    :vs-color="select2"
    class="selectExample"
      label="Figuras"
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
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options1" />
    </vs-select>
    <vs-select
    vs-autocomplete
    class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options2" />
    </vs-select>
    <vs-select
    vs-autocomplete
      disabled="true"
      class="selectExample"
      label="Figuras"
      v-model="select3"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options3" />
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

You can have a selection with multiple selections with the property `vs-multiple`, if you need the user to select only a certain number of options you can use the property `vs-max-selected`.

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
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options1" />
    </vs-select>
    <vs-select
    placeholder="Multiple and autocomplete"
    vs-multiple
    vs-autocomplete
    class="selectExample"
      label="Figuras"
      v-model="select2"
      >
      <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="item,index in options2" />
    </vs-select>
    <vs-select
    placeholder="Max Selected"
    vs-max-selected="2"
    vs-multiple
      class="selectExample"
      label="Figuras"
      v-model="select3"
      >
      <vs-select-item :key="index" :vs-value="item.value"  :vs-text="item.text" v-for="item,index in options3" />
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
