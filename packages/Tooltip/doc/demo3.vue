<!-- html -->
<template>
  <g-space>
    <g-tooltip placement="top">
      <template #content> 黑色主题 dark </template>
      <m-button>黑色主题 dark </m-button>
    </g-tooltip>
    <g-tooltip theme="light" placement="top">
      <template #content> 白色主题 light </template>
      <m-button>白色主题 light </m-button>
    </g-tooltip>
    <g-tooltip theme="none" placement="top">
      <template #content> <div style="text-align: center;" >无样式 none</div> </template>
      <m-button>无样式 none </m-button>
    </g-tooltip>
  </g-space>
</template>
