---
API:
 - name: $vs.theme
   type: function
   parameters: primary, success, danger, warning, dark
   description: Change the color of the whole application and components (at run time).
   default: null
---

# Colors <!--#new-->

<box header>

Vuesax has the main colors that are maintained throughout the application to facilitate the change and effective operation

</box>
<box>

## Colors Defaults

We have a series of colors that are used by default. They include:

- primary
- success
- danger
- warning
- dark

For each color, we think has its functionality in the application as alerts of errors (**danger**), warnings to the user (**warning**), communications of approval (**success**), or main color of the application (**primary**).

<vuecode md>
<div slot="demo">
  <Demos-Colors-Defaultscolors />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="con-colors">
    <ul>
      <li class="primary">
        primary
      </li>
      <li class="success">
        success
      </li>
      <li class="danger">
        danger
      </li>
      <li class="warning">
        warning
      </li>
      <li class="dark">
        dark
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.con-colors ul{
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-colors li{
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  background: rgb(155, 250, 149);
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  cursor: default;
}
.primary {
  background: rgb(var(--primary)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--primary),.9);
}
.success {
  background: rgb(var(--success)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--success),.9);
}
.danger {
  background: rgb(var(--danger)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--danger),.9);
}
.warning {
  background: rgb(var(--warning)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--warning),.9);
}
.dark {
  background: rgb(var(--dark)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--dark),.9);
}
</style>
```

</div>
</vuecode>

</box>

<box>

## Customize Theme Colors

We almost always need a personalized application with own colors. In Vuesax, you can change the main colors to those that you need and the branding that your application has.

When starting **Vuesax** tell it to use your colors. We add the new colors as parameters.

```css
Vue.use(Vuesax, {
  theme:{
    colors:{
      primary:'#5b3cc4',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'rgb(36, 33, 69)'
    }
  }
})
```

:::warning
  Only **RGB** and **HEX** colors are supported.
:::


<vuecode md title="Example of the result">
<div slot="demo">
  <Demos-Colors-Changecolors />
</div>
</vuecode>
</box>

<box>

## Change Colors

You can change the color of the application in process of execution with the function `$vs.theme` which as a parameter requires a json with the colors to change

Imagine that in the middle of the application we want the primary color change would be something like this:

```js
this.$vs.theme({
  primary:'rgb(5, 173, 88)' // my new color
})
```

By doing this, all **Vuesax** components in the application that use a primary color with change.

Select one of the colors to change it and that all the components of this documentation have that color.

<vuecode md>
<div slot="demo">
  <Demos-Colors-Changecolorsejecution />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="con-colors">
    <ul>
      <li class="colorprimaryx">
        <input @change="changeColor($event.target.value,'primary')" type="color" name="" value="">
        Primary
      </li>
      <li class="colorsuccessx">
        <input @change="changeColor($event.target.value,'success')" type="color" name="" value="">
        Success
      </li>
      <li class="colordangerx">
        <input @change="changeColor($event.target.value,'danger')" type="color" name="" value="">
        Danger
      </li>
      <li class="colorwarningx">
        <input @change="changeColor($event.target.value,'warning')" type="color" name="" value="">
        Warning
      </li>
      <li class="colordarkx">
        <input @change="changeColor($event.target.value,'dark')" type="color" name="" value="">
        Dark
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    saludo: 'Hola mundo'
  }),
  methods:{
    changeColor(colorx, whatColor){
      this.$vs.theme({
        [whatColor]:colorx
      })
    }
  }
}
</script>

<style lang="css" scoped>
.con-colors ul{
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-colors li{
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  cursor: default;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  transition: all .2s ease;
  cursor: pointer;
}
.con-colors li:hover {
  transform: translate(0,8px);
  box-shadow: 0px 0px 40px -10px rgba(255, 255, 255,0) !important;
}
.con-colors li input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.colorprimaryx {
  background: rgb(var(--primary)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--primary),.9);
}
.colorsuccessx {
  background: rgb(var(--success)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--success),.9);
}
.colordangerx {
  background: rgb(var(--danger)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--danger),.9);
}
.colorwarningx {
  background: rgb(var(--warning)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--warning),.9);
}
.colordarkx {
  background: rgb(var(--dark)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--dark),.9);
}
</style>
```

</div>
</vuecode>
</box>

<box>

## Change Colors SSR

To change the main colors in SSR (Server-Side Rendering) for example if you are using [nuxt.js](https://nuxtjs.org/) the main variables of [stylus](http://stylus-lang.com) and those of css

To change the variables we must first import them into a `.styl` file and change the values ​​of the variables by the colors required

:::warning
  In order to change the variables and use them you have to have implemented the stylus loaders, to implement them by npm would be something like this

  ```bash
    npm i stylus stylus-loader --save-dev
  ```
:::

:::warning
  The value of the colors can only be `RGB` and nothing else is added to the number without the letters `rgb` or the parentheses

  For example if the color is `rgb(50,100,200)` the value to be implemented is only: `50,100,200`
:::

```css
// main.styl

@import '~vuesax/dist/style/vuesax.styl'

$vs-primary = 50,100,200

:root {
  --vs-primary: $vs-primary
}
```

:::tip
The stylus variables of the main colors are:

  ```
    $vs-primary
    $vs-success
    $vs-danger
    $vs-warning
    $vs-dark
  ```

and the css variables are:

  ```
    --vs-primary
    --vs-success
    --vs-danger
    --vs-warning
    --vs-dark
  ```
:::

</box>
