---
API:
 - name: vs-w
   type: Number, String
   parameters: 1-12
   description: Width of the vs-row or vs-colum.
   default: 12
 - name: vs-offset
   type: Number, String
   parameters: 1-12
   description: Distance to the left of the.
   default: 0
 - name: vs-justify
   type: String
   parameters: flex-start, center, flex-end, space-around, space-between
   description: Define the alignment vertically of the elements within the vs-row or vs-col.
   default: null
 - name: vs-align
   type: String
   parameters: flex-start, center, flex-end, space-around, space-between
   description: Define the horizontal alignment of the elements within the vs-row or vs-col.
   default: null
 - name: vs-order
   type: Number
   parameters:
   description: Changes the order of the vs-col with respect to his brothers vs-col.
   default: null
 - name: vs-lg
   type: Number,String
   parameters: 1-12
   description: Is for large devices such as desktops or laptops (large).
   default: null
 - name: vs-sm
   type: Number,String
   parameters: 1-12
   description: Is for medium devices such as laptops or tablets.
   default: null
 - name: vs-xs
   type: Number,String
   parameters: 1-12
   description:	Is for small devices such as tablets (small) and phones.
   default: null
---

# Grid

<box header>

In the grid system, we define the frame outside the information area based on row and column, to ensure that every area can have stable arrangement.

</box>

<box>

Following is a brief look at how it works:
- 1 - Establish a set of column in the horizontal space defined by row (abbreviated col)
- 2 - Your content elements should be placed directly in the col, and only col should be placed directly in row
- 3 - The column grid system is a value from 1-12 to represent its range spans. For example, three columns of equal width can be created by .col-4 (33.3%).
- 4 - If the sum of col spans in a row are more than 12, then the overflowing col as a whole will start a new line arrangement.

</box>

<box>

## Design concept

With the directive `vs-w` define the width of the column (`vs-col`) its value is **1-12** an example of sizes would be: **12 = 100%, 6 = 50%, 4 = 25%**

<vuecode md>

<div class="gridx" slot="demo">
<vs-row>
<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">

100%

</vs-col>
</vs-row>

<vs-row>
<vs-col :key="index" v-for="col,index in 2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">

50%

</vs-col>
</vs-row>

<vs-row>
<vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">

33.3%

</vs-col>
</vs-row>

<vs-row>
<vs-col :key="index" v-for="col,index in 4" v-tooltip="'col - 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">

25%

</vs-col>
</vs-row>

<vs-row>
<vs-col :key="index" v-for="col,index in 6" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

16.6%

</vs-col>
</vs-row>

<vs-row>
<vs-col :key="index" v-for="col,index in 12" v-tooltip="'col - 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">

8.3%

</vs-col>
</vs-row>
</div>

<div slot="code">

```html
<vs-row>
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
    100%
  </vs-col>
</vs-row>

<vs-row>
  <vs-col :key="index" v-for="col,index in 2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
    50%
  </vs-col>
</vs-row>

<vs-row>
  <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
    33.3%
  </vs-col>
</vs-row>

<vs-row>
  <vs-col :key="index" v-for="col,index in 4" v-tooltip="'col - 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
    25%
  </vs-col>
</vs-row>

<vs-row>
  <vs-col :key="index" v-for="col,index in 6" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    16.6%
  </vs-col>
</vs-row>

<vs-row>
  <vs-col :key="index" v-for="col,index in 12" v-tooltip="'col - 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
    8.3%
  </vs-col>
</vs-row>
```

</div>

</vuecode>

</box>
<box>

## Column offset

To give a distance with respect to the left we have the directive vs-offset that with the same measures `1-12` we add the space specified a serious example `12 = 100%`, `6 = 50%`, `4 = 25%`.


<vuecode md>

<div class="gridx" slot="demo">
<vs-row vs-w="12">
<vs-col vs-offset="5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">

offset - 6

</vs-col>
</vs-row>

<vs-row>
<vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

offset - 2

</vs-col>
</vs-row>

<vs-row>
<vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

offset - 8

</vs-col>
</vs-row>

<vs-row>
<vs-col vs-offset="10" v-tooltip="'col - 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">

offset - 7

</vs-col>
</vs-row>

<vs-row>
<vs-col vs-offset="4" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">

offset - 4

</vs-col>
</vs-row>
</div>

<div slot="code">

```html
<vs-row vs-w="12">
  <vs-col vs-offset="5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
    offset - 6
  </vs-col>
</vs-row>

<vs-row>
  <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 2
  </vs-col>
</vs-row>

<vs-row>
  <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
    offset - 8
  </vs-col>
</vs-row>

<vs-row>
  <vs-col vs-offset="10" v-tooltip="'col - 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
    offset - 7
  </vs-col>
</vs-row>

<vs-row>
  <vs-col vs-offset="4" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
    offset - 4
  </vs-col>
</vs-row>
```

</div>

</vuecode>

</box>

<box>

## Flex layout

If we need to align the elements horizontally, use the `vs-justify` directive that uses CSS attributes as parameters: `flex-start`, `center`, `flex-end`, `space-around`, `space-between`.

