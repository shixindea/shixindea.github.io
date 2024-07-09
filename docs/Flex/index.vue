<template>
  <div class="g-flex" ref="gFlexRef">
    <!-- <slot></slot> -->
  </div>
</template>
<script>
import { h, useSlots, ref, computed } from 'vue'
export default {
  name: 'gFlex',
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    column: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: false
    },
    blockable: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'center'
    },
    just: {
      type: String,
      default: 'flex-start'
    },

    class: {
      type: String,
      default: ''
    },

    style: {
      type: Object,
      default: () => {}
    },
    size: {
      type: String,
      default: '0'
    }
  },
  setup(props) {
    const $slot = useSlots()
    const slotList = ref([])
    const styles = computed(() => {
      var theObj = {
        display: props.inline ? 'inline-flex' : 'flex',
        'flex-direction': props.column ? 'column' : '',
        'flex-wrap': props.wrap ? 'wrap' : '',
        width: props.blockable ? '100%' : 'fit-content',
        'justify-content': props.just,
        'align-items': props.column ? 'flex-start' : props.align,
        ...props.style
      }

      return theObj
    })
    // // 针对size设置自适应高度
    var theStyle = {}
    theStyle[props.column ? 'marginBottom' : 'marginRight'] = `${props.size}px`
    // theStyle[!props.column ? 'justify-content' : 'align-items'] = `center`
    // theStyle[props.column ? 'align-items' : 'justify-content'] = `flex-start!important`


    $slot.default().forEach((item, index, arr) => {
    console.log(' $slot.default() ===>',index != $slot.default().length)

      slotList.value.push({
        ...item,
        props: {
          ...item.props,
          style: index != $slot.default().length-1 ? (!!item.props?.style ? { ...item.props?.style, ...theStyle } : theStyle) : item.props?.style
        }
      })
    })
    console.log('$slot.default() ===>', slotList.value)

    return () => [
      h(
        'div',
        {
          className: `g-flex-box ${props.class}`,
          style: styles.value
        },
        slotList.value
      )
    ]
  }
}
</script>
