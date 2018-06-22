---
API:
 - name: vs-color
   type: String
   parameters: RGB, HEX, primary, success, danger, warning, dark
   description: Component color.
   default: null
 - name: vs-max
   type: Number
   parameters: null
   description: maximum number admitted.
   default: null
 - name: vs-min
   type: Number
   parameters: null
   description: minimum number admitted.
   default: null
 - name: vs-size
   type: String
   parameters: medium, small, mini
   description: Component size.
   default: null
---

# Number Input

<box header>

  Input of single numbers pleasant to the user and practical.

</box>

<box>

## Default

If you need to add a component that only handles the data of type number add a component `vs-input-number`.

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number"/>
    <vs-input-number :disabled="true" v-model="number1"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number:34,
      number1:48
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

You can change the color of the **Input-Number** with the property `vs-color`. The color could be one of the main ones like:`primary`, `success`,`danger`, `warning`,`dark` or **RGB**, **HEX**.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input-number vs-color="danger" v-model="number1"/>
    <vs-input-number vs-color="success" v-model="number2"/>
    <vs-input-number vs-color="warning" v-model="number3"/>
    <vs-input-number vs-color="dark" v-model="number4"/>
    <vs-input-number vs-color="rgb(218, 24, 94)" v-model="number5"/>
    <vs-input-number vs-color="#ad3af9" v-model="number6"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number1:196,
      number2:88,
      number3:25,
      number4:12,
      number5:590,
      number6:32,
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Min - Max

You can restrict the maximum number or the minimum with the properties `vs-min`, `vs-max`.

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Minmax />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input-number vs-min="13" vs-max="21" v-model="number1"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number1:21,
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Size

To change the size of Component you can use the property `vs-size`. The allowed values are: `medium`, `small`, `mini`.

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Size />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number0"/>
    <vs-input-number
    vs-size="medium"
    v-model="number1"/>
    <vs-input-number
    vs-size="small"
    v-model="number2"/>
    <vs-input-number
    vs-size="mini"
    v-model="number3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number0:95,
      number1:21,
      number2:67,
      number3:2
    }
  }
}
</script>
```

</div>
</vuecode>
</box>
