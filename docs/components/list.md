---
API:
  - name: color
    type: String
    parameters: RGB, HEX, primary, success, danger, warning, dark
    description: Component color
    default: primary
  - name: icon
    type: String
    parameters: Material icons
    description: An icon to show
    default: null
  - name: icon-pack
    type: String
    parameters: Icon Pack Class Name
    description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
    default: material-icons
  - name: title
    type: String
    parameters:
    description: List primary text
    default: null
  - name: subtitle
    type: String
    parameters:
    description: List secondary text
    default: null
  - name: slot="avatar"
    type: Slot
    parameters: null
    description: Slot to add the avatar in the list
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

A basic list of items with `title` and `subtitle`.

<vuecode md>
<div slot="demo">
  <vs-list>
    <vs-list-item title="One text"></vs-list-item>
    <vs-list-item title="Another text" subtitle="A little text"></vs-list-item>
    <vs-list-item title="Some more text"></vs-list-item>
    <vs-list-item title="Even more text" subtitle="Another little text"></vs-list-item>
  </vs-list>
</div>
<div slot="code">

```html
  <vs-list>
    <vs-list-item title="One text"></vs-list-item>
    <vs-list-item title="Another text" subtitle="A little text"></vs-list-item>
    <vs-list-item title="Some more text"></vs-list-item>
    <vs-list-item title="Even more text" subtitle="Another little text"></vs-list-item>
  </vs-list>
```

</div>
</vuecode>
</box>

<box>

## Header

A `vs-list-header` separator with custom `color`.

<vuecode md>
<div slot="demo">
  <vs-list>
    <vs-list-header title="Group 1"></vs-list-header>
    <vs-list-item title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>
    <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>
    <vs-list-header title="Group 2" color="success"></vs-list-header>
    <vs-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>
    <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>
  </vs-list>
</div>
<div slot="code">

```html
  <vs-list>
    <vs-list-header title="Group 1"></vs-list-header>
    <vs-list-item title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>
    <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>
    <vs-list-header title="Group 2" color="success"></vs-list-header>
    <vs-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>
    <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>
  </vs-list>
```

</div>
</vuecode>
</box>

<box>

## Icon

The list items and the headers can have a `icon` as well.

::: tip
Vuesax uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

<vuecode md>
<div slot="demo">
  <vs-list>
    <vs-list-header icon="supervisor_account" title="Group 1"></vs-list-header>
    <vs-list-item icon="check" title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>
    <vs-list-item icon="check" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>
    <vs-list-header icon="how_to_reg" title="Group 2" color="success"></vs-list-header>
    <vs-list-item icon="verified_user" title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>
    <vs-list-item icon="verified_user" title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>
  </vs-list>
</div>
<div slot="code">

```html
  <vs-list>
    <vs-list-header icon="supervisor_account" title="Group 1"></vs-list-header>
    <vs-list-item icon="check" title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>
    <vs-list-item icon="check" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>
    <vs-list-header icon="how_to_reg" title="Group 2" color="success"></vs-list-header>
    <vs-list-item icon="verified_user" title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>
    <vs-list-item icon="verified_user" title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>
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
    <vs-list-header title="Group 1"></vs-list-header>
    <vs-list-item title="Rachel" subtitle="Last seen watching Arrested Development just now.">
      <vs-button color="danger">One action</vs-button>
    </vs-list-item>
    <vs-list-item title="Lindsay" subtitle="Last seen watching Bob's Burgers 10 hours ago.">
      <vs-checkbox color="danger"/>
    </vs-list-item>
    <vs-list-header title="Group 2" color="success"></vs-list-header>
    <vs-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot.">
      <vs-chip color="warning">Another component</vs-chip>
    </vs-list-item>
    <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently">
      <vs-switch color="warning"/>
    </vs-list-item>
  </vs-list>
</div>
<div slot="code">

```html
  <vs-list>
    <vs-list-header title="Group 1"></vs-list-header>
    <vs-list-item title="Snickerdoodle" subtitle="An excellent companion">
      <vs-button color="danger">One action</vs-button>
    </vs-list-item>
    <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals">
      <vs-checkbox color="danger"/>
    </vs-list-item>
    <vs-list-header title="Group 2" color="success"></vs-list-header>
    <vs-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot.">
      <vs-chip color="warning">Another component</vs-chip>
    </vs-list-item>
    <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently">
      <vs-switch color="warning"/>
    </vs-list-item>
  </vs-list>
```

</div>
</vuecode>
</box>

<box>

## Avatar

You can implement an avatar in the list with the `slot="avatar"` by putting a [vs-avatar] component (/components/avatar.html)

<vuecode md>
<div slot="demo">
<vs-list>
  <vs-list-header title="Users" color="primary"></vs-list-header>
  <vs-list-item title="Steve Jobes" subtitle="Top Contributor">
    <template slot="avatar">
      <vs-avatar color="primary" text="Steve Jobes"/>
    </template>
  </vs-list-item>
  <vs-list-item title="Matt" subtitle="11 Points">
    <template slot="avatar">
      <vs-avatar color="primary" text="Matt"/>
    </template>
  </vs-list-item>
  <vs-list-header title="Profile photo" color="warning"></vs-list-header>
  <vs-list-item title="Xian Famous Foods" subtitle="A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.">
    <template slot="avatar">
      <vs-avatar color="warning" text="Xian Famous Foods"/>
    </template>
  </vs-list-item>
</vs-list>
</div>
<div slot="code">

```html
<vs-list>
  <vs-list-header title="Users" color="danger"></vs-list-header>
  <vs-list-item title="Steve Jobes" subtitle="Top Contributor">
    <template slot="avatar">
      <vs-avatar />
    </template>
  </vs-list-item>
  <vs-list-item title="Matt" subtitle="11 Points">
    <template slot="avatar">
      <vs-avatar vs-text="Vuesax"/>
    </template>
  </vs-list-item>
  <vs-list-header title="Profile photo" color="warning"></vs-list-header>
  <vs-list-item title="Xian Famous Foods" subtitle="A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.">
    <template slot="avatar">
      <vs-avatar vs-text="Vue"/>
    </template>
  </vs-list-item>
</vs-list>
```

</div>
</vuecode>
</box>
