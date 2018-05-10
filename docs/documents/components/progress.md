---
API:
 - name: options
   type: Array
   parameters: {text:'Example',value:'1'}
   description: Options to select.
   default: null
---

# h1 tite

<box header>

  Texto de description

</box>


<box>

## Progress

<vuecode md>
<div slot="demo">
  <vs-progress :vs-percent="parseFloat(Math.random() * 100).toFixed(2)" vs-color="primary">primary</vs-progress>
  <vs-progress :vs-percent="parseFloat(Math.random() * 100).toFixed(2)" vs-color="warning">warning</vs-progress>
  <vs-progress :vs-percent="parseFloat(Math.random() * 100).toFixed(2)" vs-color="danger">danger</vs-progress>
  <vs-progress :vs-percent="parseFloat(Math.random() * 100).toFixed(2)" vs-color="success">success</vs-progress>
  <vs-progress :vs-percent="parseFloat(Math.random() * 100).toFixed(2)" vs-color="dark">dark</vs-progress>
  <vs-progress :vs-percent="parseFloat(Math.random() * 100).toFixed(2)" vs-color="rgb(164, 69, 15)">RGB</vs-progress>
  <vs-progress :vs-percent="parseFloat(Math.random() * 100).toFixed(2)" vs-color="#24c1a0">HEX</vs-progress>
</div>
<div slot="code">

```html
  <vs-progress :vs-percent="50" vs-color="primary"></vs-progress>
```

</div>
</vuecode>

</box>
