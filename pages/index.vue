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
        class="tw-hidden lg:tw-flex tw-w-full lg:tw-w-2/5 lg:tw-pl-10 tw-box-border"
      >
        <img src="~/assets/img/banner.png" />
      </div>
    </AppContainer>
  </section>

  <section class="categories">
    <AppContainer class="tw-flex-col tw-py-[10vh]">
      <p
        class="tw-w-full tw-flex tw-justify-center tw-text-[34px] tw-font-bold tw-mb-10 tw-text-genesis"
      >
        O Que Você Quer Aprender Hoje?
      </p>

      <div
        class="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8"
      >
        <q-btn
          :outline="categories.outline"
          :color="categories.color"
          :padding="categories.padding"
          :size="categories.iconSize"
          :text-color="categories.textColor"
        >
          <AppIcon name="fa6-solid:book-bible" class="tw-mr-4" />
          <span :class="`${categories.classTextSize}`">Estudo Bíblico</span>
        </q-btn>

        <q-btn
          :outline="categories.outline"
          :color="categories.color"
          :padding="categories.padding"
          :size="categories.iconSize"
          :text-color="categories.textColor"
        >
          <AppIcon name="mdi:cross" class="tw-mr-4" />
          <span :class="`${categories.classTextSize}`"
            >Vida Cristã na Prática</span
          >
        </q-btn>

        <q-btn
          :outline="categories.outline"
          :color="categories.color"
          :padding="categories.padding"
          :size="categories.iconSize"
          :text-color="categories.textColor"
        >
          <AppIcon name="fa6-solid:people-line" class="tw-mr-4" />
          <span :class="`${categories.classTextSize}`"
            >Ministério e Liderança</span
          >
        </q-btn>

        <q-btn
          :outline="categories.outline"
          :color="categories.color"
          :padding="categories.padding"
          :size="categories.iconSize"
          :text-color="categories.textColor"
        >
          <AppIcon name="mingcute:user-1-line" class="tw-mr-4" />
          <span :class="`${categories.classTextSize}`">Vida Devocional </span>
        </q-btn>

        <q-btn
          :outline="categories.outline"
          :color="categories.color"
          :padding="categories.padding"
          :size="categories.iconSize"
          :text-color="categories.textColor"
        >
          <AppIcon name="solar:book-broken" class="tw-mr-4" />
          <span :class="`${categories.classTextSize}`">História Cristã </span>
        </q-btn>

        <q-btn
          :outline="categories.outline"
          :color="categories.color"
          :padding="categories.padding"
          :size="categories.iconSize"
          :text-color="categories.textColor"
        >
          <AppIcon name="game-icons:guitar-bass-head" class="tw-mr-4" />
          <span :class="`${categories.classTextSize}`">Louvor e Adoração </span>
        </q-btn>
      </div>
    </AppContainer>
  </section>

  <section class="popular-courses tw-py-[10vh]">
    <AppContainer class="tw-flex-col tw-gap-10 lg:tw-flex-row tw-items-center">
      <div class="tw-w-full lg:tw-w-1/2">
        <p
          class="tw-w-full tw-flex tw-justify-center lg:tw-justify-start tw-text-[34px] tw-font-bold tw-mb-10 tw-text-genesis"
        >
          Cursos em Alta
        </p>
        <p
          class="tw-text-lg tw-justify-center !tw-text-zinc-400 tw-mt-4 lg:tw-mb-10"
        >
          Aqui estão os cursos mais feitos pelos alunos da Escola Genesis
        </p>
        <q-btn
          color="primary"
          text-color="black"
          class="tw-my-4 row tw-mb-[10vh] lg:tw-mb-auto"
          to="/cursos/categoria/destaque"
          size="1.2em"
        >
          Confira Os Cursos em Destaque
        </q-btn>
      </div>
      <div class="tw-grow">
        <q-carousel
          v-model="popularCoursesCarousel"
          animated
          control-type="flat"
          control-color="primary"
          navigation
          navigation-position="bottom"
          arrows
          infinite
          height="auto"
          class="tw-bg-transparent"
        >
          <q-carousel-slide
            v-for="slide in slides"
            :key="`slide-popuplar-courses-${slide}`"
            :name="slide"
            class="column no-wrap flex-center"
          >
            <HomeCourseCard
              title="Teste"
              author="Renan Joppert"
              totalHours="0"
            />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </AppContainer>
  </section>

  <section class="fresh-courses tw-py-[10vh]">
    <AppContainer class="tw-flex-col tw-gap-10 lg:tw-flex-row tw-items-center">
      <div class="tw-w-full lg:tw-w-1/2">
        <p
          class="tw-w-full tw-flex tw-justify-center lg:tw-justify-start tw-text-[34px] tw-font-bold tw-mb-10 tw-text-genesis"
        >
          Cursos Para Terminar Hoje
        </p>
        <p
          class="tw-text-lg tw-justify-center !tw-text-zinc-400 tw-mt-4 lg:tw-mb-10"
        >
          Separamos para você alguns cursos rápidos para você começar e terminar
          hoje!
        </p>

        <q-btn
          color="primary"
          text-color="black"
          class="tw-my-4 row tw-mb-[10vh] lg:tw-mb-auto"
          to="/cursos/categoria/destaque"
          size="1.2em"
        >
          Confira Os Cursos Rápidos
        </q-btn>
      </div>
      <div class="tw-grow">
        <q-carousel
          v-model="popularCoursesCarousel"
          animated
          control-type="flat"
          control-color="primary"
          navigation
          navigation-position="bottom"
          arrows
          infinite
          height="auto"
          class="tw-bg-transparent"
        >
          <q-carousel-slide
            v-for="slide in slides"
            :key="`slide-popuplar-courses-${slide}`"
            :name="slide"
            class="column no-wrap flex-center"
          >
            <HomeCourseCard
              title="Teste"
              author="Renan Joppert"
              totalHours="0"
            />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </AppContainer>
  </section>

  <section class="newsletter tw-py-[10vh]">
    <AppContainer class="tw-flex-col tw-gap-10 lg:tw-flex-row tw-items-center">
      <div class="tw-w-full lg:tw-w-1/2">
        <p
          class="tw-w-full tw-flex tw-justify-center lg:tw-justify-start tw-text-[34px] tw-font-bold tw-mb-10 tw-text-genesis"
        >
          Fique Por Dentro das Novidades
        </p>
        <p
          class="tw-text-lg tw-justify-center !tw-text-zinc-400 tw-mt-4 lg:tw-mb-10"
        >
          Não perca nenhuma novidade aqui da Escola Genesis! Cadastre-se no
          campo de e-mail ao lado!
        </p>
      </div>
      <div class="tw-grow">
        <q-form
          @submit.prevent="onSubmit"
          class="q-gutter-md tw-grid tw-grid-cols-3"
        >
          <q-input
            class="tw-col-span-2"
            filled
            v-model="email"
            label="Seu Melhor E-mail"
          />
          <q-btn
            color="primary"
            text-color="black"
            class="tw-my-4 tw-mb-[10vh] lg:tw-mb-auto"
            type="submit"
            size="1.2em"
          >
            Cadastrar
          </q-btn>
        </q-form>
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
import { useQuasar } from "quasar";

const $q = useQuasar();

const categories = ref({
  iconSize: "24px",
  color: "primary",
  padding: "1.5em",
  textColor: "primary",
  classTextSize: "tw-text-base",
  outline: true,
});

const slides = ref(6);
const popularCoursesCarousel = ref(1);

const email = ref("");

function onSubmit() {
  console.log("Olá mundo");
  $q.notify({
    type: "positive",
    message: "E-mail cadastrado com sucesso",
    position: "top-right",
    progress: true,
    actions: [
      {
        icon: "close",
        color: "white",
        round: true,
        handler: () => {
          /* ... */
        },
      },
    ],
  });
}
</script>



<style>
</style>
