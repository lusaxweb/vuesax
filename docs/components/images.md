---
API:
 - name: hover
   type: String
   parameters: null
   description: Change the hover of the images
   default: default
 - name: alternating
   type: Boolean
   parameters: null
   description: Determines if the images have a direct structure with some larger ones
   default: false
 - name: not-border-radius
   type: Boolean
   parameters: null
   description: Remove border radius from images
   default: false
 - name: not- margin
   type: Boolean
   parameters: null
   description: Remove Margin from images
   default: false
---

# Images

<box header>

  Create a gallery or add an image easily

</box>

<box>

## Default

You can create an image gallery easily with the components `vs-images` y `vs-image`

<vuecode md>
<div slot="demo">
  <Demos-Images-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="con-example-images">
    <vs-images>
      <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
      <vs-image :key="index" :src="`https://picsum.photos/400/400?image=1${index}`" v-for="(image, index) in 7" />
    </vs-images>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.con-example-images
  max-height 500px
  overflow auto
</style>
```

</div>
</vuecode>
</box>

<box>

## hover

You can change the animation by hovering with the property `hover`

the types of hover are:

- default
- blur
- zoom
- dark
- scale
- curtain

<vuecode md>
<div slot="demo">
  <Demos-Images-Hover />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="con-example-images">
    <vs-select
    class="selectExample"
      label="Figuras"
      v-model="hover"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in hovers" />
    </vs-select>

    <vs-images :hover="hover">
      <vs-image :key="index" :src="`https://picsum.photos/400/400?image=3${index}`" v-for="(image, index) in 9" />
      <vs-image :key="index" :src="`https://picsum.photos/400/400?image=4${index}`" v-for="(image, index) in 7" />
    </vs-images>
  </div>
</template>

<script>
export default {
  data: () => ({
    hover: 'blur',
    hovers:[
      {text:'Default',value:'default'},
      {text:'Blur',value:'blur'},
      {text:'Zoom',value:'zoom'},
      {text:'Dark',value:'dark'},
      {text:'Scale',value:'scale'},
      {text:'Curtain',value:'curtain'},
    ],
  })
}
</script>

<style lang="stylus">
.con-example-images
  max-height 500px
  overflow auto
</style>
```

</div>
</vuecode>
</box>

<box>

## more

You can make changes in some details like removing the border-radius with the property `not-border-radius` or adding a different style of layout with the property `alternating`, you can also remove the margin between the images with the property `not- margin`.

<vuecode md>
<div slot="demo">
  <Demos-Images-More />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="con-example-images">
    <vs-images alternating not-border-radius not-margin >
      <vs-image :key="index" :src="`https://picsum.photos/400/400?image=3${index}`" v-for="(image, index) in 9" />
      <vs-image :key="index" :src="`https://picsum.photos/400/400?image=4${index}`" v-for="(image, index) in 7" />
    </vs-images>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.con-example-images
  max-height 500px
  overflow auto
</style>
```

</div>
</vuecode>
</box>
