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
            <vs-alert color="success">
              <template v-slot:header>
                Lorem ipsum dolor sit amet
              </template>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </vs-alert>
    usage: '#color'
  - name: style button
    type: Prop
    values: flat, border, gradient, transparent, dashed, shadow, relief, floating
    description: Cambia el estilo del componente y de sus estados.
    default: null
    link: null
    code: >
            <vs-button
              flat // <----
              :active="active == 0"
              @click="active = 0">
              Flat
            </vs-button>
    usage: '#flat'
  - name: active
    type: Boolean
    values: true, false
    description: Determina si el componente esta activo y cambia su estilo a ese estado.
    default: false
    link: null
    code: >
            <vs-button active >
              Default
            </vs-button>
    usage: '#default'
  - name: upload
    type: Boolean
    values: true, false
    description: Determina si el componente tiene activo el estado de upload cambiando el estilo y agregando animación.
    default: false
    link: null
    code: >
            <vs-button upload >
              <i class='bx bxs-wallet' ></i> Wallet
            </vs-button>
    usage: '#upload'
  - name: to
    type: String
    values: url - vue-router
    description: Agrega la funcionalidad de vue-router al botón, al hacer click se va a redirigir a la ruta pasada.
    default: false
    link: null
    code: >
            <vs-button to="/" >
              Example prop - to
            </vs-button>
    usage: null
  - name: href
    type: String
    values: href - link
    description: Agrega un href de un link externo para agregar la funcionalidad al hacer click en el componente.
    default: false
    link: null
    code: >
            <vs-button href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </vs-button>
    usage: null
  - name: blank
    type: Boolean
    values: true, false
    description: como en un elemento html `a` determina si se abre una nueva ventana o se sustituye la actual.
    default: false
    link: null
    code: >
            <vs-button blank href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </vs-button>
    usage: null
  - name: icon
    type: Boolean
    values: true, false
    description: Determina si el componente contiene solo un icono, al agregar esta propiedad el componente tiene un ancho y alto igual.
    default: false
    link: null
    code: >
            <vs-button icon > // <------
              <i class='bx bx-home-alt'></i>
            </vs-button>
    usage: '#icon'
  - name: circle
    type: Boolean
    values: true, false
    description: Cambia el border-radius para dar un estilo de circulo.
    default: false
    link: null
    code: >
            <vs-button icon circle > // <------
              <i class='bx bx-home-alt'></i>
            </vs-button>
    usage: '#circle'
  - name: square
    type: Boolean
    values: true, false
    description: Cambia el border-radius para dar un estilo de rectángulo.
    default: false
    link: null
    code: >
            <vs-button icon square > // <------
              <i class='bx bx-home-alt'></i>
            </vs-button>
    usage: '#square'
  - name: block
    type: Boolean
    values: true, false
    description: Cambia el ancho del componente al total posible determinado por el elemento padre.
    default: false
    link: null
    code: >
            <vs-button block >
              <i class='bx bxs-paint-roll' ></i> Edit Theme
            </vs-button>
    usage: '#block'
  - name: animationType
    type: Boolean
    values: true, false
    description: Cambia el tipo de animacion, esta propiedad solo funciona si se tiene el <code>slot</code> animate.
    default: false
    link: null
    code: >
            <vs-button flat color="success" animation-type="vertical" >
              Message
              <template v-slot:animate >
                <i class='bx bx-mail-send' ></i> Send
              </template>
            </vs-button>
    usage: '#animated'
  - name: animateInactive
    type: Boolean
    values: true, false
    description: Determina si la animación esta activa para el usuario al hacer hover.
    default: false
    link: null
    code: >
            <vs-button :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
              <i class='bx bxl-facebook-square' ></i>
              {{ successFace ? 'Logout' : 'Facebook' }}
              <template v-slot:animate >
                <i class='bx bx-user' ></i> Login
              </template>
            </vs-button>
    usage: '#toggle'



