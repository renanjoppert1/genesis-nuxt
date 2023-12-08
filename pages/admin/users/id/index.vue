<template>
  <header>
    <AdminPageTitle
      page-title="Usuário Teste"
      module-name="Usuários"
      module-link="/admin/users"
      page-name="Ver"
      page-link="/admin/users/id"
    />
  </header>

  <div
    class="tw-bg-white/5 tw-rounded-lg tw-p-6 tw-box-border tw-shadow-lg tw-mt-8"
  >
    <div class="tw-flex tw-flex-col tw-gap-4 tw-p-4 md:tw-p-8">
      <div class="tw-flex tw-gap-4">
        <q-btn
          color="primary"
          class="!tw-text-black tw-text-base tw-mt-2"
          to="/admin/users/id/editar"
        >
          <div class="tw-w-full tw-flex tw-items-center tw-gap-2">
            <span>Editar Usuário</span>
          </div></q-btn
        >
        <q-btn
          color="primary"
          outline
          class="!tw-text-genesis tw-text-base tw-mt-2"
          to="/admin/users/id/excluir"
        >
          <div class="tw-w-full tw-flex tw-items-center tw-gap-2">
            <span>Excluir Usuário</span>
          </div></q-btn
        >
      </div>
      <div>
        <q-input
          class="tw-col-span-2"
          filled
          v-model="name"
          label="Nome Completo"
        />
      </div>
      <div>
        <q-input class="tw-col-span-2" filled v-model="email" label="E-mail" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
});

const searchField = ref("");
</script>

<style>
</style>

