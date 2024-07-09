<!-- html -->
<template>
  <g-space>
    <m-date v-model="dateVal" placeholder="请选择日期"> </m-date>
    <m-date v-model="dateVal" placeholder="请选择日期" size="small"> </m-date>
    <m-date v-model="dateVal" placeholder="请选择日期" size="mini"> </m-date>
  </g-space>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>