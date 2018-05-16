---
API:
 - name: vs-tabs
   type: Component
   parameters: null
   description: Component that contains the children vs-tab.
   default: null
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
 - name: vs-position
   type: String
   parameters: top, left, bottom, right
   description: Tabs menu position.
   default: null
 - name: vs-color
   type: String
   parameters: RGB, HEX
   description: Color of the tabs component.
   default: null
 - name: disabled
   type: Boolean
   parameters: null
   description: Button on disabled.
   default: null
---

# Tabs

<box header>

  Tabs very easy to implement

</box>


<box>

## Default

To implement a tabs within the application we have the `vs-tabs` component that as an internal component needs `vs-tab` for each child.

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
    <vs-tabs >
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
      <vs-tab :disabled="true" vs-label="Disabled">
        <div class="con-tab-ejemplo">
          Disabled

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
    <vs-tabs vs-color="rgb(93, 32, 122)">
      <vs-tab vs-label="top">
        <!-- top -->
        <vs-tabs vs-color="rgb(29, 55, 194)">
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
          <vs-tab :disabled="true" vs-label="Disabled">
            <div class="">
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
      <vs-tab vs-label="right">

        <!-- right -->
        <vs-tabs vs-position="right" vs-color="rgb(29, 55, 194)">
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
          <vs-tab :disabled="true" vs-label="Disabled">
            <div class="con-tab-ejemplo">
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
      <vs-tab vs-label="bottom">

        <!-- bottom -->
        <vs-tabs vs-position="bottom" vs-color="rgb(29, 55, 194)">
          <vs-tab vs-label="Home">
            <div class="con-tab-ejemplo">
              Home
            </div>
          </vs-tab>
          <vs-tab vs-label="Service">
            <div class="">
              Service
            </div>
          </vs-tab>
          <vs-tab vs-label="login">
            <div class="con-tab-ejemplo">
              login
            </div>
          </vs-tab>
          <vs-tab :disabled="true" vs-label="Disabled">
            <div class="con-tab-ejemplo">
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
      <vs-tab vs-label="left">
        <!-- left -->
        <vs-tabs vs-position="left" vs-color="rgb(29, 55, 194)">
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
          <vs-tab :disabled="true" vs-label="Disabled">
            <div class="con-tab-ejemplo">
              Disabled
            </div>
          </vs-tab>
        </vs-tabs>

      </vs-tab>
    </vs-tabs>
  </div>
</template>
```

</div>
</vuecode>

</box>
