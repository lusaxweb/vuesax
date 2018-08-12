<template lang="html">
  <li
    :class="{'con-tag':vsTag,'active-item':vsActive}"
    class="vs-component vs-sidebar-item"
    @click="clickItem">
    <router-link
      v-if="to"
      :title="reduce?$slots.default[0].text:null"
      v-bind="$attrs"
      :to="to"
      v-on="$listeners">
      <span class="con-text-span">
        <i
          v-if="vsIcon"
          class="material-icons">
          {{ vsIcon }}
        </i>
        <i
          v-if="vsIconReduce"
          class="material-icons only-reduse">
          {{ vsIconReduce }}
        </i>
        <span class="textx_span">
          <slot/>
        </span>
      </span>

      <span
        v-if="vsTag"
        :title="reduce?vsTag:null"
        class="vs-tagx">{{ vsTag }}</span>
    </router-link>

    <template v-else-if="vsSlot">
      <slot/>
    </template>

    <a
      v-else
      :title="reduce?$slots.default[0].text:null"
      v-bind="$attrs"
      :href="href"
      v-on="$listeners">
      <span class="con-text-span">
        <i
          v-if="vsIcon"
          class="material-icons">
          {{ vsIcon }}
        </i>
        <i
          v-if="vsIconReduce"
          class="material-icons only-reduse">
          {{ vsIconReduce }}
        </i>
        <span class="textx_span">
          <slot/>
        </span>
      </span>
      <span
        v-if="vsTag"
        :title="reduce?vsTag:null"
        class="vs-tagx">{{ vsTag }}</span>
    </a>

  </li>
</template>

<script>
export default {
  name:'VsSidebarItem',
  props:{
    to:{},
    href:{},
    vsIcon:{
      default:null,
      type:String
    },
    vsIconReduce:{
      default:null,
      type:String
    },
    vsSlot:{
      type:Boolean,
      default:false,
    },
    vsActive:{
      default:false,
      type:Boolean
    },
    vsTag:{
      default:null,
      type:[String,Number],
    }
  },
  data:()=>({
    reduce:false
  }),
  methods:{
    clickItem(){
      this.$parent.clickItem(this.vsActive)
    }
  }
}
</script>

<style lang="stylus">




@css{
  .vs-sidebar-item:after {
    background: rgb(var(--primary));
  }
}


.only-reduse
  display: none;
.vs-sidebar-item
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:after
    content: ''
    left: 0px;
    top: 0px;
    height: 0%;
    position: absolute;
    width:4px;
    border-radius: 0px 6px 6px 0px;

    transition: all .3s ease;
    top: 50%;
    transform: translate(0,-50%);
  a
    color: rgba(0, 0, 0, 0.550);
    display: flex;
    align-items: center;
    padding: 8px;
    padding-left: 15px;
    width: calc(100% - 6px);
    margin-left: 3px;
    font-size: 0.9375em;
    transition: all .2s ease
    text-decoration: none !important;
    .con-text-span
      display: flex;
      align-items: center;

    ../:not(.active-item)&:hover
      background: rgb(255, 255, 255);
      border-radius: 10px;
      z-index: 100

    .vs-tagx
      position: relative;
      z-index: 200;
      color: rgb(255, 255, 255);
      border-radius: 8px;
      padding-top: 0px;
      padding-bottom: 0px;
      font-size: 0.625em;
      padding-left: 5px;
      padding-right: 5px;
      font-weight: normal;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1)
    i.material-icons
      margin-right: 10px;
      font-size: 1.125em;
&.con-tag
  a
    justify-content: space-between !important;
    padding-right: 5px;
&.active-item
  background: rgb(248, 248, 248);

  a
    font-weight: bold;
  &:after
    height: 100% !important

@css{
  .vs-sidebar-item:not(.active-item) a:hover {
    color: rgb(var(--primary))
  }
  .vs-tagx {
    background: rgb(var(--primary));
  }
  .active-item a {
    color: rgb(var(--primary));
  }
}
</style>
