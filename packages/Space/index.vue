<template>
  <div class="m-space" ref="spaceRef">
    <!-- <slot></slot> -->
  </div>
</template>
<script>
import { h, useSlots, ref, computed } from 'vue'
export default {
  name: 'mSpace',
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    size: {
      type: Object,
      default: [10, 10]
    },
    alignItems: {
      type: String,
      default: 'center'
    },
    justifyContent: {
      type: String,
      default: 'flex-start'
    },
    align: {
      type: String,
      default: 'flex-start'
    },
    class: {
      type: String,
      default: ''
    },
    childrenClass: {
      type: Object,
      default: () => {}
    },
    style: {
      type: Object,
      default: () => {}
    },
    widthFill: {
      type: Boolean,
      default: false
    },
    innerWidthFill: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const $slot = useSlots()
    const slotList = ref([])
    // const align = ref(props.inline ? props.alignItems : 'left')
    const styles = computed(() => {
      return {
        display: props.inline ? 'inline-flex' : 'flex',
        gap: props.size.length == 2 ? `${props.size[0]}px ${props.size[1]}px` : `${props.size[0]}px`,
        'flex-direction': props.inline ? 'inherit' : 'column',
        'flex-wrap': 'wrap',
        margin: `${props.size[0] / 2}px 0px`,
        width: props.inline || props.widthFill ? '100%' : 'fit-content',
        'justify-content': props.justifyContent,
        'align-items': props.align,
        align: props.align,

        ...props.style
      }
    })

    // style: `margin-bottom:${
    //   arr.length - 1 == index ? 0 : props.size
    // }px`,
    $slot.default().forEach((item, index, arr) => {
      slotList.value.push(
        h(
          'div',
          {
            className: `m-space-item${index}`,
            style: `width:${props.innerWidthFill ? '100%' : 'fit-content'}`
          },
          item
        )
      )
    })
    return () => [
      h(
        'div',
        {
          className: `m-space-box ${props.class}`,
          style: styles.value
        },
        slotList.value
      )
    ]
  }
}
</script>
