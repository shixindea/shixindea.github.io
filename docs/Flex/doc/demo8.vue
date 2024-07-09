<!-- html -->
<template>
  <g-text :size="3" strong>测试没有 widthFill</g-text>
  <br />
  <g-space :inline="false" style="background-color: #fdeaea">
    <div>GuoguoUI</div>
    <div>GuoguoUI</div>
    <div>GuoguoUI</div>
    <div>GuoguoUI</div>
  </g-space>
  <m-divider />
  <g-text :size="3" strong>测试拥有 widthFill</g-text>
  <g-space widthFill :inline="false" style="background-color: #fdeaea">
    <div>GuoguoUI</div>
    <div>GuoguoUI</div>
    <div>GuoguoUI</div>
    <div>GuoguoUI</div>
  </g-space>
  <m-divider />
  <g-text :size="3" strong>测试子集没有 innerWidthFill</g-text>
  <g-space widthFill inline>
    <div style="background-color: #fdeaea">GuoguoUI</div>
    <div style="background-color: #fdeaea">GuoguoUI</div>
    <div style="background-color: #fdeaea">GuoguoUI</div>
    <div style="background-color: #fdeaea">GuoguoUI</div>
  </g-space>
  <m-divider />
  <g-text :size="3" strong>测试子集拥有 innerWidthFill</g-text>
  <g-space widthFill innerWidthFill :inline="false">
    <div style="background-color: #fdeaea">GuoguoUI</div>
    <div style="background-color: #fdeaea">GuoguoUI</div>
    <div style="background-color: #fdeaea">GuoguoUI</div>
    <div style="background-color: #fdeaea">GuoguoUI</div>
  </g-space>
</template>

<style></style>
