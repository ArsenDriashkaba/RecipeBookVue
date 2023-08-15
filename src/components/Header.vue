<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import Button from '@/components/Button.vue';
import Icon from '@/components/Icon/Icon.vue';
import Menu from '@/components/Menu/Menu.vue';
import MenuItem from '@/components/Menu/MenuItem.vue';
import { routes } from '@/router/routes';

const { i18next } = useTranslation();

const languageOptions = [
  { label: 'EN', value: 'en' },
  { label: 'SK', value: 'sk' },
];

const handleToggleLanguage = (eventValue: string) =>
  i18next.changeLanguage(eventValue);
</script>

<template>
  <header class="bg-dark sticky top-0 z-10">
    <div class="w-3/4 mx-auto py-5 flex items-center justify-between">
      <RouterLink
        :to="routes.home"
        class="flex items-center justify-center gap-2"
      >
        <Icon name="home" variant="light" />
        <h1 class="text-2xl text-white hover:scale-105 transition ease-in-out">
          Feed your cat bro!
        </h1>
      </RouterLink>

      <div class="flex">
        <RouterLink :to="routes.addRecipe"
          ><Button>{{ $t('common.addRecipe') }}</Button>
        </RouterLink>

        <Menu :title="$t('common.translate')">
          <MenuItem
            v-for="(language, index) in languageOptions"
            :key="index"
            @click="handleToggleLanguage(language.value)"
          >
            {{ language.label }}
          </MenuItem>
        </Menu>
      </div>
    </div>
  </header>
</template>
