<template>
  <q-list padding>
    <q-item
      clickable
      v-for="(item, index) in Menu"
      :key="`menu-item-${index}`"
      :active="isActive(item.link)"
      active-class="tw-bg-brand-primary tw-rounded tw-text-white"
    >
      <q-item-section avatar>
        <q-icon v-if="item.iconType === 'quasar'" :name="item.icon" />
        <Icon v-if="item.iconType === 'iconify'" :name="item.icon" />
      </q-item-section>

      <q-item-section>{{ item.label }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
import Menu from "@/services/adminMenu";

const route = useRoute();

function isActive(path: string) {
  if (route.fullPath === path) {
    return true;
  }

  return false;
}
</script>

<style>
</style>

