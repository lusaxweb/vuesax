---
API:
  - name: vs-type
    type: String
    parameters: null
    description: The type of button to use
    default: filled
  - name: color
    type: String
    parameters: null
    description: Change the color of the button
    default: primary
  - name: text-color
    type: String
    parameters: null
    description: Change the font color of the button
    default: null
  - name: vs-icon
    type: String
    parameters: Material Icons
    description: Determine the button icon
    default: null
  - name: vs-icon-after
    type: Boolean
    parameters: null
    description: Determines if the icon is set after the text
    default: false
  - name: vs-line-origin
    type: String
    parameters: null
    description: Determines the output of the line on the button (line)
    default: center
  - name: vs-line-position
    type: String
    parameters: null
    description: Determine if the button (line) has the line up or down
    default: center
  - name: vs-gradient-direction
    type: String
    parameters: null
    description: Determine the angle of the gradient on the button
    default: 30 deg
  - name: vs-gradient-color-secondary
    type: String
    parameters: null
    description: Change the secondary color on the button (gradient)
    default: primary
  - name: vs-radius
    type: Boolean
    parameters: null
    description: Change button radius to circle
    default: false
  - name: to
    type: String | Object
    parameters: null
    description: Added router push navigation to button
    default: false
---

# Buttons

<box header>

  Easy-to-use button components

</box>

<box>

## Filled

To define the type of button the directive is used `vs-type` with the value of some type of button like it can be: `filled`.

