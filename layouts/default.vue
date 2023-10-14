<template>
  <div class="layout__default">
    <div class="background-overlay min-h-screen bg-black/40">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.layout__default {
  background-image: url("~/assets/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
