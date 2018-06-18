---
API:
  - name: vs-type
    type: String
    parameters: null
    description: The type of button to use
    default: filled
  - name: vs-color
    type: String
    parameters: null
    description: Change the color of the button
    default: primary
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
    description: Determina la posicion del gradiente en el boton (gradient)
    default: 30deg
  - name: vs-gradient-color-secondary
    type: String
    parameters: null
    description: Change the secondary color on the button (gradient)
    default: primary
---
# Buttons <!--#update-->

<box header>

  Nice buttons and easy to use.

</box>

<!-- Filled -->
<box>

## Filled

To define the button style the directive used is `vs-type` with the value of some style of button like such as: `filled`.

<vuecode md center>
<div slot="demo">
<vs-button vs-button-type="submit" vs-color="primary" vs-type="filled">Primary</vs-button>
<vs-button vs-color="success" vs-type="filled">Success</vs-button>
<vs-button vs-color="danger" vs-type="filled">Danger</vs-button>
<vs-button vs-color="warning" vs-type="filled">Warning</vs-button>
<vs-button vs-color="dark" vs-type="filled">Dark</vs-button>
<vs-button vs-color="rgb(11, 189, 135)" vs-type="filled">RGB</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-color="primary" vs-type="filled">Primary</vs-button>
<vs-button vs-color="success" vs-type="filled">Success</vs-button>
<vs-button vs-color="danger" vs-type="filled">Danger</vs-button>
<vs-button vs-color="warning" vs-type="filled">Warning</vs-button>
<vs-button vs-color="dark" vs-type="filled">Dark</vs-button>
<vs-button vs-color="rgb(134, 4, 98)" vs-type="filled">RGB</vs-button>
```

</div>
</vuecode>
</box>

<!-- Border -->
<box>

## Border

To add a button with borders and transparent background, we change the value of `border`.

<vuecode md center>
<div slot="demo">
<vs-button vs-color="primary" vs-type="border">Primary</vs-button>
<vs-button vs-color="success" vs-type="border">Success</vs-button>
<vs-button vs-color="danger" vs-type="border">Danger</vs-button>
<vs-button vs-color="warning" vs-type="border">Warning</vs-button>
<vs-button vs-color="dark" vs-type="border">Dark</vs-button>
<vs-button vs-color="rgb(11, 189, 135)" vs-type="border">RGB</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-color="primary" vs-type="border">Primary</vs-button>
<vs-button vs-color="success" vs-type="border">Success</vs-button>
<vs-button vs-color="danger" vs-type="border">Danger</vs-button>
<vs-button vs-color="warning" vs-type="border">Warning</vs-button>
<vs-button vs-color="dark" vs-type="border">Dark</vs-button>
<vs-button vs-color="rgb(11, 189, 135)" vs-type="border">RGB</vs-button>
```

</div>
</vuecode>
</box>

<!-- Flat -->
<box>

## Flat

To add a flat button with no borders, we change the value of `flat`.

<vuecode md center>
<div slot="demo">
<vs-button vs-color="primary" vs-type="flat">Primary</vs-button>
<vs-button vs-color="success" vs-type="flat">Success</vs-button>
<vs-button vs-color="danger" vs-type="flat">Danger</vs-button>
<vs-button vs-color="warning" vs-type="flat">Warning</vs-button>
<vs-button vs-color="dark" vs-type="flat">Dark</vs-button>
<vs-button vs-color="rgb(11, 189, 135)" vs-type="flat">RGB</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-color="primary" vs-type="flat">Primary</vs-button>
<vs-button vs-color="success" vs-type="flat">Success</vs-button>
<vs-button vs-color="danger" vs-type="flat">Danger</vs-button>
<vs-button vs-color="warning" vs-type="flat">Warning</vs-button>
<vs-button vs-color="dark" vs-type="flat">Dark</vs-button>
<vs-button vs-color="rgb(11, 189, 135)" vs-type="flat">RGB</vs-button>
```

</div>
</vuecode>
</box>

<!-- Line Down -->
<box>

## Line Down

To add a button with bottom border, we change the value of `vs-type` by: `line`.

:::tip
  you can change the position of the line up with the property `vs-line-position="top"`, you can also change the way the line appears in hover with the property `vs-line-origin` the allowed values They are

  - left
  - center (default)
  - right
:::

<vuecode md center>
<div slot="demo">
<vs-button vs-type="line">Primary</vs-button>
<vs-button vs-line-origin="left" vs-color="success" vs-type="line">Success</vs-button>
<vs-button  vs-color="danger" vs-type="line">Danger</vs-button>
<vs-button vs-line-position="top" vs-line-origin="left" vs-color="warning" vs-type="line">Warning</vs-button>
<vs-button vs-line-position="top" vs-line-origin="right" vs-color="dark" vs-type="line">Dark</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="line">Primary</vs-button>
<vs-button vs-color="success" vs-type="line">Success</vs-button>
<vs-button vs-color="danger" vs-type="line">Danger</vs-button>
<vs-button vs-color="warning" vs-type="line">Warning</vs-button>
<vs-button vs-color="dark" vs-type="line">Dark</vs-button>
<vs-button vs-color="rgb(235, 146, 21)" vs-type="line">success</vs-button>
```

