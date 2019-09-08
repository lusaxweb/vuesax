---
PROPS:
 # cSpell:ignore vuesax, autoset, codepen, whatsapp, linkedin, behance, dribbble
 - name: color
   type: String
   values: primary, success, danger, warning, dark, RGB, HEX
   description: Cambia el color del componente y algunos de sus sub componentes.
   default: primary
   link: /api/color
   code: >
          <vs-breadcrumb color="danger">
            <vs-breadcrumb-item :active="$route.hash == '#color-1'">
              <a href="#color-1">Vuesax</a>
            </vs-breadcrumb-item>
            <vs-breadcrumb-item :active="$route.hash == '#color-2'">
              <a href="#color-2">Components</a>
            </vs-breadcrumb-item>
            <vs-breadcrumb-item :active="$route.hash == '#color-3'">
              <a href="#color-3">Breadcrumb</a>
            </vs-breadcrumb-item>
            <vs-breadcrumb-item :active="$route.hash == '#color'">
              <a href="#color">Color</a>
            </vs-breadcrumb-item>
          </vs-breadcrumb>
   usage: '#color'
 - name: item / active
   type: Boolean
   values: true, false
   description: Determina si el elemento esta activo (esta propiedad solo se encuentra en el componente hijo `vs-bredcrimb-item`).
   default: false
   link: null
   code: >
          <vs-breadcrumb>
            <vs-breadcrumb-item>
              <a href="#color-1">Vuesax</a>
            </vs-breadcrumb-item>
            <vs-breadcrumb-item active >  /* <---------- */
              <a href="#color-2">Components</a>
            </vs-breadcrumb-item>
          </vs-breadcrumb>
   usage: '#default'
 - name: group / v-model
   type: Boolean
   values: true, false
   description: Determina si el group se encuentra abierto o cerrado, esta propiedad automaticamente se activa al usuario hacer click en los puntos (<code>...</code>) .
   default: false
   link: null
   code: >
          <vs-breadcrumb>
            <vs-breadcrumb-item :active="$route.hash == '#collapse-1'" >
              <a href="#collapse-1">Vuesax</a>
            </vs-breadcrumb-item>

            <vs-breadcrumb-group v-model="activeCollapse"> /* <------- */
              <vs-breadcrumb-item :active="$route.hash == '#collapse-2'">
                <a href="#collapse-2">Components</a>
              </vs-breadcrumb-item>
              <vs-breadcrumb-item :active="$route.hash == '#collapse-3'">
                <a href="#collapse-3">Breadcrumb</a>
              </vs-breadcrumb-item>
            </vs-breadcrumb-group>

            <vs-breadcrumb-item :active="$route.hash == '#collapse'">
              <a href="#collapse">collapse</a>
            </vs-breadcrumb-item>
          </vs-breadcrumb>
   usage: '#collapse'

SLOTS:
  - name: divider
    type: slot
    values: null
    description: Cambia el divider del componente incluyendo los de sus hijos.
    default: null
    link: null
    code: >
          <vs-breadcrumb>
            <template v-slot:divider> /* <------ */
              |
            </template>

            <vs-breadcrumb-item :active="$route.hash == '#divider-1'">
              <a href="#divider-1">Vuesax</a>
            </vs-breadcrumb-item>
            <vs-breadcrumb-item :active="$route.hash == '#divider-2'">
              <a href="#divider-2">Components</a>
            </vs-breadcrumb-item>
            <vs-breadcrumb-item :active="$route.hash == '#divider-3'">
              <a href="#divider-3">Breadcrumb</a>
            </vs-breadcrumb-item>
            <vs-breadcrumb-item :active="$route.hash == '#divider'">
              <a href="#divider">Divider</a>
            </vs-breadcrumb-item>
          </vs-breadcrumb>
    usage: '#divider'

  - name: group / icon
    type: slot
    values: null
    description: Cambia el icono del componente hijo <code>vs-breadcrumb-group</code> cuando se encuentra cerrado, por defecto es (<code>...</code>).
    default: null
    link: null
    code: >
          <vs-breadcrumb>
            <vs-breadcrumb-item :active="$route.hash == '#collapse-1'" >
              <a href="#collapse-1">Vuesax</a>
            </vs-breadcrumb-item>

            <vs-breadcrumb-group v-model="activeCollapse">
              <template v-slot:icon> /* <------- */
                <i class='bx bx-user' ></i>
              </template>
              <vs-breadcrumb-item :active="$route.hash == '#collapse-2'">
                <a href="#collapse-2">User</a>
              </vs-breadcrumb-item>
              <vs-breadcrumb-item :active="$route.hash == '#collapse-3'">
                <a href="#collapse-3">Name</a>
              </vs-breadcrumb-item>
            </vs-breadcrumb-group>

            <vs-breadcrumb-item :active="$route.hash == '#collapse'">
              <a href="#collapse">collapse</a>
            </vs-breadcrumb-item>
          </vs-breadcrumb>

    usage: '#collapse'
