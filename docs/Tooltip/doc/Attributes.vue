<template>
  <m-table :options="options">
    <template #red="item">
      <div style="white-space: pre; text-align: left">{{ item.scope.row.red }}</div>
    </template>
  </m-table>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({
  options: {
    fileds: [
      {
        field: 'attr',
        title: '参数',
        align: 'center'
      },
      {
        field: 'type',
        title: '类型',
        align: 'center'
      },
      {
        field: 'red',
        title: '说明',
        align: 'center',
        width: '350px'
      },
      {
        field: 'sel',
        title: '可选值',
        align: 'center'
      },
      {
        field: 'def',
        title: '默认值',
        align: 'center',
        width: '200px'
      }
    ],
    datas: [
      {
        attr: 'placement',
        type: 'String',
        red: '控制弹出层的位置',
        sel: ' top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end',
        def: 'top'
      },
      {
        attr: 'theme',
        type: 'String',
        red: '弹出层的样式 \ndark：黑色主题 / light：白色主题 \nblock：仅设置Tooltip padding10px \nnone：无任何样式',
        sel: 'dark / light / block / none',
        def: 'dark'
      },
      {
        attr: 'color',
        type: 'String',
        red: '设置 ToolTip 的背景颜色',
        sel: '十六进制、英文或者RGBA',
        def: '——'
      },
      {
        attr: 'tooltipClass',
        type: 'Boolean',
        red: '自定义类，给弹出框添加自定义样式',
        sel: 'true / false',
        def: 'false'
      },
      {
        attr: 'disabled',
        type: 'Boolean',
        red: '设置Tooltip是否禁用',
        sel: 'true / false',
        def: 'false'
      }
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped></style>
