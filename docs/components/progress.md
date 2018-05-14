---
API:
  - name: vs-percent
    type: Number
    parameters: null
    description: Percentage of the progress
    default: 0
  - name: vs-color
    type: String
    parameters: RGB, HEX, primary, success, danger, warning, dark
    description: Component color
    default: primary
  - name: vs-indeterminate
    type: Boolean
    parameters: null
    description: determines if the progress bar its value is indeterminate and adds an animation
    default: false
  - name: vs-height
    type: Number
    parameters: null
    description: Determine the height of the progress bar
    default: 8
contributors:
  - fergardi
---

# Progress

<box header>

  Progress bars are a great way to show task advances or waiting time indications to the user.

</box>


<box>

## Colors

Nice colors for your progress bar.

<vuecode md>
<div slot="demo">
  <vs-progress :vs-percent="100" vs-color="primary">primary</vs-progress>
  <vs-progress :vs-percent="90" vs-color="warning">warning</vs-progress>
  <vs-progress :vs-percent="75" vs-color="danger">danger</vs-progress>
  <vs-progress :vs-percent="60" vs-color="success">success</vs-progress>
  <vs-progress :vs-percent="45" vs-color="dark">dark</vs-progress>
  <vs-progress :vs-percent="30" vs-color="rgb(164, 69, 15)">RGB</vs-progress>
  <vs-progress :vs-percent="15" vs-color="#24c1a0">HEX</vs-progress>
</div>
<div slot="code">

```html
  <vs-progress :vs-percent="100" vs-color="primary">primary</vs-progress>
  <vs-progress :vs-percent="90" vs-color="warning">warning</vs-progress>
  <vs-progress :vs-percent="75" vs-color="danger">danger</vs-progress>
  <vs-progress :vs-percent="60" vs-color="success">success</vs-progress>
  <vs-progress :vs-percent="45" vs-color="dark">dark</vs-progress>
  <vs-progress :vs-percent="30" vs-color="rgb(164, 69, 15)">RGB</vs-progress>
  <vs-progress :vs-percent="15" vs-color="#24c1a0">HEX</vs-progress>
```

</div>
</vuecode>

</box>


<box>

## Indeterminate

You can have a progress bar with indeterminate value with the property `vs-indeterminate`.

<vuecode md>
<div slot="demo">
  <vs-progress vs-indeterminate vs-color="primary">primary</vs-progress>
</div>
<div slot="code">

```html
  <vs-progress vs-indeterminate vs-color="primary">primary</vs-progress>
```

</div>
</vuecode>

</box>


<box>

## Height

You can change the height size with the property `vs-height`.

:::tip
by default the property `vs-height` is **8** (`8px`)
:::

<vuecode md>
<div slot="demo">
  <vs-progress :vs-height="4" :vs-percent="100" vs-color="primary">primary</vs-progress>
  <vs-progress :vs-height="8" :vs-percent="80" vs-color="warning">warning</vs-progress>
  <vs-progress :vs-height="12" :vs-percent="60" vs-color="danger">danger</vs-progress>
  <vs-progress :vs-height="16" :vs-percent="40" vs-color="success">success</vs-progress>
  <vs-progress :vs-height="20" :vs-percent="20" vs-color="dark">dark</vs-progress>
</div>
<div slot="code">

```html
<vs-progress :vs-height="4" :vs-percent="100" vs-color="primary">primary</vs-progress>
<vs-progress :vs-height="8" :vs-percent="80" vs-color="warning">warning</vs-progress>
<vs-progress :vs-height="12" :vs-percent="60" vs-color="danger">danger</vs-progress>
<vs-progress :vs-height="16" :vs-percent="40" vs-color="success">success</vs-progress>
<vs-progress :vs-height="20" :vs-percent="20" vs-color="dark">dark</vs-progress>
```

</div>
</vuecode>

</box>
