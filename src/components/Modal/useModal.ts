import { ref } from 'vue';

export const useModal = () => {
  const isOpen = ref<boolean>(false);

  const handleIsOpen = (value: boolean) => (isOpen.value = value);

  const getIsOpen = () => isOpen.value;

  return { isOpen, handleIsOpen, getIsOpen };
};