<vuecode md center>
<div slot="demo">
<vs-button vs-type="filled">Primary</vs-button>
<vs-button color="success" vs-type="filled">Success</vs-button>
<vs-button color="danger" vs-type="filled">Danger</vs-button>
<vs-button color="warning" vs-type="filled">Warning</vs-button>
<vs-button color="dark" vs-type="filled">Dark</vs-button>
<vs-button color="rgb(11, 189, 135)" vs-type="filled">RGB</vs-button>
<vs-button disabled vs-type="filled">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" vs-type="filled">Primary</vs-button>
<vs-button color="success" vs-type="filled">Success</vs-button>
<vs-button color="danger" vs-type="filled">Danger</vs-button>
<vs-button color="warning" vs-type="filled">Warning</vs-button>
<vs-button color="dark" vs-type="filled">Dark</vs-button>
<vs-button color="rgb(134, 4, 98)" vs-type="filled">RGB</vs-button>
<vs-button disabled vs-type="filled">Disabled</vs-button>
<vs-button vs-color="primary" vs-type="filled" to="/components/list.html">Router</vs-button>
```

</div>
</vuecode>
</box>

<box>

## Border

To add a type of button with edges we change the value of `border`.

<vuecode md center>
<div slot="demo">
<vs-button color="primary" vs-type="border">Primary</vs-button>
<vs-button color="success" vs-type="border">Success</vs-button>
<vs-button color="danger" vs-type="border">Danger</vs-button>
<vs-button color="warning" vs-type="border">Warning</vs-button>
<vs-button color="dark" vs-type="border">Dark</vs-button>
<vs-button color="rgb(11, 189, 135)" vs-type="border">RGB</vs-button>
<vs-button disabled vs-type="border">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" vs-type="border">Primary</vs-button>
<vs-button color="success" vs-type="border">Success</vs-button>
<vs-button color="danger" vs-type="border">Danger</vs-button>
<vs-button color="warning" vs-type="border">Warning</vs-button>
<vs-button color="dark" vs-type="border">Dark</vs-button>
<vs-button color="rgb(11, 189, 135)" vs-type="border">RGB</vs-button>
<vs-button disabled vs-type="border">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<!-- flat -->
<box>

## Flat

To add a type of button with edges we change the value of `flat`.

<vuecode md center>
<div slot="demo">
<vs-button color="primary" vs-type="flat">Primary</vs-button>
<vs-button color="success" vs-type="flat">Success</vs-button>
<vs-button color="danger" vs-type="flat">Danger</vs-button>
<vs-button color="warning" vs-type="flat">Warning</vs-button>
<vs-button color="dark" vs-type="flat">Dark</vs-button>
<vs-button color="rgb(11, 189, 135)" vs-type="flat">RGB</vs-button>
<vs-button disabled vs-type="flat">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" vs-type="flat">Primary</vs-button>
<vs-button color="success" vs-type="flat">Success</vs-button>
<vs-button color="danger" vs-type="flat">Danger</vs-button>
<vs-button color="warning" vs-type="flat">Warning</vs-button>
<vs-button color="dark" vs-type="flat">Dark</vs-button>
<vs-button color="rgb(11, 189, 135)" vs-type="flat">RGB</vs-button>
<vs-button disabled vs-type="flat">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<!-- Line Down -->
<box>

## Line Down

To add a type of button with edges we change the value of `vs-type` by: `line`.

:::tip
  you can change the position of the line up with the property `vs-line-position="top"`. You can also change the way the line appears on mouse hover with the property `vs-line-origin` using the allowed values:

  - left
  - center (default)
  - right
:::

<vuecode md center>
<div slot="demo">
<vs-button vs-type="line">Primary</vs-button>
<vs-button vs-line-origin="left" color="success" vs-type="line">Success</vs-button>
<vs-button  color="danger" vs-type="line">Danger</vs-button>
<vs-button vs-line-position="top" vs-line-origin="left" color="warning" vs-type="line">Warning</vs-button>
<vs-button vs-line-position="top" vs-line-origin="right" color="dark" vs-type="line">Dark</vs-button>
<vs-button disabled vs-type="line">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="line">Primary</vs-button>
<vs-button vs-line-origin="left" color="success" vs-type="line">Success</vs-button>
<vs-button  color="danger" vs-type="line">Danger</vs-button>
<vs-button vs-line-position="top" vs-line-origin="left" color="warning" vs-type="line">Warning</vs-button>
<vs-button vs-line-position="top" vs-line-origin="right" color="dark" vs-type="line">Dark</vs-button>
<vs-button disabled vs-type="line">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<!-- Gradient -->
<box>

## Gradient

To add a type of button with edges we change the value of `vs-type` by: `gradient`

<vuecode md center>
<div slot="demo">

<vs-button vs-type="gradient">primary</vs-button>
<vs-button color="success" vs-type="gradient">success</vs-button>
<vs-button color="danger" vs-type="gradient">danger</vs-button>
<vs-button color="warning" vs-type="gradient">warning</vs-button>
<vs-button color="dark" vs-type="gradient">dark</vs-button>
<vs-button color="#3dd495" vs-gradient-color-secondary="rgb(130, 207, 23)" vs-type="gradient">dark</vs-button>
<vs-button disabled vs-type="gradient">Disabled</vs-button>
</div>

<div slot="code">

```html

<vs-button vs-type="gradient">primary</vs-button>
<vs-button color="success" vs-type="gradient">success</vs-button>
<vs-button color="danger" vs-type="gradient">danger</vs-button>
<vs-button color="warning" vs-type="gradient">warning</vs-button>
<vs-button color="dark" vs-type="gradient">dark</vs-button>
<vs-button color="#3dd495" vs-gradient-color-secondary="rgb(130, 207, 23)" vs-type="gradient">dark</vs-button>
<vs-button disabled vs-type="gradient">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<!-- Relief -->
<box>

## Relief

To add a type of button with edges we change the value of `vs-type` by: `relief`

<vuecode md center>
<div slot="demo">
<vs-button vs-type="relief">Primary</vs-button>

<vs-button color="success" vs-type="relief">Success</vs-button>
<vs-button color="danger" vs-type="relief">Danger</vs-button>
<vs-button color="warning" vs-type="relief">warning</vs-button>
<vs-button color="dark" vs-type="relief">dark</vs-button>
<vs-button color="rgb(187, 138, 200)" vs-type="relief">Color</vs-button>
<vs-button disabled vs-type="relief">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="relief">Primary</vs-button>
<vs-button color="success" vs-type="relief">Success</vs-button>
<vs-button color="danger" vs-type="relief">Danger</vs-button>
<vs-button color="warning" vs-type="relief">warning</vs-button>
<vs-button color="dark" vs-type="relief">dark</vs-button>
<vs-button color="rgb(187, 138, 200)" vs-type="relief">Color</vs-button>
<vs-button disabled vs-type="relief">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<!-- Color -->
<box>

