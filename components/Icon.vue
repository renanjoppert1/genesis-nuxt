<template>
  <span>
    <Icon v-if="props.type === 'iconify'" :icon="props.name" />
  </span>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
interface ComponentProps {
  name: string;
  type?: "fa" | "iconify";
}

const props = withDefaults(defineProps<ComponentProps>(), {
  type: "iconify",
});
</script>