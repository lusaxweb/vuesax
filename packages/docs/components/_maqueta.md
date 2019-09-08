---
PROPS:
 # cSpell:ignore vuesax, autoset, codepen, whatsapp, linkedin, behance, dribbble
 - name: color
   type: String
   values: primary, success, danger, warning, dark, RGB, HEX
   description: Cambia el color del componente y algunos de sus sub componentes.
   default: primary
   link: /api/color
   code: '<vs-avatar color="success" />'
   usage: '#color'

SLOTS:
  - name: badge
    type: slot
    values: null
    description: Slot para agregar cualquier elemento sustituyendo el <code>badge</code>.
    default: null
    link: null
    code: >
          <vs-avatar>
            <template v-slot:badge>
              1
            <template>
          <vs-avatar>
    usage: '#badge'
---

# Name <Badge text="New"/>

<card>

## Default

<docs-warn />

<div slot="example">

<!-- ... -->

</div>

<div slot="template">
  ```html
    <!-- ... -->
  ```
</div>

<div slot="script">
  ```html
    <!-- ... -->
  ```
</div>

</card>
