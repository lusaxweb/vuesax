---
API:
 - name: position
   type: String
   parameters: (left, left-center, right-center, right)
   description: Determine the position of the text or icon.
   default: center
 - name: color
   type: String
   parameters: null
   description: Change the color of the line and the text.
   default: rgba(0,0,0.1)
 - name: background
   type: String
   parameters: null
   description: Change the background color of the text.
   default: transparent
 - name: icon
   type: String
   parameters: Icon Class
   description: Add an icon instead of the text.
   default: null
 - name: border-style
   type: String
   parameters: null
   description: Determines the type of line in the component.
   default: solid
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
---

# Divider

<box header>

  Divide text or section components with some great features and quick to implement

</box>

<box>

## Default

You can add a line to divide with the component `vs-divider`.

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

You can add a text between the line to delimit two elements and have a description for the user.

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

You can guide the text in **5** ways with property `position`:

- left
- left-center
- center (`default`)
- right-center
- right

<vuecode md>
<div slot="demo">
  <vs-divider position="left">
    left
  </vs-divider>
  <vs-divider position="left-center">
    left-center
  </vs-divider>
  <vs-divider>
    center (default)
  </vs-divider>
  <vs-divider position="right-center">
    right-center
  </vs-divider>
  <vs-divider position="right">
    right
  </vs-divider>
</div>
<div slot="code">

```html
<vs-divider position="left">
  My Text
</vs-divider>
<vs-divider position="left-center">
  My Text
</vs-divider>
<vs-divider position="center">
  My Text
</vs-divider>
<vs-divider position="right-center">
  My Text
</vs-divider>
<vs-divider position="right">
  My Text
</vs-divider>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the component with the property `color`, you can use the [main](/theme/) colors or **RGB** and **HEX**.
:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <vs-divider>Default</vs-divider>
  <vs-divider color="primary">Primary</vs-divider>
  <vs-divider color="success">Success</vs-divider>
  <vs-divider color="danger">Danger</vs-divider>
  <vs-divider color="warning">Warning</vs-divider>
  <vs-divider color="dark">Dark</vs-divider>
  <vs-divider color="rgb(29, 222, 194)">RGB</vs-divider>
  <vs-divider color="#ad289f">HEX</vs-divider>
</div>
<div slot="code">

```html
<div slot="demo">
  <vs-divider>Default</vs-divider>
  <vs-divider color="primary">Primary</vs-divider>
  <vs-divider color="success">Success</vs-divider>
  <vs-divider color="danger">Danger</vs-divider>
  <vs-divider color="warning">Warning</vs-divider>
  <vs-divider color="dark">Dark</vs-divider>
  <vs-divider color="rgb(29, 222, 194)">RGB</vs-divider>
  <vs-divider color="#ad289f">HEX</vs-divider>
</div>
```

</div>
</vuecode>
</box>


<box>

## Background

You can change the background of the text with the property `background`, you can use the [main](/theme/) colors or **RGB** and **HEX**.
:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <vs-divider>Default</vs-divider>
  <vs-divider background="primary" color="#ade6d4">Primary</vs-divider>
  <vs-divider background="success" color="#0a540a">Success</vs-divider>
  <vs-divider background="danger" color="lightred">Danger</vs-divider>
  <vs-divider background="warning" color="grey">Warning</vs-divider>
  <vs-divider background="dark" color="lightgrey">Dark</vs-divider>
  <vs-divider background="rgb(252, 243, 192)" color="rgb(29, 222, 194)">RGB</vs-divider>
  <vs-divider background="#fffaaa" color="#ad289f">HEX</vs-divider>
</div>
<div slot="code">

```html
<div slot="demo">
  <vs-divider>Default</vs-divider>
  <vs-divider background="primary" color="#ade6d4">Primary</vs-divider>
  <vs-divider background="success" color="#0a540a">Success</vs-divider>
  <vs-divider background="danger" color="lightred">Danger</vs-divider>
  <vs-divider background="warning" color="grey">Warning</vs-divider>
  <vs-divider background="dark" color="lightgrey">Dark</vs-divider>
  <vs-divider background="rgb(252, 243, 192)" color="rgb(29, 222, 194)">RGB</vs-divider>
  <vs-divider background="#fffaaa" color="#ad289f">HEX</vs-divider>
</div>
```

</div>
</vuecode>
</box>


<box>

## Icons

To add an icon within the division we have the property `icon`.

::: tip
Vuesax uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

<vuecode md>
<div slot="demo">
  <vs-divider position="left" icon="arrow_downward"></vs-divider>
  <vs-divider position="left-center" color="primary" icon="star"></vs-divider>
  <vs-divider color="success" icon="check"></vs-divider>
  <vs-divider position="right-center" color="danger" icon="delete_forever"></vs-divider>
  <vs-divider position="right" color="warning" icon="report_problem"></vs-divider>
  <vs-divider color="dark" icon="watch_later"></vs-divider>
</div>
<div slot="code">

```html
<vs-divider icon="arrow_downward"></vs-divider>
<vs-divider color="primary" icon="star"></vs-divider>
<vs-divider color="success" icon="check"></vs-divider>
<vs-divider color="danger" icon="delete_forever"></vs-divider>
<vs-divider color="warning" icon="report_problem"></vs-divider>
<vs-divider color="dark" icon="watch_later"></vs-divider>
```

</div>
</vuecode>
</box>


<box>

## Style

You can change line's style with the property `border-style`. The allowed values ​​are equivalent to the `border-style` property in CSS.

- **dotted** - Defines a dotted border
- **dashed** - Defines a dashed border
- **solid** - Defines a solid border (default)

<vuecode md>
<div slot="demo">
  <vs-divider border-style="dotted" color="dark">dotted</vs-divider>
  <vs-divider border-style="dashed" color="dark">dashed</vs-divider>
  <vs-divider border-style="solid" color="dark">solid</vs-divider>
</div>
<div slot="code">

```html
<vs-divider border-style="dotted" color="dark">dotted</vs-divider>
<vs-divider border-style="dashed" color="dark">dashed</vs-divider>
<vs-divider border-style="solid" color="dark">solid</vs-divider>
```

</div>
</vuecode>
</box>
