<script setup lang="ts">
import { routes } from '@/router/routes';
</script>

<template>
  <header class="bg-dark">
    <div class="w-3/5 mx-auto">
      <RouterLink :to="routes.home">
        <h1 class="text-2xl text-white">Feed your cat bro!</h1></RouterLink
      >
    </div>
  </header>
</template>
