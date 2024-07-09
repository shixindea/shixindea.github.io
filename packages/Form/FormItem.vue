<template>
  <div>
    <label :for="labelFor" v-if="label" :class="{ 'label-required': isRequired }">{{ label }}</label>
    <slot></slot>
    <div v-if="isShowMes" class="message">{{ message }}</div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, shallowRef, onBeforeUnmount, inject } from 'vue'
import bus from 'vue3-eventbus'
import AsyncValidator from 'async-validator'
import Emitter from './emitter.js'

// mixins: [Emitter]
const theProps = defineProps({
  label: { type: String, default: '' },
  prop: { type: String, default: '' }
})

const isRequired = shallowRef(false)
const isShowMes = shallowRef(false)
const message = ref('')
const labelFor = ref('input' + new Date().valueOf())
const theForm: any = inject('form')
const initialValue = ref()

// 组件销毁前，将实例从 Form 的缓存中移除
onBeforeUnmount(() => {
  // this.dispatch('iForm', 'form-remove', this);
  bus.emit('form-remove', this)
})

const fieldValue = computed(() => {
  console.log('theForm ===>', theForm)
  console.log('theProps ===>', theProps)

  return theForm.model[theProps.prop]
})

const setRules = () => {
  let rules = getRules()
  console.log(rules)

  if (rules.length) {
    rules.forEach(rule => {
      if (rule.required !== undefined) isRequired.value = rule.required
    })
  }
  bus.on('iFormItem-form-blur', onFieldBlur)
  bus.on('iFormItem-form-change', onFieldChange)
}
const getRules = () => {
  let formRules = theForm.rules
  formRules = formRules ? formRules[theProps.prop] : []
  return formRules
}
// 过滤出符合要求的 rule 规则
const getFilteredRule = trigger => {
  const rules = getRules()
  return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
}
/**
 * 校验表单数据
 * @param trigger 触发校验类型
 * @param callback 回调函数
 */
const validate = (trigger, cb?: any) => {
  let rules = getFilteredRule(trigger)
  if (!rules || rules.length === 0) return true
  // 使用 async-validator
  const validator = new AsyncValidator({ [theProps.prop]: rules })
  console.log('validator ===>', validator)

  let model = { [theProps.prop]: fieldValue }
  validator.validate(model, { firstFields: true }, errors => {
    isShowMes.value = errors ? true : false
    message.value = errors ? errors[0].message! : ''
    console.log('cb ===>', cb)

    if (cb) cb(message.value)
  })
}
const resetField = () => {
  message.value = ''
  theForm.model[theProps.prop] = initialValue.value
}
const onFieldBlur = e => {
  console.log('theForm.model ===>', theForm.model);
  console.log('theProps.prop ===>',theProps.prop);
  
  
  theForm.model[theProps.prop] = e
  validate('blur')
}
const onFieldChange = () => {
  validate('change')
}

onMounted(() => {
  if (theProps) {
    // this.dispatch('iForm', 'form-add', this);
    bus.emit('form-add', this)
    // 设置初始值
    console.log('fieldValue ===>',fieldValue);
    
    initialValue.value = fieldValue
    setRules()
  }
})
</script>
<style>
.label-required:before {
  content: '*';
  color: red;
}
.message {
  font-size: 12px;
  color: red;
}
</style>
