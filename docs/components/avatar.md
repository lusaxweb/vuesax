---
API:
 - name: text
   type: String
   parameters: null
   description: If the text is very long, only the first letter is added.
   default: null
 - name: text-color
   type: String
   parameters: Text colores principales, RGB, HEX
   description: Define the color of the Text.
   default: rgb(255, 255, 255)
 - name: src
   type: String
   parameters: null
   description: Url of the image to show in the Avatar.
   default: null
 - name: size
   type: String
   parameters: large, small, Custom measure (70px)
   description: Size of the image to show in the Avatar.
   default: 32px
 - name: color
   type: String
   parameters: Colores Principales, RGB, HEX
   description: Define the color of the Avatar (does not affect the image).
   default: rgb(195, 195, 195)
 - name: badge
   type: Boolean, Number
   parameters: null
   description: Define if the badge is active and what is its value in number.
   default: null
 - name: badge-color
   type: String
   parameters: Colores Principales, RGB, HEX
   description: Define the color of the Badge.
   default: danger
 - name: icon
   type: String
   parameters: Material Icons
   description: Define the icon within the Avatar.
   default: person
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
---

# Avatar

<box header>

  A nice avatar and with many interesting features

</box>


<box>

## Default

Often you need to add an user's avatar to your app. In order to make this we have the component `vs-avatar`.

To add an internal text value such as `Luis` use the` text` property.

:::tip
If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is `Luis Daniel` and only the letters `LD` will be shown if the word contains spaces the initial of each one is added.
:::

<vuecode md center>
<div slot="demo">
  <vs-avatar />
  <vs-avatar text="Luisdaniel"/>
  <vs-avatar text="Luisd"/>
  <vs-avatar text="Luis Daniel"/>
  <vs-avatar src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
</div>
<div slot="code">

```html
<vs-avatar />
<vs-avatar text="Luis Daniel"/>
<vs-avatar text="Luisd"/>
<vs-avatar src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
```

</div>
</vuecode>

</box>


<box>

## Size

You can change the size of the Avatar with the property `size` the allowed values ​​are:

- large
- small
- Custom measure

:::tip
  In the example the last avatar has the custom size of `70px` the added value will be the avatar's **height** and **width**
:::

<vuecode md center>
<div slot="demo">
  <vs-avatar size="small" />
  <vs-avatar text="Luis Daniel"/>
  <vs-avatar size="large" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
  <vs-avatar size="70px" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
</div>
<div slot="code">

```html
<vs-avatar size="small" />
<vs-avatar text="Luis Daniel"/>
<vs-avatar size="large" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
<vs-avatar size="70px" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the Avatar's color by using the property `color`. If needed you could also change the text's color with the property `text-color`.

<vuecode md center>
<div slot="demo">
<vs-avatar color="primary" text="primary"/>
<vs-avatar color="success" text="success"/>
<vs-avatar color="danger" text="danger"/>
<vs-avatar color="warning" text="warning"/>
<vs-avatar color="dark" text="dark"/>
<vs-avatar color="rgb(200, 21, 129)" text="RGB"/>
<vs-avatar color="#18cd5b" text="HEX"/>
<vs-avatar color="#26302a" text-color="rgb(246, 190, 16)" text="HEX RGB"/>
</div>
<div slot="code">

```html
<vs-avatar color="primary" text="primary"/>
<vs-avatar color="success" text="success"/>
<vs-avatar color="danger" text="danger"/>
<vs-avatar color="warning" text="warning"/>
<vs-avatar color="dark" text="dark"/>
<vs-avatar color="rgb(200, 21, 129)" text="RGB"/>
<vs-avatar color="#18cd5b" text="HEX"/>
<vs-avatar color="#26302a" text-color="rgb(246, 190, 16)" text="HEX RGB"/>
```

</div>
</vuecode>
</box>

<box>

## With Badge

You can add a notification label to the avatar, either a reference point or a number with the property `badge`.

You could also change the badge's color by using the property `badge-color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

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
    <vs-avatar badge />
    <vs-avatar :badge="badge1" text="Luisdaniel"/>
    <vs-avatar badge-color="rgb(140, 23, 164)" :badge="badge2" text="Luisd"/>
  </div>
      <button color="danger" type="filled" @click="increment">
        Increment Badge counter
      </button>
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

You can change the main icon of the Avatar with the property `icon`

::: tip
Vuesax uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.

This icon is only displayed when there is no property as `text` o `src`
:::


<vuecode md>
<div slot="demo">
  <Demos-Avatar-Icons />
</div>
<div slot="code">

```html
  <vs-avatar />
  <vs-avatar color="primary" icon="date_range" />
  <vs-avatar color="success" icon="whatshot" />
  <vs-avatar color="danger" icon="photo_camera" />
  <vs-avatar color="warning" icon="filter_vintage" />
  <vs-avatar color="dark" icon="watch" />
```

</div>
</vuecode>
</box>
