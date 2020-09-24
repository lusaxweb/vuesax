---
API:
  - name: type
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
  - name: icon
    type: String
    parameters: Material Icons
    description: Determine the button icon
    default: null
  - name: icon-pack
    type: String
    parameters: Icon Pack Class Name
    description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
    default: material-icons
  - name: icon-after
    type: Boolean
    parameters: null
    description: Determines if the icon is set after the text
    default: false
  - name: line-origin
    type: String
    parameters: null
    description: Determines the output of the line on the button (line)
    default: center
  - name: line-position
    type: String
    parameters: null
    description: Determine if the button (line) has the line up or down
    default: center
  - name: gradient-direction
    type: String
    parameters: null
    description: Determine the angle of the gradient on the button
    default: 30 deg
  - name: gradient-color-secondary
    type: String
    parameters: null
    description: Change the secondary color on the button (gradient)
    default: primary
  - name: radius
    type: Boolean
    parameters: null
    description: Change button radius to circle
    default: false
  - name: to
    type: String | Object
    parameters: null
    description: Added router push navigation to button
    default: false
  - name: href
    type: String | Object
    parameters: null
    description: Added href property to button
    default: null
  - name: target
    type: Boolean
    parameters: null
    description: Presence or absence of target property
    default: false
  - name: routeErr
    type: Event
    parameters: error
    description:  Triggers method when there's error in routing using button component
---

# Buttons

<box header>

  Easy-to-use button components

</box>

<box>

## Filled

To define the type of button the directive is used `type` with the value of some type of button like it can be: `filled`.

<vuecode md center>
<div slot="demo">
<vs-button type="filled">Primary</vs-button>
<vs-button color="success" type="filled">Success</vs-button>
<vs-button color="danger" type="filled">Danger</vs-button>
<vs-button color="warning" type="filled">Warning</vs-button>
<vs-button color="dark" type="filled">Dark</vs-button>
<vs-button color="rgb(11, 189, 135)" type="filled">RGB</vs-button>
<vs-button disabled type="filled">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" type="filled">Primary</vs-button>
<vs-button color="success" type="filled">Success</vs-button>
<vs-button color="danger" type="filled">Danger</vs-button>
<vs-button color="warning" type="filled">Warning</vs-button>
<vs-button color="dark" type="filled">Dark</vs-button>
<vs-button color="rgb(134, 4, 98)" type="filled">RGB</vs-button>
<vs-button disabled type="filled">Disabled</vs-button>
<vs-button color="primary" type="filled" to="/components/list.html">Router</vs-button>
```

</div>
</vuecode>
</box>

<box>

## Border

To add a type of button with edges we change the value of `border`.

<vuecode md center>
<div slot="demo">
<vs-button color="primary" type="border">Primary</vs-button>
<vs-button color="success" type="border">Success</vs-button>
<vs-button color="danger" type="border">Danger</vs-button>
<vs-button color="warning" type="border">Warning</vs-button>
<vs-button color="dark" type="border">Dark</vs-button>
<vs-button color="rgb(11, 189, 135)" type="border">RGB</vs-button>
<vs-button disabled type="border">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" type="border">Primary</vs-button>
<vs-button color="success" type="border">Success</vs-button>
<vs-button color="danger" type="border">Danger</vs-button>
<vs-button color="warning" type="border">Warning</vs-button>
<vs-button color="dark" type="border">Dark</vs-button>
<vs-button color="rgb(11, 189, 135)" type="border">RGB</vs-button>
<vs-button disabled type="border">Disabled</vs-button>
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
<vs-button color="primary" type="flat">Primary</vs-button>
<vs-button color="success" type="flat">Success</vs-button>
<vs-button color="danger" type="flat">Danger</vs-button>
<vs-button color="warning" type="flat">Warning</vs-button>
<vs-button color="dark" type="flat">Dark</vs-button>
<vs-button color="rgb(11, 189, 135)" type="flat">RGB</vs-button>
<vs-button disabled type="flat">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" type="flat">Primary</vs-button>
<vs-button color="success" type="flat">Success</vs-button>
<vs-button color="danger" type="flat">Danger</vs-button>
<vs-button color="warning" type="flat">Warning</vs-button>
<vs-button color="dark" type="flat">Dark</vs-button>
<vs-button color="rgb(11, 189, 135)" type="flat">RGB</vs-button>
<vs-button disabled type="flat">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<!-- Line Down -->
<box>

## Line Down

To add a type of button with edges we change the value of `type` by: `line`.

:::tip
  you can change the position of the line up with the property `line-position="top"`. You can also change the way the line appears on mouse hover with the property `line-origin` using the allowed values:

  - left
  - center (default)
  - right
:::

<vuecode md center>
<div slot="demo">
<vs-button type="line">Primary</vs-button>
<vs-button line-origin="left" color="success" type="line">Success</vs-button>
<vs-button  color="danger" type="line">Danger</vs-button>
<vs-button line-position="top" line-origin="left" color="warning" type="line">Warning</vs-button>
<vs-button line-position="top" line-origin="right" color="dark" type="line">Dark</vs-button>
<vs-button disabled type="line">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button type="line">Primary</vs-button>
<vs-button line-origin="left" color="success" type="line">Success</vs-button>
<vs-button  color="danger" type="line">Danger</vs-button>
<vs-button line-position="top" line-origin="left" color="warning" type="line">Warning</vs-button>
<vs-button line-position="top" line-origin="right" color="dark" type="line">Dark</vs-button>
<vs-button disabled type="line">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<!-- Gradient -->
<box>

## Gradient

To add a type of button with edges we change the value of `type` by: `gradient`

<vuecode md center>
<div slot="demo">

<vs-button type="gradient">primary</vs-button>
<vs-button color="success" type="gradient">success</vs-button>
<vs-button color="danger" type="gradient">danger</vs-button>
<vs-button color="warning" type="gradient">warning</vs-button>
<vs-button color="dark" type="gradient">dark</vs-button>
<vs-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" type="gradient">dark</vs-button>
<vs-button disabled type="gradient">Disabled</vs-button>
</div>

<div slot="code">

```html

