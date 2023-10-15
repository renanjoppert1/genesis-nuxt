<template>
  <div class="layout__default">
    <div class="background-overlay tw-min-h-screen tw-bg-black/40">
      <AppHeader />
      <main>
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.layout__default {
  background-image: url("~/assets/img/background.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
}
</style>
