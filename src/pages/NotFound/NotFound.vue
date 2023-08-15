<script setup lang="ts">
import Page from '@/components/Page.vue';
</script>

<template>
  <Page>
    <div class="w-full h-full text-4xl flex items-center justify-center">
      <h1>{{ $t('common.notFoundMsg') }}</h1>
    </div>
  </Page>
</template>
