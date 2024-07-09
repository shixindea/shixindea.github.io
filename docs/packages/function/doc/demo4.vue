<!-- html -->
<template>
  <g-space>
    <m-input v-model="value1" leftIcon="m-icon-search"></m-input>
    <m-input v-model="value2" rightIcon="m-icon-calendar"></m-input>
  </g-space>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
</script>