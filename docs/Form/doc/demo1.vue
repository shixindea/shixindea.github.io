<template>
  <div class="home">
    <h3>Form (校验表单)</h3>
    <iForm ref="form" :model="formData" :rules="rules">
      <iFormItem label="名称：" prop="name">
        <iInput v-model="formData.name"></iInput>
      </iFormItem>
      <iFormItem label="邮箱：" prop="mail">
        <iInput v-model="formData.mail"></iInput>
      </iFormItem>
      <button @click="handleSubmit">提交</button>
      <button @click="handleReset">重置</button>
    </iForm>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// @ is an alias to /src
import iForm from '../index.vue'
import iFormItem from '../FormItem.vue'
import iInput from '../Input.vue'
const form = ref()
const formData = ref({ name: '', mail: '' })
const rules = ref({
  name: [{ required: true, message: '不能为空啊啊啊啊', trigger: 'blur' }],
  mail: [
    { required: true, message: '不能为空', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
  ]
})
const handleSubmit = () => {
  form.value.validate(valid => {
    console.log('valid ===>', valid)

    if (valid) console.log('提交成功')
    else console.log('校验失败')
  })
}
const handleReset = () => {
  form.value.resetFields()
}
</script>