<vuecode md>

<div class="gridx" slot="demo">
<vs-row vs-w="12">
<vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

offset - 6

</vs-col>
</vs-row>

<vs-row vs-type="flex" vs-justify="center">
<vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

offset - 6

</vs-col>
</vs-row>

<vs-row vs-type="flex" vs-justify="flex-end">
<vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

offset - 6

</vs-col>
</vs-row>


<vs-row vs-type="flex" vs-justify="space-around">
<vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

offset - 6

</vs-col>
</vs-row>

<vs-row vs-type="flex" vs-justify="space-between">
<vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

offset - 6

</vs-col>
</vs-row>
</div>

<div slot="code">

```html
<vs-row vs-w="12">
  <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 6
  </vs-col>
</vs-row>

<vs-row vs-type="flex" vs-justify="center">
  <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 6
  </vs-col>
</vs-row>

<vs-row vs-type="flex" vs-justify="flex-end">
  <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 6
  </vs-col>
</vs-row>


<vs-row vs-type="flex" vs-justify="space-around">
  <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 6
  </vs-col>
</vs-row>

<vs-row vs-type="flex" vs-justify="space-between">
  <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 6
  </vs-col>
</vs-row>
```

</div>

</vuecode>

</box>

<box>

## Flex alignment

To align the elements vertically we have the directive `vs-align` that as parameters the same known values ​​of css: `center`, `flex-end`, `flex-start`.


### Align Top

<vuecode md>

<div class="gridx" slot="demo">
<vs-row vs-type="flex" vs-align="flex-start" vs-justify="center" vs-w="12">
<vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

col - 3

</vs-col>
</vs-row>
</div>

<div slot="code">

```html{2}
<vs-row
  vs-align="flex-start"
  vs-type="flex" vs-justify="center" vs-w="12">
  <vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
</vs-row>
```

</div>

</vuecode>


### Align Center

<vuecode md>

<div class="gridx" slot="demo">
<vs-row vs-type="flex" vs-align="center" vs-justify="space-around" vs-w="12">
<vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

col - 3

</vs-col>
</vs-row>
</div>

<div slot="code">

```html{2}
<vs-row
  vs-align="center"
  vs-type="flex" vs-justify="space-around" vs-w="12">
  <vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
</vs-row>
```

</div>

</vuecode>

### Align Bottom

<vuecode md>

<div class="gridx" slot="demo">
<vs-row vs-type="flex" vs-align="flex-end" vs-justify="space-between" vs-w="12">
<vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

col - 3

</vs-col>
</vs-row>
</div>

<div slot="code">

```html{2}
<vs-row
  vs-align="flex-end"
  vs-type="flex" vs-justify="space-between" vs-w="12">
  <vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
</vs-row>
```

</div>

</vuecode>

</box>

<box>

## Flex order

In some cases, we want to order the elements to our liking. To do this, use the directive `vs-order` that has a parameter you just have to pass the number in which we want to order the `vs-col` with respect to his brothers `vs-col`

<vuecode md>

<div class="gridx" slot="demo">
<vs-row vs-type="flex">
<vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">

1 / order 3

</vs-col>
<vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">

2 / order 1

</vs-col>
<vs-col vs-order="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">

3 / order 4

</vs-col>
<vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">

4 / order 2

</vs-col>
</vs-row>
</div>

<div slot="code">

```html{3,8,13,18}
<vs-row vs-type="flex">
  <vs-col
    vs-order="3"
    vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
      1 / order 3
  </vs-col>
  <vs-col
    vs-order="1"
    vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
      2 / order 1
  </vs-col>
  <vs-col
    vs-order="4"
    vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
      3 / order 4
  </vs-col>
  <vs-col
    vs-order="2"
    vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
      4 / order 2
  </vs-col>
</vs-row>
```

</div>

</vuecode>
</box>

<box>

## Responsive layout

There are some measures that can only be added in a specific size of the device, the directives are:

- 1 - `vs-lg`: is for large devices such as desktops or laptops (large).
- 2 - `vs-sm`: is for medium devices such as laptops or tablets.
- 3 - `vs-xs`: is for small devices such as tablets (small) and phones.

<vuecode md>

<div class="gridx" slot="demo">
<vs-row vs-w="12">
<vs-col v-tooltip="'lg - 2 / sm - 4 / xs - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12" >

vs-lg = 2

</vs-col>
<vs-col v-tooltip="'lg - 8 / sm - 4 / xs - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">

vs-lg = 8

</vs-col>
<vs-col v-tooltip="'lg - 2 / sm - 4 / xs - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">

vs-lg = 2

</vs-col>
</vs-row>
</div>

<div slot="code">

```html
<vs-row vs-w="12">
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12" >
    vs-lg="2" vs-sm="4" vs-xs="12"
  </vs-col>
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
    vs-lg="8" vs-sm="4" vs-xs="12"
  </vs-col>
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
    vs-lg="2" vs-sm="4" vs-xs="12"
  </vs-col>
</vs-row>
```

</div>

</vuecode>
</box>
