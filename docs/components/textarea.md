---
API:
 - name: label
   type: String
   parameters: null
   description: label of textarea.
   default: null
 - name: counter
   type: Number
   parameters: null
   description: Determines the maximum number of characters.
   default: null
 - name: counter-danger.sync
   type: Boolean
   parameters: null
   description: Determine if the value exceeds the counter.
   default: false
 - name: width
   type: String
   parameters: null
   description: Set the width of the textarea
   default: null
 - name: height
   type: String
   parameters: null
   description: Set the height of the textarea
   default: null
---

# Textarea

<box header>

  Simple and pleasant, very easy to implement

</box>

<box>

## Default

To add a **Textarea** we have the component `vs-textarea`

<vuecode md>
<div slot="demo">
  <Demos-Textarea-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-textarea v-model="textarea" />
  </div>
</template>

<script>
export default {
  data:()=>({
    textarea: '',
  })
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Label

If you need to add a label you can use the `label` property

<vuecode md>
<div slot="demo">
  <Demos-Textarea-Label />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-textarea label="Label in Textarea" v-model="textarea" />
  </div>
</template>

<script>
export default {
  data:()=>({
    textarea: '',
  })
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Counter

There are times when we need the user to only enter a certain number of characters for it, we have the property `counter`, the value is a number and determines the maximum

:::tip
  To get when the number of characters is exceeded use the property `counter-danger.sync`
:::

<vuecode md>
<div slot="demo">
  <Demos-Textarea-Counter />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-textarea counter="20" label="Counter: 20" :counter-danger.sync="counterDanger" v-model="textarea" />
  </div>
</template>

<script>
export default {
  data:()=>({
    textarea: '',
    counterDanger: false
  })
}
</script>

<style lang="stylus">
</style>
```

</div>
</vuecode>
</box>

<box>

## Width

You can set the width of the textarea width the `width` property. You can also use css values like`10rem` or `50%` as value.

<vuecode md>
<div slot="demo">
  <Demos-Textarea-Width />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-textarea label="Width set to 300px" width="300px" />
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Height

You can set the height of the textarea with the `height` property. You can also use css values like`10rem` or `50%` as value.

<vuecode md>
<div slot="demo">
  <Demos-Textarea-Height />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-textarea label="Height set to 200px" height="200px" />
  </div>
</template>
```

</div>
</vuecode>
</box>
