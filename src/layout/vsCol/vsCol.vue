<template lang="html">
  <div
    :class="[
      'vs-xs-'+vsXs,
      'vs-sm-'+vsSm,
      'vs-lg-'+vsLg,
    ]"

    :style="{
      'order':vsOrder,
      'justify-content':vsJustify,
      'display':vsType,
      'align-items':vsAlign,
      'margin-left':vsOffset*100/12+'%',
      'width':vsW*100/12+'%'}"
    class="vs-col">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'VsCol',
    props: {
      vsW: {
        type: [Number, String],
        default: 12,
      },
      vsXs: {
        type: [Number, String],
        default: ''
      },
      vsSm: {
        type: [Number, String],
        default: ''
      },
      vsLg: {
        type: [Number, String],
        default: ''
      },
      vsOffset: {
        type: [Number, String],
        default: 0
      },
      vsType: {
        type: String,
        default: null,
      },
      vsJustify: {
        type: String,
        default: null,
      },
      vsAlign: {
        type: String,
        default: null,
      },
      vsOrder: {
        default: null,
        type: [String, Number]
      }
    }
  }
</script>

<style lang="css">
  .vs-col {
    float: left;
  }

  .vs-lg-12 {
    width: 100% !important;
  }

  .vs-lg-11 {
    width: 91.66666666666667% !important;
  }

  .vs-lg-10 {
    width: 83.33333333333333% !important;
  }

  .vs-lg-9 {
    width: 75% !important;
  }

  .vs-lg-8 {
    width: 66.66666666666667% !important;
  }

  .vs-lg-7 {
    width: 58.33333333333333% !important;
  }

  .vs-lg-6 {
    width: 50% !important;
  }

  .vs-lg-5 {
    width: 41.66666666666667% !important;
  }

  .vs-lg-4 {
    width: 33.33333333333333% !important;
  }

  .vs-lg-3 {
    width: 25% !important;
  }

  .vs-lg-2 {
    width: 16.66666666666667% !important;
  }

  .vs-lg-1 {
    width: 8.333333333333333% !important;
  }

  .vs-lg-0 {
    display: none !important;
  }

  @media only screen and (max-width: 900px) {
    .vs-sm-12 {
      width: 100% !important;
    }

    .vs-sm-11 {
      width: 91.66666666666667% !important;
    }

    .vs-sm-10 {
      width: 83.33333333333333% !important;
    }

    .vs-sm-9 {
      width: 75% !important;
    }

    .vs-sm-8 {
      width: 66.66666666666667% !important;
    }

    .vs-sm-7 {
      width: 58.33333333333333% !important;
    }

    .vs-sm-6 {
      width: 50% !important;
    }

    .vs-sm-5 {
      width: 41.66666666666667% !important;
    }

    .vs-sm-4 {
      width: 33.33333333333333% !important;
    }

    .vs-sm-3 {
      width: 25% !important;
    }

    .vs-sm-2 {
      width: 16.66666666666667% !important;
    }

    .vs-sm-1 {
      width: 8.333333333333333% !important;
    }

    .vs-sm-0 {
      display: none !important;
    }
  }

  @media only screen and (max-width: 600px) {
    .vs-xs-12 {
      width: 100% !important;
    }

    .vs-xs-11 {
      width: 91.66666666666667% !important;
    }

    .vs-xs-10 {
      width: 83.33333333333333% !important;
    }

    .vs-xs-9 {
      width: 75% !important;
    }

    .vs-xs-8 {
      width: 66.66666666666667% !important;
    }

    .vs-xs-7 {
      width: 58.33333333333333% !important;
    }

    .vs-xs-6 {
      width: 50% !important;
    }

    .vs-xs-5 {
      width: 41.66666666666667% !important;
    }

    .vs-xs-4 {
      width: 33.33333333333333% !important;
    }

    .vs-xs-3 {
      width: 25% !important;
    }

    .vs-xs-2 {
      width: 16.66666666666667% !important;
    }

    .vs-xs-1 {
      width: 8.333333333333333% !important;
    }

    .vs-xs-0 {
      display: none !important;
    }
  }


</style>
