<template>
  <m-table :options="options" size="small">
    <template #red="item">
      <div style="white-space: pre">{{ item.scope.row.red }}</div>
    </template>
  </m-table>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({
  options: {
    fileds: [
      { field: 'attr', title: '参数', align: 'center' },
      { field: 'type', title: '类型', align: 'center' },
      { field: 'red', title: '说明', align: 'center', width: '350px' },
      { field: 'sel', title: '可选值', align: 'center' },
      { field: 'def', title: '默认值', align: 'center' }
    ],
    datas: [
      {
        attr: 'type',
        type: 'String',
        red: '快速设置颜色类型',
        sel: 'primary / success / warning / danger / gray / default',
        def: 'default'
      },
      {
        attr: 'size',
        type: 'String',
        red: '快速设置字号大小 \n 1=>12px  2=>14px   3=>16px   4=>18px   5=>20px \n  small=>12px   default=>14px   large=>16px',
        sel: '1,2,3,4,5,small,default,large',
        def: 'default'
      },
      {
        attr: 'color',
        type: 'String',
        red: '快速设置字体颜色\nred #ff0000 rgba(255,0,0,1)',
        sel: '1,2,3,4,5,small,default,large',
        def: 'default'
      },
      {
        attr: 'copyable',
        type: 'Boolean',
        red: '可复制内容，若有多个元素，则只复制第一个元素',
        sel: 'true / false',
        def: 'false'
      },
      {
        attr: 'disabled',
        type: 'Boolean',
        red: '是否禁用不可操作',
        sel: 'true / false',
        def: 'false'
      },
      {
        attr: 'underline',
        type: 'Boolean',
        red: '是否添加下划线',
        sel: 'true / false',
        def: 'false'
      },
      {
        attr: 'delete',
        type: 'Boolean',
        red: '是否添加删除线',
        sel: 'true / false',
        def: 'false'
      },
      {
        attr: 'strong',
        type: 'Boolean',
        red: '是否加粗',
        sel: 'true / false',
        def: 'false'
      },
      {
        attr: 'link',
        type: 'Boolean',
        red: '快速设置主题色',
        sel: 'true / false',
        def: 'false'
      },
      {
        attr: 'cursor',
        type: 'Boolean',
        red: '小手光标👆',
        sel: 'true / false',
        def: 'false'
      },
      {
        attr: 'noSelect',
        type: 'Boolean',
        red: '是否隐藏点击光标',
        sel: 'true / false',
        def: 'false'
      },
      {
        attr: 'number',
        type: 'Boolean',
        red: '设置为DIN-Medium字体,主要针对数字显示',
        sel: 'true / false',
        def: 'false'
      }
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped></style>
