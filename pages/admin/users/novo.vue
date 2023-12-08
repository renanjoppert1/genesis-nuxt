<template>
  <header>
    <AdminPageTitle
      page-title="Novo Usuário"
      module-name="Usuários"
      module-link="/admin/users"
      page-name="Novo"
      page-link="/admin/users/novo"
    />
  </header>

  <div
    class="tw-bg-white/5 tw-rounded-lg tw-p-6 tw-box-border tw-shadow-lg tw-mt-8"
  >
    <form class="tw-flex tw-flex-col tw-gap-4 tw-p-4 md:tw-p-8">
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

      <div>
        <q-input
          class="tw-col-span-2"
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Senha"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>

      <div class="tw-mb-4">
        <q-input
          class="tw-col-span-2"
          v-model="confirmPassword"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Confirme A Senha"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>

      <div>
        <q-btn
          color="primary"
          class="!tw-text-black tw-text-base tw-mt-2"
          to="/admin/users/novo"
        >
          <div class="tw-w-full tw-flex tw-items-center tw-gap-2">
            <span>Criar Usuário</span>
          </div></q-btn
        >
      </div>
    </form>
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

