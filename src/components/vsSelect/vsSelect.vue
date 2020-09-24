<template lang="html">
  <div
    :class="{
      'autocompletex':autocomplete,
      'activeOptions':active,
      'input-select-validate-success':success,
      'input-select-validate-danger':danger,
      'input-select-validate-warning':warning}"
    :style="getWidth"
    class="con-select">
    <label
      v-if="label"
      ref="inputSelectLabel"
      class="vs-select--label"
      for="">{{ label }}</label>
    <div class="input-select-con">
      <!-- v-model="valueFilter" -->
      <input
        ref="inputselect"
        v-bind="$attrs"
        :readonly="!autocomplete"
        class="input-select vs-select--input"
        type="text"
        @click.stop
        @keydown.esc.stop.prevent="closeOptions"
        v-on="listeners">

      <button
        :class="{'activeBtnClear': activeBtnClear}"
        class="icon-select-clear vs-select--icon-clear"
        @click="clearValue">
        <i class="material-icons">
          close
        </i>
      </button>

      <vs-icon
        v-if="!activeBtnClear"
        :icon-pack="iconPack"
        :icon="icon"
        class="icon-select vs-select--icon"
        @click.once
      ></vs-icon>

      <transition name="fadeselect">
        <div
          v-show="active"
          ref="vsSelectOptions"
          :style="cords"
          :class="[`vs-select-${color}`,{'scrollx':scrollx}]"
          class="vs-select--options">
          <ul ref="ulx">
            <slot/>
          </ul>
          <ul v-show="clear">
            <li @click="filterItems(''),changeValue()" >
              {{ noData }}
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <transition-group
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="success"
        key="success"
        class="con-text-validation">
        <span class="span-text-validation span-text-validation-success">
          {{
            successText
          }}
        </span>
      </div>
      <div
        v-else-if="danger"
        key="danger"
        class="con-text-validation span-text-validation-danger">
        <span class="span-text-validation">
          {{
            dangerText
          }}
        </span>
      </div>
      <div
        v-else-if="warning"
        key="warning"
        class="con-text-validation span-text-validation-warning">
        <span class="span-text-validation">
          {{
            warningText
          }}
        </span>
      </div>
      <div
        v-if="descriptionText"
        key="description"
        class="con-text-validation span-text-validation">
        <span class="span-text-validation">
          {{
            descriptionText
          }}
        </span>
      </div>
    </transition-group>
  </div>
</template>

