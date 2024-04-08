<template>
  <el-tabs v-model="activeName" type="card" @tab-change="handleChange">
    <el-tab-pane label="使用 Ref" name="/ref" />
    <el-tab-pane label="使用 Reactive" name="/reactive" />
    <el-tab-pane label="使用 Store" name="/store" />
    <el-tab-pane label="使用 Component" name="/component" />
    <el-tab-pane label="使用 Hook" name="/hook" />
  </el-tabs>
  <router-view />
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  const activeName = ref('');

  const handleChange = value => {
    router.push(value);
  };

  watch(() => route.path, () => {
    activeName.value = route.path;
  });
</script>
