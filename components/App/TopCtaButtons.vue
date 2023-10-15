<template>
  <div
    class="tw-flex"
    :class="{
      'tw-flex-row': props.stacked === false,
      'tw-flex-col': props.stacked === true,
    }"
  >
    <q-btn text-color="primary" class="tw-m-2" outline to="/login">
      <AppIcon class="tw-mr-3" name="tabler:user" />
      <span class="tw-font-bold">Entrar</span>
    </q-btn>
    <q-btn color="primary" text-color="black" class="tw-m-2 row" to="/registro">
      <AppIcon class="tw-mr-3" name="jam:plus" />
      <span class="tw-font-bold">Cadastre-se</span>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
interface TopCtaButtonsProps {
  stacked?: boolean;
}

const props = withDefaults(defineProps<TopCtaButtonsProps>(), {
  stacked: false,
});
</script>
