<script setup lang="ts">
import { RouterView } from 'vue-router';

import Header from '@/components/Header.vue';
</script>

<template>
  <Header />
  <main class="w-3/4 flex items-center justify-center mx-auto">
    <RouterView />
  </main>
</template>
