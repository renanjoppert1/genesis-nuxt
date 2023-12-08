<template>
  <div
    class="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-items-center tw-mt-8"
  >
    <h1 class="tw-text-2xl tw-font-bold">{{ props.pageTitle }}</h1>
    <div
      v-if="props.showBreadcrumb"
      class="breadcrumb tw-flex tw-gap-2 md:tw-justify-end"
    >
      <NuxtLink to="/admin/dashboard">Dashboard</NuxtLink>
      <span>/</span>
      <NuxtLink :to="props.moduleLink">{{ props.moduleName }}</NuxtLink>
      <span>/</span>
      <NuxtLink :to="props.pageLink" class="tw-text-genesis tw-font-semibold">{{
        props.pageName
      }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface PageTitleProps {
  pageTitle: string;
  moduleName: string;
  moduleLink: string;
  pageName: string;
  pageLink: string;
  showBreadcrumb: boolean;
}

const props = withDefaults(defineProps<PageTitleProps>(), {
  showBreadcrumb: true,
});
</script>

<style>
</style>