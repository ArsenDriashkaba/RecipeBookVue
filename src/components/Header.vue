<script setup lang="ts">
import { routes } from '@/router/routes';
</script>

<template>
  <header class="bg-dark sticky top-0 z-10">
    <div class="w-3/4 mx-auto py-5">
      <RouterLink :to="routes.home">
        <h1 class="text-2xl text-white">Feed your cat bro!</h1></RouterLink
      >
    </div>
  </header>
</template>
