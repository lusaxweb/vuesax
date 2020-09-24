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

