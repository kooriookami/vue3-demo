<template>
  <p>{{ msg }}</p>
</template>

<script setup>
  const a = 'a';
  const b = 'b';
  const c = 'c';

  defineProps({
    msg: String,
  });

  defineExpose({
    b,
  });
</script>
