---
API:
 - name: vs-items
   type: Array
   parameters: ["title", "url", "disabled", "active"]
   description: The items that will construct the breadcrumb
   default: false
 - name: vs-separator
   type: String
   parameters:
   description: Separator dividing the breadcrumb links
   default: "/"
 - name: vs-color
   type: String
   parameters:
   description: Change the color of the breadcrumb links
   default: null
 - name: vs-align
   type: String
   parameters: ["left", "center", "right"]
   description: Align the breadcrumb to the left, center or right.
   default: "left"
 - name: slot
   type: String
   parameters: ["left", "center", "right"]
   description: Used instead of passing in an array of object into 'vs-items'
   default: false
contributors:
 - VicGUTT
---

# Breadcrumb **- ssr**

<box header>

  Displays the location of the current page within a navigational hierarchy. It improves the navigation experience

</box>


<box>

## Default

<!-- The default breadcrumb comes with minimalist styling. More is not always better right ? -->
Use the `vs-items` in order to programatically generate the breadcrumb links.

<vuecode md center>
<div slot="demo">
<vs-breadcrumb
:vs-items="
   [
     {
       title: 'Dashboard',
       url: 'dashboard'
     },
     {
       title: 'Link 1',
       url: 'link-1'
     },
     {
       title: 'Link 2',
       disabled: true
     },
     {
       title: 'Active',
       active: true
     }
   ]"
></vs-breadcrumb>
</div>
<div slot="code">

```html
<vs-breadcrumb
:vs-items="
   [
     {
       title: 'Dashboard',
       url: 'dashboard'
     },
     {
       title: 'Link 1',
       url: 'link-1'
     },
     {
       title: 'Link 2',
       disabled: true
     },
     {
       title: 'Active',
       active: true
     }
   ]"
></vs-breadcrumb>
```

</div>
</vuecode>
</box>


<box>

## Color

Use the `vs-color` directive like for any other component that supports it to customize the breadcrumbs links color.

<vuecode md center>
<div slot="demo">
  <Demos-Breadcrumb-Color />
</div>

<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input v-model="colorx" type="color" name="" value="">
    <vs-breadcrumb
    :vs-color="colorx"
    :vs-items="items"
    ></vs-breadcrumb>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'#3DC9B3',
    items:[
      {
        title: 'Dashboard',
        url: 'dashboard'
      },
      {
        title: 'Link 1',
        url: 'link-1'
      },
      {
        title: 'Link 2',
        disabled: true
      },
      {
        title: 'Active',
        active: true
      }
    ]
  })
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Separator

You can change the separator dividing the links by either passing a string to the `vs-separator` directive like so "**•**", "**-**", "**|**" etc..., or by passing in one of the material icons text "**chevron_right**".

:::warning
  In order to differeciate a custom separator "**•**" from an icon "**chevron_right**", we verify the string length. If the length is **greater than 1** it will be considered a material icon.
:::

<vuecode md center>
<div slot="demo">
<vs-breadcrumb vs-separator="•"
:vs-items="
   [
     {
       title: 'Dashboard',
       url: 'dashboard'
     },
     {
       title: 'Link 1',
       url: 'link-1'
     },
     {
       title: 'Link 2',
       disabled: true
     },
     {
       title: 'Active',
       active: true
     }
   ]"
></vs-breadcrumb>
<vs-breadcrumb vs-separator="-"
:vs-items="
   [
     {
       title: 'Dashboard',
       url: 'dashboard'
     },
     {
       title: 'Link 1',
       url: 'link-1'
     },
     {
       title: 'Link 2',
       disabled: true
     },
     {
       title: 'Active',
       active: true
     }
   ]"
></vs-breadcrumb>
<vs-breadcrumb vs-separator="|"
:vs-items="
   [
     {
       title: 'Dashboard',
       url: 'dashboard'
     },
     {
       title: 'Link 1',
       url: 'link-1'
     },
     {
       title: 'Link 2',
       disabled: true
     },
     {
       title: 'Active',
       active: true
     }
   ]"
></vs-breadcrumb>
<vs-breadcrumb vs-separator="chevron_right"
:vs-items="
   [
     {
       title: 'Dashboard',
       url: 'dashboard'
     },
     {
       title: 'Link 1',
       url: 'link-1'
     },
     {
       title: 'Link 2',
       disabled: true
     },
     {
       title: 'Active',
       active: true
     }
   ]"
></vs-breadcrumb>
</div>
<div slot="code">

```html
<vs-breadcrumb :vs-items="[{...}, {...}]" vs-separator="•"></vs-breadcrumb>
<vs-breadcrumb :vs-items="[{...}, {...}]" vs-separator="-"></vs-breadcrumb>
<vs-breadcrumb :vs-items="[{...}, {...}]" vs-separator="|"></vs-breadcrumb>
<vs-breadcrumb :vs-items="[{...}, {...}]" vs-separator="chevron_right"></vs-breadcrumb>
```

</div>
</vuecode>
</box>


<box>

## Slot

A default Vue slot that can be used instead of passing in an array of object. This allows for greater control of the breadcrumbs

<vuecode md center>
<div slot="demo">
<vs-breadcrumb>
   <li><a href="#" title="Home">Home</a><span class="separator">/</span></li>
   <li><a href="#" title="Profil">Profil</a><span class="separator">/</span></li>
   <li aria-current="page" class="vs-active">Infos</li>
</vs-breadcrumb>
</div>
<div slot="code">

```html
<vs-breadcrumb>
   <li><a href="#" title="Home">Home</a><span class="separator">/</span></li>
   <li><a href="#" title="Profil">Profil</a><span class="separator">/</span></li>
   <li aria-current="page" class="vs-active">Infos</li>
</vs-breadcrumb>
```

</div>
</vuecode>
</box>


<box>

## Alignement

Use `vs-align` to either align the breadcrumb to the left, center or right.

<vuecode md>
<div slot="demo">
<vs-breadcrumb vs-align="left">
   <li><a href="#" title="Home">Home</a><span class="separator">/</span></li>
   <li><a href="#" title="Profil">Profil</a><span class="separator">/</span></li>
   <li aria-current="page" class="vs-active">Infos</li>
</vs-breadcrumb>
<vs-breadcrumb vs-align="center">
   <li><a href="#" title="Home">Home</a><span class="separator">/</span></li>
   <li><a href="#" title="Profil">Profil</a><span class="separator">/</span></li>
   <li aria-current="page" class="vs-active">Infos</li>
</vs-breadcrumb>
<vs-breadcrumb vs-align="right">
   <li><a href="#" title="Home">Home</a><span class="separator">/</span></li>
   <li><a href="#" title="Profil">Profil</a><span class="separator">/</span></li>
   <li aria-current="page" class="vs-active">Infos</li>
</vs-breadcrumb>
</div>
<div slot="code">

```html
<vs-breadcrumb vs-align="left">...</vs-breadcrumb>
<vs-breadcrumb vs-align="center">...</vs-breadcrumb>
<vs-breadcrumb vs-align="right">...</vs-breadcrumb>
```

</div>
</vuecode>
</box>
