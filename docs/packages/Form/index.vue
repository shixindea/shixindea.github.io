<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, provide, watchEffect } from 'vue'
import bus from 'vue3-eventbus'
const fields: any = ref([])
const theProps = defineProps({
  model: { type: Object },
  rules: { type: Object }
})


provide('form',theProps)
const resetFields = () => {
  fields.value.forEach(field => field.resetField())
}
const validate = cb => {
  console.log('form- ---theProps ===>',theProps);
  
  return new Promise(resolve => {
    let valid = true,
      count = 0
    fields.value.forEach(field => {
      field.validate('', error => {
        console.log('form-error ===>', error)

        if (error) valid = false
        if (++count === fields.value.length) {
          resolve(valid)
          if (typeof cb === 'function') cb(valid)
        }
      })
    })
  })
}
onMounted(() => {
  bus.on('form-add', field => {
    if (field) fields.value.push(field)
  })
  bus.on('form-remove', field => {
    if (field.prop) fields.value.splice(fields.value.indexOf(field), 1)
  })
})

defineExpose({
  resetFields,
  validate
})
</script>