<script>
import utils from "../../utils";
export default {
  name: "VsSelect",
  props: {
    value: {},
    noData: {
      default: "data no available",
      type: String
    },
    maxSelected: {
      default: null,
      type: [Number, String]
    },
    autocomplete: {
      default: false,
      type: Boolean
    },
    color: {
      default: "primary",
      type: String
    },
    multiple: {
      default: false,
      type: Boolean
    },
    label: {
      default: null,
      type: [String]
    },
    success: {
      default: false,
      type: Boolean
    },
    danger: {
      default: false,
      type: Boolean
    },
    warning: {
      default: false,
      type: Boolean
    },
    successText: {
      default: null,
      type: String
    },
    dangerText: {
      default: null,
      type: String
    },
    warningText: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    icon: {
      default: "keyboard_arrow_down",
      type: String
    },
    iconClear: {
      default: "close",
      type: String
    },
    width: {
      default: null,
      type: String
    }
  },
  data: () => ({
    valueFilter: "",
    active: false,
    valuex: "",
    clear: false,
    scrollx: false,
    cords: {},
    filterx: false
  }),
  computed: {
    activeBtnClear() {
      return this.autocomplete && this.filterx;
    },
    getWidth() {
      return this.width ? `width:${this.width};` : null;
    },
    parent() {
      return this;
    },
    listeners() {
      return {
        ...this.$listeners,
        blur: event => {
          if (
            this.autocomplete && event.relatedTarget
              ? !event.relatedTarget.closest(".vs-select--options")
              : false
          ) {
            this.closeOptions();
          }
          this.$emit("blur", event);
        },
        focus: event => {
          this.$emit("focus", event);
          //document.removeEventListener('click',this.clickBlur)
          this.focus(event);
        },
        input: event => {
          if (this.autocomplete) {
            this.$emit("input-change", event);
          }
        },
        keyup: event => {
          if (event.key == "ArrowDown" || event.key == "ArrowUp") {
            event.preventDefault();
            let childrens = this.$children.filter(item => {
              return item.visible;
            });
            childrens[0].$el.querySelector(".vs-select--item").focus();
          } else {
            if (this.autocomplete) {
              this.filterItems(event.target.value);
            }
          }

          this.$children.map(item => {
            item.valueInputx = this.$refs.inputselect.value;
          });
        }
      };
    }
  },
  watch: {
    value(event) {
      this.valuex = this.value;
      this.$emit("change", event);
    },
    active() {
      this.$nextTick(() => {
        if (this.active) {
          utils.insertBody(this.$refs.vsSelectOptions);
          setTimeout(() => {
            this.$children.forEach(item => {
              if (item.focusValue) {
                item.focusValue();
              }
            });
            if (this.$refs.ulx.scrollHeight >= 260) this.scrollx = true;
          }, 100);
        } else {
          let [parent] = document.getElementsByTagName("body");
          parent.removeChild(this.$refs.vsSelectOptions);
        }
      });
    }
  },
  mounted() {
    // this.$refs.inputselect.value = this.value
    this.changeValue();
    if (this.active) {
      utils.insertBody(this.$refs.vsSelectOptions);
    }
  },
  beforeDestroy() {
    let [parent] = document.getElementsByTagName("body");

    if (
      parent &&
      this.$refs.vsSelectOptions &&
      this.$refs.vsSelectOptions.parentNode === parent
    ) {
      parent.removeChild(this.$refs.vsSelectOptions);
    }
  },
  updated() {
    if (!this.active) {
      this.changeValue();
    }
  },
  methods: {
    clearValue() {
      this.focus();
      this.filterItems("");
      this.changeValue();
    },
    addMultiple(value) {
      let currentValues = this.value ? this.value : [];
      if (currentValues.includes(value)) {
        currentValues.splice(currentValues.indexOf(value), 1);
        this.$emit("input", currentValues);
        this.changeValue();
        if (this.autocomplete) {
          this.$refs.inputselect.focus();
        }
      } else {
        if (this.autocomplete) {
          currentValues.push(value);
          this.$emit("input", currentValues);
          this.filterItems("");
          this.changeValue();
          // this.$refs.inputselect.value += ','
          this.$refs.inputselect.focus();
        } else {
          currentValues.push(value);
          this.$emit("input", currentValues);
          this.changeValue();
        }
      }
    },
    filterItems(value) {
      if (value) {
        this.filterx = true;
      } else {
        this.filterx = false;
      }
      let items = this.$children;

      items.forEach(item => {
        if (item.$children.length > 0) {
          items = [...items, ...item.$children];
        }
      });

      items.map(item => {
        if (!("text" in item)) return;

        let text = item.text;

        if (this.multiple) {
          let valuesx = value.split(",");
          valuesx.forEach(value_multi => {
            if (text.toUpperCase().indexOf(value_multi.toUpperCase()) == -1) {
              item.visible = false;
            } else {
              item.visible = true;
            }
          });
        } else {
          if (text.toUpperCase().indexOf(value.toUpperCase()) == -1) {
            item.visible = false;
          } else {
            item.visible = true;
          }
        }
      });

      let lengthx = items.filter(item => {
        return item.visible;
      });

      if (lengthx.length == 0) {
        this.clear = true;
      } else {
        this.clear = false;
      }

      this.$nextTick(() => {
        this.cords = this.changePosition();
      });
    },
    changeValue() {
      this.filterx = false;
      if (this.multiple) {
        let values = this.value ? this.value : [];
        let options = this.$children;

        options.forEach(item => {
          if (item.$children.length > 0) {
            options = [...options, ...item.$children];
          }
        });

        let optionsValues = [];
        values.forEach(item => {
          options.forEach(item_option => {
            if (item_option.value == item) {
              let text = item_option.text;
              text = text.replace("check_circle", "");
              optionsValues.push(text.trim());
            }
          });
        });
        this.$refs.inputselect.value = optionsValues.toString();
      } else {
        if (this.$refs.inputselect) {
          this.$refs.inputselect.value = this.valuex;
        }
      }
    },
    focus() {
      this.active = true;
      this.setLabelClass(this.$refs.inputSelectLabel, true);
      let inputx = this.$refs.inputselect;
      setTimeout(() => {
        document.addEventListener("click", this.clickBlur);
      }, 100);
      if (this.autocomplete && this.multiple) {
        setTimeout(() => {
          if (inputx.value) {
            this.$refs.inputselect.value = inputx.value += ",";
          }
          inputx.selectionStart = inputx.selectionEnd = 10000;
        }, 10);
      } else if (this.autocomplete && !this.multiple) {
        this.$refs.inputselect.select();
      }

      if (!this.autocomplete) {
        if (
          this.multiple ? this.value.length == 0 : !this.value || this.multiple
        ) {
          setTimeout(() => {
            const el = this.$children[0].$el.querySelector(".vs-select--item");
            if (el) el.focus();
          }, 50);
        }
      }
      this.$nextTick(() => {
        this.cords = this.changePosition();
      });
    },
    clickBlur(event) {
      let closestx = event.target.closest(".vs-select--options");

      if (!closestx) {
        this.closeOptions();
        if (this.autocomplete) {
          this.filterItems("");
        }
        this.changeValue();
      }
    },
    closeOptions() {
      // this.$refs.inputselect.blur()
      this.active = false;
      this.setLabelClass(this.$refs.inputSelectLabel, false);
      document.removeEventListener("click", this.clickBlur);
    },
    changePosition() {
      let elx = this.$refs.inputselect;
      let content = this.$refs.vsSelectOptions;
      let conditional = this.autocomplete;
      let topx = 0;
      let leftx = 0;
      let widthx = 0;
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      if (
        elx.getBoundingClientRect().top + content.scrollHeight + 20 >=
        window.innerHeight
      ) {
        topx =
          elx.getBoundingClientRect().top +
          elx.clientHeight +
          scrollTopx -
          content.scrollHeight;
        if (conditional) {
          topx = topx - elx.clientHeight - 5;
        }
      } else {
        topx = conditional
          ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5
          : elx.getBoundingClientRect().top + scrollTopx;
      }

      leftx = elx.getBoundingClientRect().left;
      widthx = elx.offsetWidth;

      let cords = {
        left: `${leftx}px`,
        top: `${topx}px`,
        width: `${widthx}px`
      };

      return cords;
    },
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el, done) {
      let h = el.scrollHeight;
      el.style.height = h + "px";
      done();
    },
    leave: function(el) {
      el.style.height = 0 + "px";
    },
    setLabelClass: function(label, focusing) {
      if (!label) {
        return;
      }

      if (focusing) {
        label.classList.add("input-select-label-" + this.color + "--active");
        return;
      }

      label.classList.remove("input-select-label-" + this.color + "--active");
    }
  }
};
</script>
