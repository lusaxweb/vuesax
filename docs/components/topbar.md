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

# Topbar

<box header>

  The top app bar displays information and actions relating to the current screen.

</box>


<box>

## Default

The distance between the elements contained in the topbar will be evenly spaced.

<vuecode md>
<div slot="demo">
  <vs-topbar>
    <vs-button vs-type="primary-relief">This is the first link</vs-button>
    <vs-button vs-type="success-relief">This is the second link</vs-button>
    <vs-button vs-type="danger-relief">This is the third link</vs-button>
    <vs-button vs-type="warning-relief">This is the fourth link</vs-button>
    <vs-button vs-type="dark-relief">This is the fifth link</vs-button>
  </vs-topbar>
</div>
<div slot="code">

```html
<vs-topbar>
  <vs-button vs-type="primary-relief">This is the first link</vs-button>
  <vs-button vs-type="success-relief">This is the second link</vs-button>
  <vs-button vs-type="danger-relief">This is the third link</vs-button>
  <vs-button vs-type="warning-relief">This is the fourth link</vs-button>
  <vs-button vs-type="dark-relief">This is the fifth link</vs-button>
</vs-topbar>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the ** Topbar ** with the property `vs-color`, the color can be one of the main ones like:` primary`, `success`,` danger`, `warning`,` dark` or **RGB**, **HEX**.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <vs-topbar vs-color="dark">
    <vs-button vs-type="primary-relief">This is the first link</vs-button>
    <vs-button vs-type="success-relief">This is the second link</vs-button>
    <vs-button vs-type="danger-relief">This is the third link</vs-button>
    <vs-button vs-type="warning-relief">This is the fourth link</vs-button>
  </vs-topbar>
</div>
<div slot="code">

```html
<vs-topbar vs-color="dark">
  <vs-button vs-type="primary-relief">This is the first link</vs-button>
  <vs-button vs-type="success-relief">This is the second link</vs-button>
  <vs-button vs-type="danger-relief">This is the third link</vs-button>
  <vs-button vs-type="warning-relief">This is the fourth link</vs-button>
</vs-topbar>
```

</div>
</vuecode>
</box>
