---
PROPS:
 # cSpell:ignore vuesax, autoset, codepen, whatsapp, linkedin, behance, dribbble
  - name: v-model
    type: Boolean
    values: true, false
    description: Determina si el alert se encuentra visible y activo para el usuario.
    default: false
    link: null
    code: >
            <vs-alert v-model="activeAvatar">
              <template v-slot:header>
                Lorem ipsum dolor sit amet
              </template>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </vs-alert>
    usage: '#example-of-use'
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
  - name: content-hidden
    type: Boolean
    values: true, false
    description: Determina el contenido del alert se encuentra oculto hasta que el usuario hace click en el.
    default: false
    link: null
    code: >
            <vs-alert content-hidden >
              <template v-slot:header>
                Lorem ipsum dolor sit amet
              </template>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </vs-alert>
    usage: '#content-hidden'
  - name: closable
    type: Boolean
    values: true, false
    description: Determina si el componente puede cerrarse por el usuario.
    default: false
    link: null
    code: >
            <vs-alert closable >
              <template v-slot:header>
                Lorem ipsum dolor sit amet
              </template>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </vs-alert>
    usage: '#closable'

SLOTS:
  - name: icon
    type: slot
    values: null
    description: Slot un icono dentro del alert.
    default: null
    link: null
    code: >
          <vs-alert color="warning">
            <template v-slot:icon>
              <i class='bx bx-error' ></i>
            </template>

            <template v-slot:header>
              Lorem ipsum dolor sit amet
            </template>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </vs-alert>
    usage: '#icon'
  - name: header
    type: slot
    values: null
    description: Slot para agregar un header en el avatar, normalmente se usa para un title.
    default: null
    link: null
    code: >
          <vs-alert color="warning">
            <template v-slot:header>
              Lorem ipsum dolor sit amet
            </template>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </vs-alert>
    usage: '#default'
  - name: close
    type: slot
    values: null
    description: Slot para cambiar el icono al estar activa la propiedad <code>closable</code>.
    default: null
    link: null
    code: >
          <vs-alert closable v-model="active">
            <template v-slot:close>
              <i class='bx bxs-trash-alt' ></i>
            </template>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </vs-alert>
    usage: '#closable'
  - name: hidden-icon
    type: slot
    values: null
    description: Slot para cambiar el icon cuando el content esta oculto con la propiedad <code>content-hidden</code>.
    default: null
    link: null
    code: >
          <vs-alert color="dark" content-hidden >
            <template v-slot:icon>
              <i class='bx bx-repost' ></i>
            </template>

            <template v-slot:header>
              Change icon for slot
            </template>

            <template v-slot:hidden-icon>
              <i class='bx bx-plus' ></i>
            </template>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
          </vs-alert>
    usage: '#content-hidden'
  - name: footer
    type: slot
    values: null
    description: Slot para agregar un footer al alert.
    default: null
    link: null
    code: >
          <vs-alert class="alert-danger" color="danger">
            <template v-slot:icon>
              <i class='bx bx-user-x' ></i>
            </template>

            <template v-slot:header>
              Delete user
            </template>

            You are sure to permanently <strong>delete</strong> this user, this
            change is irreversible

            <template v-slot:footer>

              <button>Accept</button>

            </template>
          </vs-alert>
    usage: '#footer'
  - name: header2, content2, footer2
    type: slot
    values: null
    description: Slots iguales a los principales pero se usan para agregar un segundo mensaje al usuario.
    default: null
    link: null
    code: >
          <vs-alert class="alert-warning" color="warning">
            <template v-slot:icon>
              <i class='bx bx-error-circle' ></i>
            </template>

            <template v-slot:header>
              1) Invalid username
            </template>

            The username is already busy, please enter another name

            <template v-slot:header2>
              2) Unsafe Password
            </template>

            <template v-slot:content2>
              The password is very insecure, to ensure a secure password you can add special characters
              and capital letters
            </template>
          </vs-alert>
    usage: '#two-contents'
---

# Alert

<card>

## Default

:::warning Documentación de vuesax 4.0+

