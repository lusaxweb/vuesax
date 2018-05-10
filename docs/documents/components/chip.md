---
API:
 - name: vs-color
   type: String
   parameters: RGB, HEX, primary, success, danger, warning, dark
   description: Component color
   default: primary
 - name: vs-closable
   type: Boolean
   parameters: null
   description: With closable button
   default: false
 - name: vs-icon
   type: String
   parameters: null
   description: With custom icon
   default: null
 - name: placeholder
   type: String
   parameters: null
   description: Placeholder text (only in vs-chips)
   default: null
 - name: items
   type: Array
   parameters: bind
   description: the chips within the component that can be removed and add (only in vs-chips)
   default: null
contributors:
  - fergardi
---

# Chip

<box header>

  Chips are compact elements that represent an input, attribute, or action.

</box>

<box>

## Color

To represent symple data with colorful options.

<vuecode md center>
<div slot="demo">
  <vs-chip vs-color="primary">primary</vs-chip>
  <vs-chip vs-color="warning">warning</vs-chip>
  <vs-chip vs-color="danger">danger</vs-chip>
  <vs-chip vs-color="success">success</vs-chip>
  <vs-chip vs-color="dark">dark</vs-chip>
  <vs-chip vs-color="rgb(164, 69, 15)">RGB</vs-chip>
  <vs-chip vs-color="#24c1a0">HEX</vs-chip>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-chip vs-color="primary">primary</vs-chip>
    <vs-chip vs-color="warning">warning</vs-chip>
    <vs-chip vs-color="danger">danger</vs-chip>
    <vs-chip vs-color="success">success</vs-chip>
    <vs-chip vs-color="dark">dark</vs-chip>
    <vs-chip vs-color="rgb(164, 69, 15)">RGB</vs-chip>
    <vs-chip vs-color="#24c1a0">HEX</vs-chip>
  </div>
</template>

<script>
export default {
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Icon

Add a nice icon to the chip.

::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::

<vuecode md center>
<div slot="demo">
  <vs-chip vs-icon="info" vs-color="primary">primary</vs-chip>
  <vs-chip vs-icon="help" vs-color="warning">warning</vs-chip>
  <vs-chip vs-icon="error" vs-color="danger">danger</vs-chip>
  <vs-chip vs-icon="check_circle" vs-color="success">success</vs-chip>
  <vs-chip vs-icon="account_circle" vs-color="dark">dark</vs-chip>
  <vs-chip vs-icon="alarm" vs-color="rgb(164, 69, 15)">RGB</vs-chip>
  <vs-chip vs-icon="home" vs-color="#24c1a0">HEX</vs-chip>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-chip vs-icon="info" vs-color="primary">primary</vs-chip>
    <vs-chip vs-icon="help" vs-color="warning">warning</vs-chip>
    <vs-chip vs-icon="error" vs-color="danger">danger</vs-chip>
    <vs-chip vs-icon="check_circle" vs-color="success">success</vs-chip>
    <vs-chip vs-icon="account_circle" vs-color="dark">dark</vs-chip>
    <vs-chip vs-icon="alarm" vs-color="rgb(164, 69, 15)">RGB</vs-chip>
    <vs-chip vs-icon="home" vs-color="#24c1a0">HEX</vs-chip>
  </div>
</template>

<script>
export default {
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Closable

To make a chip closable.

<vuecode md>
<div slot="demo">
  <Demos-Chips-Closable />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-chip vs-closable="true" vs-color="primary">primary</vs-chip>
    <vs-chip vs-closable="true" vs-color="warning">warning</vs-chip>
    <vs-chip vs-closable="true" vs-color="danger">danger</vs-chip>
    <vs-chip vs-closable="true" vs-color="success">success</vs-chip>
    <vs-chip vs-closable="true" vs-color="dark">dark</vs-chip>
  </div>
</template>

<script>
export default {
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Add and Remove Items

You can add and remove chips with the `vs-chips` component and as a main parameter `items` an array.

<vuecode md>
<div slot="demo">
  <Demos-Chips-Addremove />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="total">
    <div class="modelx">
      {{chips}}
    </div>
    <vs-chips vs-color="rgb(145, 32, 159)" placeholder="Nuevos Elementos" :items="chips"></vs-chips>
  </div>
</template>

<script>
export default {
  data(){
    return {
      chips:[
        "luis",
        "carols",
        "summer"
      ]
    }
  }
}
</script>
```

</div>
</vuecode>

</box>
