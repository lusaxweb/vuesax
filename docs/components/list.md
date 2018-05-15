---
API:
  - name: vs-color
    type: String
    parameters: RGB, HEX, primary, success, danger, warning, dark
    description: Component color
    default: primary
  - name: vs-icon
    type: String
    parameters: Material icons
    description: An icon to show
    default: null
  - name: vs-title
    type: String
    parameters: 
    description: List primary text
    default: null
  - name: vs-subtitle
    type: String
    parameters: 
    description: List secondary text
    default: null
contributors:
  - fergardi
---

# List

<box header>

  Lists are continuous, vertical indexes of text or images

</box>

<box>

## Basic

A basic list of items with `vs-title` and `vs-subtitle`.

<vuecode md>
<div slot="demo">
  <vs-list>
    <vs-list-item vs-title="One text"></vs-list-item>
    <vs-list-item vs-title="Another text" vs-subtitle="A little text"></vs-list-item>
    <vs-list-item vs-title="Some more text"></vs-list-item>
    <vs-list-item vs-title="Even more text" vs-subtitle="Another little text"></vs-list-item>
  </vs-list>
</div>
<div slot="code">

```html
<vs-list>
  <vs-list-item vs-title="One text"></vs-list-item>
  <vs-list-item vs-title="Another text" vs-subtitle="A little text"></vs-list-item>
  <vs-list-item vs-title="Some more text"></vs-list-item>
  <vs-list-item vs-title="Even more text" vs-subtitle="Another little text"></vs-list-item>
</vs-list>
```

</div>
</vuecode>
</box>

<box>

## Header

A `vs-list-header` separator with custom `vs-color`.

<vuecode md>
<div slot="demo">
  <vs-list>
    <vs-list-header vs-title="Group 1"></vs-list-header>
    <vs-list-item vs-title="Item 1.1" vs-subtitle="Item 1.1"></vs-list-item>
    <vs-list-item vs-title="Item 1.2" vs-subtitle="Item 1.2"></vs-list-item>
    <vs-list-header vs-title="Group 2" vs-color="success"></vs-list-header>
    <vs-list-item vs-title="Item 2.1" vs-subtitle="Item 2.1"></vs-list-item>
    <vs-list-item vs-title="Item 2.2" vs-subtitle="Item 2.2"></vs-list-item>
  </vs-list>
</div>
<div slot="code">

```html
<vs-list>
  <vs-list-header vs-title="Group 1"></vs-list-header>
  <vs-list-item vs-title="Item 1.1" vs-subtitle="Item 1.1"></vs-list-item>
  <vs-list-item vs-title="Item 1.2" vs-subtitle="Item 1.2"></vs-list-item>
  <vs-list-header vs-title="Group 2" vs-color="success"></vs-list-header>
  <vs-list-item vs-title="Item 2.1" vs-subtitle="Item 2.1"></vs-list-item>
  <vs-list-item vs-title="Item 2.2" vs-subtitle="Item 2.2"></vs-list-item>
</vs-list>
```

</div>
</vuecode>
</box>

<box>

## Icon

The list items and the headers can have a `vs-icon` as well.

::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::

<vuecode md>
<div slot="demo">
  <vs-list>
    <vs-list-header vs-icon="check" vs-title="Group 1"></vs-list-header>
    <vs-list-item vs-icon="check" vs-title="Item 1.1" vs-subtitle="Item 1.1"></vs-list-item>
    <vs-list-item vs-icon="check" vs-title="Item 1.2" vs-subtitle="Item 1.2"></vs-list-item>
    <vs-list-header vs-icon="check" vs-title="Group 2" vs-color="success"></vs-list-header>
    <vs-list-item vs-icon="check" vs-title="Item 2.1" vs-subtitle="Item 2.1"></vs-list-item>
    <vs-list-item vs-icon="check" vs-title="Item 2.2" vs-subtitle="Item 2.2"></vs-list-item>
  </vs-list>
</div>
<div slot="code">

```html
<vs-list>
  <vs-list-header vs-icon="check" vs-title="Group 1"></vs-list-header>
  <vs-list-item vs-icon="check" vs-title="Item 1.1" vs-subtitle="Item 1.1"></vs-list-item>
  <vs-list-item vs-icon="check" vs-title="Item 1.2" vs-subtitle="Item 1.2"></vs-list-item>
  <vs-list-header vs-icon="check" vs-title="Group 2" vs-color="success"></vs-list-header>
  <vs-list-item vs-icon="check" vs-title="Item 2.1" vs-subtitle="Item 2.1"></vs-list-item>
  <vs-list-item vs-icon="check" vs-title="Item 2.2" vs-subtitle="Item 2.2"></vs-list-item>
</vs-list>
```

</div>
</vuecode>
</box>

<box>

## Content

You can add custom content to the item. It will be pushed to the right side.

<vuecode md>
<div slot="demo">
  <vs-list>
    <vs-list-header vs-icon="check" vs-title="Group 1" vs-color="danger"></vs-list-header>
    <vs-list-item vs-icon="check" vs-title="Item 1.1" vs-subtitle="Item 1.1">
      <vs-button vs-color="danger">One action</vs-button>
    </vs-list-item>
    <vs-list-item vs-icon="check" vs-title="Item 1.2" vs-subtitle="Item 1.2">
      <vs-checkbox vs-color="danger"/>
    </vs-list-item>
    <vs-list-header vs-icon="check" vs-title="Group 2" vs-color="warning"></vs-list-header>
    <vs-list-item vs-icon="check" vs-title="Item 2.1" vs-subtitle="Item 2.1">
      <vs-chip vs-color="warning" vs-icon="home">Another component</vs-chip>
    </vs-list-item>
    <vs-list-item vs-icon="check" vs-title="Item 2.2" vs-subtitle="Item 2.2">
      <vs-switch vs-color="warning"/>
    </vs-list-item>
  </vs-list>
</div>
<div slot="code">

```html
<vs-list>
  <vs-list-header vs-icon="check" vs-title="Group 1" vs-color="danger"></vs-list-header>
  <vs-list-item vs-icon="check" vs-title="Item 1.1" vs-subtitle="Item 1.1">
    <vs-button vs-color="danger">One action</vs-button>
  </vs-list-item>
  <vs-list-item vs-icon="check" vs-title="Item 1.2" vs-subtitle="Item 1.2">
    <vs-checkbox vs-color="danger"/>
  </vs-list-item>
  <vs-list-header vs-icon="check" vs-title="Group 2" vs-color="warning"></vs-list-header>
  <vs-list-item vs-icon="check" vs-title="Item 2.1" vs-subtitle="Item 2.1">
    <vs-chip vs-color="warning" vs-icon="home">Another component</vs-chip>
  </vs-list-item>
  <vs-list-item vs-icon="check" vs-title="Item 2.2" vs-subtitle="Item 2.2">
    <vs-switch vs-color="warning"/>
  </vs-list-item>
</vs-list>
```

</div>
</vuecode>
</box>
