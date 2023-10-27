<template>
  <section class="page_materiais">
    <AppContainer class="tw-flex-col tw-gap-10">
      <AppPageTitle title="Todos os Cursos" />

      <div class="categories-list tw-w-full">
        <q-tabs
          v-model="tabCategory"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
          outside-arrows
          mobile-arrows
        >
          <q-tab
            v-for="category in categoriesOptions"
            :key="category.id"
            :name="category.id"
            :label="category.label"
          />
        </q-tabs>
        <q-separator />
        <div
          class="ebook-list tw-flex tw-flex-wrap tw-gap-10 tw-mt-10 tw-justify-center md:tw-justify-start"
        >
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
import categoriesOptions from "@/services/api/categories";
console.log(categoriesOptions[0].id);
const tabCategory = ref(categoriesOptions[0].id);
</script>

<style>
</style>

