<script setup lang="ts">
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon/Icon.vue';
import { routes } from '@/router/routes';
</script>

<template>
  <header class="bg-dark sticky top-0 z-10">
    <div class="w-3/4 mx-auto py-5 flex items-center justify-between">
      <RouterLink
        :to="routes.home"
        class="flex items-center justify-center gap-2"
      >
        <Icon name="home" variant="light" />
        <h1 class="text-2xl text-white hover:scale-110 transition ease-in-out">
          Feed your cat bro!
        </h1>
      </RouterLink>
      <RouterLink :to="routes.addRecipe"
        ><Button>Add recipe</Button>
      </RouterLink>
    </div>
  </header>
</template>
