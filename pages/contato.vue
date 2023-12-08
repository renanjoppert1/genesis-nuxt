<template>
  <section class="page__contato">
    <AppContainer class="tw-flex-col tw-gap-10">
      <AppPageTitle title="Contato" />

      <section class="tw-text-gray-400 bg-gray-900 tw-body-font tw-relative">
        <div class="tw-container tw-px-5 tw-py-24 tw-pt-10 tw-mx-auto">
          <div class="tw-flex tw-flex-col tw-text-center tw-w-full tw-mb-12">
            <h1
              class="sm:tw-text-3xl tw-text-2xl tw-font-bold tw-title-font tw-mb-4 tw-text-white"
            >
              Alguma Dúvida? <br />
              Estamos à Disposição
            </h1>
            <p class="lg:tw-w-2/3 tw-mx-auto tw-leading-relaxed tw-text-base">
              Possui alguma dúvida ou está enfrentando algum problema? Estamos a
              um clique de distância. Preencha o formulário abaixo ou entre em
              contato em um de nossos canais de atendimento.
            </p>
          </div>
          <div class="lg:tw-w-1/2 md:tw-w-2/3 tw-mx-auto">
            <div class="tw-flex tw-flex-wrap -tw-m-2">
              <div class="tw-p-2 tw-w-full md:tw-w-1/3">
                <div class="tw-relative">
                  <q-input
                    class="tw-col-span-2"
                    filled
                    v-model="name"
                    label="Seu Nome"
                  />
                </div>
              </div>
              <div class="tw-p-2 tw-w-full md:tw-w-1/3">
                <div class="tw-relative">
                  <q-input
                    class="tw-col-span-2"
                    filled
                    v-model="email"
                    label="Seu E-mail"
                  />
                </div>
              </div>
              <div class="tw-p-2 tw-w-full md:tw-w-1/3">
                <div class="tw-relative">
                  <q-input
                    class="tw-col-span-2"
                    filled
                    v-model="phone"
                    label="Seu Telefone"
                  />
                </div>
              </div>
              <div class="tw-p-2 tw-w-full">
                <div class="tw-relative">
                  <q-input
                    class="tw-col-span-2"
                    filled
                    v-model="message"
                    autogrow
                    label="Sua Mensagem"
                  />
                </div>
              </div>
              <div class="tw-p-2 tw-w-full tw-flex tw-flex-col">
                <q-btn color="primary" class="tw-font-semibold !tw-text-black">
                  Enviar Contato
                </q-btn>
              </div>
              <div
                class="tw-p-2 tw-w-full tw-pt-8 tw-mt-8 tw-border-t tw-border-gray-800 tw-text-center"
              >
                <a class="tw-text-genesis">contato@aescolagenesis.com.br</a>
                <p class="tw-leading-normal tw-my-5">
                  Curitiba, PR <br />Brasil
                </p>
                <span class="tw-inline-flex">
                  <a class="tw-text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="tw-w-5 tw-h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="tw-ml-4 tw-text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="tw-w-5 tw-h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="tw-ml-4 tw-text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="tw-w-5 tw-h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path
                        d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
</script>

<style lang="scss" scoped>
</style>

