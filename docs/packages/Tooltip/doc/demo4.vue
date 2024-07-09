<!-- html -->
<template>
  <g-space>
    <g-tooltip placement="top">
      <template #content>
        <div>
          利剑出鞘 <br />
          GuoGuoUI
        </div>
      </template>
      <m-button>支持多行输入内容 </m-button>
    </g-tooltip>

    <g-tooltip theme="light" placement="top">
      <template #content>
        <img style="width: 300px" src="https://s21.ax1x.com/2024/06/27/pkyyHDU.jpg" alt="" />
      </template>
      <m-button>白色主题展示 </m-button>
    </g-tooltip>

    <g-tooltip theme="dark" placement="top">
      <template #content>
        <img style="width: 300px" src="https://s21.ax1x.com/2024/06/27/pkyyHDU.jpg" alt="" />
      </template>
      <m-button>黑色主题展示 </m-button>
    </g-tooltip>

    <g-tooltip theme="none" placement="top">
      <template #content>
        <img style="width: 300px" src="https://s21.ax1x.com/2024/06/27/pkyyHDU.jpg" alt="" />
      </template>
      <m-button>无边框展示 </m-button>
    </g-tooltip>

    <g-tooltip theme="block" placement="top" color="red">
      <template #content> GuoGuoUI </template>
      <m-button>自定义颜色英文 color="red" </m-button>
    </g-tooltip>

    <g-tooltip theme="block" placement="top" color="#f00">
      <template #content> GuoGuoUI </template>
      <m-button>自定义颜色十六进制 color="#f00" </m-button>
    </g-tooltip>

    <g-tooltip theme="block" placement="top" color="rgba(255, 0, 0, 1)">
      <template #content> GuoGuoUI </template>
      <m-button>自定义颜色rgba: color="rgba(255, 0, 0, 1)" </m-button>
    </g-tooltip>

    <g-tooltip>
      <template #content> GuoGuoUI </template>
      <m-button>未禁用的Tooltip</m-button>
    </g-tooltip>

    <g-tooltip :disabled="true">
      <template #content> GuoGuoUI </template>
      <m-button>被禁用的Tooltip</m-button>
    </g-tooltip>
    <g-tooltip>
      <template #content> GuoGuoUI </template>
      <template #default> <m-button>测试 default 默认插槽</m-button> </template>
    </g-tooltip>
  </g-space>
</template>
