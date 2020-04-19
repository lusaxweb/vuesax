<template lang="html">
  <div class="vs-list--item">
    <div
      v-if="$slots.avatar"
      class="vs-list--avatar"
    >
      <slot name="avatar"/>
    </div>
    <div
      v-if="icon"
      class="vs-list--icon">
      <vs-icon
        :icon-pack="iconPack"
        :icon="icon"></vs-icon>
    </div>
    <div class="list-titles">
      <div
        v-if="title"
        class="vs-list--title">{{ title }}</div>
      <slot
        v-else
        name="title"
      />
      <div
        v-if="subtitle"
        class="vs-list--subtitle">{{ subtitle }}</div>
      <slot
        v-else
        name="subtitle"/>
    </div>
    <div class="vs-list--slot">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name:'VsListItem',
  props: {
    vsAvatar:{
      type:[Boolean,String],
      default:false,
    },
    title:{
      type:String,
      default:null,
    },
    subtitle:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null,
    },
    iconPack:{
      type:String,
      default:'material-icons',
    },
  }
}
</script>