## Color

There are cases in which we need something more personalized like a specific color, you can change the color of the button with the property `color` giving it as a value the color.

:::tip
If you need a gradient type button, to assign the color you have to use the property `vs-gradient-color-secondary`
:::

<vuecode md center>
<div slot="demo">

  <Demos-Color/>

</div>

<div slot="code">

```html
<template lang="html">
  <div class="">
    <input type="color" v-model="colorx" name="" value="">
    <input type="color" v-model="colorx2" name="" value="">
    <vs-button :color="colorx" vs-type="filled">Color</vs-button>
    <vs-button :color="colorx" vs-type="border">Color</vs-button>
    <vs-button :color="colorx" vs-type="flat">Color</vs-button>
    <vs-button :color="colorx" vs-type="line">Color</vs-button>
    <vs-button :color="colorx" :vs-gradient-color-secondary="colorx2" vs-type="gradient">Color</vs-button>
    <vs-button :color="colorx"  vs-type="relief">Color</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorx:'#c72a75',
      colorx2:'#5252e8'
    }
  },
}
</script>
```

</div>
</vuecode>
</box>

<!-- textColor -->
<box>

## Text Color

You can change the font color of buttons, need only set the prop `text-color` with your color.

<vuecode md center>
<div slot="demo">
  <vs-button>Primary</vs-button>
  <vs-button color="success" text-color="rgb(10, 20, 30)">Success</vs-button>
  <vs-button color="danger" text-color="#aaffaa">Danger</vs-button>
  <vs-button color="warning" text-color="primary">warning</vs-button>
  <vs-button color="dark" text-color="rgb(255, 255, 255)">dark</vs-button>
  <vs-button color="rgb(187, 138, 200)" text-color="warning)">Color</vs-button>
  <vs-button disabled text-color="rgb(0, 0, 0)">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button>Primary</vs-button>
<vs-button color="success" text-color="rgb(10, 20, 30)">Success</vs-button>
<vs-button color="danger" text-color="#aaff00">Danger</vs-button>
<vs-button color="warning" text-color="primary">warning</vs-button>
<vs-button color="dark" text-color="rgb(10, 20, 30)">dark</vs-button>
<vs-button color="rgb(187, 138, 200)" text-color="warning)">Color</vs-button>
<vs-button disabled text-color="rgb(0, 0, 0)">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<!-- Icon -->
<box>

## Icon

You can add an icon to the button with the property `vs-icon`

::: tip
Vuesax uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::

:::tip
  You can change the position of the icon so that it is after the text with the property `vs-icon-after`
:::

<vuecode md center>
<div slot="demo">
<vs-button color="primary" vs-type="border" vs-icon="home">Home</vs-button>
<vs-button color="warning" vs-type="filled" vs-icon="star">Star</vs-button>
<vs-button color="success" vs-type="flat" vs-icon="done">Done</vs-button>
<vs-button vs-icon-after color="dark" vs-type="line" vs-icon="menu">menu</vs-button>
<vs-button vs-icon-after color="danger" vs-type="gradient" vs-icon="favorite">favorite</vs-button>
<vs-button disabled color="primary" vs-type="border" vs-icon="home">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" vs-type="border" vs-icon="home">Home</vs-button>
<vs-button color="warning" vs-type="filled" vs-icon="star">Star</vs-button>
<vs-button color="success" vs-type="flat" vs-icon="done">Done</vs-button>
<vs-button color="dark" vs-type="line" vs-icon="menu">menu</vs-button>
<vs-button color="danger" vs-type="gradient" vs-icon="favorite">favorite</vs-button>
<vs-button disabled color="primary" vs-type="border" vs-icon="home">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<box>

## Icon only

You can have a button with only the icon you want with the property `vs-icon` and not add any internal value to the button

:::tip
  you can use the `vs-radius` property to determine the border-radius of the button, there are many cases in which we need it to be round for example.
