<template>
  <el-form>
    <el-form-item label="姓名">
      <el-input v-model="form.name" placeholder="请输入姓名" />
    </el-form-item>
    <el-form-item label="年龄">
      <el-input-number v-model="form.age" />
    </el-form-item>
  </el-form>
</template>

<script setup>
  import { reactive } from 'vue';

  const form = reactive({
    name: 'test',
    age: 18,
  });
</script>