</div>
</vuecode>
</box>

<!-- Gradient -->
<box>

## Gradient

To add a button with gradient background we change the value of `vs-type` by: `gradient`.

<vuecode md center>
<div slot="demo">
<vs-button vs-type="gradient">primary</vs-button>
<vs-button vs-color="success" vs-type="gradient">success</vs-button>
<vs-button vs-color="danger" vs-type="gradient">danger</vs-button>
<vs-button vs-color="warning" vs-type="gradient">warning</vs-button>
<vs-button vs-color="dark" vs-type="gradient">dark</vs-button>
<vs-button vs-color="#3dd495" vs-gradient-color-secondary="rgb(130, 207, 23)" vs-type="gradient">dark</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="gradient">primary</vs-button>
<vs-button vs-color="success" vs-type="gradient">success</vs-button>
<vs-button vs-color="danger" vs-type="gradient">danger</vs-button>
<vs-button vs-color="warning" vs-type="gradient">warning</vs-button>
<vs-button vs-color="dark" vs-type="gradient">dark</vs-button>
<vs-button vs-color="#3dd495" vs-gradient-color-secondary="rgb(130, 207, 23)" vs-type="gradient">dark</vs-button>
```

</div>
</vuecode>
</box>

<!-- Relief -->
<box>

## Relief

To add a button with edges and pressing down motion, we change the value of `vs-type` by: `relief`.

<vuecode md center>
<div slot="demo">
<vs-button vs-type="relief">Primary</vs-button>
<vs-button vs-color="success" vs-type="relief">Success</vs-button>
<vs-button vs-color="danger" vs-type="relief">Danger</vs-button>
<vs-button vs-color="warning" vs-type="relief">warning</vs-button>
<vs-button vs-color="dark" vs-type="relief">dark</vs-button>
<vs-button vs-color="rgb(187, 138, 49)" vs-type="relief">Color</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="relief">Primary</vs-button>
<vs-button vs-color="success" vs-type="relief">Success</vs-button>
<vs-button vs-color="danger" vs-type="relief">Danger</vs-button>
<vs-button vs-color="warning" vs-type="relief">warning</vs-button>
<vs-button vs-color="dark" vs-type="relief">dark</vs-button>
<vs-button vs-color="rgb(187, 138, 49)" vs-type="relief">Color</vs-button>
```

</div>
</vuecode>
</box>

<!-- Button Type -->
<box>

## Button Type

To define the type of button the directive used is `vs-button-type` with the value of some type of button like it can be: `submit`. The Default value is `button`.

