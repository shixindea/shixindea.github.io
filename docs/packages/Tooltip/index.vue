<template>
  <div class="tooltip-box" @mouseenter="hoverTriggerEnterHandler" @mouseleave="hoverTriggerLeaveHandler">
    <transition :name="transition" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
      <div
        v-show="!disabled && visible"
        class="tooltip-outbox"
        :class="[theme == 'light' ? 'tooltip-outbox-light' : theme == 'dark' ? 'tooltip-outbox-dark' : theme == 'block' ? 'tooltip-outbox-block' : '', placement, tooltipClass]"
        :aria-hidden="disabled || !visible ? 'true' : 'false'"
        :style="{
          backgroundColor: color,
          color: theme == 'light' || theme == 'none' ? '#303133' : '#fff'
        }"
      >
        <div class="tooltip-arrow" ref="tooltipArrow" :style="{ 'border-top': color ? `6px solid ${color}` : '' }"></div>
        <slot name="content"></slot>
      </div>
    </transition>
    <!--  @mousedown="focusTriggerHandler" @mouseup="blurTriggerHandler" -->
    <div ref="reference" class="reference-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gTooltip'
}
</script>
<script setup>
import { ref, onMounted } from 'vue'
const emit = defineEmits(['after-enter', 'after-leave'])
const props = defineProps({
  width: {
    type: [String, Number]
  },
  placement: {
    //tooltip展示出的位置,可选值——top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
    type: [String],
    default: 'top'
  },
  color: {
    type: String,
    default: ''
  },
  tooltipClass: {
    //自定义类，给弹出框添加自定义样式
    type: [String]
  },
  transition: {
    //Tooltip过渡动画设置
    type: String,
    default: 'slide-fade'
  },
  disabled: {
    type: [Boolean],
    default: false
  },
  /**
   * 弹出框主题 // theme 可选值——dark/light/block/none
   * @dark 弹出框背景色为深色
   * @light 弹出框背景色为白色
   * @block 仅针对于tootip 增加padding样式
   * @none 无样式
   */
  theme: {
    type: String,
    default: 'dark'
  }
})
const visible = ref(false)

//计算arrow的位置
const reference = ref(null) //获取主元素示例的ref
const tooltipArrow = ref(null) //获取箭头的ref
onMounted(() => {
  if (props.placement == 'top' || props.placement == 'bottom') {
    const clientWidth = reference.value.clientWidth
    tooltipArrow.value.style.setProperty('--geticonsite', clientWidth / 2 + 'px')
  } else if (props.placement.includes('top') || props.placement.includes('bottom')) {
    tooltipArrow.value.style.setProperty('--geticonsite', 10 + 'px')
  } else if (props.placement == 'left' || props.placement == 'right') {
    const clientHeight = reference.value.clientHeight
    tooltipArrow.value.style.setProperty('--geticonsite', clientHeight / 2 + 'px')
  } else if (props.placement == 'left-start' || props.placement.includes('right-start')) {
    tooltipArrow.value.style.setProperty('--geticonsite', 10 + 'px')
  } else if (props.placement == 'left-end' || props.placement.includes('right-end')) {
    tooltipArrow.value.style.setProperty('--geticonsite', 0 + 'px')
  }
})

//hover——鼠标移入触发
function hoverTriggerEnterHandler() {
  if (!props.disabled) {
    visible.value = true
  }
}
//hover——鼠标移出,关闭tooltip
function hoverTriggerLeaveHandler() {
  if (!props.disabled) {
    visible.value = false
  }
}
//弹窗显示时触发
function handleAfterEnter() {
  emit('after-enter')
}
//弹窗消时时触发
function handleAfterLeave() {
  emit('after-leave')
}
//获取组件实例
</script>
<style scoped lang="scss">
.tooltip-box {
  --geticonsite: 0;
  display: inline-block;
  position: relative;

  .tooltip-outbox {
    // min-width: 130px;
    // width: fit-content;
    font-size: 12px;
    line-height: 1.2;
    word-wrap: break-word;
    position: absolute;
    z-index: 1001;
    border-radius: 4px;
    display: inline-block;
    white-space: nowrap;

    &-block {
      padding: 10px;
    }
    &-dark {
      padding: 10px;
      color: #fff !important;
      background-color: #303133 !important;
    }

    &-light {
      padding: 10px;
      color: #303133 !important;
      background-color: #fff !important;
      border: 1px solid rgba($color: #303133, $alpha: 0.45);
    }
  }

  &-content {
    overflow: auto;
  }

  .top {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 12px;

    .tooltip-arrow {
      position: absolute;
      top: 100%;
      left: 50%;
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid #303133;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }

  .top-start {
    bottom: 100%;
    left: 0;
    margin-bottom: 12px;

    .tooltip-arrow {
      position: absolute;
      top: 100%;
      left: var(--geticonsite);
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid #303133;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }

  .top-end {
    bottom: 100%;
    right: 0;
    margin-bottom: 12px;

    .tooltip-arrow {
      position: absolute;
      top: 100%;
      right: var(--geticonsite);
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid #303133;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }

  .bottom {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 12px;

    .tooltip-arrow {
      position: absolute;
      bottom: 100%;
      left: 50%;
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid #303133;
      border-right: 6px solid transparent;
    }
  }

  .bottom-start {
    top: 100%;
    left: 0;
    margin-top: 12px;

    .tooltip-arrow {
      position: absolute;
      bottom: 100%;
      left: var(--geticonsite);
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid #303133;
      border-right: 6px solid transparent;
    }
  }

  .bottom-end {
    top: 100%;
    right: 0;
    margin-top: 12px;

    .tooltip-arrow {
      position: absolute;
      bottom: 100%;
      right: var(--geticonsite);
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid #303133;
      border-right: 6px solid transparent;
    }
  }

  .left {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 12px;

    .tooltip-arrow {
      position: absolute;
      left: 100%;
      top: 50%;
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid #303133;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }

  .left-start {
    right: 100%;
    background-color: #303133;
    top: 0;
    margin-right: 12px;

    .tooltip-arrow {
      position: absolute;
      left: 100%;
      top: var(--geticonsite);
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid #303133;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }

  .left-end {
    right: 100%;
    background-color: #303133;
    bottom: 0;
    margin-right: 12px;

    .tooltip-arrow {
      position: absolute;
      left: 100%;
      bottom: var(--geticonsite);
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid #303133;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }

  .right {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 12px;

    .tooltip-arrow {
      position: absolute;
      right: 100%;
      top: 50%;
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid #303133;
    }
  }

  .right-start {
    --geticonsite: 0;
    left: 100%;
    top: 0;
    margin-left: 12px;

    .tooltip-arrow {
      position: absolute;
      right: 100%;
      top: var(--geticonsite);
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid #303133;
    }
  }

  .right-end {
    left: 100%;
    bottom: 0;
    margin-left: 12px;

    .tooltip-arrow {
      position: absolute;
      right: 100%;
      bottom: var(--geticonsite);
      content: '';
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid #303133;
    }
  }

  .reference-content {
    display: inline-block;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.6, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
