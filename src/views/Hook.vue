<template>
  <p>{{ newMsg }}</p>
</template>

<script setup>
  import { reactive } from 'vue';
  import { useMy } from '@/hooks/use-my.js';

  const props = reactive({
    msg: 'Hello, Vue 3',
  });

  const { newMsg } = useMy(props);
</script>
