<!-- html -->
<template>
  <g-space :inline="false">
    <g-text copyable>GuoguoUI (可直接复制)</g-text>
    <g-text :copyable="{ tooltip: true }">GuoguoUI (可直接复制,显示tooltip提示)</g-text>
    <g-text :copyable="{ tooltip: false }">GuoguoUI (可直接复制,不显示tooltip提示)</g-text>
  </g-space>
</template>
