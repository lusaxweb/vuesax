<template lang="html">
  <div
    :class="[
      `vs-slider-${color}`,
      {'disabledx':disabled}
    ]"
    class="con-vs-slider"
    @mousewheel.prevent="mousewheelx"
    @keydown.left="keydownLeft"
    @keydown.right="keydownRight">

    <button
      ref="slider"
      :disabled="disabled"
      class="vs-slider"
      @click="clickSlider($event),actived = true">
      <span
        :style="styleLineOne"
        :class="{'hasTransition':effect}"
        class="vs-slider-line-one"></span>
      <span class="vs-slider-line-two"></span>

      <span
        :class="{'run-effect':effect}"
        :style="styleEfect"
        class="vs-slider-line-efect"></span>

      <!-- vsTicks -->
      <span
        v-for="(tick,index) in countTicks"
        v-if="ticks&&tick"
        :class="{'isEnd':index == countTicks-1}"
        :style="styleTicks(index)"
        class="vs-slider--tick">
      </span>
    </button>
    <button
      ref="circle1"
      :disabled="disabled"
      :class="{
        'hasTransition':effect,
        'isEquals':isEquals,
        'changeValue':changeValue,
        'isEndValue':value == max
      }"
      :style="styleCircle"
      class="vs-circle-slider vs-circles-slider vs-slider--circles vs-slider--circle"
      @touchstart="activeFocus($event),actived = true"
      @mousedown="activeFocus($event),actived = true">
      <span
        :style="styleText"
        class="text-circle-slider vs-slider--circle-text">
        {{ valueCircle1 }}
        <span v-if="textFixed">
         {{ textFixed }}
        </span>
        <vs-icon
          :icon-pack="iconPack"
          :icon="icon"
        ></vs-icon>
      </span>

    </button>
    <button
      v-if="Array.isArray(value)"
      ref="circle2"
      :disabled="disabled"
      :class="{
        'hasTransition':effect,
        'isEquals':isEquals,
        'changeValue':changeValue,
        'isEndValue':value == max
      }"
      :style="styleCircleTwo"
      class="vs-circle-slider-two vs-circles-slider vs-slider--circles vs-slider--circle-two"
      @touchstart="activeFocus($event),two = true,actived = true"
      @mousedown="activeFocus($event),two = true,actived = true">

      <span
        :style="styleText"
        class="text-circle-slider vs-slider--circle-text">
        {{ valueCircle2 }}
        <span v-if="textFixed">
          {{ textFixed }}
        </span>
        <i
          v-if="icon"
          translate="no"
          class="material-icons notranslate">
          {{ icon }}
        </i>
      </span>

    </button>
  </div>
</template>