<vuecode md center>
<div slot="demo">
<vs-button vs-color="primary" vs-type="filled">Button</vs-button>
<vs-button vs-button-type="submit" vs-color="success" vs-type="filled">Submit</vs-button>
<vs-button vs-button-type="reset" vs-color="danger" vs-type="filled">Reset</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-color="primary" vs-type="filled">Button</vs-button> <!-- vs-button-type="button" is the default -->
<vs-button vs-button-type="submit" vs-color="success" vs-type="filled">Submit</vs-button>
<vs-button vs-button-type="reset" vs-color="danger" vs-type="filled">Reset</vs-button>
```

</div>
</vuecode>
</box>

<!-- Color -->
<box>

## Color

There are cases in which we need something more personalized like a specific color, you can change the color of the button with the property `vs-color` giving it as a value the color.

:::tip
If you need a gradient type button, to assign the color you have to use the property `vs-gradient-color-secondary`
:::
:::warning
  Only colors are supported **RGB** y **HEX**. <br>
  Example:
    `vs-color="rgb(215, 82, 39)"` o `vs-color="#d75227"`
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
    <vs-button :vs-color="colorx" vs-type="filled">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="border">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="flat">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="line">Color</vs-button>
    <vs-button :vs-color="colorx" :vs-gradient-color-secondary="colorx2" vs-type="gradient">Color</vs-button>
    <vs-button :vs-color="colorx"  vs-type="relief">Color</vs-button>
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

<!-- Icon -->
<box>

## Icon

You can add an icon to the button with the property `vs-icon`

::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::

:::tip
  You can change the position of the icon so that it is after the text with the property `vs-icon-after`
:::

<vuecode md center>
<div slot="demo">
<vs-button vs-color="primary" vs-type="border" vs-icon="home">Home</vs-button>
<vs-button vs-color="warning" vs-type="filled" vs-icon="star">Star</vs-button>
<vs-button vs-color="success" vs-type="flat" vs-icon="done">Done</vs-button>
<vs-button vs-icon-after vs-color="dark" vs-type="line" vs-icon="menu">menu</vs-button>
<vs-button vs-icon-after vs-color="danger" vs-type="gradient" vs-icon="favorite">favorite</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-color="primary" vs-type="border" vs-icon="home">Home</vs-button>
<vs-button vs-color="warning" vs-type="filled" vs-icon="star">Star</vs-button>
<vs-button vs-color="success" vs-type="flat" vs-icon="done">Done</vs-button>
<vs-button vs-color="dark" vs-type="line" vs-icon="menu">menu</vs-button>
<vs-button vs-color="danger" vs-type="gradient" vs-icon="favorite">favorite</vs-button>
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
<vs-button vs-color="primary" vs-type="border" vs-icon="search"></vs-button>
<vs-button vs-color="warning" vs-type="filled" vs-icon="public"></vs-button>
<vs-button vs-color="success" vs-type="flat" vs-icon="photo_camera"></vs-button>
<vs-button vs-color="dark" vs-type="line" vs-icon="event_note"></vs-button>
<vs-button vs-color="danger" vs-type="gradient" vs-icon="person_add"></vs-button>
<br>
<br>
<vs-button style="border-radius: 50%" vs-color="primary" vs-type="border" vs-icon="search"></vs-button>
<vs-button style="border-radius: 50%" vs-color="warning" vs-type="filled" vs-icon="public"></vs-button>
<vs-button style="border-radius: 50%" vs-color="success" vs-type="flat" vs-icon="photo_camera"></vs-button>
<vs-button style="border-radius: 50%" vs-color="dark" vs-type="line" vs-icon="event_note"></vs-button>
<vs-button style="border-radius: 50%" vs-color="danger" vs-type="gradient" vs-icon="person_add"></vs-button>
</div>
<div slot="code">

```html
<vs-button vs-color="primary" vs-type="border" vs-icon="search"></vs-button>
<vs-button vs-color="warning" vs-type="filled" vs-icon="public"></vs-button>
<vs-button vs-color="success" vs-type="flat" vs-icon="photo_camera"></vs-button>
<vs-button vs-color="dark" vs-type="line" vs-icon="event_note"></vs-button>
<vs-button vs-color="danger" vs-type="gradient" vs-icon="person_add"></vs-button>
<br>
<br>
<vs-button style="border-radius: 50%" vs-color="primary" vs-type="border" vs-icon="search"></vs-button>
<vs-button style="border-radius: 50%" vs-color="warning" vs-type="filled" vs-icon="public"></vs-button>
<vs-button style="border-radius: 50%" vs-color="success" vs-type="flat" vs-icon="photo_camera"></vs-button>
<vs-button style="border-radius: 50%" vs-color="dark" vs-type="line" vs-icon="event_note"></vs-button>
<vs-button style="border-radius: 50%" vs-color="danger" vs-type="gradient" vs-icon="person_add"></vs-button>
```

</div>
</vuecode>
</box>