---

# Breadcrumb

<card>

## Default

<docs-warn />

Agrega una guiá para el usuario entender en que sección se encuentra

<div slot="example">

<!-- ... -->
<breadcrumb-default />

</div>

<div slot="template">

  ```html
    <template>
      <div>
        <vs-breadcrumb>
          <vs-breadcrumb-item :active="$route.hash == '#default-1'" >
            <a href="#default-1">Vuesax</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#default-2'">
            <a href="#default-2">Components</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#default-3'">
            <a href="#default-3">Breadcrumb</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#default'">
            <a href="#default">Default</a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Color

<Color />

<div slot="example">

<!-- ... -->
<breadcrumb-color />

</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="con-demo flex">
        <input v-model="color" type="color" name="color" id="color">
        <vs-breadcrumb :color="color">
          <vs-breadcrumb-item :active="$route.hash == '#color-1'">
            <a href="#color-1">Vuesax</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#color-2'">
            <a href="#color-2">Components</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#color-3'">
            <a href="#color-3">Breadcrumb</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#color' || $route.hash == '#default'">
            <a href="#color">Color</a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>
      </div>
    </template>
  ```
</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          color: '#3DC9B3'
        })
      }
    </script>
  ```
</div>

</card>

<card>

## Divider

Cambia el icono de divider con el `v-slot:divider` en el componente y sus hijos

<div slot="example">

<!-- ... -->
<breadcrumb-divider />

</div>

<div slot="template">

  ```html{4,5,6,23,24,25,42,43,44,45,46,47,48,49,50,67,68,69}
    <template>
      <div class="con-demo">
        <vs-breadcrumb>
          <template v-slot:divider>
            |
          </template>

          <vs-breadcrumb-item :active="$route.hash == '#divider-1'">
            <a href="#divider-1">Vuesax</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider-2'">
            <a href="#divider-2">Components</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider-3'">
            <a href="#divider-3">Breadcrumb</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider'">
            <a href="#divider">Divider</a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>

        <vs-breadcrumb>
          <template v-slot:divider>
            <i class='bx bx-right-arrow-alt' ></i>
          </template>

          <vs-breadcrumb-item :active="$route.hash == '#divider-1'">
            <a href="#divider-1">Vuesax</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider-2'">
            <a href="#divider-2">Components</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider-3'">
            <a href="#divider-3">Breadcrumb</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider'">
            <a href="#divider">Divider</a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>

        <vs-breadcrumb>
          <template v-slot:divider>
            <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
              <path d="M10.296 7.71L14.621 12 10.296 16.29 11.704 17.71 17.461 12 11.704 6.29z"/>
              <path d="M6.704 6.29L5.296 7.71 9.621 12 5.296 16.29 6.704 17.71 12.461 12z"/>
            </svg>
          </template>

          <vs-breadcrumb-item :active="$route.hash == '#divider-1'">
            <a href="#divider-1">Vuesax</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider-2'">
            <a href="#divider-2">Components</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider-3'">
            <a href="#divider-3">Breadcrumb</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider'">
            <a href="#divider">Divider</a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>

        <vs-breadcrumb>
          <template v-slot:divider>
            \
          </template>

          <vs-breadcrumb-item :active="$route.hash == '#divider-1'">
            <a href="#divider-1">Vuesax</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider-2'">
            <a href="#divider-2">Components</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider-3'">
            <a href="#divider-3">Breadcrumb</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#divider'">
            <a href="#divider">Divider</a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Icons

Agrega iconos en los items para dar una mejor referencia al usuario

<div slot="example">

<!-- ... -->
<breadcrumb-icons />