:::

<vuecode md center>
<div slot="demo">
<vs-button color="primary" vs-type="border" vs-icon="search"></vs-button>
<vs-button color="warning" vs-type="filled" vs-icon="public"></vs-button>
<vs-button color="success" vs-type="flat" vs-icon="photo_camera"></vs-button>
<vs-button color="dark" vs-type="line" vs-icon="event_note"></vs-button>
<vs-button color="danger" vs-type="gradient" vs-icon="person_add"></vs-button>
<vs-button disabled color="primary" vs-type="border" vs-icon="search"></vs-button>
<br>
<br>
<vs-button vs-radius color="primary" vs-type="border" vs-icon="search"></vs-button>
<vs-button vs-radius color="warning" vs-type="filled" vs-icon="public"></vs-button>
<vs-button vs-radius color="success" vs-type="flat" vs-icon="photo_camera"></vs-button>
<vs-button vs-radius color="dark" vs-type="line" vs-icon="event_note"></vs-button>
<vs-button vs-radius color="danger" vs-type="gradient" vs-icon="person_add"></vs-button>
<vs-button disabled vs-radius color="primary" vs-type="border" vs-icon="search"></vs-button>
</div>
<div slot="code">

```html
<vs-button color="primary" vs-type="border" vs-icon="search"></vs-button>
<vs-button color="warning" vs-type="filled" vs-icon="public"></vs-button>
<vs-button color="success" vs-type="flat" vs-icon="photo_camera"></vs-button>
<vs-button color="dark" vs-type="line" vs-icon="event_note"></vs-button>
<vs-button color="danger" vs-type="gradient" vs-icon="person_add"></vs-button>
<vs-button disabled color="primary" vs-type="border" vs-icon="search"></vs-button>
<br>
<br>
<vs-button vs-radius color="primary" vs-type="border" vs-icon="search"></vs-button>
<vs-button vs-radius color="warning" vs-type="filled" vs-icon="public"></vs-button>
<vs-button vs-radius color="success" vs-type="flat" vs-icon="photo_camera"></vs-button>
<vs-button vs-radius color="dark" vs-type="line" vs-icon="event_note"></vs-button>
<vs-button vs-radius color="danger" vs-type="gradient" vs-icon="person_add"></vs-button>
<vs-button disabled vs-radius color="primary" vs-type="border" vs-icon="search"></vs-button>
```

</div>
</vuecode>
</box>

<box>

## Size

To define the size of button the directive is used `vs-size`. there are three type of size: `large`, `default`, `small`.
It is not important to specify the size when the button is of type `default`

<vuecode md center>
<div slot="demo">
<vs-button vs-size="large">Large</vs-button>
<vs-button>Default</vs-button>
<vs-button vs-size="small">Small</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-size="large">Large</vs-button>
<vs-button>Default</vs-button>
<vs-button vs-size="small">Small</vs-button>
```

</div>
</vuecode>
</box>

<box>

## Router

You can send a string or object to directive `to`. This directive wrap a `$router.push()` vue method,
you can use all programmatic navigation on vue router.

<vuecode md center>
<div slot="demo">
<vs-button color="primary" vs-type="filled" to="/components/list.html">String literal</vs-button>
<vs-button color="warning" vs-type="filled" :to="{path: '/components/list.html'}">Object Path</vs-button>
<vs-button color="success" vs-type="filled" :to="{ name: 'user', params: { userId: 123 }}">Named Router</vs-button>
<vs-button color="dark"    vs-type="filled" :to="{ path: 'register', query: { plan: 'private' }}">With Query</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" vs-type="filled" to="/components/list.html">String literal</vs-button>
<vs-button color="warning" vs-type="filled" :to="{ path: '/components/list.html' }">Object Path</vs-button>
<vs-button color="success" vs-type="filled" :to="{ name: 'user', params: { userId: 123 } }">Named Router</vs-button>
<vs-button color="dark"    vs-type="filled" :to="{ path: 'register', query: { plan: 'private' } }">With Query</vs-button>
```

</div>
</vuecode>
</box>
