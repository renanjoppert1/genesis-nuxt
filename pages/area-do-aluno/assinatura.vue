<template>
  <section class="page__dashboard">
    <AppContainer class="tw-flex-col tw-gap-10">
      <AppPageTitle title="Meu Perfil" />

      <StudentAreaNavbar />

      <div
        class="tw-bg-white/[0.05] tw-rounded-md tw-w-full tw-p-4 tw-text-base"
      >
        <form>
          <p class="tw-font-semibold tw-text-xl tw-my-6">Dados do Perfil</p>

          <div
            class="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5"
          >
            <div>
              <q-input
                class="tw-col-span-2"
                filled
                v-model="name"
                label="Nome Completo"
              />
            </div>
            <div>
              <q-input
                class="tw-col-span-2"
                filled
                v-model="birthdate"
                label="Data de Nascimento"
              />
            </div>
            <div>
              <q-input
                class="tw-col-span-2"
                filled
                v-model="email"
                label="E-mail"
              />
            </div>
            <div>
              <q-input
                class="tw-col-span-2"
                filled
                v-model="genero"
                label="Gênero"
              />
            </div>
          </div>

          <p class="tw-font-semibold tw-text-xl tw-my-8">Dados de Endereço</p>

          <div
            class="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5"
          >
            <div>
              <q-input class="tw-col-span-2" filled v-model="cep" label="CEP" />
            </div>
            <div>
              <q-input
                class="tw-col-span-2"
                filled
                v-model="address"
                label="Endereço"
              />
            </div>
            <div>
              <q-input
                class="tw-col-span-2"
                filled
                v-model="neighborhood"
                label="Bairro"
              />
            </div>
            <div>
              <q-input
                class="tw-col-span-2"
                filled
                v-model="city"
                label="Cidade"
              />
            </div>
            <div>
              <q-input
                class="tw-col-span-2"
                filled
                v-model="state"
                label="Estado"
              />
            </div>
          </div>
          <q-btn
            color="primary"
            label="Salvar"
            class="!tw-text-black tw-text-base tw-mt-8"
          />
        </form>
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
const categories = ref({
  iconSize: "24px",
  color: "primary",
  padding: "1.5em",
  textColor: "primary",
  classTextSize: "tw-text-base",
  outline: true,
});
</script>

<style>
</style>