<script>
import _color from "../../utils/color.js";
export default {
  name: "VsSlider",
  props: {
    value: {},
    disabled: {
      default: false,
      type: [Boolean, String]
    },
    color: {
      default: "primary",
      type: String
    },
    max: {
      default: 100,
      type: [Number, String]
    },
    min: {
      default: 0,
      type: Number
    },
    ticks: {
      default: false,
      type: Boolean
    },
    step: {
      default: 1,
      type: [Number, String]
    },
    stepDecimals: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    textFixed: {
      default: null,
      type: String
    }
  },
  data: () => ({
    leftx: 0,
    leftTwo: 0,
    effect: false,
    two: false,
    actived: false,
    changeValue: false,
    valueCircle1: 0,
    valueCircle2: 0
  }),
  computed: {
    isEquals() {
      return Array.isArray(this.value) ? this.value[0] == this.value[1] : false;
    },
    countTicks() {
      return this.max + 1;
    },
    /*
     * styles component
     */
    styleSlider() {
      return {
        background: _color.getColor(this.color, 1)
      };
    },
    styleLineOne() {
      let widthx = this.leftTwo - this.leftx;
      let leftx = this.leftx;
      if (this.leftx > this.leftTwo) {
        widthx = this.leftx - this.leftTwo;
        leftx = this.leftTwo;
      }
      return {
        width: `${widthx}%`,
        left: `${leftx}%`,
        background: _color.getColor(this.color, 1)
      };
    },
    styleCircle() {
      return {
        left: `${this.leftx}%`,
        border: `2px solid ${_color.getColor(this.color, 1)}`
      };
    },
    styleCircleTwo() {
      return {
        left: `${this.leftTwo}%`,
        border: `2px solid ${_color.getColor(this.color, 1)}`
      };
    },
    styleEfect() {
      return {
        left: `${this.leftx}%`,
        background: _color.getColor(this.color, 1)
      };
    },
    styleText() {
      return {
        background: _color.getColor(this.color, 1)
      };
    }
  },
  watch: {
    value() {
      if (!this.actived) {
        this.changePosition();
      }
      this.changeValue = true;
      setTimeout(() => {
        this.changeValue = false;
      }, 300);
      this.$emit("change", this.value);
    },
    leftx() {
      if (Array.isArray(this.value)) {
        if (this.leftx > this.leftTwo) {
          this.valueCircle1 = this.value[1];
        } else {
          this.valueCircle1 = this.value[0];
        }
      } else {
        this.valueCircle1 = this.value;
      }
    },
    leftTwo: {
      handler: function() {
        if (this.leftTwo > this.leftx) {
          this.valueCircle2 = this.value[1];
        } else {
          this.valueCircle2 = this.value[0];
        }
      },
      deep: true
    }
  },
  mounted() {
    this.changePosition();
  },

  methods: {
    mousewheelx(evt) {
      if (!Array.isArray(this.value)) {
        if (evt.wheelDelta > 0) {
          let val = parseFloat(this.value) + parseFloat(this.step);
          val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
          if (this.value >= this.max) {
            val = this.max;
          }
          this.leftx = val;
          this.$emit("input", val);
        } else {
          let val = parseFloat(this.value) - parseFloat(this.step);
          val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
          if (this.value <= this.min) {
            val = this.min;
          }
          this.leftx = val;
          this.$emit("input", val);
        }
      }
    },
    keydownLeft() {
      if (!Array.isArray(this.value)) {
        let val = parseFloat(this.value) - parseFloat(this.step);
        val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
        if (this.value == this.min) {
          val = this.min;
        }
        this.leftx = val;
        this.$emit("input", val);
      }
    },
    keydownRight() {
      if (!Array.isArray(this.value)) {
        let val = parseFloat(this.value) + parseFloat(this.step);
        val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
        if (this.value >= this.max) {
          val = this.max;
        }
        this.leftx = val;
        this.$emit("input", val);
      }
    },
    changePosition() {
      if (Array.isArray(this.value)) {
        this.leftx = ((this.value[1] - this.min) / (this.max - this.min)) * 100;
        this.leftTwo =
          ((this.value[0] - this.min) / (this.max - this.min)) * 100;
      } else {
        this.leftx = ((this.value - this.min) / (this.max - this.min)) * 100;
      }
    },
    styleTicks(index) {
      let lengthPerStep = 100 / ((this.max - this.min) / this.step);
      let steps = index / lengthPerStep;
      return {
        left: steps * lengthPerStep + "%"
      };
    },
    activeFocus() {
      window.addEventListener("mousemove", this.mouseMovex);
      window.addEventListener("mouseup", this.removeEvents);
      window.addEventListener("touchmove", this.mouseMovex);
      window.addEventListener("touchend", this.removeEvents);
    },
    mouseMovex(evt) {
      let slider = this.$refs.slider;
      let leftx;
      /*
       * change position left circle and bar
       */
      if (evt.type == "touchmove") {
        leftx =
          event.targetTouches[0].clientX - slider.getBoundingClientRect().left;
      } else {
        leftx = evt.clientX - slider.getBoundingClientRect().left;
      }

      if (Math.sign(leftx) == -1) {
        leftx = 0;
      } else if (leftx > slider.clientWidth) {
        leftx = slider.clientWidth;
      }

      this.changeLeft(leftx);
    },
    removeEvents() {
      this.two = this.actived = false;
      window.removeEventListener("mouseup", this.removeEvents);
      window.removeEventListener("mousemove", this.mouseMovex);
      window.removeEventListener("touchmove", this.mouseMovex);
      window.removeEventListener("touchend", this.removeEvents);
    },
    clickSlider(evt) {
      let slider = this.$refs.slider;
      let leftx = evt.clientX - slider.getBoundingClientRect().left;
      this.effect = true;
      setTimeout(() => {
        this.effect = false;
      }, 200);
      let percentX = Math.round((leftx / slider.clientWidth) * 100);

      if (Array.isArray(this.value)) {
        if (
          Math.abs(percentX - this.leftx) > Math.abs(percentX - this.leftTwo)
        ) {
          this.two = true;
        } else {
          this.two = false;
        }
      }

      this.changeLeft(leftx);
    },
    changeLeft(leftx) {
      let slider = this.$refs.slider;
      let percentX = (leftx / slider.clientWidth) * 100;

      const lengthPerStep = 100 / ((this.max - this.min) / this.step);
      const steps = Math.round(percentX / lengthPerStep);
      let val = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
      val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);

      if (this.ticks) {
        if (val > this.max) {
          val = this.max;
          this[this.two ? "leftTwo" : "leftx"] = 100;
        } else {
          this[this.two ? "leftTwo" : "leftx"] = steps * lengthPerStep;
        }
      } else {
        this[this.two ? "leftTwo" : "leftx"] = Math.round(
          steps * lengthPerStep
        );
      }

      if (Array.isArray(this.value)) {
        let valueNew = val;
        if (val == this.max) {
          valueNew = this.max;
        }
        let vals = this.value;
        let min =
          Math.round((this.leftTwo / 100) * (this.max / this.step)) * this.step;
        let max =
          Math.round((this.leftx / 100) * (this.max / this.step)) * this.step;
        if (this.two) {
          if (min < max) {
            this.$emit("input", [valueNew, vals[1]]);
          } else if (min > max) {
            this.$emit("input", [vals[0], valueNew]);
          } else {
            this.$emit("input", [valueNew, valueNew]);
          }
        } else {
          if (min > max) {
            this.$emit("input", [valueNew, vals[1]]);
          } else if (min < max) {
            this.$emit("input", [vals[0], valueNew]);
          } else {
            this.$emit("input", [valueNew, valueNew]);
          }
        }
      } else {
        this.$emit("input", val);
      }
    },
    toDecimal(value) {
      return parseFloat(value.toFixed(1));
    }
  }
};
</script>