SLOTS:
  - name: animate
    type: slot
    values: null
    description: Slot Para agregar el elemento que se visualizara en la animacion.
    default: null
    link: null
    code: >
          <vs-button >
            Home
            <template v-slot:animate >
              <i class='bx bx-home-alt' ></i>
            </template>
          </vs-button>
    usage: '#animated'

---

# Button

<card>

## Default

<docs-warn />

Agrega fácilmente botones con estados como loading active y disabled de una manera simple

<div slot="example">

  <Button-default />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <vs-button
          :active="active == 0"
          @click="active = 0">
          Default
        </vs-button>
        <vs-button
          :active="active == 1"
          @click="active = 1">
          Default
        </vs-button>
        <vs-button
          disabled >
          Default
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script" >

  ```html
    <script>
      export default {
        data: () => ({
          active: 1
        })
      }
    </script>
  ```

</div>

</card>

<card>

## flat

Cambia el tipo de botón agregando la propiedad `flat`

<div slot="example">

  <Button-flat />

</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="con-demo flex">
        <vs-button
          flat
          :active="active == 0"
          @click="active = 0">
          Flat
        </vs-button>
        <vs-button
          flat
          :active="active == 1"
          @click="active = 1">
          Flat
        </vs-button>
        <vs-button
          flat
          disabled >
          Flat
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 1
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```html
    <style lang="stylus" scoped>
      button
        padding-left 25px
        padding-right 25px
    </style>
  ```

</div>

</card>

<card>

## Border

Cambia el tipo de botón con bordes con la propiedad `border`

<div slot="example">

  <Button-border />

</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="con-demo flex">
        <vs-button
          border
          :active="active == 0"
          @click="active = 0">
          Border
        </vs-button>
        <vs-button
          border
          :active="active == 1"
          @click="active = 1">
          Border
        </vs-button>
        <vs-button
          border
          disabled >
          Border
        </vs-button>
      </div>
    </template>

  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 1
        })
      }
    </script>
  ```

</div>

</card>


<card>

## Gradient

Cambia el estilo a un botón con gradiente

:::tip Gradiente Automático
  El gradiente se crea automáticamente de el valor de la propiedad color
:::

<div slot="example">

  <Button-gradient />

</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="con-demo flex">
        <vs-button
          gradient
          :active="active == 0"
          @click="active = 0">
          Gradient
        </vs-button>
        <vs-button
          gradient
          :active="active == 1"
          @click="active = 1">
          Gradient
        </vs-button>
        <vs-button
          gradient
          disabled >
          Gradient
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 1
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Relief

Cambia el estilo del botón con la propiedad `relief`

<div slot="example">

  <Button-relief />

</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="con-demo flex">
        <vs-button
          relief
          :active="active == 0"
          @click="active = 0">
          Relief
        </vs-button>
        <vs-button
          relief
          :active="active == 1"
          @click="active = 1">
          Relief
        </vs-button>
        <vs-button
          relief
          disabled >
          Relief
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 1
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Transparent <Badge text="New"/>

Cambia el estilo del componente con la propiedad `transparent`

<div slot="example">

  <Button-transparent />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <vs-button transparent :active="active == 0" @click="active = 0">
          Transparent
        </vs-button>
        <vs-button transparent :active="active == 1" @click="active = 1">
          Transparent
        </vs-button>
        <vs-button transparent disabled >
          Transparent
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 1
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Dashed <Badge text="New"/>

Cambia el estilo del botón con la propiedad `dashed`

<div slot="example">

  <Button-dashed />

</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="con-demo flex">
        <vs-button
          dashed
          :active="active == 0"
          @click="active = 0">
          Dashed
        </vs-button>
        <vs-button
          dashed
          :active="active == 1"
          @click="active = 1">
          Dashed
        </vs-button>
        <vs-button
          dashed
          disabled >
          Dashed
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 1
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Shadow <Badge text="New"/>

Cambia el estilo del botón con la propiedad `shadow`

<div slot="example">

  <Button-shadow />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <vs-button shadow :active="active == 0" @click="active = 0">
          Shadow
        </vs-button>
        <vs-button shadow :active="active == 1" @click="active = 1">
          Shadow
        </vs-button>
        <vs-button shadow disabled >
          Shadow
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 1
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Color

<Color />

<div slot="example">

  <Button-color />

</div>

<div slot="template">

  ```html{9}
    <template>
      <div class="con-demo flex">
        <vs-button
          :active="active == 0"
          @click="active = 0">
          Default
        </vs-button>
        <vs-button
          color="success"
          flat
          :active="active == 1"
          @click="active = 1"
          >
          Success
        </vs-button>
        <vs-button
          color="danger"
          border
          :active="active == 2"
          @click="active = 2"
          >
          Danger
        </vs-button>
        <vs-button
          transparent
          :active="active == 3"
          @click="active = 3"
          color="warning" >
          Warning
        </vs-button>
        <vs-button
          gradient
          color="#7d33ff"
          :active="active == 4"
          @click="active = 4" >
          HEX
        </vs-button>
        <vs-button
          relief
          color="rgb(59,222,200)"
          :active="active == 5"
          @click="active = 5">
          RGB
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 1
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Icon

