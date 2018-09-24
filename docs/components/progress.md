---
API:
  - name: percent
    type: Number
    parameters: null
    description: Percentage of the progress
    default: 0
  - name: color
    type: String
    parameters: RGB, HEX, primary, success, danger, warning, dark
    description: Component color
    default: primary
  - name: indeterminate
    type: Boolean
    parameters: null
    description: determines if the progress bar its value is indeterminate and adds an animation
    default: false
  - name: height
    type: Number
    parameters: null
    description: Determine the height of the progress bar
    default: 6
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
  <vs-progress :percent="100" color="primary">primary</vs-progress>
  <vs-progress :percent="90" color="warning">warning</vs-progress>
  <vs-progress :percent="75" color="danger">danger</vs-progress>
  <vs-progress :percent="60" color="success">success</vs-progress>
  <vs-progress :percent="45" color="dark">dark</vs-progress>
  <vs-progress :percent="30" color="rgb(164, 69, 15)">RGB</vs-progress>
  <vs-progress :percent="15" color="#24c1a0">HEX</vs-progress>
</div>
<div slot="code">

```html
  <vs-progress :percent="100" color="primary">primary</vs-progress>
  <vs-progress :percent="90" color="warning">warning</vs-progress>
  <vs-progress :percent="75" color="danger">danger</vs-progress>
  <vs-progress :percent="60" color="success">success</vs-progress>
  <vs-progress :percent="45" color="dark">dark</vs-progress>
  <vs-progress :percent="30" color="rgb(164, 69, 15)">RGB</vs-progress>
  <vs-progress :percent="15" color="#24c1a0">HEX</vs-progress>
```

</div>
</vuecode>

</box>


<box>

## Indeterminate

You can have a progress bar with indeterminate value with the property `indeterminate`.

<vuecode md>
<div slot="demo">
  <vs-progress indeterminate color="primary">primary</vs-progress>
</div>
<div slot="code">

```html
  <vs-progress indeterminate color="primary">primary</vs-progress>
```

</div>
</vuecode>

</box>


<box>

## Height

You can change the height of the loading bar with the property `height`.

:::tip
By default the property `height` is **5** (`5px`)
:::

<vuecode md>
<div slot="demo">
  <vs-progress :height="2" :percent="100" color="primary">primary</vs-progress>
  <vs-progress :height="4" :percent="80" color="warning">warning</vs-progress>
  <vs-progress :height="8" :percent="60" color="danger">danger</vs-progress>
  <vs-progress :height="12" :percent="40" color="success">success</vs-progress>
</div>
<div slot="code">

```html
<vs-progress :height="2" :percent="100" color="primary">primary</vs-progress>
<vs-progress :height="4" :percent="80" color="warning">warning</vs-progress>
<vs-progress :height="8" :percent="60" color="danger">danger</vs-progress>
<vs-progress :height="12" :percent="40" color="success">success</vs-progress>
```

</div>
</vuecode>

</box>
