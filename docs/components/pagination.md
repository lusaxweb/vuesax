---
API:
 - name: vs-total
   type: Number
   parameters:
   description: The total links the pagination will have
   default: false
 - name: vs-current
   type: Number
   parameters:
   description: The current page
   default: false
 - name: vs-max
   type: Number
   parameters:
   description: The maximum pages that should be shown
   default: 9
 - name: vs-goto
   type: Boolean
   parameters: true, false
   description: Allows you to jump to a specific page
   default: false
 - name: vs-type
   type: String
   parameters:
   description: The styling that should be applied to the pagination links
   default: false
 - name: vs-rounded
   type: Boolean
   parameters: true, false
   description: Should pagination link borders be rounded or not
   default: false
 - name: vs-prev-icon
   type: String
   parameters:
   description: Customize the previous button icon
   default: chevron_left
 - name: vs-next-icon
   type: String
   parameters:
   description: Customize the next button icon
   default: chevron_right
 - name: page
   type: Event
   parameters:
   description: Fired when the current page changes
   default: false
 - name: vs-color
   type: String
   parameters:
   description: Change the color of the pagination
   default: primary
contributors:
 - VicGUTT
---

# Pagination <!--#new-->

<box header>

  Pagination is a sequence of numbers assigned to pages. It helps split up large content into shorter, easier and more breathable pages.

</box>


<box>

## Default

The pagination component consists of several elements, all of which are optional. So with no extra class, your pagination links will look as follow :

<vuecode md center>
<div slot="demo">
<vs-pagination :vs-total="5" :vs-current="2"></vs-pagination>
</div>
<div slot="code">

```html
<vs-pagination :vs-total="5" :vs-current="2"></vs-pagination>
```

</div>
</vuecode>
</box>


<box>

## Filled

The `vs-type="filled"` directive will add a background to your links

<vuecode md center>
<div slot="demo">
<vs-pagination :vs-total="5" :vs-current="2" vs-type="filled"></vs-pagination>
</div>
<div slot="code">

```html
<vs-pagination :vs-total="5" :vs-current="2" vs-type="filled"></vs-pagination>
```

</div>
</vuecode>
</box>


<box>

## Rounded

The `vs-rounded` directive will round the borders of the pagination links.

<vuecode md center>
<div slot="demo">
<vs-pagination :vs-total="5" :vs-current="2" vs-type="filled" vs-rounded></vs-pagination>
</div>
<div slot="code">

```html
<vs-pagination :vs-total="5" :vs-current="2" vs-type="filled" vs-rounded></vs-pagination>
```

</div>
</vuecode>
</box>


<box>

## Icons

To customize the previous and next page icons change the value of the `vs-prev-icon` and `vs-prev-icon` directives.
By default, their values are respectively **arrow_back** and **arrow_forward**.

::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::

<vuecode md center>
<div slot="demo">
<vs-pagination :vs-total="5" :vs-current="2" vs-type="filled" vs-rounded vs-prev-icon="arrow_back" vs-next-icon="arrow_forward"></vs-pagination>
</div>
<div slot="code">

```html
<vs-pagination :vs-total="5" :vs-current="2" vs-type="filled" vs-rounded vs-prev-icon="arrow_back" vs-next-icon="arrow_forward"></vs-pagination>
```

</div>
</vuecode>
</box>


<box>

## Limit the amount of links shown

By default Vuesax will show a maximum of **9** links. This default behaviour can be changed by setting the `vs-max` directive to a different integer value.

::: tip
The amount given to the `vs-max` directive should take into account the first and last pages plus the ellipses "`...`"
:::

::: warning
Setting the `vs-max` directive to a value lesser then `5` when the `vs-total` is greater then that will result in the pagination only showing the previous/next buttons as well as the first and last links.
:::

<vuecode md center>
<div slot="demo">
<vs-pagination :vs-total="20" :vs-current="8" :vs-max="10" vs-type="filled" vs-rounded></vs-pagination>
</div>
<div slot="code">

```html
<vs-pagination :vs-total="20" :vs-current="8" :vs-max="10" vs-type="filled" vs-rounded></vs-pagination>
```

</div>
</vuecode>
</box>


<box>

## Goto

The `vs-goto` directive will allow users to directly jump to a desired page.

::: tip
If the value given is lower than **1** it will jump to page **1**. However if the value is greater than `vs-total` it will jump to the last page.
:::

<vuecode md center>
<div slot="demo">
<vs-pagination :vs-total="20" :vs-current="7" vs-goto vs-type="filled" vs-rounded></vs-pagination>
</div>
<div slot="code">

```html
<vs-pagination :vs-total="20" :vs-current="7" vs-goto vs-type="filled" vs-rounded></vs-pagination>
```

</div>
</vuecode>
</box>

<box>

## Colors

You can change the color of the component with the property `vs-color`, you can use the [Main](/theme/) colors or **RGB** and **HEX** colors

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
<Demos-Pagination-Colors />
</div>
<div slot="code">

```html
<vs-pagination :vs-total="5" :vs-current="2" vs-type="filled"></vs-pagination>
```

</div>
</vuecode>
</box>
