---
API:
 - name: accordion
   type: Boolean
   parameters: null
   description: Determines whether all the others are closed when an item is opened.
   default: false
 - name: type
   type: String
   parameters: default, shadow, border, margin
   description: Change the style of the items.
   default: default
 - name: open-hover
   type: Boolean
   parameters: null
   description: Determines if items are opened when hovering.
   default: false
 - name: not-arrow
   type: Boolean
   parameters: null
   description: remove the arrow from the item.
   default: false
 - name: icon-arrow
   type: String
   parameters: null
   description: Change the icons of items.
   default: false
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: open
   type: Boolean
   parameters:
   description: Start the open item.
   default: false
---

# Collapse

<box header>

  A list of items that are hidden, and only displayed when necessary to store content

</box>

<box>

## Default

To implement the collapse we have the component `vs-collapse` and as sub-component for each item the component `vs-collapse-item`

<vuecode md>
<div slot="demo">
  <Demos-Collapse-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-collapse>
     <vs-collapse-item>
       <div slot="header">
         Collapse item
       </div>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
        <br><br>
        Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
     </vs-collapse-item>
     <vs-collapse-item>
       <div slot="header">
         Collapse item 2
       </div>
       Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex,
       <br><br>
       eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet
       <br><br>
       efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.
     </vs-collapse-item>
     <vs-collapse-item disabled >
       <div slot="header">
         Collapse item 3 - Disabled
       </div>
       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
     </vs-collapse-item>
     <vs-collapse-item>
       <div slot="header">
         Collapse item 4
       </div>
       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.
     </vs-collapse-item>
    </vs-collapse>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Accordion

You may need to show only one element and the others contract for this is the property `accordion`

<vuecode md>
<div slot="demo">
  <Demos-Collapse-Accordion />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-collapse accordion >
     <vs-collapse-item>
       <div slot="header">
         Collapse item
       </div>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
        <br><br>
        Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
     </vs-collapse-item>
     <vs-collapse-item>
       <div slot="header">
         Collapse item 2
       </div>
       Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex,
       <br><br>
       eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet
       <br><br>
       efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.
     </vs-collapse-item>
     <vs-collapse-item >
       <div slot="header">
         Collapse item 3
       </div>
       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
     </vs-collapse-item>
     <vs-collapse-item>
       <div slot="header">
         Collapse item 4
       </div>
       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.
     </vs-collapse-item>
    </vs-collapse>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Type

You can easily change the style of the accordion with the `type` property, the supported styles are:

- shadow
- border
- margin

<vuecode md>
<div slot="demo">
  <Demos-Collapse-Type />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <div class="con-radios-example">
      <vs-radio v-model="type" vs-value="default">Default</vs-radio>
      <vs-radio v-model="type" vs-value="shadow">Shadow</vs-radio>
      <vs-radio v-model="type" vs-value="border">Border</vs-radio>
      <vs-radio v-model="type" vs-value="margin">Margin</vs-radio>
    </div>
    <vs-collapse :type="type">
     <vs-collapse-item>
       <div slot="header">
         Collapse item
       </div>

       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
        <br><br>
        Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
     </vs-collapse-item>
     <vs-collapse-item>
       <div slot="header">
         Collapse item 2
       </div>

       Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex,
       <br><br>
       eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet
       <br><br>
       efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.
     </vs-collapse-item>
     <vs-collapse-item disabled >
       <div slot="header">
         Collapse item 3 - Disabled
       </div>

       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
     </vs-collapse-item>
     <vs-collapse-item>
       <div slot="header">
         Collapse item 4
       </div>

       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.
     </vs-collapse-item>
    </vs-collapse>
  </div>
</template>

<script>
export default {
  data(){
    return {
      type:'shadow',
    }
  }
}
</script>

<style lang="stylus">
.con-radios-example
  display flex
  justify-content flex-start
  flex-direction column
  align-items flex-start
  padding-bottom 5px
  .con-vs-radio
    margin 5px
</style>
```

</div>
</vuecode>
</box>

<box>

## Open Hover

If you want the items to open when you hover in, add the `open-hover` property in the component

<vuecode md>
<div slot="demo">
  <Demos-Collapse-Hover />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-collapse open-hover >
     <vs-collapse-item>
       <div slot="header">
         Collapse item
       </div>

       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
        <br><br>
        Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
     </vs-collapse-item>
     <vs-collapse-item>
       <div slot="header">
         Collapse item 2
       </div>

       Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex,
       <br><br>
       eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet
       <br><br>
       efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.
     </vs-collapse-item>
     <vs-collapse-item >
       <div slot="header">
         Collapse item 3
       </div>

       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
     </vs-collapse-item>
     <vs-collapse-item>
       <div slot="header">
         Collapse item 4
       </div>

       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.
     </vs-collapse-item>
    </vs-collapse>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Change Arrow Icon

You can customise the arrow on the component `vs-collapse` by passing the string name of an icon to the `icon-arrow` property.

::: tip
Vuesax uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).

FontAwesome and other fonts library are supported. Simply use the `icon-pack` with `fa` or `fas`. You still need to include the Font Awesome icons in your project.

:::

<vuecode md>
<div slot="demo">
  <Demos-Collapse-Changeicons />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-collapse>
     <vs-collapse-item icon-arrow="label">
       <div slot="header">
         Collapse item
       </div>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
        <br><br>
        Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
     </vs-collapse-item>
     <vs-collapse-item icon-arrow="grade">
       <div slot="header">
         Collapse item 2
       </div>
       Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex,
       <br><br>
       eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet
       <br><br>
       efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.
     </vs-collapse-item>
     <vs-collapse-item disabled  icon-arrow="arrow_downward">
       <div slot="header">
         Collapse item 3 - Disabled
       </div>
       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
     </vs-collapse-item>
     <vs-collapse-item icon-arrow="arrow_drop_down">
       <div slot="header">
         Collapse item 4
       </div>
       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.
     </vs-collapse-item>
    </vs-collapse>
  </div>
</template>
```

</div>
</vuecode>
</box>