<Icons />

Al agregar un icono por defecto se agrega el ancho y alto en base al padding y su tamaño, si necesitas que el icono tenga un tamaño cuadrado agrega la propiedad `icon`

:::warning

Al agregar la propiedad `icon` el botón sera de un alto y ancho de `33px` todo lo que se desborde de ese tamaño sera cortado.

:::

<div slot="example">

  <Button-icon />

</div>

<div slot="template">

  ```html{4,7}
    <template>
      <div class="con-demo flex">
        <vs-button
          icon
          :active="active == 0"
          @click="active = 0">
          <i class='bx bx-home-alt'></i>
        </vs-button>
        <vs-button
          icon
          flat
          :active="active == 1"
          @click="active = 1"
          color="success" >
          <i class='bx bxs-phone-call' ></i>
        </vs-button>
        <vs-button
          icon
          border
          :active="active == 2"
          @click="active = 2"
          color="danger" >
          <i class='bx bxs-heart' ></i>
        </vs-button>
        <vs-button
          icon
          transparent
          :active="active == 3"
          @click="active = 3"
          color="warning" >
          <i class='bx bxs-bell-ring' ></i>
        </vs-button>
        <vs-button
          icon
          gradient
          color="#7d33ff"
          :active="active == 4"
          @click="active = 4" >
          <i class='bx bxs-paper-plane' ></i>
        </vs-button>
        <vs-button
          icon
          relief
          color="rgb(59,222,200)"
          :active="active == 5"
          @click="active = 5">
          <i class='bx bxs-purchase-tag' ></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 1
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Icon - Text

Agrega un icono con texto usando el `slot` `default`

<div slot="example">

  <Button-iconText />

</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="con-demo flex">
        <vs-button
          :active="active == 0"
          @click="active = 0">
          <i class='bx bx-home-alt'></i> Home
        </vs-button>
        <vs-button
          flat
          :active="active == 1"
          @click="active = 1"
          color="success" >
          <i class='bx bxs-phone-call' ></i> Call
        </vs-button>
        <vs-button
          border
          :active="active == 2"
          @click="active = 2"
          color="danger" >
          <i class='bx bxs-heart' ></i> Like
        </vs-button>
        <vs-button
          transparent
          :active="active == 3"
          @click="active = 3"
          color="warning" >
          <i class='bx bxs-bell-ring' ></i> Notification
        </vs-button>
        <vs-button
          gradient
          color="#7d33ff"
          :active="active == 4"
          @click="active = 4" >
          <i class='bx bxs-paper-plane' ></i> Send
        </vs-button>
        <vs-button
          relief
          color="rgb(59,222,200)"
          :active="active == 5"
          @click="active = 5">
          <i class='bx bxs-purchase-tag' ></i> Save
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>


<card>

## Circle <Badge text="New"/>

Cambia la propiedad `border-radius` para darle un estilo al botón totalmente circular

:::tip Circulo Exacto

  Para hacer un circulo exacto puedes usar la propiedad `icon` mas `circle`

:::

<div slot="example">

  <Button-circle />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <vs-button
          circle
          :active="active == 0"
          @click="active = 0">
          Home
        </vs-button>
        <vs-button
          circle
          icon
          flat
          :active="active == 1"
          @click="active = 1"
          color="success" >
          <i class='bx bxs-phone-call' ></i>
        </vs-button>
        <vs-button
          circle
          border
          :active="active == 2"
          @click="active = 2"
          color="danger" >
          <i class='bx bxs-heart' ></i> Like
        </vs-button>
        <vs-button
          circle
          transparent
          :active="active == 3"
          @click="active = 3"
          color="warning" >
          Warning <i class='bx bxs-bell-ring' ></i>
        </vs-button>
        <vs-button
          circle
          icon
          gradient
          color="#7d33ff"
          :active="active == 4"
          @click="active = 4" >
          <i class='bx bxs-paper-plane' ></i>
        </vs-button>
        <vs-button
          circle
          icon
          relief
          color="rgb(59,222,200)"
          :active="active == 5"
          @click="active = 5">
          <i class='bx bxs-purchase-tag' ></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Square <Badge text="New"/>

Cambia el `border-radius` haciendo un cuadrado o rectángulo.

<div slot="example">

  <Button-square />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <vs-button
          square
          :active="active == 0"
          @click="active = 0">
          Home
        </vs-button>
        <vs-button
          square
          icon
          flat
          :active="active == 1"
          @click="active = 1"
          color="success" >
          <i class='bx bxs-phone-call' ></i>
        </vs-button>
        <vs-button
          square
          border
          :active="active == 2"
          @click="active = 2"
          color="danger" >
          <i class='bx bxs-heart' ></i> Like
        </vs-button>
        <vs-button
          square
          transparent
          :active="active == 3"
          @click="active = 3"
          color="warning" >
          Warning <i class='bx bxs-bell-ring' ></i>
        </vs-button>
        <vs-button
          square
          icon
          gradient
          color="#7d33ff"
          :active="active == 4"
          @click="active = 4" >
          <i class='bx bxs-paper-plane' ></i>
        </vs-button>
        <vs-button
          square
          icon
          relief
          color="rgb(59,222,200)"
          :active="active == 5"
          @click="active = 5">
          <i class='bx bxs-purchase-tag' ></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Size

Cambia el tamaño del boton con la propiedad `size`.

<div slot="example">

  <Button-size />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo">
        <div>
          <vs-button size="xlarge">
            Xlarge
          </vs-button>
          <vs-button size="large">
            Large
          </vs-button>
          <vs-button >
            Default
          </vs-button>
          <vs-button size="small">
            Small
          </vs-button>
          <vs-button size="mini">
            Mini
          </vs-button>
        </div>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Loading <Badge text="New"/>

Agrega un estado de cargando al componente con la propiedad `loading`.

<div slot="example">

  <Button-loading />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <vs-button loading>
          <i class='bx bxs-wallet' ></i> Wallet
        </vs-button>
        <vs-button loading>
          Home
        </vs-button>
        <vs-button
          icon
          loading>
          <i class='bx bxs-like' ></i>
        </vs-button>
        <vs-button
          circle
          icon
          loading>
          <i class='bx bxs-cart' ></i>
        </vs-button>
        <vs-button
          loading
          disabled >
          Message
        </vs-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Upload <Badge text="New"/>

Agrega un estado de subiendo o enviando con la propiedad `upload`.

<div slot="example">

  <Button-upload />

</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="con-demo flex">
        <vs-button upload >
          <i class='bx bxs-wallet' ></i> Wallet
        </vs-button>
        <vs-button
          color="success"
          flat
          upload >
          Home
        </vs-button>
        <vs-button
          transparent
          color="danger"
          icon
          upload >
          <i class='bx bxs-like' ></i>
        </vs-button>
        <vs-button
          gradient
          color="#7d33ff"
          circle
          icon
          upload >
          <i class='bx bxs-cart' ></i>
        </vs-button>
        <vs-button
          relief
          color="rgb(59,222,200)"
          upload >
          Message
        </vs-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Block <Badge text="New"/>

Ajusta el ancho al total del elemento padre con la propiedad `block` haciendo que el botón tenga un `100%` del ancho posible

<div slot="example">

  <Button-block />

</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="con-demo flex">
        <div class="con-btn">
          <vs-button block >
            <i class='bx bxs-paint-roll' ></i> Edit Theme
          </vs-button>
        </div>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Animated <Badge text="New"/>

Animaciones simples de implementar

:::warning
  El tamaño del elemento se rige por el contenido del `slot:default` no agregar elementos mas grandes en el `slot:animate` porque se desbordara
:::

<div slot="example">

  <Button-animated />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <vs-button >
          Home
          <template #animate >
            <i class='bx bx-home-alt' ></i>
          </template>
        </vs-button>

        <vs-button flat color="success" animation-type="vertical" >
          Message
          <template #animate >
            <i class='bx bx-mail-send' ></i> Send
          </template>
        </vs-button>

        <vs-button border animation-type="fade" >
          Store
          <template #animate >
            <i class='bx bxs-shopping-bag' ></i>
          </template>
        </vs-button>

        <vs-button icon relief color="danger" animation-type="rotate" >
          <i class='bx bxs-like' ></i>
          <template #animate >
            <i class='bx bxs-trophy' ></i>
          </template>
        </vs-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Social <Badge text="New"/>

Puedes cambiar el color del componente al de una red social como por ejemplo `facebook` o `twitter`, esta funcionalidad se puede usar por ejemplo al crear un botón de login con el api de facebook o cualquier otra red y fácilmente obtener el color

:::tip Colores soportados

  - facebook
  - twitter
  - youtube
  - pinterest
  - linkedin
  - snapchat
  - whatsapp
  - tumblr
  - reddit
  - spotify
  - amazon
  - medium
  - vimeo
  - skype
  - dribbble
  - slack
  - yahoo
  - twitch
  - discord
  - telegram
  - googe-plus
  - messenger

:::

<div slot="example">

  <Button-social />

</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="con-demo flex">
        <div class="con-social">
          <vs-button icon color="facebook">
            <i class='bx bxl-facebook-square' ></i>
          </vs-button>
          <vs-button icon color="twitter">
            <i class='bx bxl-twitter' ></i>
          </vs-button>
          <vs-button icon color="youtube">
            <i class='bx bxl-youtube' ></i>
          </vs-button>
          <vs-button icon color="linkedin">
            <i class='bx bxl-linkedin' ></i>
          </vs-button>
          <vs-button icon color="whatsapp">
            <i class='bx bxl-whatsapp' ></i>
          </vs-button>
          <vs-button icon color="twitch">
            <i class='bx bxl-twitch' ></i>
          </vs-button>
          <vs-button icon color="medium">
            <i class='bx bxl-medium' ></i>
          </vs-button>
          <vs-button icon color="skype">
            <i class='bx bxl-skype' ></i>
          </vs-button>
          <vs-button icon color="slack">
            <i class='bx bxl-slack-old' ></i>
          </vs-button>
          <vs-button icon color="messenger">
            <i class='bx bxl-messenger' ></i>
          </vs-button>
          <vs-button icon color="tumblr">
            <i class='bx bxl-tumblr' ></i>
          </vs-button>
          <vs-button icon color="dribbble">
            <i class='bx bxl-dribbble' ></i>
          </vs-button>
          <vs-button icon color="google-plus">
            <i class='bx bxl-google-plus' ></i>
          </vs-button>
          <vs-button icon color="vimeo">
            <i class='bx bxl-vimeo' ></i>
          </vs-button>
          <vs-button icon color="pinterest">
            <i class='bx bxl-pinterest' ></i>
          </vs-button>
          <vs-button icon color="spotify">
            <i class='bx bxl-spotify' ></i>
          </vs-button>
          <vs-button icon color="discord">
            <i class='bx bxl-discord' ></i>
          </vs-button>
          <vs-button icon color="amazon">
            <i class='bx bxl-amazon' ></i>
          </vs-button>
          <vs-button icon color="reddit">
            <i class='bx bxl-reddit' ></i>
          </vs-button>
        </div>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Floating <Badge text="New"/>

Cambia el estilo del boton a flotante con la propiedad `floating`.

<div slot="example">

  <Button-floating />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <vs-button circle icon floating>
          <i class='bx bx-plus' ></i>
        </vs-button>
        <vs-button color="whatsapp" circle icon floating>
          <i class='bx bxl-whatsapp' ></i>
        </vs-button>
        <vs-button color="#ff3e4e" circle icon floating>
          <i class='bx bx-up-arrow-alt' ></i>
        </vs-button>
        <vs-button circle icon disabled >
          <i class='bx bxs-chat' ></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Group <Badge text="New"/>

Usa el componente `vs-button-group` para agrupar botones y hacer que tengan un estilo cohesivo entre ellos.

<div slot="example">

  <Button-group />

</div>

<div slot="template">

  ```html{3,16}
    <template>
      <div class="con-demo flex">
        <vs-button-group>
          <vs-button>
            One
          </vs-button>
          <vs-button>
            Two
          </vs-button>
          <vs-button>
            Three
          </vs-button>
          <vs-button>
            four
          </vs-button>
        </vs-button-group>

        <span class="divider" />

        <vs-button-group>
          <vs-button flat icon>
            <i class='bx bx-play' ></i>
          </vs-button>
          <vs-button flat icon>
            <i class='bx bx-pause' ></i>
          </vs-button>
          <vs-button flat icon>
            <i class='bx bx-fast-forward' ></i>
          </vs-button>
          <vs-button flat icon>
            <i class='bx bx-shuffle' ></i>
          </vs-button>
        </vs-button-group>

        <span class="divider" />

        <vs-button-group>
          <vs-button border>
            <i class='bx bxs-pencil' ></i> Edit
          </vs-button>
          <vs-button border icon>
            <i class='bx bx-font-color' ></i>
          </vs-button>
          <vs-button border icon>
            <i class='bx bx-align-middle' ></i>
          </vs-button>
          <vs-button border>
            <i class='bx bx-font-size' ></i> Font size
          </vs-button>
        </vs-button-group>

        <span class="divider" />

        <vs-button-group>
          <vs-button relief>
            <i class='bx bx-home-alt' ></i> Home
          </vs-button>
          <vs-button relief>
            <i class='bx bxs-phone-call' ></i> Contact
          </vs-button>
          <vs-button relief loading>
            <i class='bx bxs-cart-alt' ></i> Products
          </vs-button>
          <vs-button relief upload>
            <i class='bx bxs-envelope' ></i> Send
          </vs-button>
        </vs-button-group>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Toggle <Badge text="New"/>

Un ejemplo simple de lo que podemos lograr fácilmente con las propiedades y cambio de estado

<div slot="example">

  <Button-toggle />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <vs-button @click="handleClick" :icon="success" :upload="sending" :color="success ? 'success' : 'primary'" animation-type="vertical" >
          <span v-if="!success">
            <i class='bx bx-mail-send' ></i>
              Send
          </span>

          <i class='bx bx-check' v-else ></i>
        </vs-button>

        <vs-button :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
          <i class='bx bxl-facebook-square' ></i>
          {{ successFace ? 'Logout' : 'Facebook' }}
          <template #animate >
            <i class='bx bx-user' ></i> Login
          </template>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          sending: false,
          success: false,

          loadingFace: false,
          successFace: false
        }),
        methods:{
          handleClick() {
            this.sending = true

            setTimeout(() => {
              this.sending = false
              this.success = !this.success
            }, 2000);
          },
          handleClickFace() {
            this.loadingFace = true

            setTimeout(() => {
              this.loadingFace = false
              this.successFace = !this.successFace
            }, 2000);
          }
        }
      }
    </script>
  ```

</div>

</card>


