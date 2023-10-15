<template>
  <section class="banner lg:tw-min-h-[80vh] tw-flex">
    <AppContainer class="tw-flex-col tw-gap-10 lg:tw-flex-row tw-items-center">
      <div class="tw-w-full lg:tw-w-3/5 tw-box-border">
        <p
          class="tw-text-[40px] tw-font-extrabold tw-leading-normal tw-mb-5 tw-mt-[10vh] lg:tw-mt-auto g:tw-mb-10"
        >
          Descubra, Aprenda, Cresça: Aprofunde Sua Fé!
        </p>
        <p class="tw-text-lg tw-text-zinc-500 tw-mt-4 lg:tw-mb-10">
          Explore os segredos da Palavra de Deus, expanda seu conhecimento e
          fortaleça seus alicerces em nossa comunidade de cursos bíblicos online
        </p>
        <q-btn
          color="primary"
          text-color="black"
          class="tw-my-4 row tw-mb-[10vh] lg:tw-mb-auto"
          to="/cursos"
          size="1.2em"
        >
          Confira Nossos Cursos
        </q-btn>
      </div>
      <div
        class="tw-hidden md:tw-flex tw-w-full lg:tw-w-2/5 lg:tw-pl-10 tw-box-border"
      >
        <img src="~/assets/img/banner.png" />
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
</script>



<style>
</style>
