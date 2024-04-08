<template>
  <MyComponent ref="myComponent" :msg="msg" />
  <p>expose：{{ myComponent }}</p>
</template>

<script setup>
  import MyComponent from '@/components/MyComponent.vue';
  import { ref } from 'vue';

  const myComponent = ref(null);
  const msg = ref('Hello, Vue 3');
</script>
