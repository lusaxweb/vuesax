---
API:
  - name: color
    type: String
    parameters: primary, success, danger, warning, dark, RGB, HEX
    description: Color of the topbar
    default:
  - name: text-color
    type: String
    parameters: primary, success, danger, warning, dark, RGB, HEX
    description: Text color items
    default:
  - name: active-text-color
    type: String
    parameters: primary, success, danger, warning, dark, RGB, HEX
    description: Text color items active state
    default:
  - name: index
    type: String
    parameters: primary, success, danger, warning, dark, RGB, HEX
    description: Determines the value of each item that is reflected in it when selecting v-model
    default:
  - name: title
    type: Slot
    parameters: null
    description: Space to add the menu title (Functionality for resposive)
    default:
  - name: collapse
    type: Boolean
    parameters: null
    description: Determines if the component starts in hidden menu mode that can be opened by clicking on the menu
    default: false
contributors:
  - fergardi
---

# Navbar

<box header>

  The top app bar displays information and actions relating to the current screen.

</box>


<box>

## Default **- update**

To add a navbar we have the component `vs-navbar`, there is a series of sub components to determine internal elements `vs-navbar-title`, `vs-spacer`.

:::tip
  By default the component has a relative position, if necessary it can be changed by means of css the position as for example: `fixed`
:::

<vuecode md>
<div slot="demo">
  <Demos-Navbar-Default />
</div>
<div slot="code">

```html
<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Hello world
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0
  })
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Input

You may need an entry in the menu to simply use the `vs-input` component, for example if you need a search engine.

<vuecode md>
<div slot="demo">
<Demos-Navbar-Input />

</div>
<div slot="code">

```html
<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Hello world
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
      <vs-input icon="search" placeholder="Search" v-model="search"/>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0,
    search: ''
  })
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Type

If you want you can change the style of the buttons and the navbar by changing the property `type`

<vuecode md>
<div slot="demo">
<Demos-Navbar-Type />

</div>
<div slot="code">

```html
<template>
  <div class="con-type-example">

    <vs-select
      class="selectExample"
      label="Figuras"
      v-model="type"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in types" />
    </vs-select>

    <vs-navbar :type="type" v-model="activeItem" class="nabarx">

      <div slot="title">
        <vs-navbar-title>
          Type {{type}}
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0,
    type: 'flat',
    types: [
      {
        value: null, text: 'Default'
      },
      {
        value: 'flat', text: 'Flat'
      },
      {
        value: 'fund', text: 'Fund'
      },
      {
        value: 'border', text: 'border'
      },
      {
        value: 'gradient', text: 'Gradient'
      },
      {
        value: 'shadow', text: 'Shadow'
      }
    ]
  })
}
</script>
<style lang="stylus">
.con-type-example
  .vs-navbar
    margin-top 10px
</style>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the **Topbar** with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
<Demos-Navbar-Colors />

</div>
<div slot="code">

```html


<template>
  <div class="centerx">
    <input class="input-color" v-model="colorx" type="color" name="" value="">
    <vs-navbar
      v-model="indexActive"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar">
      <div slot="title">
        <vs-navbar-title>
          Navbar Color
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0" >
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>

      <vs-spacer></vs-spacer>

      <vs-button color-text="rgb(255, 255, 255)" color="rgba(255, 255, 255, 0.3)" type="flat" icon="more_horiz"></vs-button>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'#1db952',
    indexActive: 0
  })
}
</script>

<style lang="stylus">
.input-color
  margin-bottom 10px
  position relative
  display block
.myNavbar
  color rgb(255,255,255)
</style>

```

</div>
</vuecode>
</box>

<box>

## Collapse

This property determines if the component starts hidden and with the option of clicking on the menu to open or saw the options

<vuecode md>
<div slot="demo">
  <Demos-Navbar-Collapse />
</div>
<div slot="code">

```html
<template>
  <div>
    <vs-navbar collapse v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Hello world
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0
  })
}
</script>
```

</div>
</vuecode>
</box>

