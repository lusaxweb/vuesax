<template>
  <li class="vs-nav-item">
    <div class="vs-nav-item-slot">
      <slot></slot>
    </div>
    <ul class="vs-nav-submenu">
      <slot name="submenu"></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name:'VsNavbarGroup',
}
</script>
