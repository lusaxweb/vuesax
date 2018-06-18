---
API:
 - name: vs-color
   type: String
   parameters: RGB or HEX
   description: Component color Slider.
   default: primary
 - name: change
   type: Function
   parameters: null
   description: function que se ejecuta al hacer cambio en el valor del slider.
   default: null
 - name: disabled
   type: Boolean
   parameters: null
   description: determines if the object is disabled.
   default: null
 - name: vs-step
   type: Number
   parameters: 1-100
   description: Determines by how much slider value should increment/decrement when using arrow keys.
   default: 1
 - name: vs-not-percentage
   type: Boolean
   parameters: true, false
   description: Determines by how much slider value should increment/decrement when using arrow keys.
   default: false
---

# Slider

<box header>

  Change the values with very good UX.

</box>


<box>

## Default

To implement a **Slider** we have the `vs-slider` component.

<vuecode md>
<div slot="demo">
  <Demos-Slider-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <vs-slider v-model="value1"/>
    <vs-slider disabled="true" v-model="value2"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:79,
      value2:40
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Color

You can change the slider's color with the property `vs-color`, you can add the main colors like: `primary`, `success`,`danger`, `warning`,`dark`.

<vuecode md>
<div slot="demo">
  <Demos-Slider-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input type="color" v-model="colorx" name="" >
    <vs-slider :vs-color="colorx" v-model="value1"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorx:'#db7d12',
      value1:24
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Change Method

You can add a function that will be triggered every time the value changes with `@change="MyFunction"`

<vuecode md>
<div slot="demo">
  <Demos-Slider-Change />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-slider @change="cambio" :vs-color="'rgb(45, 208, 129)'" v-model="value1"/>
    <div :style="{'width':widthx+'px','height':heightx+'px'}" class="cuadrox">
      {{value1}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:55,
      widthx:55,
      heightx:55
    }
  },
  methods:{
    cambio(value){
      this.widthx = value
      this.heightx = value
    }
  }
}
</script>

<style lang="css">
  .cuadrox {
    padding: 10px;
    background: rgb(45, 208, 129);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    font-size: 20px;
    border-radius: 10px;
  }
</style>
```

</div>
</vuecode>
</box>