</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="con-demo">
        <vs-breadcrumb>
          <vs-breadcrumb-item :active="$route.hash == '#icons-1'">
            <a href="#icons-1">
              <i class='bx bxl-vuejs' ></i>
              vuesax
            </a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#icons-2'">
            <a href="#icons-2">
              <i class='bx bx-package' ></i>
              Components
            </a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#icons-3'">
            <a href="#icons-3">
              <i class='bx bx-dots-horizontal' ></i>
              Breadcrumb
            </a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#icons'">
            <a href="#icons">
              <i class='bx bx-selection' ></i>
              Icons
            </a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>

        <vs-breadcrumb>
          <vs-breadcrumb-item :active="$route.hash == '#icons-1'">
            <a href="#icons-1">
              <i class='bx bx-home' ></i>
            </a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#icons-2'">
            <a href="#icons-2">
              <i class='bx bxs-bar-chart-alt-2' ></i>
            </a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#icons-3'">
            <a href="#icons-3">
              <i class='bx bx-task' ></i>
            </a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#icons'">
            <a href="#icons">
              <i class='bx bxs-paper-plane' ></i>
            </a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>

        <vs-breadcrumb>
          <vs-breadcrumb-item :active="$route.hash == '#icons-1'">
            <a href="#icons-1">
              <i class='bx bxs-bug' ></i>
            </a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#icons-2'">
            <a href="#icons-2">
              <i class='bx bx-code-alt' ></i>
              Component
            </a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#icons-3'">
            <a href="#icons-3">
              <i class='bx bx-git-merge' ></i>
              Merge
            </a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#icons'">
            <a href="#icons">
              <i class='bx bx-check-shield' ></i>
            </a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>
      </div>
    </template>
  ```

</div>

</card>

<card>

## collapse

Puedes ocultar opciones con el componente `vs-bredcrumb-group` y la propiedad `v-model` en `true`

<div slot="example">

<breadcrumb-collapse />

</div>

<div slot="template">

  ```html{13}
    <template>
      <div class="con-demo">
        <button @click="activeCollapse = !activeCollapse" >
          {{ activeCollapse ? 'close collapse' : 'open collapse' }}
        </button>
        <vs-breadcrumb>
          <template v-slot:divider>
              |
          </template>

          <vs-breadcrumb-item :active="$route.hash == '#collapse-1'" >
            <a href="#collapse-1">Vuesax</a>
          </vs-breadcrumb-item>

          <vs-breadcrumb-group v-model="activeCollapse">
            <vs-breadcrumb-item :active="$route.hash == '#collapse-2'">
              <a href="#collapse-2">Components</a>
            </vs-breadcrumb-item>
            <vs-breadcrumb-item :active="$route.hash == '#collapse-3'">
              <a href="#collapse-3">Breadcrumb</a>
            </vs-breadcrumb-item>
          </vs-breadcrumb-group>

          <vs-breadcrumb-item :active="$route.hash == '#collapse'">
            <a href="#collapse">collapse</a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>

        <vs-breadcrumb>
          <vs-breadcrumb-item :active="$route.hash == '#collapse-1'" >
            <a href="#collapse-1">Vuesax</a>
          </vs-breadcrumb-item>

          <vs-breadcrumb-group v-model="activeCollapse">
            <template v-slot:icon>
              <i class='bx bx-user' ></i>
            </template>
            <vs-breadcrumb-item :active="$route.hash == '#collapse-2'">
              <a href="#collapse-2">User</a>
            </vs-breadcrumb-item>
            <vs-breadcrumb-item :active="$route.hash == '#collapse-3'">
              <a href="#collapse-3">Name</a>
            </vs-breadcrumb-item>
          </vs-breadcrumb-group>

          <vs-breadcrumb-item :active="$route.hash == '#collapse'">
            <a href="#collapse">collapse</a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>

        <vs-breadcrumb>
          <template v-slot:divider>
              <i class='bx bx-chevron-right' ></i>
          </template>

          <vs-breadcrumb-group v-model="activeCollapse">
            <vs-breadcrumb-item :active="$route.hash == '#collapse-1'" >
              <a href="#collapse-1">Vuesax</a>
            </vs-breadcrumb-item>

            <template v-slot:icon>
              <i class='bx bxs-book-bookmark' ></i>
            </template>
            <vs-breadcrumb-item :active="$route.hash == '#collapse-2'">
              <a href="#collapse-2">User</a>
            </vs-breadcrumb-item>
            <vs-breadcrumb-item :active="$route.hash == '#collapse-3'">
              <a href="#collapse-3">Name</a>
            </vs-breadcrumb-item>

            <vs-breadcrumb-item :active="$route.hash == '#collapse'">
              <a href="#collapse">collapse</a>
            </vs-breadcrumb-item>
          </vs-breadcrumb-group>
        </vs-breadcrumb>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```js{4}
    <script>
      export default {
        data:() => ({
          activeCollapse: true
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus" scoped>

      button
        padding 8px 10px
        background transparent
        border 0px
        background rgb(31, 116, 255)
        color rgb(255,255,255)
        border-radius 10px
        margin-bottom 10px
        cursor pointer
        transition all .25s ease
        &:hover
          opacity .8

    </style>
  ```

</div>

</card>

<card>

## Disabled

Desactiva items al usuario

<div slot="example">

<breadcrumb-disabled />

</div>

<div slot="template">

  ```html{7,10}
    <template>
      <div class="con-demo">
        <vs-breadcrumb>
          <vs-breadcrumb-item :active="$route.hash == '#disabled-1'" >
            <a href="#disabled-1">Vuesax</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item disabled :active="$route.hash == '#disabled-2'">
            <a href="#disabled-2">Components</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item disabled :active="$route.hash == '#disabled-3'">
            <a href="#disabled-3">Breadcrumb</a>
          </vs-breadcrumb-item>
          <vs-breadcrumb-item :active="$route.hash == '#disabled'">
            <a href="#disabled">Default</a>
          </vs-breadcrumb-item>
        </vs-breadcrumb>
      </div>
    </template>
  ```

</div>

</card>
