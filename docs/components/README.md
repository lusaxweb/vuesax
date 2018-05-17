---
API:
  - name: vs-type
    type: bind
    parameters: null
    description: The type of button to use
    default: primary-filled
  - name: vs-color
    type: RGB, HEX
    parameters: null
    description: Change the color of the button
    default: null
  - name: vs-width
    type: String
    parameters: null
    description: Determine the width of the button.
    default: auto
  - name: vs-icon
    type: String
    parameters: Material Icons
    description: Determine the button icon
    default: false
contributors:
  - fergardi
---
# Buttons

<box header>

  Nice buttons and easy to use.

</box>
<box>

## Filled

To define the type of button the directive is used `vs-type` with the value of some type of button like it can be: `primary-filled`, `success-filled`, `danger-filled`, `warning-filled`, `dark-filled`.

<vuecode md center>
<div slot="demo">
<vs-button vs-type="primary-filled">Primary</vs-button>
<vs-button vs-type="success-filled">Success</vs-button>
<vs-button vs-type="danger-filled">Danger</vs-button>
<vs-button vs-type="warning-filled">Warning</vs-button>
<vs-button vs-type="dark-filled">Dark</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="primary-filled">Primary</vs-button>
<vs-button vs-type="success-filled">Success</vs-button>
<vs-button vs-type="danger-filled">Danger</vs-button>
<vs-button vs-type="warning-filled">Warning</vs-button>
<vs-button vs-type="dark-filled">Dark</vs-button>
```

</div>
</vuecode>
</box>

<box>

## Border

To add a type of button with edges we change the value of `vs-type` by: `primary-border`, `success-border`, `danger-border`, `warning-border`, `dark-border`

<vuecode md center>
<div slot="demo">
<vs-button vs-type="primary-border">Primary</vs-button>
<vs-button vs-type="success-border">Success</vs-button>
<vs-button vs-type="danger-border">Danger</vs-button>
<vs-button vs-type="warning-border">Warning</vs-button>
<vs-button vs-type="dark-border">Dark</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="primary-border">Primary</vs-button>
<vs-button vs-type="success-border">Success</vs-button>
<vs-button vs-type="danger-border">Danger</vs-button>
<vs-button vs-type="warning-border">Warning</vs-button>
<vs-button vs-type="dark-border">Dark</vs-button>
```

</div>
</vuecode>
</box>

<!-- flat -->
<box>

## Flat

To add a type of button with edges we change the value of `vs-type` by: `primary-flat`, `success-flat`, `danger-flat`, `warning-flat`, `dark-flat`

<vuecode md center>
<div slot="demo">
<vs-button vs-type="primary-flat">Primary</vs-button>
<vs-button vs-type="success-flat">Success</vs-button>
<vs-button vs-type="danger-flat">Danger</vs-button>
<vs-button vs-type="warning-flat">Warning</vs-button>
<vs-button vs-type="dark-flat">Dark</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="primary-flat">Primary</vs-button>
<vs-button vs-type="success-flat">Success</vs-button>
<vs-button vs-type="danger-flat">Danger</vs-button>
<vs-button vs-type="warning-flat">Warning</vs-button>
<vs-button vs-type="dark-flat">Dark</vs-button>
```

</div>
</vuecode>
</box>

<!-- Line Down -->
<box>

## Line Down

To add a type of button with edges we change the value of `vs-type` by: `primary-line-down`, `success-line-down`, `danger-line-down`, `warning-line-down`, `dark-line-down`

<vuecode md center>
<div slot="demo">
<vs-button vs-type="primary-line-down">Primary</vs-button>
<vs-button vs-type="success-line-down">Success</vs-button>
<vs-button vs-type="danger-line-down">Danger</vs-button>
<vs-button vs-type="warning-line-down">Warning</vs-button>
<vs-button vs-type="dark-line-down">Dark</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="primary-line-down">Primary</vs-button>
<vs-button vs-type="success-line-down">Success</vs-button>
<vs-button vs-type="danger-line-down">Danger</vs-button>
<vs-button vs-type="warning-line-down">Warning</vs-button>
<vs-button vs-type="dark-line-down">Dark</vs-button>
```

</div>
</vuecode>
</box>

<!-- Gradient -->
<box>

## Gradient

