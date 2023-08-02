<script setup lang="ts">
import Button from '@/components/Button.vue';
import { routes } from '@/router/routes';
</script>

<template>
  <header class="bg-dark sticky top-0 z-10">
    <div class="w-3/4 mx-auto py-5 flex items-center justify-between">
      <RouterLink :to="routes.home">
        <h1 class="text-2xl text-white hover:scale-110">
          Feed your cat bro!
        </h1></RouterLink
      >
      <Button>Add recipe</Button>
    </div>
  </header>
</template>
