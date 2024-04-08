<template>
  <el-button type="primary" @click="handleClick">点击自增 count：{{ count }}</el-button>
</template>

<script setup>
  import { ref } from 'vue';

  const count = ref(0);

  const handleClick = () => {
    count.value++;
  };
</script>
