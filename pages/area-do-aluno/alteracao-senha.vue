<template>
  <section class="page__dashboard">
    <AppContainer class="tw-flex-col tw-gap-10">
      <AppPageTitle title="Alteração de Senha" />

      <StudentAreaNavbar />

      <div
        class="tw-bg-white/[0.05] tw-rounded-md tw-w-full tw-p-4 tw-text-base"
      >
        <form>
          <p class="tw-font-semibold tw-text-xl tw-my-6">
            Digite Sua Senha Atual e a Nova Senha Abaixo
          </p>

          <div
            class="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5"
          >
            <q-input
              class="tw-col-span-2"
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              label="Senha Atual"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-input
              class="tw-col-span-2"
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              label="Nova Senha"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-input
              class="tw-col-span-2"
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              label="Confirme Sua Nova Senha"
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
          <q-btn
            color="primary"
            label="Alterar Senha"
            class="!tw-text-black tw-text-base tw-mt-8 tw-w-full"
          />
        </form>
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
</script>

<style>
</style>