import { computed } from 'vue';

export const useMy = props => {
  const newMsg = computed(() => `new msg: ${props.msg}`);

  return {
    newMsg,
  };
};
