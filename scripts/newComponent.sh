NAME="$1"

MAYUS="$1"
MAYUS=($MAYUS)
MAYUS="${MAYUS[@]^}"

if [ -e "src/components/vs$MAYUS" ]
then
    echo "This component already exists in vuesax or the name is the same"
else

# crear documento del componente nuevo

echo '---
API:
 - name: myProp
   type: String
   parameters: null
   description: My Description prop.
   default: null
---

# '$MAYUS' <!--#new-->

<box header>

  Text and description

</box>

<box>

## Default

<vuecode md>
<div slot="demo">
  <Demos-'$MAYUS'-Default />
</div>
<div slot="code">

```html

```

</div>
</vuecode>
</box>' > docs/components/$1.md

# dir componentes

cd src/components

# crear la carpeta del nuevo componente

mkdir vs$MAYUS

cd -

# crear archivo .vue del nuevo componente

echo '<template lang="html">
  <div>
    Component vs'$MAYUS'
  </div>
</template>

<script>
export default {
  name: "vs-'${NAME,,}'"
}
</script>

<style lang="css">
</style>' > src/components/vs$MAYUS/vs$MAYUS.vue

# editar config.js para agregar el componente nuevo al menu

echo "import vsComponent from './vs$MAYUS'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
}" > src/components/vs$MAYUS/index.js

SRC="\'\/components\/$1\',\n          \/\*New Component\*\/"

sed -e "s/\/\*New Component\*\//$SRC/" docs/.vuepress/config.js > script_tmp
mv script_tmp docs/.vuepress/config.js

# agregar ejemplo para documentos del nuevo componente

cd docs/.vuepress/components/Demos

mkdir $MAYUS

cd -

echo '<template lang="html">
  <div>
    <vs-'$1' />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>' > docs/.vuepress/components/Demos/$MAYUS/Default.vue


# agregar import

IMPORT="import vs$MAYUS from '.\/vs$MAYUS'\n\/\/New Component import"

sed -e "s/\/\/New Component import/$IMPORT/" src/components/index.js > script_tmp
mv script_tmp src/components/index.js

# agregar Export
EXPORT="vs$MAYUS,\n  \/\/New Component export"

sed -e "s/\/\/New Component export/$EXPORT/" src/components/index.js > script_tmp
mv script_tmp src/components/index.js

fi
