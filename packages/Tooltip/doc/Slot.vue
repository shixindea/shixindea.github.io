<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({
  options: {
    fileds: [
      { field: 'name', title: '插槽名', align: 'center' },
      { field: 'red', title: '说明', align: 'center' },
    ],
    datas: [
      {
        name: 'content',
        red: 'ToolTip 组件的弹出内容插槽',
        attr: '——',
        exm: '——'
      },
      {
        name: 'default',
        red: '默认插槽',
        attr: '——',
        exm: '——'
      }
    ]
  }
})
const { options } = state
</script>