Estos documentos hacen referencia a la ultima version de vuesax (4.0+), para ver los documentos de las versiones anteriores puedes hacerlo aquí 👉 [Vuesax 3.x](https://lusaxweb.github.io/vuesax/)

:::

Agrega un alert para notificar o informar al usuario

<div slot="example">

<Alert-default />

</div>

<div slot="template">

  ```html
    <template>
      <div>
        <vs-alert>
          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </vs-alert>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Color

<Color />

<div slot="example">

<Alert-color />

</div>

<div slot="template">

  ```html
    <template>
      <div>
        <vs-alert>
          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </vs-alert>

        <vs-alert color="success">
          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </vs-alert>

        <vs-alert color="danger">
          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </vs-alert>

        <vs-alert color="warning">
          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </vs-alert>

        <vs-alert color="dark">
          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </vs-alert>

        <vs-alert color="#0D00C4">
          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </vs-alert>
      </div>
    </template>
  ```

</div>

</card>


<card>

## Closable

Puedes agregar la funcionalidad de cerrar el alert con esta propiedad, agrega un icon (`svg`) automáticamente y se puede cambiar con el `v-slot:close`

<div slot="example">

<Alert-closable />

</div>

<div slot="template">

  ```html
    <template>
      <div>
        <button @click="active = !active" >
          {{ active ? 'Close' : 'Open' }} Alert
        </button>
        <vs-alert closable v-model="active">
          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </vs-alert>
      </div>
    </template>
  ```

</div>

<div slot="script">
  ```js
    <script>
      export default {
        data:()=>({
          active: true
        })
      }
    </script>
  ```
</div>

</card>

<card>

## Icon

<Icons />

<div slot="example">

<Alert-icon />

</div>

<div slot="template">

  ```html
    <template>
      <div>
        <vs-alert color="warning">
          <template v-slot:icon>
            <i class='bx bxs-error' ></i>
          </template>

          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </vs-alert>

        <vs-alert color="success">
          <template v-slot:icon>
            <i class='bx bx-gift' ></i>
          </template>

          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </vs-alert>

        <vs-alert color="rgb(250,20,100)">
          <template v-slot:icon>
            <i class='bx bxs-coffee' ></i>
          </template>

          <template v-slot:header>
            Lorem ipsum dolor sit amet
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </vs-alert>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Footer <Badge text="New"/>

Agrega un footer al alert para agregar alguna acción o funcionalidad nueva

<div slot="example">

<Alert-footer />

</div>

<div slot="template">

  ```html
    <template>
      <div>
        <vs-alert class="alert-danger" color="danger">
          <template v-slot:icon>
            <i class='bx bx-user-x' ></i>
          </template>

          <template v-slot:header>
            Delete user
          </template>

          You are sure to permanently <strong>delete</strong> this user, this change is irreversible

          <template v-slot:footer>

            <button>Accept</button>

          </template>
        </vs-alert>

        <vs-alert class="alert-success" color="success">
          <template v-slot:icon>
            <i class='bx bx-save' ></i>
          </template>

          <template v-slot:header>
            Save changes
          </template>

          Please keep the changes to continue

          <template v-slot:footer>

            <button>Cancel</button>
            <button>Save</button>

          </template>
        </vs-alert>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Two Contents <Badge text="New"/>

Puedes agregar dos contenidos para informar mejor al usuario con el alert

<div slot="example">

<Alert-two />

</div>

<div slot="template">

  ```html
    <template>
      <div>
        <vs-alert class="alert-warning" color="warning">
          <template v-slot:icon>
            <i class='bx bx-error-circle' ></i>
          </template>

          <template v-slot:header>
            1) Invalid username
          </template>

          The username is already busy, please enter another name

          <template v-slot:header2>
            2) Unsafe Password
          </template>

          <template v-slot:content2>
            The password is very insecure, to ensure a secure password you can add special characters and capital letters
          </template>
        </vs-alert>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Content hidden <Badge text="New"/>

Oculta el contenido hasta que el usuario necesite verlo

:::tip
  Para poder ocultar el contenido se necesita o un `slot:header` o un `slot:icon` para que el usuario pueda expandir el contenido haciendo click
:::

<div slot="example">

<Alert-hidden />

</div>

<div slot="template">

  ```html
    <template>
      <div>
        <vs-alert content-hidden >
          <template v-slot:header>
            Click on me for more information
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </vs-alert>

        <vs-alert
          content-hidden
          class="alert-warning" color="warning">
          <template v-slot:icon>
            <i class='bx bx-error-circle' ></i>
          </template>

          <template v-slot:header>
            1) Invalid username
          </template>

          The username is already busy, please enter another name

          <template v-slot:header2>
            2) Unsafe Password
          </template>

          <template v-slot:content2>
            The password is very insecure, to ensure a secure password you can add special characters and capital letters
          </template>
        </vs-alert>

        <vs-alert color="dark" content-hidden >
          <template v-slot:icon>
            <i class='bx bx-repost' ></i>
          </template>

          <template v-slot:header>
            Change icon for slot
          </template>

          <template v-slot:hidden-icon>
            <i class='bx bx-plus' ></i>
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </vs-alert>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Example of use

Un ejemplo simple de **login** y muestra de alerts cuando el valor es invalido.

<div slot="example">

<Alert-example />

</div>

<div slot="template">

  ```html
    <template>
      <div class="con-demo flex">
        <div class="content-inputs">
          <input placeholder="Correo" v-model="mail" type="text">

          <vs-alert color="danger" v-model="validMail">
            <template v-slot:icon>
              <i class='bx bxs-error' ></i>
            </template>
            <template v-slot:header>
              Invalid
            </template>
              The data you entered is not valid for an email

            <template v-slot:footer>
              <button
                @click="mail = ''" >
                Clear Input
              </button>
            </template>
          </vs-alert>

          <input placeholder="Password" v-model="pass" type="password">

          <vs-alert content-hidden color="danger" v-model="validPass">
            <template v-slot:icon>
              <i class='bx bxs-error' ></i>
            </template>
            <template v-slot:header>
              The password is invalid
            </template>
              The password you entered is insecure please consider

              <ul>
                <li>
                  Passwords must be:
                </li>

                <ul>
                  <li>
                    At least 8 characters long, max length anything
                  </li>
                  <li>
                    Include at least 1 lowercase letter
                  </li>
                  <li>
                    1 capital letter
                  </li>
                  <li>
                    1 number
                  </li>
                  <li>
                    1 special character => <code>!@#$%^&*</code>
                  </li>
                </ul>
              </ul>
          </vs-alert>
        </div>
      </div>
    </template>
  ```

</div>

<div slot="script">
  ```js
    <script>
      export default {
        data:() => ({
          pass: '',
          mail: '',
          validPass: false,
          validMail: false,
        }),
        watch: {
          mail() {
            let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            this.validMail = !(re.test(this.mail)) && !!this.mail
          },
          pass() {
            this.validPass = !(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(this.pass)) && !!this.pass
          },
        },
      }
    </script>
  ```
</div>

</card>



