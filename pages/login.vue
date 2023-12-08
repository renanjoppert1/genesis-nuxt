<template>
  <section class="page__login">
    <AppContainer class="tw-flex-col tw-gap-10">
      <div class="tw-py-6 sm:tw-tw-py-8 lg:tw-tw-py-12">
        <div class="tw-mx-auto tw-max-w-screen-2xl tw-px-4 md:tw-tw-px-8">
          <form class="tw-mx-auto tw-bg-[#121212] tw-max-w-lg tw-rounded-lg">
            <h2
              class="tw-mb-4 tw-text-center tw-text-2xl tw-font-bold md:tw-tw-mb-8 lg:tw-tw-text-3xl tw-pt-8"
            >
              Login
            </h2>
            <div class="tw-flex tw-flex-col tw-gap-4 tw-p-4 md:tw-p-8">
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

              <div>
                <p>
                  <NuxtLink to="esqueci-minha-senha" class="tw-text-sm"
                    >Esqueceu sua senha?</NuxtLink
                  >
                </p>
              </div>

              <q-btn
                color="primary"
                class="tw-block tw-bg-gray-800 tw-px-8 tw-py-3 tw-text-center tw-text-sm tw-font-semibold !tw-text-black tw-outline-none tw-ring-gray-300 tw-transition tw-duration-100 tw-hover:tw-bg-gray-700 tw-focus-visible:tw-ring tw-active:tw-bg-gray-600 md:tw-text-base"
                to="/area-do-aluno"
              >
                Entrar
              </q-btn>
            </div>

            <div
              class="tw-flex tw-items-center tw-justify-center tw-bg-white/[0.05] tw-p-4"
            >
              <p class="tw-text-center tw-text-sm tw-text-gray-500">
                Não Possui Uma Conta?
                <NuxtLink
                  to="/periodo-de-avaliacao"
                  class="tw-text-genesis tw-transition tw-duration-100 tw-hover:tw-text-indigo-600 tw-active:tw-text-indigo-700"
                  >Cadastre-se Gratuitamente</NuxtLink
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>

