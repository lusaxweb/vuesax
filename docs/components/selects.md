---
API:
 - name: options
   type: Array
   parameters: {text:'Example',value:'1'}
   description: Options to select.
   default: null
 - name: label
   type: String
   parameters:
   description: Select label (upper text).
   default: null
---

# Select

<box header>

Selects clean and with a nice effect, very easy to implement

</box>

<box>

## Single selection

To add a select to the application we have the component `vs-select`.

<vuecode md>
<div slot="demo">

 <Demos-Select/>

</div>

<div slot="code">

```html
<template lang="html">
  <div class="con-select">
    <vs-select
      class="vs-w-4"
      label="Peliculas"
      v-model="select1"
      :options="options1"
      ></vs-select>
    <vs-select
      class="vs-w-4"
      label="Figuras"
      v-model="select3"
      :options="options3"
      ></vs-select>
      <vs-select
        disabled="true"
        class="vs-w-4"
        label="Colores"
        v-model="select2"
        :options="options2"
        ></vs-select>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return {
      select1:1,
      select2:1,
      select3:1,
      options1:[
        {text:'IT',value:1},
        {text:'Blade Runner',value:2},
        {text:'Thor Ragnarok',value:3},
      ],
      options2:[
        {text:'Rojo',value:1},
        {text:'Verde',value:2},
        {text:'Azul',value:3},
      ],
      options3:[
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
  }
}
</script>
```

</div>
</vuecode>
</box>
