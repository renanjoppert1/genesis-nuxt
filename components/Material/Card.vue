<template>
  <NuxtLink
    to="/materiais/nome-do-ebook"
    class="tw-bg-white/[.03] tw-rounded-md"
  >
    <div class="material-card">
      <div class="tw-card">
        <div class="thumbnail">
          <img src="@/assets/img/ebook-thumbnail.jpg" />
        </div>
        <div class="ebook-content tw-box-border tw-p-4">
          <h2 class="tw-text-base tw-mb-3 tw-text-genesis tw-font-bold">
            Título 1 do Ebook
          </h2>
          <div>
            <p>324 Páginas</p>
            <p>Teologia</p>
          </div>

          <q-btn class="tw-w-full tw-mt-4 tw-flex" size="md" color="primary">
            <AppIcon
              class="tw-text-black tw-text-2xl"
              name="ant-design:read-outlined"
            />
            <span class="tw-text-black tw-font-semibold tw-ml-2"
              >Começar a Ler</span
            >
          </q-btn>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
</script>

<style>
</style>