<vs-button type="gradient">primary</vs-button>
<vs-button color="success" type="gradient">success</vs-button>
<vs-button color="danger" type="gradient">danger</vs-button>
<vs-button color="warning" type="gradient">warning</vs-button>
<vs-button color="dark" type="gradient">dark</vs-button>
<vs-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" type="gradient">dark</vs-button>
<vs-button disabled type="gradient">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<!-- Relief -->
<box>

## Relief

To add a type of button with edges we change the value of `type` by: `relief`

<vuecode md center>
<div slot="demo">
<vs-button type="relief">Primary</vs-button>

<vs-button color="success" type="relief">Success</vs-button>
<vs-button color="danger" type="relief">Danger</vs-button>
<vs-button color="warning" type="relief">warning</vs-button>
<vs-button color="dark" type="relief">dark</vs-button>
<vs-button color="rgb(187, 138, 200)" type="relief">Color</vs-button>
<vs-button disabled type="relief">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button type="relief">Primary</vs-button>
<vs-button color="success" type="relief">Success</vs-button>
<vs-button color="danger" type="relief">Danger</vs-button>
<vs-button color="warning" type="relief">warning</vs-button>
<vs-button color="dark" type="relief">dark</vs-button>
<vs-button color="rgb(187, 138, 200)" type="relief">Color</vs-button>
<vs-button disabled type="relief">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<!-- Color -->
<box>

## Color

There are cases in which we need something more personalized like a specific color, you can change the color of the button with the property `color` giving it as a value the color.

:::tip
If you need a gradient type button, to assign the color you have to use the property `gradient-color-secondary`
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
    <vs-button :color="colorx" type="filled">Color</vs-button>
    <vs-button :color="colorx" type="border">Color</vs-button>
    <vs-button :color="colorx" type="flat">Color</vs-button>
    <vs-button :color="colorx" type="line">Color</vs-button>
    <vs-button :color="colorx" :gradient-color-secondary="colorx2" type="gradient">Color</vs-button>
    <vs-button :color="colorx"  type="relief">Color</vs-button>
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

You can add an icon to the button with the property `icon`

::: tip
Vuesax uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

:::tip
  You can change the position of the icon so that it is after the text with the property `icon-after`
:::

