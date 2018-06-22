<template lang="html">
  <div id="parentx">
    <vs-button @click="active=!active,reducex=false" vs-type="filled">Open Sidebar Reduce and expand</vs-button>
    <vs-button @click="active=!active,reducex=true" vs-type="filled">Open Sidebar Only Reduce</vs-button>
    <vs-sidebar :vs-reduce="reducex" :vs-reduce-expand="!reducex" :vs-active.sync="active">

      <vs-sidebar-item @click="actives=1" :vs-active="actives==1" vs-icon="question_answer">
         Dashboard
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=2" :vs-active="actives==2" vs-icon="gavel">
         History
      </vs-sidebar-item>

      <vs-sidebar-group vs-icon-reduce="phone_iphone" vs-label="Phone">
        <vs-sidebar-item @click="actives=3" :vs-active="actives==3" vs-icon="phonelink_erase">
           Link
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=4" :vs-active="actives==4" vs-icon="phonelink_lock">
           Lock
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=5" :vs-active="actives==5" vs-icon="phonelink_ring">
           Ring
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=6" :vs-active="actives==6" vs-icon="phonelink_setup">
           Setup
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-group vs-open vs-icon="image" vs-label="Image">
        <vs-sidebar-item @click="actives=7" :vs-active="actives==7" vs-icon="camera_roll">
           Camera Roll
        </vs-sidebar-item>

        <vs-sidebar-group vs-icon="filter" vs-label="Filter">
          <vs-sidebar-item @click="actives=8" :vs-active="actives==8" vs-icon="filter_b_and_w">
            B and W
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=9" :vs-active="actives==9" vs-icon="filter_center_focus">
            Center Focus
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=10" :vs-active="actives==10" vs-icon="filter_drama">
            Drama
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=11" :vs-active="actives==11" vs-icon="filter_frames">
            Frames
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=12" :vs-active="actives==12" vs-icon="filter_hdr">
            Hdr
          </vs-sidebar-item>
        </vs-sidebar-group>

        <vs-sidebar-item @click="actives=13" :vs-active="actives==13" vs-icon="color_lens">
           Color
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=14" :vs-active="actives==14" vs-icon="camera_alt">
           Camera
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-item @click="actives=15" :vs-active="actives==15" vs-icon="verified_user">
         Configurations
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=16" :vs-active="actives==16" vs-icon="account_box">
         Perfile
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=17" :vs-active="actives==17" vs-icon="card_giftcard">
         card
      </vs-sidebar-item>



    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data:()=>({
    active:false,
    actives:2,
    reducex:false
  })
}
</script>

<style lang="stylus">
.con-example-sidebar
  height: 500px;
</style>
