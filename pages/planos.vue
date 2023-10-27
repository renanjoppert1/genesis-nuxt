<template>
  <section class="page-planos">
    <AppContainer class="tw-grid tw-gap-6 tw-grid-cols-1">
      <div
        class="title-wrapper tw-flex tw-flex-col tw-w-full md:tw-w-2/3 tw-m-auto tw-gap-6"
      >
        <AppPageTitle
          title="Tenha acesso ilimitado a todos os cursos e conteúdos"
          class="tw-text-center tw-text-3xl !tw-font-bold"
        />
        <p class="tw-text-center tw-text-lg">
          Eleve seu conhecimento sobre a bíblia e sobre diversos assuntos
          relacionados.
        </p>
      </div>

      <div
        class="plan-wrapper tw-flex tw-flex-col tw-w-full sm:tw-w-2/3 md:tw-w-3/5 lg:tw-w-2/5 tw-m-auto tw-gap-6"
      >
        <div
          class="plan-card tw-bg-[#121212] tw-w-full tw-box-border tw-p-8 tw-rounded-lg tw-text-center tw-flex tw-flex-col tw-gap-3"
        >
          <p class="tw-text-white tw-font-bold tw-text-2xl">Plano Mensal</p>
          <p class="tw-line-through">De R$34,90</p>
          <p class="tw-font-bold tw-text-genesis tw-text-4xl">R$0,00</p>
          <p class="tw-w-3/5 md:tw-w-4/5 tw-m-auto">
            Promoção Válida Para Novas Contas Nos Primeiros 30 Dias
          </p>

          <ul class="tw-text-base tw-flex tw-flex-col tw-gap-3 tw-mt-8 tw-mb-8">
            <li>25 Cursos e Contando</li>
            <li>390 Páginas de Conteúdos Exclusivos</li>
            <li>30 Categorias de Estudo</li>
            <li>Estude em qualquer horário e local</li>
          </ul>

          <q-btn
            color="primary"
            class="!tw-text-black tw-font-semibold tw-text-base"
          >
            Inicie Agora Seus 30 Dias Grátis
          </q-btn>
        </div>
      </div>

      <div class="faq-wrapper tw-flex tw-flex-col tw-w-full tw-m-auto">
        <div class="tw-py-6 sm:tw-py-8 lg:tw-py-12">
          <div class="tw-mx-auto tw-max-w-screen-2xl tw-px-4 md:tw-px-8">
            <!-- text - start -->
            <div class="tw-mb-10 md:tw-mb-16">
              <h2
                class="tw-mb-4 tw-text-center tw-text-2xl tw-font-bold tw-text-white md:tw-mb-6 lg:tw-text-3xl"
              >
                Perguntas Frequentes
              </h2>

              <p
                class="tw-mx-auto tw-max-w-screen-md tw-text-center tw-text-gray-500 md:tw-text-lg"
              >
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated.
              </p>
            </div>
            <!-- text - end -->

            <div
              class="tw-grid tw-gap-8 sm:tw-grid-cols-2 md:tw-gap-12 xl:tw-grid-cols-3 xl:tw-gap-16"
            >
              <!-- question - start -->
              <div v-for="item in 9" :key="item">
                <h3
                  class="tw-mb-2 tw-text-lg tw-font-semibold tw-text-genesis md:tw-text-xl"
                >
                  How does the product work?
                </h3>
                <p class="tw-text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
              </div>
              <!-- question - end -->
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
</script>

<style>
</style>

