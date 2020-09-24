---
API:
 - name: color
   type: String
   parameters: RGB or HEX
   description: Component color Slider.
   default: primary
 - name: icon
   type: String
   parameters: Material Icons
   description: Determines the icon displayed when displaying the value.
   default: null
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: step
   type: Number
   parameters: 1-100
   description: Determines by how much slider value should increment/decrement when using arrow keys.
   default: 1
 - name: ticks
   type: Boolean
   parameters: true, false
   description: Add the dividing lines of the allowed values.
   default: false
 - name: text-fixed
   type: String
   parameters: null
   description: Determines the fixed text next to the value.
   default: false
 - name: min
   type: Number
   parameters: null
   description: Determines the minimum number admitted.
   default: 0
 - name: max
   type: Number
   parameters: null
   description: Determine the maximum number allowed.
   default: 100
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
    <vs-slider max=200 v-model="value3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:67,
      value2:34,
      value3:60
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

You can change the slider's color with the property `color`. You can also add the main colors like: `primary`, `success`,`danger`, `warning`,`dark`.

<vuecode md>
<div slot="demo">
  <Demos-Slider-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input type="color" v-model="colorx" name="" >
    <vs-slider :color="colorx" v-model="value1"/>
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

## Ticks

With Ticks you can allow the user to select a value inside a range of allowed values. With the property **step** you can change the distance between each Tick. If you want decimal steps, just set the property **step-decimals** to true.

<vuecode md>
<div slot="demo">
  <Demos-Slider-Ticks />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <vs-slider step=10 v-model="value1"/>
    <vs-slider ticks step=25 v-model="value2"/>
    <vs-slider ticks step=0.5 :step-decimals="true" v-model="value3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:60,
      value2:25,
      value3: 25.5
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Range

With Range you can allow the user to select a range inside a range of allowed values. You can use the v-model property with **Array** and a minimum and maximum value ​​represented as: `[min, max]`

<vuecode md>
<div slot="demo">
  <Demos-Slider-Range />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <vs-slider step=10 v-model="value1"/>
    <vs-slider ticks step=25 v-model="value2"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:60,
      value2:25
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Icons

You can add an icon with the `icon` property to better representation the sliders to the user.

::: tip
Vuesax uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

<vuecode md>
<div slot="demo">
  <Demos-Slider-Icons />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <vs-slider icon="volume_up" max=10 v-model="value1"/>
    <vs-slider icon="group_add" ticks step=25 v-model="value2"/>
    <vs-slider icon="star" ticks max=5 v-model="value3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:60,
      value2:25,
      value3:[2,4]
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Text Fixed

Determine the text that will be fixed next to the value with the property `text-fixed`

<vuecode md>
<div slot="demo">
  <Demos-Slider-Textfixed />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <vs-slider color="success" text-fixed=% v-model="value1"/>
    <vs-slider color="danger" text-fixed=Min ticks step=25 v-model="value2"/>
    <vs-slider color="dark" text-fixed=K ticks max=5 v-model="value3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:6,
      value2:25,
      value3:[2,4]
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

:::tip
  You can change the minimum or maximum number admitted with the properties

  - min
  - max
:::

<vuecode md>
<div slot="demo">
  <Demos-Slider-Change />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-slider :min="50" @change="cambio" color="rgb(45, 208, 129)" v-model="value1"/>
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
