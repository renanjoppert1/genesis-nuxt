<template>
  <h1 class="tw-w-full tw-text-2xl tw-font-semibold">{{ props.title }}</h1>
</template>

<script lang="ts" setup>
interface PageTitleProps {
  title: String;
}

const props = defineProps<PageTitleProps>();
</script>

<style>
</style>

