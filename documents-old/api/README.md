---
layout: blogLayout
sidebar: auto
---

# API

## Props

### Color

Esta propiedad esta en casi todos los componentes, determina el color del componente

::: warning
  Se pueden agregar solo los colores

  - RGB
  - HEX
  - Colores Principales de Vuesax (primary, danger ...)
:::

### Size

cambiar el tamaño predeterminado del componente, los valores permitidos son

- normal
- sm
- mx

## Functions

### $addClassMouse <Badge text="4.0+"/>

Agrega una clase al mouse de Vuesax , es muy usada para agregar una clase al hacer hover en un elemento

### $removeClassMouse <Badge text="4.0+"/>

Elimina una clase al mouse de Vuesax , es muy usada para agregar una clase al hacer mouseleave en un elemento

## Stylus Vars

### $vs-colors

Array de colores del framework

el valor por defecto es:

```stylus
$vs-colors := ('primary' 'secondary' 'danger' 'success' 'warning' 'dark' 'light')
```

## Css Vars

### --vs-primary

Color primario de toda la aplicacion
