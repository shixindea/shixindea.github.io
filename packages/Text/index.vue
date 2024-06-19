<template>
  <div class="g-text" ref="textRef">
    <!-- <slot></slot> -->
  </div>
</template>
<script>
import { h, useSlots, ref, computed } from 'vue'
import Message from '/packages/message/index.js'
import { theColors, theSizes } from './conf'

export default {
  name: 'gText',
  props: {
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: ''
    },
    underline: {
      type: Boolean,
      default: false
    },
    delete: {
      type: Boolean,
      default: false
    },
    strong: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    cursor: {
      type: Boolean,
      default: false
    },
    noSelect: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    },
    copyable: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const theSlot = ref([])
    const theClickCopyFlag = ref(true)
    const $slot = useSlots()
    const styles = computed(() => {
      return {
        'font-weight': props.strong ? 700 : '',
        color: props.color != '' ? props.color : props.link ? '#0e80eb' : props.disabled ? theColors['gray'] : theColors[props.type],
        'text-decoration': props.delete ? 'line-through' : props.underline ? 'underline' : '',
        cursor: props.cursor ? 'pointer' : props.disabled ? 'not-allowed' : '',
        'user-select': props.disabled ? 'none' : '',
        'caret-color': props.cursor || props.noSelect ? 'transparent' : '',
        'font-size': theSizes[props.size],
        'font-family': props.number ? 'DIN-Medium' : '',
        ...props.style
      }
    })

    if ($slot['default'] == undefined) {
      theSlot.value = []
    } else if (props.copyable) {
      const baseSlot = [
        h(
          'span',
          {
            className: `g-text`,
            style: styles.value
          },
          $slot.default()
        )
      ]
      const copySlot = [
        h(
          'span',
          {
            className: `m-icon-copy`,
            style: {
              color: 'red',
              cursor: 'pointer',
              'user-select': 'none',
              'padding-left': '5px'
            },

            onClick: () => {
              navigator.clipboard.writeText($slot.default()[0].children).then(() => {
                theSlot.value = [h('m-space', {}, [...baseSlot, ...successSlot])]
                setTimeout(() => {
                  theSlot.value = [h('m-space', {}, [...baseSlot, ...copySlot])]
                }, 3000)
              })
            }
          },
          {}
        )
      ]
      const successSlot = [
        h(
          'span',
          {
            className: `m-icon-select`,
            style: {
              color: 'red',
              cursor: 'pointer',
              'padding-left': '5px'
            }
          },
          {}
        )
      ]

      theSlot.value = [h('m-space', {}, [...baseSlot, ...copySlot])]
    } else {
      theSlot.value = [
        h(
          'span',
          {
            className: `g-text`,
            style: styles.value
          },
          $slot.default()
        )
      ]
    }

    return () => theSlot.value
  }
}
</script>
