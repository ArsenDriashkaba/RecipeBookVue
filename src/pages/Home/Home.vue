<script setup lang="ts">
import { computed, ref } from 'vue';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue';

import Button from '@/components/Button.vue';
import DataTable from '@/components/DataTable/DataTable.vue';
import Input from '@/components/Input.vue';
import Page from '@/components/Page.vue';
import { useGetRecipesQuery } from '@/pages/Home/api';
import RecipesList from '@/pages/Home/components/RecipesList.vue';
import { useFilteredRecipes } from '@/pages/Home/hooks/useFilteredRecipes';
import { useFavoriteRecipesStore } from '@/stores/favoritesRecipes';
import Icon from '@/components/Icon/Icon.vue';
import IconButton from '@/components/IconButton.vue';
import RecipesTable from '@/pages/Home/components/RecipesTable.vue';

const isFavorites = ref<boolean>(false);

const favoriteRecipesStore = useFavoriteRecipesStore();
const { isLoading, isError, data: recipes } = useGetRecipesQuery();

const favoritesBtnText = computed(() =>
  isFavorites.value ? 'All recipes' : 'Favorites',
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
          placeholder="Discover best recipes..."
          class="w-full"
          iconName="search"
        />
        <Button @click="isFavorites = !isFavorites" variant="secondary">
          {{ favoritesBtnText }}
        </Button>
      </div>
      <TabGroup>
        <TabList>
          <Tab class="focus:border-none"><IconButton name="grid" /></Tab>
          <Tab><IconButton name="list" /></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <RecipesList v-if="recipes" :recipes="filteredValues" />
          </TabPanel>
          <TabPanel><RecipesTable :recipesData="filteredValues" /></TabPanel>
        </TabPanels>
      </TabGroup>
    </section>
  </Page>
</template>
