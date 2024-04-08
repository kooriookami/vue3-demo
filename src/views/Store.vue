<template>
  <el-button type="primary" @click="store.increment">点击自增 count：{{ store.count }}</el-button>
  <p>获取两倍 count：{{ store.double }}</p>
</template>

<script setup>
  import { useCounterStore } from '@/store/index.js';

  const store = useCounterStore();
</script>
