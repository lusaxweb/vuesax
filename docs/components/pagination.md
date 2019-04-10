---
API:
 - name: total
   type: Number
   parameters:
   description: The total links the pagination will have
   default: false
 - name: max
   type: Number
   parameters:
   description: The maximum pages that should be shown
   default: 9
 - name: goto
   type: Boolean
   parameters: true, false
   description: Allows you to jump to a specific page
   default: false
 - name: prev-icon
   type: String
   parameters:
   description: Customize the previous button icon
   default: chevron_left
 - name: next-icon
   type: String
   parameters:
   description: Customize the next button icon
   default: chevron_right
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: color
   type: String
   parameters:
   description: Change the color of the pagination
   default: primary
contributors:
 - VicGUTT
---

# Pagination

<box header>

  Pagination is a sequence of numbers assigned to pages. It helps split up large content into shorter, easier and more breathable pages.

</box>


<box>

## Default

The pagination component consists of several elements, all of which are optional. So with no extra class, your pagination links will look as follow :

<vuecode md center>
<div slot="demo">
  <Demos-Pagination-Default />
</div>
<div slot="code">

```html
<template>
  <div>
    <vs-pagination :total="40" v-model="currentx"></vs-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 14
  })
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Icons

To customize the previous and next page icons change the value of the `prev-icon` and `prev-icon` directives.
By default, their values are respectively **arrow_back** and **arrow_forward**.

::: tip
Vuesax uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).

FontAwesome and other fonts library are supported. Simply use the `icon-pack` with `fa` or `fas`. You still need to include the Font Awesome icons in your project.

:::

<vuecode md center>
<div slot="demo">
  <Demos-Pagination-Icons />
</div>
<div slot="code">

```html
<template>
  <div>
    <vs-pagination :total="100" v-model="currentx" prev-icon="arrow_back" next-icon="arrow_forward"></vs-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 64
  })
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Limit the amount of links shown

By default Vuesax will show a maximum of **9** links. This default behaviour can be changed by setting the `max` directive to a different integer value.

::: tip
The amount given to the `max` directive should take into account the first and last pages plus the ellipses "`...`"
:::

::: warning
Setting the `max` directive to a value lesser then `5` when the `total` is greater then that will result in the pagination only showing the previous/next buttons as well as the first and last links.
:::

<vuecode md center>
<div slot="demo">
<Demos-Pagination-Max />
</div>
<div slot="code">

```html
<template>
  <div>
    <vs-pagination :total="30" v-model="currentx" :max="13"></vs-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 17
  })
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Goto

The `goto` directive will allow users to directly jump to a desired page.

::: tip
If the value given is lower than **1** it will jump to page **1**. However if the value is greater than `total` it will jump to the last page.
:::

<vuecode md center>
<div slot="demo">
<Demos-Pagination-Goto />
</div>
<div slot="code">

```html
<template>
  <div>
    <vs-pagination :total="20" v-model="currentx" goto ></vs-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 8
  })
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Colors

You can change the color of the component with the property `color`, you can use the [Main](/theme/) colors or **RGB** and **HEX** colors

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
<Demos-Pagination-Colors />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input class="input-color" v-model="colorx" type="color">
    <vs-pagination :color="colorx" :total="20" v-model="currentx"></vs-pagination>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx: '#f91f43',
    currentx: 7
  })
}
</script>

<style lang="stylus">
.input-color
  margin-right 5px
</style>
```

</div>
</vuecode>
</box>


<box>

## Programmatic Inc/Dec

You can also update page number from outside of pagination component.

<vuecode md>
<div slot="demo">
<Demos-Pagination-ProgrammaticChange />
</div>
<div slot="code">

```html
<template>
  <div>
    <p>Current: {{ currentx }}</p>
    <vs-button @click="currentx++">Increment</vs-button>
    <vs-button @click="currentx--">Decrement</vs-button>
    <br><br>
    <vs-pagination :total="20" v-model="currentx"></vs-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 5
  })
}
</script>
```

</div>
</vuecode>
</box>
