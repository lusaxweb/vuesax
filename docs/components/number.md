---
API:
 - name: color
   type: String
   parameters: RGB, HEX, primary, success, danger, warning, dark
   description: Component color.
   default: null
 - name: max
   type: Number
   parameters: null
   description: Maximum number admitted.
   default: null
 - name: min
   type: Number
   parameters: null
   description: Minimum number admitted.
   default: null
 - name: size
   type: String
   parameters: medium, small, mini
   description: Component size.
   default: null
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: icon-dec
   type: String
   parameters: icon name
   description: Icon used to indicate decrement.
   default: remove
 - name: icon-inc
   type: String
   parameters: icon name
   description: Icon used to indicate increment.
   default: add
 - name: step
   type: Number
   parameters: valid number
   description: Number to be added or decreased each time.
   default: 1
 - name: label
   type: String
   parameters:
   description: Add a descriptive text in the input number.
   default: null
---


# Number Input

<box header>

  Input of single numbers pleasant to the user and practical.

</box>

<box>

## Default

If you need to add a component that handles a single number, use the component `vs-input-number`. You can also change the increment and decrement button icons using the properties `icon-inc` and `icon-dec` respectively.

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
    <vs-input-number :is-disabled="true" v-model="number2"/>
    <vs-input-number v-model="number3" icon-inc="expand_less" icon-dec="expand_more"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number:34,
      number1:48,
      number2:50,
      number3:55,
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

You can change the color of the **Input-Number** with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

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
    <vs-input-number color="danger" v-model="number1"/>
    <vs-input-number color="success" v-model="number2"/>
    <vs-input-number color="warning" v-model="number3"/>
    <vs-input-number color="dark" v-model="number4"/>
    <vs-input-number color="rgb(218, 24, 94)" v-model="number5"/>
    <vs-input-number color="#ad3af9" v-model="number6"/>
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
    <vs-input-number min="13" max="21" v-model="number1"/>
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

To change the size of the component, you can use the property `vs-size`. The allowed values are: `medium`, `small`, and `mini`.

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Size />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number0"/>
    <vs-input-number size="medium" v-model="number1"/>
    <vs-input-number size="small" v-model="number2"/>
    <vs-input-number size="mini" v-model="number3"/>
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

<box>

## Step

To change the number to be added or decreased of the component, you can use the property `step`.

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Step />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number0" :step="5"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number0:5
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Decimal

Number Input also supports decimal values.

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Decimal />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number0" :step="1.43"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number0:1.98
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Label

Number Input supports adding labels for number inputs.

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Label />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number0" label="passengers:"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number0:1
    }
  }
}
</script>
```

</div>
</vuecode>
</box>
