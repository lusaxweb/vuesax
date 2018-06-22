---
API:
  - name: vs-color
    type: String
    parameters: primary, success, danger, warning, dark, RGB, HEX
    description: Color of the topbar
    default:
contributors:
  - fergardi
---

# Topbar <!--#new-->

<box header>

  The top app bar displays information and actions relating to the current screen.

</box>


<box>

## Default

The distance between the elements contained in the topbar will be evenly spaced.

<vuecode md>
<div slot="demo">
  <vs-topbar style="justify-content: flex-start;">
    <vs-button vs-color="dark" vs-type="flat" vs-radius="50%" vs-icon="menu"></vs-button>
    <h3>This is my cool application topbar title</h3>
    <vs-button vs-color="dark" vs-type="flat" vs-radius="50%" vs-icon="more_vert" style="margin-left: auto;"></vs-button>
  </vs-topbar>
</div>
<div slot="code">

```html
<vs-topbar style="justify-content: flex-start;">
  <vs-button vs-type="dark-flat" vs-icon="true"><i class="material-icons">menu</i></vs-button>
  <h3>This is my cool application topbar title</h3>
  <vs-button vs-type="dark-flat" vs-icon="more_vert"></vs-button>
</vs-topbar>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the **Topbar** with the property `vs-color`, the color can be one of the main ones like:` primary`, `success`,` danger`, `warning`,` dark` or **RGB**, **HEX**.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
<Demos-Topbar-Colors />

</div>
<div slot="code">

```html
<vs-topbar vs-color="primary">
  <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" vs-radius="50%" vs-icon="menu"></vs-button>
  <h4>This is my cool application topbar title</h4>
  <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >Home</vs-button>
  <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >Documents</vs-button>
  <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" vs-radius="50%" vs-icon="more_vert" style="margin-left: auto;"></vs-button>
</vs-topbar>
```

</div>
</vuecode>
</box>
