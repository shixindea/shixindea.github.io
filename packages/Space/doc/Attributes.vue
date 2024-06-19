<template>
  <m-table :options="options" size="small"></m-table>
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
        attr: 'inline',
        type: 'Booleab',
        red: '是否为水平或者垂直，默认横向',
        sel: 'true / false',
        def: 'true'
      },
      {
        attr: 'size',
        type: 'Array',
        red: '自定义间距大小，接收两个参数，第一个为垂直间距，第二个为水平间距，当inline为false是，只需要一个参数设置垂直间距即可',
        sel: '——',
        def: '——'
      },
      {
        attr: 'justifyContent',
        type: 'String',
        red: '用于设置主轴方向上的对齐方式',
        sel: 'flex-start | flex-end | center | space-between | space-around',
        def: 'flex-start'
      },
      {
        attr: 'align',
        type: 'String',
        red: '用于设置纵轴方向上的对齐方式',
        sel: 'flex-start | flex-end | center | space-between | space-around',
        def: 'flex-start'
      },
      {
        attr: 'style',
        type: 'Object',
        red: '用于更改 space 组件样式',
        sel: '——',
        def: '——'
      },
      {
        attr: 'class',
        type: 'String',
        red: '可以快速设置组件样式',
        sel: '——',
        def: '——'
      },
      {
        attr: 'widthFill',
        type: 'Boolean',
        red: '设置当前盒子是否增加 width: 100%，默认为自适应大小fit-content',
        sel: 'true / false',
        def: 'false'
      },
      {
        attr: 'innerWidthFill',
        type: 'Boolean',
        red: '设置当前盒子的子元素是否增加 width: 100%，默认为自适应大小fit-content',
        sel: 'true / false',
        def: 'false'
      }
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped></style>
