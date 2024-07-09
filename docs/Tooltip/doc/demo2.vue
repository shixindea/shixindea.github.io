<!-- html -->
<template>
  <g-space :size="[20]" :inline="false" justifyContent="center" style="width: 400px; margin: 0 auto">
    <g-space class="tootip-box" justifyContent="center" widthFill>
      <g-tooltip placement="top-start">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">上左</m-button>
      </g-tooltip>
      <g-tooltip placement="top">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">上方</m-button>
      </g-tooltip>
      <g-tooltip placement="top-end">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">上右</m-button>
      </g-tooltip>
    </g-space>

    <g-space class="tootip-box" justifyContent="space-between">
      <g-tooltip placement="left-start">
        <template #content> GuoGuoUI利剑出鞘</template>
        <m-button size="medium">左上</m-button>
      </g-tooltip>
      <g-tooltip placement="right-start">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">右上</m-button>
      </g-tooltip>
    </g-space>
    <g-space class="tootip-box" justifyContent="space-between">
      <g-tooltip placement="left">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">左方</m-button>
      </g-tooltip>
      <g-tooltip placement="right">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">右方</m-button>
      </g-tooltip>
    </g-space>
    <g-space class="tootip-box" justifyContent="space-between">
      <g-tooltip placement="left-end">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">左下</m-button>
      </g-tooltip>
      <g-tooltip placement="right-end">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">右下</m-button>
      </g-tooltip>
    </g-space>
    <g-space class="tootip-box" justifyContent="center">
      <g-tooltip placement="bottom-start">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">下左</m-button>
      </g-tooltip>
      <g-tooltip placement="bottom">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">下方</m-button>
      </g-tooltip>
      <g-tooltip placement="bottom-end">
        <template #content> GuoGuoUI利剑出鞘 </template>
        <m-button size="medium">下右</m-button>
      </g-tooltip>
    </g-space>
  </g-space>
</template>
