<template>
  <div class="vs-list--item">
    <div v-if="$slots.avatar" class="vs-list--avatar">
      <slot name="avatar" />
    </div>

    <div class="list-titles">
      <!-- Editable Title -->
      <div v-if="isTitleEditing" class="vs-list--title">
        <input
          v-model="editedTitle"
          @blur="saveTitleEdit"
          @keydown.enter="saveTitleEdit"
          @keydown.esc="cancelTitleEdit"
          ref="titleEditInput"
          class="edit-input"
        />
      </div>
      <div v-else @dblclick="startTitleEditing" class="vs-list--title">
        <vs-icon v-if="icon" :icon-pack="iconPack" :icon="icon"></vs-icon>
        {{ editedTitle }}
      </div>
      <!-- Editable Subtitle -->
      <div v-if="isSubtitleEditing" class="vs-list--subtitle">
        <input
          v-model="editedSubtitle"
          @blur="saveSubtitleEdit"
          @keydown.enter="saveSubtitleEdit"
          @keydown.esc="cancelSubtitleEdit"
          ref="subtitleEditInput"
          class="edit-input"
        />
      </div>
      <div v-else @dblclick="startSubtitleEditing" class="vs-list--subtitle">
        {{ editedSubtitle }}
      </div>
    </div>
    <div class="vs-list--slot">
      <slot />
    </div>
  </div>
</template>

<script>
import VsIcon from '../vsIcon/vsIcon.vue'

export default {
  name: 'VsEditableListItem',
  components: {
    VsIcon,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    iconPack: {
      type: String,
      default: 'material-icons',
    },
  },
  data() {
    return {
      isTitleEditing: false,
      editedTitle: this.title,
      isSubtitleEditing: false,
      editedSubtitle: this.subtitle,
    }
  },
  methods: {
    // Title Editing Methods
    startTitleEditing() {
      this.isTitleEditing = true
      this.$nextTick(() => {
        this.$refs.titleEditInput.focus()
      })
    },
    saveTitleEdit() {
      if (this.editedTitle.trim() !== '') {
        this.$emit('update:title', this.editedTitle)
      }
      this.isTitleEditing = false
    },
    cancelTitleEdit() {
      this.editedTitle = this.title // Revertir al título original
      this.isTitleEditing = false
    },
    // Subtitle Editing Methods
    startSubtitleEditing() {
      this.isSubtitleEditing = true
      this.$nextTick(() => {
        this.$refs.subtitleEditInput.focus()
      })
    },
    saveSubtitleEdit() {
      if (this.editedSubtitle.trim() !== '') {
        this.$emit('update:subtitle', this.editedSubtitle)
      }
      this.isSubtitleEditing = false
    },
    cancelSubtitleEdit() {
      this.editedSubtitle = this.subtitle // Revertir al subtítulo original
      this.isSubtitleEditing = false
    },
  },
  watch: {
    // Actualizar valores editados si las props cambian desde el padre
    title(newTitle) {
      this.editedTitle = newTitle
    },
    subtitle(newSubtitle) {
      this.editedSubtitle = newSubtitle
    },
  },
}
</script>
