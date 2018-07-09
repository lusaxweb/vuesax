---
API:
 - name: vs-text
   type: String
   parameters: null
   description: If the text is very long, only the first letter is added.
   default: null
 - name: vs-src
   type: String
   parameters: null
   description: Url of the image to show in the Avatar.
   default: null
 - name: vs-size
   type: String
   parameters: large, small, Costom measure (70px)
   description: Url of the image to show in the Avatar.
   default: 32px
 - name: vs-color
   type: String
   parameters: Colores Principales, RGB, HEX
   description: Define the color of the Avatar (does not affect the image).
   default: rgb(195, 195, 195)
 - name: vs-color
   type: String
   parameters: Colores Principales, RGB, HEX
   description: Define the color of the Avatar (does not affect the image).
   default: rgb(195, 195, 195)
 - name: vs-badge
   type: Boolean, Number
   parameters: null
   description: Define if the badge is active and what is its value in number.
   default: null
 - name: vs-badge-color
   type: String
   parameters: Colores Principales, RGB, HEX
   description: Define the color of the Badge.
   default: danger
 - name: vs-icon
   type: String
   parameters: Material Icons
   description: Define the icon within the Avatar.
   default: person
---

# Avatar <!--#new-->

<box header>

  A nice avatar and with many interesting features

</box>


<box>

## Default

Often you need to add an user's avatar to your app. In order to make this we have the component `vs-avatar`.

To add an internal text value such as `Luis` use the` vs-text` property.

:::tip
If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is `Luis Daniel` and only the letters `LD` will be shown if the word contains spaces the initial of each one is added.
:::

<vuecode md center>
<div slot="demo">
  <vs-avatar />
  <vs-avatar vs-text="Luisdaniel"/>
  <vs-avatar vs-text="Luisd"/>
  <vs-avatar vs-text="Luis Daniel"/>
  <vs-avatar vs-src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
</div>
<div slot="code">

```html
<vs-avatar />
<vs-avatar vs-text="Luis Daniel"/>
<vs-avatar vs-text="Luisd"/>
<vs-avatar vs-src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
```

</div>
</vuecode>

</box>


<box>

## Size

You can change the size of the Avatar with the property `vs-size` the allowed values ​​are:

- large
- small
- Custom measure

:::tip
  In the example the last avatar has the custom size of `70px` the added value will be the avatar's **height** and **width**
:::

<vuecode md center>
<div slot="demo">
  <vs-avatar vs-size="small" />
  <vs-avatar vs-text="Luis Daniel"/>
  <vs-avatar vs-size="large" vs-src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
  <vs-avatar vs-size="70px" vs-src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
</div>
<div slot="code">

```html
<vs-avatar vs-size="small" />
<vs-avatar vs-text="Luis Daniel"/>
<vs-avatar vs-size="large" vs-src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
<vs-avatar vs-size="70px" vs-src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the Avatar's color by using the property `vs-color`. If needed you could also change the text's color with the property `vs-text-color`.

<vuecode md center>
<div slot="demo">
<vs-avatar vs-color="primary" vs-text="primary"/>
<vs-avatar vs-color="success" vs-text="success"/>
<vs-avatar vs-color="danger" vs-text="danger"/>
<vs-avatar vs-color="warning" vs-text="warning"/>
<vs-avatar vs-color="dark" vs-text="dark"/>
<vs-avatar vs-color="rgb(200, 21, 129)" vs-text="RGB"/>
<vs-avatar vs-color="#18cd5b" vs-text="HEX"/>
<vs-avatar vs-color="#26302a" vs-text-color="rgb(246, 190, 16)" vs-text="HEX RGB"/>
</div>
<div slot="code">

```html
<vs-avatar vs-color="primary" vs-text="primary"/>
<vs-avatar vs-color="success" vs-text="success"/>
<vs-avatar vs-color="danger" vs-text="danger"/>
<vs-avatar vs-color="warning" vs-text="warning"/>
<vs-avatar vs-color="dark" vs-text="dark"/>
<vs-avatar vs-color="rgb(200, 21, 129)" vs-text="RGB"/>
<vs-avatar vs-color="#18cd5b" vs-text="HEX"/>
<vs-avatar vs-color="#26302a" vs-text-color="rgb(246, 190, 16)" vs-text="HEX RGB"/>
```

</div>
</vuecode>
</box>

<box>

## With Badge

You can add a notification label to the avatar, either a reference point or a number with the property `vs-badge`.

You could also change the badge's color by using the property `vs-badge-color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Avatar-Badge />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="con-avatarsx">
    <div class="con-avatar-solo">
    <vs-avatar vs-badge />
    <vs-avatar :vs-badge="badge1" vs-text="Luisdaniel"/>
    <vs-avatar vs-badge-color="rgb(140, 23, 164)" :vs-badge="badge2" vs-text="Luisd"/>
  </div>
      <vs-button vs-color="danger" vs-type="filled" @click="increment">
        Increment Badge counter
      </vs-button>
  </div>
</template>

<script>
export default {
  data:()=>({
    badge1:2,
    badge2:10,
  }),
  methods:{
    increment(){
      this.badge1 ++
      this.badge2 ++
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Icon

You can change the main icon of the Avatar with the property `vs-icon`

::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).

This icon is only displayed when there is no property as `vs-text` o `vs-src`
:::


<vuecode md>
<div slot="demo">
  <Demos-Avatar-Icons />
</div>
<div slot="code">

```html
  <vs-avatar />
  <vs-avatar vs-color="primary" vs-icon="date_range" />
  <vs-avatar vs-color="success" vs-icon="whatshot" />
  <vs-avatar vs-color="danger" vs-icon="photo_camera" />
  <vs-avatar vs-color="warning" vs-icon="filter_vintage" />
  <vs-avatar vs-color="dark" vs-icon="watch" />
```

</div>
</vuecode>
</box>
