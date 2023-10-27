<template>
  <footer class="tw-text-gray-400 tw-body-font">
    <div class="tw-container tw-px-5 tw-py-24 tw-mx-auto">
      <div
        class="tw-flex tw-flex-wrap md:tw-text-left tw-text-center tw-order-first"
      >
        <div class="lg:tw-w-1/4 md:tw-w-1/2 tw-w-full tw-px-4">
          <h2
            class="tw-title-font tw-font-medium tw-text-white tw-tracking-widest tw-text-sm tw-mb-3"
          >
            Páginas Institucionais
          </h2>
          <nav class="tw-list-none tw-mb-10">
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Página Inicial</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Sobre Nós</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Planos</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Termos e Política de Compra</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Termos de Uso</NuxtLink
              >
            </li>
          </nav>
        </div>
        <div class="lg:tw-w-1/4 md:tw-w-1/2 tw-w-full tw-px-4">
          <h2
            class="tw-title-font tw-font-medium tw-text-white tw-tracking-widest tw-text-sm tw-mb-3"
          >
            Conta
          </h2>
          <nav class="tw-list-none tw-mb-10">
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Login</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Cadastre-se</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Esqueceu Sua Senha</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Minha Assinatura</NuxtLink
              >
            </li>
          </nav>
        </div>
        <div class="lg:tw-w-1/4 md:tw-w-1/2 tw-w-full tw-px-4">
          <h2
            class="tw-title-font tw-font-medium tw-text-white tw-tracking-widest tw-text-sm tw-mb-3"
          >
            Cursos
          </h2>
          <nav class="tw-list-none tw-mb-10">
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Categorias</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="tw-text-gray-400 tw-hover:text-white"
                >Todos os Cursos</NuxtLink
              >
            </li>
          </nav>
        </div>
        <div class="lg:tw-w-1/4 md:tw-w-1/2 tw-w-full tw-px-4">
          <h2
            class="tw-title-font tw-font-medium tw-text-white tw-tracking-widest tw-text-sm tw-mb-3"
          >
            Inscreva-se
          </h2>
          <div
            class="tw-flex tw-xl:flex-nowrap md:tw-flex-nowrap lg:tw-flex-wrap tw-flex-wrap tw-justify-center tw-items-end md:tw-justify-start"
          >
            <div
              class="tw-relative tw-w-3/4 sm:tw-w-auto tw-xl:mr-4 lg:tw-mr-0 sm:tw-mr-4 tw-mr-2"
            >
              <q-form
                @submit.prevent="onSubmit"
                class="q-gutter-md tw-flex tw-flex-col sm:tw-flex"
              >
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="email"
                  label="Seu Melhor E-mail"
                />

                <q-btn
                  color="primary"
                  class="lg:tw-tw-mt-2 tw-xl:tw-mt-0 tw-flex-shrink-0 tw-inline-flex !tw-text-black tw-border-0 tw-py-2 tw-px-6 tw-focus:tw-outline-none tw-hover:bg-indigo-600 tw-rounded"
                >
                  Cadastrar
                </q-btn>
              </q-form>
            </div>
          </div>
          <p
            class="tw-text-gray-500 tw-text-sm tw-mt-2 md:tw-text-left tw-text-center"
          >
            Cadastre-se na nossa newsletter e receba nossas novidades em seu
            e-mail
          </p>
        </div>
      </div>
    </div>
    <div class="tw-bg-gray-800 tw-bg-opacity-75">
      <div
        class="tw-container tw-px-5 tw-py-6 tw-mx-auto tw-flex tw-items-center sm:tw-flex-row tw-flex-col"
      >
        <NuxtLink
          to="/"
          class="tw-flex tw-title-font tw-font-medium tw-items-center md:tw-justify-start tw-justify-center tw-text-white"
        >
          <img src="@/assets/img/logo-amarela.png" class="tw-h-10" />
        </NuxtLink>
        <p class="tw-text-sm tw-text-gray-400 sm:tw-ml-6 sm:tw-mt-0 tw-mt-4">
          © 2023 Todos os Direitos Reservados
        </p>
        <span
          class="tw-inline-flex sm:tw-ml-auto sm:tw-mt-0 tw-mt-4 tw-justify-center sm:tw-justify-start"
        >
          <a class="tw-text-gray-400">
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
          <a class="tw-ml-3 tw-text-gray-400">
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
          <a class="tw-ml-3 tw-text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="tw-w-5 tw-h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a class="tw-ml-3 tw-text-gray-400">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="tw-w-5 tw-h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>

  <footer class="tw-pb-4">
    <AppContainer class="tw-grid tw-grid-cols-1 tw-gap-4">
      <p class="tw-text-sm tw-flex tw-items-center tw-justify-center tw-gap-2">
        Feito com <AppIcon name="mdi:heart-outline" /> por
        <a href="https://bigavalanche.com.br" target="_blank">Big Avalanche</a>
      </p>
    </AppContainer>
  </footer>
</template>

<script lang="ts" setup>
</script>



<style>
</style>
