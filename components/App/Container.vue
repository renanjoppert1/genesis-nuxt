<template>
  <div
    class="tw-container tw-flex tw-mx-auto tw-py-4 tw-box-border tw-px-4"
    :class="{
      'lg:tw-max-w-[1200px]': props.fluid === false,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface ContainerProps {
  fluid?: boolean;
}

const props = withDefaults(defineProps<ContainerProps>(), {
  fluid: false,
});
</script>



<style>
</style>
