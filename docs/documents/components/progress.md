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