To add a type of button with edges we change the value of `vs-type` by: `primary-gradient`, `success-gradient`, `danger-gradient`, `warning-gradient`, `dark-gradient`

<vuecode md center>
<div slot="demo">
<vs-button vs-type="primary-gradient">Primary</vs-button>
<vs-button vs-type="success-gradient">Success</vs-button>
<vs-button vs-type="danger-gradient">Danger</vs-button>
<vs-button vs-type="warning-gradient">Warning</vs-button>
<vs-button vs-type="dark-gradient">Dark</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="primary-gradient">Primary</vs-button>
<vs-button vs-type="success-gradient">Success</vs-button>
<vs-button vs-type="danger-gradient">Danger</vs-button>
<vs-button vs-type="warning-gradient">Warning</vs-button>
<vs-button vs-type="dark-gradient">Dark</vs-button>
```

</div>
</vuecode>
</box>

<!-- Relief -->
<box>

## Relief

To add a type of button with edges we change the value of `vs-type` by: `primary-relief`, `success-relief`, `danger-relief`, `warning-relief`, `dark-relief`

<vuecode md center>
<div slot="demo">
<vs-button vs-type="primary-relief">Primary</vs-button>
<vs-button vs-type="success-relief">Success</vs-button>
<vs-button vs-type="danger-relief">Danger</vs-button>
<vs-button vs-type="warning-relief">Warning</vs-button>
<vs-button vs-type="dark-relief">Dark</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="primary-relief">Primary</vs-button>
<vs-button vs-type="success-relief">Success</vs-button>
<vs-button vs-type="danger-relief">Danger</vs-button>
<vs-button vs-type="warning-relief">Warning</vs-button>
<vs-button vs-type="dark-relief">Dark</vs-button>
```

</div>
</vuecode>
</box>

<!-- Color -->
<box>

## Color

There are cases in which we need something more personalized like a specific color, you can change the color of the button with the property `vs-color` giving it as a value the color.

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
    <vs-button :vs-color="colorx" vs-type="primary-filled">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="primary-border">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="primary-flat">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="primary-line-down">Color</vs-button>
    <vs-button :vs-color="colorx+'/'+colorx2" vs-type="primary-gradient">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="primary-relief">Color</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorx:'#c72a75',
      colorx2:'#0fc816'
    }
  }
}
</script>

<style lang="css">
</style>
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

<vuecode md center>
<div slot="demo">
<vs-button vs-type="primary-border" vs-icon="home">Home</vs-button>
<vs-button vs-type="warning-filled" vs-icon="star">Star</vs-button>
<vs-button vs-type="success-flat" vs-icon="done">Done</vs-button>
<vs-button vs-type="dark-line-down" vs-icon="menu">menu</vs-button>
<vs-button vs-type="danger-gradient" vs-icon="favorite">favorite</vs-button>
</div>

<div slot="code">

```html
<vs-button vs-type="primary-border" vs-icon="home">Home</vs-button>
<vs-button vs-type="warning-filled" vs-icon="star">Star</vs-button>
<vs-button vs-type="success-flat" vs-icon="done">Done</vs-button>
<vs-button vs-type="dark-line-down" vs-icon="menu">menu</vs-button>
<vs-button vs-type="danger-gradient" vs-icon="favorite">favorite</vs-button>
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
<vs-button vs-type="primary-border" vs-icon="search"></vs-button>
<vs-button vs-type="warning-filled" vs-icon="public"></vs-button>
<vs-button vs-type="success-flat" vs-icon="photo_camera"></vs-button>
<vs-button vs-type="dark-line-down" vs-icon="event_note"></vs-button>
<vs-button vs-type="danger-gradient" vs-icon="person_add"></vs-button>
<br>
<br>
<vs-button vs-radius="50%" vs-type="primary-border" vs-icon="search"></vs-button>
<vs-button vs-radius="50%" vs-type="warning-filled" vs-icon="public"></vs-button>
<vs-button vs-radius="50%" vs-type="success-flat" vs-icon="photo_camera"></vs-button>
<vs-button vs-radius="50%" vs-type="dark-line-down" vs-icon="event_note"></vs-button>
<vs-button vs-radius="50%" vs-type="danger-gradient" vs-icon="person_add"></vs-button>
</div>
<div slot="code">

```html

```

</div>
</vuecode>
</box>
