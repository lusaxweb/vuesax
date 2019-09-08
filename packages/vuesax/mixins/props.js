import { setColor } from '../vsFunctions'

// const Props = {
//   size: new Set(['x-large', 'large', 'small', 'mini'])
// }


export default {
  props: {
    color: {
      default: null,
      type: String
    },
    type: {
      default: null,
      type: String
    },
    size: {
      default: null,
      type: [String, Number],
    },
    icon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  watch:{
    color() {
      if(this.color) {
        setColor('color', this.color, this.$refs.component)
      }
    }
  },

  mounted () {
    if(this.color) {
      setColor('color', this.color, this.$refs.component)
    }
  },
}
