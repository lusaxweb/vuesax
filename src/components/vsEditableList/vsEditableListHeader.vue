<template>
  <div
    :class="[
      'vs-list--header',
      { 'with-icon': icon },
      `vs-header-list-${color}`,
    ]"
    :style="styleHeader"
    @dblclick="startEditing"
  >
    <div v-if="isEditing">
      <input
        v-model="editedText"
        @blur="saveEdit"
        @keydown.enter="saveEdit"
        @keydown.esc="cancelEdit"
        ref="editInput"
        class="edit-input"
      />
    </div>
    <div v-else>
      <div v-if="icon" class="vs-list--icon">
        <vs-icon :icon-pack="iconPack" :icon="icon"></vs-icon>
      </div>
      <div class="list-titles">
        <div class="vs-list--title">{{ editedText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import _color from "../../utils/color.js";
import VsIcon from "../vsIcon/vsIcon.vue";

export default {
  name: "VsEditableListHeader",
  components: {
    VsIcon,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "primary",
    },
    icon: {
      type: String,
      default: null,
    },
    iconPack: {
      type: String,
      default: "material-icons",
    },
  },
  data() {
    return {
      isEditing: false,
      editedText: this.title,
    };
  },
  computed: {
    styleHeader() {
      return {
        color: _color.getColor(this.color),
      };
    },
  },
  methods: {
    startEditing() {
      this.isEditing = true;
      this.editedText = this.title;
      this.$nextTick(() => {
        this.$refs.editInput.focus();
      });
    },
    saveEdit() {
      if (this.editedText.trim() !== "") {
        this.$emit("update:title", this.editedText); // Emitir evento para actualizar el título del encabezado
      }
      this.isEditing = false;
    },
    cancelEdit() {
      this.editedText = this.title; // Revertir al título original
      this.isEditing = false;
    },
  },
  watch: {
    // Actualizar el texto editado si la prop cambia
    title(newTitle) {
      this.editedText = newTitle;
    },
  },
};
</script>
