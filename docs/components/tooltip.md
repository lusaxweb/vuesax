---
API:
 - name: text
   type: String
   parameters: null
   description: Determine the text inside the tooltip.
   default: null
 - name: color
   type: String
   parameters: null
   description: Change the color of the tooltip.
   default: null
 - name: delay
   type: String
   parameters: null
   description: Change the time the tooltip appears.
   default: null
 - name: position
   type: String
   parameters: top, left, bottom, right
   description: Change the position where the tooltip will appear.
   default: null
 - name: title
   type: String
   parameters: null
   description: Add a title to the tooltip.
   default: null
---

# Tooltip **- ssr**

<box header>

  Very easy to implement and in any element of the DOM.

</box>


<box>

## Default

To add a tooltip we have the component `vs-tooltip`

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-tooltip text="Tooltip Default">
       <vs-switch v-model="switch1"/>
    </vs-tooltip>
    <vs-tooltip text="Tooltip Default">
      <vs-input-number v-model="number1"/>
    </vs-tooltip>
    <vs-tooltip text="Tooltip Default">
      <vs-button vs-color="primary" vs-type="border">Button</vs-button>
    </vs-tooltip>
  </div>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
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
    <vs-tooltip text="Tooltip position Left" position="left" >
      <vs-button vs-type="gradient">Left</vs-button>
    </vs-tooltip>
    <vs-tooltip text="Tooltip position Top" position="top" >
      <vs-button vs-type="gradient">Top</vs-button>
    </vs-tooltip>
    <vs-tooltip text="Tooltip position Bottom" position="bottom" >
      <vs-button vs-type="gradient">Bottom</vs-button>
    </vs-tooltip>
    <vs-tooltip text="Tooltip position Right" position="right" >
      <vs-button vs-type="gradient">Right</vs-button>
    </vs-tooltip>
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
    <vs-tooltip text="Tooltip default delay">
      <vs-button>Delay default</vs-button>
    </vs-tooltip>
    <vs-tooltip delay=".5s" text="Tooltip delay 0.5s">
      <vs-button>Delay 0.5s</vs-button>
    </vs-tooltip>
    <vs-tooltip delay="2s" text="Tooltip delay 2s">
      <vs-button>Delay 2s</vs-button>
    </vs-tooltip>
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
    <vs-tooltip text="Tooltip default delay">
      <vs-button vs-type="gradient">Default Color</vs-button>
    </vs-tooltip>
    <vs-tooltip color="primary" text="Tooltip default delay">
      <vs-button vs-type="border">Color primary</vs-button>
    </vs-tooltip>
    <vs-tooltip color="success" text="Tooltip default delay">
      <vs-button vs-color="success" vs-type="border">Color success</vs-button>
    </vs-tooltip>
    <vs-tooltip color="danger" text="Tooltip default delay">
      <vs-button vs-color="danger" vs-type="border">Color danger</vs-button>
    </vs-tooltip>
    <vs-tooltip color="warning" text="Tooltip default delay">
      <vs-button vs-color="warning" vs-type="border">Color warning</vs-button>
    </vs-tooltip>
    <vs-tooltip color="dark" text="Tooltip default delay">
      <vs-button vs-color="dark" vs-type="border">Color dark</vs-button>
    </vs-tooltip>
    <vs-tooltip color="rgb(42, 207, 133)" text="Tooltip default delay">
      <vs-button vs-color="rgb(42, 207, 133)" vs-type="border">Color RGB</vs-button>
    </vs-tooltip>
    <vs-tooltip color="#4a0d6b" text="Tooltip default delay">
      <vs-button vs-color="#4a0d6b" vs-type="border">Color HEX</vs-button>
    </vs-tooltip>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Title

If necessary You can add a title to the tooltip with the property `title`

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Title />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-tooltip
      title="Are you sure?"
      color="warning"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet.">
       <vs-button vs-color="warning" vs-type="flat">Title Tooltip</vs-button>
    </vs-tooltip>
  </div>
</template>
```

</div>
</vuecode>
</box>

