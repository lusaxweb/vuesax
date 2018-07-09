---
API:
 - name: v-tooltip
   type: String || Object
   parameters: text, position, color, delay
   description: Main function that adds a tooltip to the element.
   default: null
 - name: text
   type: String
   parameters: null
   description: Tooltip text.
   default: null
 - name: position
   type: String
   parameters: null
   description: Position of the tooltip with respect to the element.
   default: null
 - name: delay
   type: Number
   parameters: 2000(2s)
   description: Delay time the tooltip appears.
   default: null
---

# Tooltip

<box header>

  Very easy to implement and in any element of the DOM.

</box>


<box>

## Default

You can add a tooltip to any element with the directive `v-tooltip`.

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-slider v-tooltip="'Tooltip Default'" v-model="valueslider"/>
    <vs-input-number v-tooltip="'Tooltip Default'" v-model="number1"/>
    <vs-button v-tooltip="'Tooltip Default'" vs-type="border">Primary</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      valueslider:24,
      number1:10,
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Position

You can change the position in which the tooltip will appear with the property `position`.

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Position />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button v-tooltip="{text:'Tooltip position top'}">Position Top</vs-button>
    <vs-button v-tooltip="{
      text:'Tooltip position bottom',
      position:'bottom'
    }">Position bottom</vs-button>
    <vs-button v-tooltip="{text:'Tooltip position left',position:'left'}">Position left</vs-button>
    <vs-button v-tooltip="{text:'Tooltip position right',position:'right'}">Position right</vs-button>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Delay

You can change the delay in appearing the tooltip with the property `delay`.

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Delay />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button v-tooltip="{text:'Tooltip default delay'}">Delay default</vs-button>
    <vs-button v-tooltip="{
      text:'Tooltip delay 0.5s',
      delay:500
    }">Delay 0.5s</vs-button>
    <vs-button v-tooltip="{text:'Tooltip delay 1.5s',delay:3000}">Delay 3s</vs-button>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Color

To change the color of the tooltip we have the property `color`, as a value you can put the main colors as:`primary`, `success`, `danger`, `warning`, `dark`, or a color **RGB**, **HEX**.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button v-tooltip="{text:'Default Color'}">Default Color</vs-button>
    <vs-button  vs-type="primary-border" v-tooltip="{
      text:'Color primary',
      color:'primary'
    }">Color primary</vs-button>
    <vs-button vs-color="success" vs-type="border" v-tooltip="{text:'Color success',color:'success'}">Color success</vs-button>
    <vs-button vs-color="danger" vs-type="border" v-tooltip="{text:'Color danger',color:'danger'}">Color danger</vs-button>
    <vs-button vs-color="warning" vs-type="border" v-tooltip="{text:'Color warning',color:'warning'}">Color warning</vs-button>
    <vs-button vs-color="dark" vs-type="border" v-tooltip="{text:'Color dark',color:'dark'}">Color dark</vs-button>
    <vs-button vs-color="success" vs-type="gradient" v-tooltip="{text:'Color RGB',color:'rgb(42, 207, 133)'}">Color RGB</vs-button>
    <vs-button vs-color="danger" vs-type="gradient" v-tooltip="{text:'Color HEX',color:'rgb(74, 13, 107)'}">Color HEX</vs-button>
  </div>
</template>
```

</div>
</vuecode>
</box>
