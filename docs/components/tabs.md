---
API:
 - name: vs-tabs
   type: Component
   parameters: null
   description: Component that contains the children vs-tab.
   default: null
 - name: v-model
   type: bind
   parameters: null
   description: Link active tab index.
   default: null
 - name: value
   type: Number, String
   parameters: null
   description: Index of active tab.
   default: 0
 - name: vs-position
   type: String
   parameters: top, left, bottom, right
   description: Tabs menu position.
   default: null
 - name: color
   type: String
   parameters: RGB, HEX
   description: Color of the tabs component.
   default: null
 - name: vs-alignment
   type: String
   parameters: top (default), left, bottom, right
   description: Change the alignment of the tabs buttons.
   default: top
 - name: vs-tab
   type: Component
   parameters: null
   description: component that wraps everything inside.
   default: null
 - name: vs-label
   type: String
   parameters: null
   description: Text on the tab button.
   default: null
 - name: vs-icon
   type: String
   parameters: Same as `vs-icon` component.
   description: Add a left icon inside the tabs component.
   default: null
---

# Tabs

<box header>

  Tabs are very easy to implement

</box>


<box>

## Default

To implement a tabs, use the `vs-tabs` component. It must include `vs-tab` child components that represent each tab.

:::tip
For the title of each tab the `vs-tab` property is implemented in the` vs-tab` component.
:::

<vuecode md>
<div slot="demo">
  <Demos-Tabs-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <vs-tabs>
      <vs-tab vs-label="Home">
        <div class="con-tab-ejemplo">
          Home
        </div>
      </vs-tab>
      <vs-tab vs-label="Service">
        <div class="con-tab-ejemplo">
          Service
        </div>
      </vs-tab>
      <vs-tab vs-label="login">
        <div class="con-tab-ejemplo">
          login
        </div>
      </vs-tab>
      <vs-tab disabled vs-label="Disabled">
        <div class="con-tab-ejemplo">
          Disabled
        </div>
      </vs-tab>
      <vs-tab vs-label="Lorem ipsum dolor sit amet">
        <div class="con-tab-ejemplo">
          Lorem ipsum dolor sit amet
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>
```

</div>
</vuecode>

</box>

<box>

## Color

You can change the color of the component with the property `color`, the parameter allows the main colors and HEX or RGB

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Tabs-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-tabs :color="colorx">
      <vs-tab @click="colorx = 'success'" vs-label="Success">
        <div class="con-tab-ejemplo">
          Success
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'danger'" vs-label="Danger">
        <div class="con-tab-ejemplo">
          Danger
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'warning'" vs-label="Warning">
        <div class="con-tab-ejemplo">
          Warning
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'dark'" vs-label="Dark">
        <div class="con-tab-ejemplo">
          Dark
        </div>
      </vs-tab>
        <vs-tab @click="colorx = 'rgb(16, 233, 179)'" vs-label="RGB | HEX">
        <div class="con-tab-ejemplo">
          RGB | HEX
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'success'
  }),
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Alignments

Change the alignment of the buttons with the property `vs-alignments`. The allowed values ​​are:

- center
- right
- fixed

<vuecode md>
<div slot="demo">
  <Demos-Tabs-Alignments />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <h3>
      Default
    </h3>
    <vs-tabs>
      <vs-tab vs-label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Ecosistem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>

    <h3>
      Center
    </h3>
    <vs-tabs vs-alignment="center">
      <vs-tab vs-label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Ecosistem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>

    <h3>
      Right
    </h3>
    <vs-tabs vs-alignment="right">
      <vs-tab vs-label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Ecosistem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>


    <h3>
      Fixed
    </h3>
    <vs-tabs vs-alignment="fixed">
      <vs-tab vs-label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Ecosistem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>


  </div>
</template>
```

</div>
</vuecode>

</box>

<box>

## Position

You can change the position of the menu with the property `vs-position` that as a value you can have: `top`, `right`,`bottom`, `left`.

<vuecode md>
<div slot="demo">
  <Demos-Tabs-Position />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <h3>
      Default
    </h3>
    <vs-tabs>
      <vs-tab vs-label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Ecosistem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>

    <h3>
      Center
    </h3>
    <vs-tabs vs-alignment="center">
      <vs-tab vs-label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Ecosistem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>

    <h3>
      Right
    </h3>
    <vs-tabs vs-alignment="right">
      <vs-tab vs-label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Ecosistem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>


    <h3>
      Fixed
    </h3>
    <vs-tabs vs-alignment="fixed">
      <vs-tab vs-label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab vs-label="Ecosistem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>


  </div>
</template>
```

</div>
</vuecode>

</box>

<box>

## Icons

You can add a left icon inside each tab with the property `vs-icon` that has the same values as the `vs-icon` component.

<vuecode md>
<div slot="demo">
  <Demos-Tabs-Icons />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-tabs :color="colorx">
      <vs-tab vs-label="Pets" vs-icon="pets" @click="colorx = '#8B0000'">
      </vs-tab>
      <vs-tab vs-label="Bank" vs-icon="account_balance" @click="colorx = '#FFA500'">
      </vs-tab>
      <vs-tab vs-label="Dashboard" vs-icon="dashboard" @click="colorx = '#551A8B'">
      </vs-tab>
      <vs-tab vs-label="Profile" vs-icon="account_circle" @click="colorx = '#0000FF'">
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx: '#8B0000'
  })
}
</script>
</template>
```

</div>
</vuecode>

</box>
