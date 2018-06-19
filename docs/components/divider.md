---
API:
 - name: vs-position
   type: String
   parameters: (left, left-center, right-center, right)
   description: Determina la posicion del texto o icono.
   default: center
 - name: vs-color
   type: String
   parameters: null
   description: Change the color of the line and the text.
   default: rgba(0,0,0.1)
 - name: vs-icon
   type: String
   parameters: Material Icons
   description: Add an icon instead of the text.
   default: null
 - name: vs-style
   type: String
   parameters: null
   description: Determines the type of line in the component.
   default: solid
---

# Divider <!--#new-->

<box header>

  Divide text or section components with some great features and quick to implement

</box>

<box>

## Default

You can add a line to divide with the component `vs-divider`

<vuecode md>
<div slot="demo">
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <vs-divider/>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
<div slot="code">

```html
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<vs-divider/>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

</div>
</vuecode>
</box>

<box>

## Text

You can add a text between the line to delimit two elements and have a description for the user

<vuecode md>
<div slot="demo">
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <vs-divider>
    My Text
  </vs-divider>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
<div slot="code">

```html
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 <vs-divider>
   My Text
 </vs-divider>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

</div>
</vuecode>
</box>


<box>

## Text Position

You can guide the text in **5** ways with property `vs-position`:

- left
- left-center
- center (`default`)
- right-center
- right

<vuecode md>
<div slot="demo">
  <vs-divider vs-position="left">
    left
  </vs-divider>
  <vs-divider vs-position="left-center">
    left-center
  </vs-divider>
  <vs-divider>
    Center (default)
  </vs-divider>
  <vs-divider vs-position="right-center">
    right-center
  </vs-divider>
  <vs-divider vs-position="right">
    right
  </vs-divider>
</div>
<div slot="code">

```html
<vs-divider vs-position="left">
  My Text
</vs-divider>
<vs-divider vs-position="left-center">
  My Text
</vs-divider>
<vs-divider vs-position="center">
  My Text
</vs-divider>
<vs-divider vs-position="right-center">
  My Text
</vs-divider>
<vs-divider vs-position="right">
  My Text
</vs-divider>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the component with the property `vs-color`, you can use the colors [main](/theme/) or the **RGB** and **HEX**
:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <vs-divider>Default</vs-divider>
  <vs-divider vs-color="primary">Primary</vs-divider>
  <vs-divider vs-color="success">Success</vs-divider>
  <vs-divider vs-color="danger">Danger</vs-divider>
  <vs-divider vs-color="warning">Warning</vs-divider>
  <vs-divider vs-color="dark">Dark</vs-divider>
  <vs-divider vs-color="rgb(29, 222, 194)">RGB</vs-divider>
  <vs-divider vs-color="#ad289f">HEX</vs-divider>
</div>
<div slot="code">

```html
<div slot="demo">
  <vs-divider>Default</vs-divider>
  <vs-divider vs-color="primary">Primary</vs-divider>
  <vs-divider vs-color="success">Success</vs-divider>
  <vs-divider vs-color="danger">Danger</vs-divider>
  <vs-divider vs-color="warning">Warning</vs-divider>
  <vs-divider vs-color="dark">Dark</vs-divider>
  <vs-divider vs-color="rgb(29, 222, 194)">RGB</vs-divider>
  <vs-divider vs-color="#ad289f">HEX</vs-divider>
```

</div>
</vuecode>
</box>


<box>

## Icons

To add an icon within the division we have the property `vs-icon`.

::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::

<vuecode md>
<div slot="demo">
  <vs-divider vs-position="left" vs-icon="arrow_downward"></vs-divider>
  <vs-divider vs-position="left-center" vs-color="primary" vs-icon="star"></vs-divider>
  <vs-divider vs-color="success" vs-icon="check"></vs-divider>
  <vs-divider vs-position="right-center" vs-color="danger" vs-icon="delete_forever"></vs-divider>
  <vs-divider vs-position="right" vs-color="warning" vs-icon="report_problem"></vs-divider>
  <vs-divider vs-color="dark" vs-icon="watch_later"></vs-divider>
</div>
<div slot="code">

```html
<vs-divider vs-icon="arrow_downward"></vs-divider>
<vs-divider vs-color="primary" vs-icon="star"></vs-divider>
<vs-divider vs-color="success" vs-icon="check"></vs-divider>
<vs-divider vs-color="danger" vs-icon="delete_forever"></vs-divider>
<vs-divider vs-color="warning" vs-icon="report_problem"></vs-divider>
<vs-divider vs-color="dark" vs-icon="watch_later"></vs-divider>
```

</div>
</vuecode>
</box>


<box>

## Style

You can change line's style with the property `vs-style` the allowed values ​​are equivalent to the border-style property in CSS.

- **dotted** - Defines a dotted border
- **dashed** - Defines a dashed border
- **solid** - Defines a solid border (default)

<vuecode md>
<div slot="demo">
  <vs-divider vs-style="dotted" vs-color="dark">dotted</vs-divider>
  <vs-divider vs-style="dashed" vs-color="dark">dashed</vs-divider>
  <vs-divider vs-style="solid" vs-color="dark">solid</vs-divider>
</div>
<div slot="code">

```html
<vs-divider vs-style="dotted" vs-color="dark">dotted</vs-divider>
<vs-divider vs-style="dashed" vs-color="dark">dashed</vs-divider>
<vs-divider vs-style="solid" vs-color="dark">solid</vs-divider>
```

</div>
</vuecode>
</box>
