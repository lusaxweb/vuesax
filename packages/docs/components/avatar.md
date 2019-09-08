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
 - name: to
   type: String
   values: vue-router-link
   description: Agrega al componente soporte para un link de <code>vue-router</code> como si fuera `router.push()`.
   default: null
   link: https://router.vuejs.org/api/#to
   code: <vs-avatar to="/example" />
   usage: null
 - name: href
   type: String
   values: url
   description: Simula un elemento <a> para una url externa al usuario hacer click en el componente.
   default: null
   link: null
   code: <vs-avatar href="https://lusaxweb.github.io/vuesax/" />
   usage: null
 - name: blank
   type: Boolean
   values: true, false
   description: Determina si se habré una nueva ventana o se sustituye la actual.
   default: false
   link: null
   code: <vs-avatar blank href="https://lusaxweb.github.io/vuesax/" />
   usage: null
 - name: size
   type: px
   values: css px
   description: Cambia el tamaño del componente.
   default: 33px
   link: null
   code: <vs-avatar size="45px" />
   usage: '#size'
 - name: loading
   type: Boolean
   values: true, false
   description: Determina si el componente se encuentra en estado loading.
   default: false
   link: null
   code: <vs-avatar loading />
   usage: '#loading'
 - name: disabled
   type: Boolean
   values: true, false
   description: Determina si el componente se encuentra en el estado disabled.
   default: false
   link: null
   code: <vs-avatar disabled />
   usage: null

 - name: circle
   type: Boolean
   values: true, false
   description: Cambia la propiedad del componente `border-radius` a 50% haciéndolo un circulo.
   default: false
   link: null
   code: <vs-avatar circle />
   usage: null
 - name: badge
   type: Boolean | String
   values: true, false, primary, success, danger, warning, dark, RGB, HEX
   description: Determina si el avatar tiene un badge el valor puede ser un boolean y si se quiere cambiar el color es un string con el valor.
   default: false
   link: null
   code: <vs-avatar badge="#5c3de8" />
   usage: '#badge'
 - name: verified
   type: Boolean
   values: true, false
   description: Agrega un badge en la parte inferior con un icono de verificado (el color del badge se toma de la propiedad <code>color</code>`).
   default: false
   link: null
   code: <vs-avatar badge="#5c3de8" />
   usage: '#verified'
 - name: history
   type: Boolean
   values: true, false
   description: agrega un borde al componente mostrando al usuario que tienen una información o actividad nueva.
   default: false
   link: null
   code: <vs-avatar history />
   usage: '#history'
 - name: typing
   type: Boolean | String
   values: true, false, primary, success, danger, warning, dark, RGB, HEX
   description: Agrega un elemento de efecto typing al componente.
   default: false
   link: null
   code: <vs-avatar typing />
   usage: '#typing'


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
 - name: verified
   type: slot
   values: null
   description: Slot para agregar cualquier elemento sustituyendo el <code>verified</code>.
   default: null
   link: null
   code: >
        <vs-avatar badge="success" color="danger">
          U
          <template v-slot:verified>
            <i class='bx bxs-star' ></i>
          </template>
        </vs-avatar>
   usage: '#verified'
 - name: social
   type: slot
   values: null
   description: Slot para agregar una lista de iconos al lado del avatar.
   default: null
   link: null
   code: >
        <vs-avatar>
          <template v-slot:social>
            <i class='bx bxl-facebook-square' ></i>
            <i class='bx bxl-twitter' ></i>
            <i class='bx bxl-instagram-alt' ></i>
          <template>
        <vs-avatar>
   usage: '#social-list'

---

# Avatar

<!-- :::warning Componente recreado desde la version 4.0

Este componente se creo totalmente de nuevo en la version 4.0, los componentes desde la v4.0+ tienen nuevas propiedades y se cambiaron algunas de las propiedades anteriores por mejores practicas y soporte

- Lista de posibles cambios en el componente:
  - Nuevas propiedades
  - cambio de nombre en las propiedades anteriores (casi todas las propiedades se mantienen con el mismo nombre)
  - <Badge type="error" text="Deprecated"/> las propiedades con el sufijo `vs-` como por ejemplo `vs-color` se eliminaron por completo de los componentes
  - Cambio de propiedad a `slot` para una mejor personalización
  - Se cambio el valor de algunas propiedades o se agrego soporte a otros valores
  - Nueva estructura del componente y los `slots`
  - Eliminación de código innecesario, en algunos componentes se eliminaron lógicas y procesos innecesarios

::: -->



<card>

## Default

:::warning Documentación de vuesax 4.0+

Estos documentos hacen referencia a la ultima version de vuesax (4.0+), para ver los documentos de las versiones anteriores puedes hacerlo aquí 👉 [Vuesax 3.x](https://lusaxweb.github.io/vuesax/)

:::

Maneja el avatar del usuario fácilmente ya sea una imagen o un texto agregando funcionalidades fácilmente como **Badge**, **Typing** o **Verificado**

<div slot="example">

  <Avatar-default />

</div>

<div slot="template">

  ```html{1}
  <vs-avatar />

  <vs-avatar badge="success" color="danger">
    U
  </vs-avatar>

  <vs-avatar badge="danger">
    <img
      src="/86.jpg"
      alt="user"
    >
  </vs-avatar>
  <vs-avatar>
    <img
      src="/24.jpg"
      alt="user"
    >
    <template v-slot:badge>
      4
    </template>
  </vs-avatar>
  <vs-avatar badge="dark">
    <img
      src="/2.jpg"
      alt="user"
    >
    <template v-slot:badge>
      12
    </template>
  </vs-avatar>

  <vs-avatar circle color="danger" badge="warning">
    <img
      src="/90.jpg"
      alt="user"
    >
  </vs-avatar>
  ```

</div>

</card>

<card>

## Size

Cambia el tamaño del avatar con la propiedad `size`, como valor permitido es un numero que se representara en (`px`)

<div slot="example">

  <Avatar-size />

</div>

<div slot="template">

  ```html{7}
    <vs-avatar />

    <vs-avatar size="40" color="danger">
      U
    </vs-avatar>

    <vs-avatar size="50">
      <img
        src="/86.jpg"
        alt="user"
      >
    </vs-avatar>
    <vs-avatar size="60">
      <img
        src="/24.jpg"
        alt="user"
      >
    </vs-avatar>
    <vs-avatar size="70">
      <img
        src="/2.jpg"
        alt="user"
      >
    </vs-avatar>

    <vs-avatar size="80" color="danger">
      <img
        src="/90.jpg"
        alt="user"
      >
    </vs-avatar>
  ```
</div>

</card>

<card>

## Color

<Color />

<div slot="example">

  <Avatar-color />

</div>

<div slot="template">

  ```html
    <vs-avatar>
      Primary
    </vs-avatar>

    <vs-avatar color="success">
      Success
    </vs-avatar>

    <vs-avatar color="danger">
      Danger
    </vs-avatar>

    <vs-avatar color="warning">
      Warning
    </vs-avatar>

    <vs-avatar color="dark">
      Dark
    </vs-avatar>

    <vs-avatar color="rgb(250,20,100)">
      RGB
    </vs-avatar>

    <vs-avatar color="#5c3de8">
      HEX
    </vs-avatar>
  ```
</div>

</card>


<card>

## Badge

Agrega un badge fácilmente con la propiedad `badge`, si necesitas un badge mas personalizado puedes usar el `slot` y tener mas control sobre lo que necesitas lograr

<div slot="example">

  <Avatar-badge />

</div>

<div slot="template">

  ```html
    <vs-avatar badge="primary" />

    <vs-avatar badge="success" color="danger">
      U
    </vs-avatar>

    <vs-avatar badge="danger">
      <img
        src="/86.jpg"
        alt="user"
      >
    </vs-avatar>
    <vs-avatar>
      <img
        src="/24.jpg"
        alt="user"
      >

      <template v-slot:badge>
        4
      </template>
    </vs-avatar>
    <vs-avatar badge="dark">
      <img
        src="/2.jpg"
        alt="user"
      >

      <template v-slot:badge>
        <span>
          12
        </span>
      </template>
    </vs-avatar>

    <vs-avatar circle color="danger" badge="warning">
      <img
        src="/90.jpg"
        alt="user"
      >
    </vs-avatar>
  ```
</div>

</card>

<card>

## Icon

Cambia el icono principal del avatar con el `slot` **default**

<Icons />

<div slot="example">

  <Avatar-icon />

</div>

<div slot="template">

  ```html
    <vs-avatar>
      <i class='bx bxs-bell-ring' />
    </vs-avatar>

    <vs-avatar color="success">
      <i class='bx bxs-paper-plane'/>
    </vs-avatar>

    <vs-avatar color="danger">
      <i class='bx bx-bug'/>
    </vs-avatar>

    <vs-avatar color="warning">
      <i class='bx bx-error-alt'/>
    </vs-avatar>

    <vs-avatar color="dark">
      <i class='bx bx-joystick'/>
    </vs-avatar>

    <vs-avatar color="rgb(250,20,100)">
      <i class='bx bxs-cart-alt'/>
    </vs-avatar>

    <vs-avatar color="#5c3de8">
      <i class='bx bx-ghost'/>
    </vs-avatar>
  ```
</div>

</card>

<card>

## Auto set font size <Badge text="New"/>

Automáticamente el componente avatar al proporcionar un texto en el `slot` **default** auto cambiara el tamaño de la fuente y de ser necesario disminuir el numero de caracteres.

:::tip
  El máximo de caracteres en el texto es de **5** si se excede ese numero se proporcionara solo la primera letra y en mayúsculas, si es un texto con mas de una palabra se afectan de la misma manera.
:::

<div slot="example">

  <Avatar-autoset />

</div>

<div slot="template">

  ```html
    <vs-avatar>
      Gladys
    </vs-avatar>

    <vs-avatar color="success">
      Lyn
    </vs-avatar>

    <vs-avatar color="danger">
      Lucy
    </vs-avatar>

    <vs-avatar color="warning">
      Katie
    </vs-avatar>

    <vs-avatar color="dark">
      Audrey Howard
    </vs-avatar>

    <vs-avatar color="rgb(250,20,100)">
      Angie Caldwell Douglas
    </vs-avatar>

    <vs-avatar color="#5c3de8">
      Lena Holt Becky Peters
    </vs-avatar>
  ```
</div>

</card>

<card>

## History <Badge text="New"/>

Agrega un estado de actividad en el usuario con la propiedad `history`

:::tip
Para determinar el color del borde se selecciona el color por defecto del avatar o el de la propiedad `color`
:::

<div slot="example">

  <Avatar-history />

</div>

<div slot="template">

  ```html
    <vs-avatar history="primary" />

    <vs-avatar history="danger" badge="success" color="danger">
      U
    </vs-avatar>

    <vs-avatar history="success" badge="danger">
      <img
        src="/86.jpg"
        alt="user"
      >
    </vs-avatar>
    <vs-avatar history="warning">
      <img
        src="/24.jpg"
        alt="user"
      >

      <template v-slot:badge>
        4
      </template>
    </vs-avatar>
    <vs-avatar history="dark" badge="dark">
      <img
        src="/2.jpg"
        alt="user"
      >

      <template v-slot:badge>
        <span>
          12
        </span>
      </template>
    </vs-avatar>

    <vs-avatar history="rgb(200,0,200)" circle color="danger" badge="warning">
      <img
        src="/90.jpg"
        alt="user"
      >
    </vs-avatar>
  ```
</div>

</card>

<card>

## Group <Badge text="New"/>

Puedes tener un grupo de avatar con el componente `vs-avatar-group` y automáticamente darle los estilos necesarios al componente hijo `vs-avatar`, para poner los elementos uno al lado del otro puedes agregar la propiedad `float`


<div slot="example">

  <Avatar-group />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <vs-avatar-group>
          <vs-avatar />

          <vs-avatar badge="success" color="danger">
            U
          </vs-avatar>

          <vs-avatar badge="danger">
            <img
              src="/86.jpg"
              alt="user"
            >
          </vs-avatar>
          <vs-avatar>
            <img
              src="/24.jpg"
              alt="user"
            >

            <template v-slot:badge>
              4
            </template>
          </vs-avatar>
          <vs-avatar badge="dark">
            <img
              src="/2.jpg"
              alt="user"
            >

            <template v-slot:badge>
              <span>
                12
              </span>
            </template>
          </vs-avatar>

          <vs-avatar color="danger" badge="warning">
            <img
              src="/90.jpg"
              alt="user"
            >
          </vs-avatar>
        </vs-avatar-group>

        <vs-avatar-group class="group-float" max-items-row="3" float >
          <vs-avatar>
            <i class='bx bx-plus' ></i>
          </vs-avatar>

          <vs-avatar badge="success" color="danger">
            <img
              src="/25.jpg"
              alt="user"
            >
          </vs-avatar>

          <vs-avatar badge="danger">
            <img
              src="/86.jpg"
              alt="user"
            >
          </vs-avatar>
          <vs-avatar>
            <img
              src="/24.jpg"
              alt="user"
            >

            <template v-slot:badge>
              4
            </template>
          </vs-avatar>
          <vs-avatar badge="dark">
            <img
              src="/2.jpg"
              alt="user"
            >

            <template v-slot:badge>
              <span>
                12
              </span>
            </template>
          </vs-avatar>

          <vs-avatar color="danger" badge="warning">
            <img
              src="/90.jpg"
              alt="user"
            >
          </vs-avatar>
        </vs-avatar-group>
      </div>
    </template>
  ```
</div>

</card>

<card>

## Typing <Badge text="New"/>

Puedes agregar un efecto escritura al avatar con la propiedad `typing` que como valores acepta (`Boolean` y `String`), el valor `String` es para determinar el color.

<div slot="example">

  <Avatar-typing />

</div>

<div slot="template">

  ```html
    <vs-avatar typing />

    <vs-avatar typing="success" badge="success" color="danger">
      U
    </vs-avatar>

    <vs-avatar typing="danger" badge="danger">
      <img
        src="/86.jpg"
        alt="user"
      >
    </vs-avatar>
    <vs-avatar typing="dark" badge="dark">
      <img
        src="/2.jpg"
        alt="user"
      >

      <template v-slot:badge>
        <span>
          12
        </span>
      </template>
    </vs-avatar>

    <vs-avatar typing="#5c3de8" circle color="danger" badge="warning">
      <img
        src="/90.jpg"
        alt="user"
      >
    </vs-avatar>
  ```
</div>

</card>

<card>

## Loading <Badge text="New"/>

Agrega el estado loading al avatar con la propiedad `loading`

:::warning Note
Si el Componente tiene la propiedad **loading**, el usuario no puede generar ningún **event**
:::

<div slot="example">

  <Avatar-loading />

</div>

<div slot="template">

  ```html
    <vs-avatar  loading />

    <vs-avatar loading badge="success" color="danger">
      U
    </vs-avatar>

    <vs-avatar loading typing="danger" badge="danger">
      <img
        src="/86.jpg"
        alt="user"
      >
    </vs-avatar>
    <vs-avatar loading history="success" badge="dark">
      <img
        src="/2.jpg"
        alt="user"
      >

      <template v-slot:badge>
        <span>
          12
        </span>
      </template>
    </vs-avatar>

    <vs-avatar loading circle color="danger" badge="warning">
      <img
        src="/90.jpg"
        alt="user"
      >
    </vs-avatar>
  ```
</div>

</card>

<card>

## Verified <Badge text="New"/>

Agrega un badge con icono representando un estado del avatar como podría ser verificado o cualquier otro.

<div slot="example">

  <Avatar-verified />

</div>

<div slot="template">

  ```html
    <vs-avatar verified />

    <vs-avatar badge="success" color="danger">
      U

      <template v-slot:verified>
        <i class='bx bxs-star' ></i>
      </template>
    </vs-avatar>

    <vs-avatar badge="danger">
      <img
        src="/86.jpg"
        alt="user"
      >
      <template v-slot:verified>
        <i class='bx bxs-bookmark' ></i>
      </template>
    </vs-avatar>
    <vs-avatar color="#5c3de8">
      <img
        src="/2.jpg"
        alt="user"
      >

      <template v-slot:verified>
        <i class='bx bxs-pin' ></i>
      </template>
    </vs-avatar>

    <vs-avatar circle color="dark" badge="warning">
      <img
        src="/90.jpg"
        alt="user"
      >

      <template v-slot:verified>
        <i class='bx bx-dollar' ></i>
      </template>
    </vs-avatar>
  ```
</div>

</card>

<card>

## Social list <Badge text="New"/>

Un `slot` para generar una lista al lado del avatar con los iconos de las redes sociales o cualquier tipo de icono que necesites

<div slot="example">

  <Avatar-social />

</div>

<div slot="template">

  ```html
    <vs-avatar>
      <template v-slot:social>
        <i class='bx bxl-facebook-square' ></i>
        <i class='bx bxl-twitter' ></i>
        <i class='bx bxl-instagram-alt' ></i>
      </template>
    </vs-avatar>

    <vs-avatar badge="success" color="dark">
      U
      <template v-slot:social>
        <i class='bx bxl-github' ></i>
        <i class='bx bxl-codepen' ></i>
        <i class='bx bxl-discord' ></i>
      </template>
    </vs-avatar>

    <vs-avatar color="#5c3de8" badge="#5c3de8">
      <img
        src="/86.jpg"
        alt="user"
      >
      <template v-slot:social>
        <i class='bx bxl-behance' ></i>
        <i class='bx bxl-dribbble' ></i>
        <i class='bx bxl-slack-old' ></i>
      </template>
    </vs-avatar>
    <vs-avatar badge="dark">
      <img
        src="/2.jpg"
        alt="user"
      >

      <template v-slot:social>
        <i class='bx bxl-linkedin' ></i>
        <i class='bx bxl-skype' ></i>
      </template>
    </vs-avatar>

    <vs-avatar circle color="success" badge="success">
      <img
        src="/90.jpg"
        alt="user"
      >

      <template v-slot:social>
        <i class='bx bxl-whatsapp' ></i>
      </template>

    </vs-avatar>
  ```
</div>

</card>

