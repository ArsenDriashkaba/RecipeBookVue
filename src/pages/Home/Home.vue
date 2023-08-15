<script setup lang="ts">
import { computed, ref } from 'vue';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue';
import { useTranslation } from 'i18next-vue';

import Button from '@/components/Button.vue';
import IconButton from '@/components/IconButton.vue';
import Input from '@/components/Input.vue';
import Page from '@/components/Page.vue';
import { useGetRecipesQuery } from '@/pages/Home/api';
import RecipesList from '@/pages/Home/components/RecipesList.vue';
import RecipesTable from '@/pages/Home/components/RecipesTable.vue';
import { useFilteredRecipes } from '@/pages/Home/hooks/useFilteredRecipes';
import { useFavoriteRecipesStore } from '@/stores/favoritesRecipes';

const isFavorites = ref<boolean>(false);

const { t } = useTranslation();
const favoriteRecipesStore = useFavoriteRecipesStore();
const { isLoading, isError, data: recipes } = useGetRecipesQuery();

const favoritesBtnText = computed(() =>
  isFavorites.value ? t('home.allRecipes') : t('home.favorites'),
);
const recipesData = computed(() =>
  isFavorites.value
    ? recipes.value.filter((recipe) =>
        favoriteRecipesStore.state.some((id) => id === recipe._id),
      )
    : recipes.value,
);

const { searchValue, filteredValues } = useFilteredRecipes(recipesData);
</script>

<template>
  <Page :isLoading="isLoading" :isError="isError" :hasBackButton="false">
    <section class="relative">
      <div class="my-3 flex items-center justify-between gap-3">
        <Input
          v-model="searchValue"
          :placeholder="$t('home.searchPlaceholder')"
          class="w-full"
          iconName="search"
        />
        <Button
          @click="isFavorites = !isFavorites"
          variant="secondary"
          className=""
        >
          {{ favoritesBtnText }}
        </Button>
      </div>
      <TabGroup>
        <TabList class="w-full flex items-center justify-end py-2">
          <Tab v-slot="{ selected }">
            <IconButton :name="selected ? 'grid' : 'gridLine'" />
          </Tab>
          <Tab v-slot="{ selected }">
            <IconButton :name="selected ? 'list' : 'listLine'" />
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <RecipesList v-if="recipes" :recipes="filteredValues" />
          </TabPanel>
          <TabPanel>
            <RecipesTable :recipesData="filteredValues" />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </section>
  </Page>
</template>
