<template>
  <div id="adminLayout" class="wrapper tw-flex tw-gap-10">
    <div class="menu tw-bg-white/5 tw-hidden md:tw-flex">
      <q-scroll-area class="tw-w-[260px] tw-h-screen tw-box-border tw-p-4">
        <div class="logo-wrapper tw-flex tw-justify-center">
          <img
            src="@/assets/img/logo-amarela.png"
            class="tw-mb-4 tw-max-w-full"
          />
        </div>
        <AdminMenu />
      </q-scroll-area>
    </div>
    <div
      class="wrapper-content tw-grow tw-max-h-screen tw-overflow-y-auto tw-box-border tw-py-4 tw-px-4 md:tw-pl-0 tw-min-h-screen"
    >
      <AdminTopbar class="tw-mb-4" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
</style>