<vuecode md center>
<div slot="demo">
<vs-button color="primary" type="border" icon="home">Home</vs-button>
<vs-button color="warning" type="filled" icon="star">Star</vs-button>
<vs-button color="success" type="flat" icon="done">Done</vs-button>
<vs-button icon-after color="dark" type="line" icon="menu">menu</vs-button>
<vs-button icon-after color="danger" type="gradient" icon="favorite">favorite</vs-button>
<vs-button disabled color="primary" type="border" icon="home">Disabled</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" type="border" icon="home">Home</vs-button>
<vs-button color="warning" type="filled" icon="star">Star</vs-button>
<vs-button color="success" type="flat" icon="done">Done</vs-button>
<vs-button color="dark" type="line" icon="menu">menu</vs-button>
<vs-button color="danger" type="gradient" icon="favorite">favorite</vs-button>
<vs-button disabled color="primary" type="border" icon="home">Disabled</vs-button>
```

</div>
</vuecode>
</box>

<box>

## Icon only

You can have a button with only the icon you want with the property `icon` and not add any internal value to the button

:::tip
  you can use the `radius` property to determine the border-radius of the button, there are many cases in which we need it to be round for example.
:::

<vuecode md center>
<div slot="demo">
<vs-button color="primary" type="border" icon="search"></vs-button>
<vs-button color="warning" type="filled" icon="public"></vs-button>
<vs-button color="success" type="flat" icon="photo_camera"></vs-button>
<vs-button color="dark" type="line" icon="event_note"></vs-button>
<vs-button color="danger" type="gradient" icon="person_add"></vs-button>
<vs-button disabled color="primary" type="border" icon="search"></vs-button>
<br>
<br>
<vs-button radius color="primary" type="border" icon="search"></vs-button>
<vs-button radius color="warning" type="filled" icon="public"></vs-button>
<vs-button radius color="success" type="flat" icon="photo_camera"></vs-button>
<vs-button radius color="dark" type="line" icon="event_note"></vs-button>
<vs-button radius color="danger" type="gradient" icon="person_add"></vs-button>
<vs-button disabled radius color="primary" type="border" icon="search"></vs-button>
</div>
<div slot="code">

```html
<vs-button color="primary" type="border" icon="search"></vs-button>
<vs-button color="warning" type="filled" icon="public"></vs-button>
<vs-button color="success" type="flat" icon="photo_camera"></vs-button>
<vs-button color="dark" type="line" icon="event_note"></vs-button>
<vs-button color="danger" type="gradient" icon="person_add"></vs-button>
<vs-button disabled color="primary" type="border" icon="search"></vs-button>
<br>
<br>
<vs-button radius color="primary" type="border" icon="search"></vs-button>
<vs-button radius color="warning" type="filled" icon="public"></vs-button>
<vs-button radius color="success" type="flat" icon="photo_camera"></vs-button>
<vs-button radius color="dark" type="line" icon="event_note"></vs-button>
<vs-button radius color="danger" type="gradient" icon="person_add"></vs-button>
<vs-button disabled radius color="primary" type="border" icon="search"></vs-button>
```

</div>
</vuecode>
</box>

<box>

## Size

To define the size of button the directive is used `size`. there are three type of size: `large`, `default`, `small`.
It is not important to specify the size when the button is of type `default`

<vuecode md center>
<div slot="demo">
<vs-button size="large">Large</vs-button>
<vs-button>Default</vs-button>
<vs-button size="small">Small</vs-button>
</div>

<div slot="code">

```html
<vs-button size="large">Large</vs-button>
<vs-button>Default</vs-button>
<vs-button size="small">Small</vs-button>
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
<vs-button color="primary" type="filled" to="/components/list.html">String literal</vs-button>
<vs-button color="warning" type="filled" :to="{path: '/components/list.html'}">Object Path</vs-button>
<vs-button color="success" type="filled" :to="{ name: 'user', params: { userId: 123 }}">Named Router</vs-button>
<vs-button color="dark"    type="filled" :to="{ path: 'register', query: { plan: 'private' }}">With Query</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" type="filled" to="/components/list.html">String literal</vs-button>
<vs-button color="warning" type="filled" :to="{ path: '/components/list.html' }">Object Path</vs-button>
<vs-button color="success" type="filled" :to="{ name: 'user', params: { userId: 123 } }">Named Router</vs-button>
<vs-button color="dark"    type="filled" :to="{ path: 'register', query: { plan: 'private' } }">With Query</vs-button>
```

</div>
</vuecode>
</box>

<box>

## Link

You can specify for `window.location.href`

:::tip
  you can use the `target` property to window.open()
:::

<vuecode md center>
<div slot="demo">
<vs-button color="primary" target="_blank" type="filled" href="https://lusaxweb.github.io/vuesax/">String literal</vs-button>
<vs-button color="primary" type="filled" :href="{url: 'https://lusaxweb.github.io/vuesax/'}">Object Path</vs-button>
<vs-button color="primary" type="filled" target :href="{url: 'https://lusaxweb.github.io/vuesax/'}">Open Current Tab</vs-button>
</div>

<div slot="code">

```html
<vs-button color="primary" type="filled" href="https://lusaxweb.github.io/vuesax/">String literal</vs-button>
<vs-button color="primary" type="filled" :href="{url: 'https://lusaxweb.github.io/vuesax/'}">Object Path</vs-button>
<vs-button color="primary" type="filled" target :href="{url: 'https://lusaxweb.github.io/vuesax/'}">Open Current Tab</vs-button>

```

</div>
</vuecode>
</box>
