<template>
  <section class="page__dashboard">
    <AppContainer class="tw-flex-col tw-gap-10">
      <AppPageTitle title="Área do Aluno" />

      <h2 class="tw-text-xl tw-font-bold tw-text-genesis">
        Meus Cursos em Andamento
      </h2>

      <div
        class="tw-w-full tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-10"
      >
        <q-card class="my-card" flat bordered v-for="item in 3" :key="item">
          <q-img src="@/assets/img/course-cover-1200-610.svg" />
          <div>
            <q-linear-progress
              :value="0.5"
              color="primary"
              track-color="grey"
              class="q-mt-sm"
            />
            <p class="tw-text-sm tw-w-full tw-text-center tw-pt-2">50%</p>
          </div>

          <q-card-section class="tw-pt-0">
            <div class="text-h5 q-mt-sm">Nome do Curso</div>
            <div class="text-caption text-grey">
              Aula atual: Nome da Aula - 3min
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn class="tw-font-bold tw-w-full" color="primary">
              <div
                class="tw-w-full tw-flex items-center tw-justify-center tw-text-black"
              >
                <AppIcon name="ph:play-bold" class="tw-text-lg tw-mr-2" />
                Continuar de Onde Parou
              </div>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <h2 class="tw-text-xl tw-font-bold tw-text-genesis">
        Você Pode Assistir Também...
      </h2>

      <div
        class="tw-w-full tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-10"
      >
        <q-card class="my-card" flat bordered v-for="item in 3" :key="item">
          <q-img src="@/assets/img/course-cover-1200-610.svg" />

          <q-card-section>
            <div class="text-h5 q-mt-sm">Nome do Curso</div>
            <div class="text-caption text-grey">
              Aula atual: Nome da Aula - 3min
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn class="tw-font-bold tw-w-full" color="primary">
              <div
                class="tw-w-full tw-flex items-center tw-justify-center tw-text-black"
              >
                <AppIcon name="ph:play-bold" class="tw-text-lg tw-mr-2" />
                Continuar de Onde Parou
              </div>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <section class="categories">
        <AppContainer class="tw-flex-col tw-py-[10vh]">
          <p
            class="tw-w-full tw-flex tw-justify-start tw-text-xl tw-font-bold tw-mb-10 tw-text-genesis"
          >
            Escolha o Assunto Que Você Quer Aprender
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
              <span :class="`${categories.classTextSize}`"
                >Vida Devocional
              </span>
            </q-btn>

            <q-btn
              :outline="categories.outline"
              :color="categories.color"
              :padding="categories.padding"
              :size="categories.iconSize"
              :text-color="categories.textColor"
            >
              <AppIcon name="solar:book-broken" class="tw-mr-4" />
              <span :class="`${categories.classTextSize}`"
                >História Cristã
              </span>
            </q-btn>

            <q-btn
              :outline="categories.outline"
              :color="categories.color"
              :padding="categories.padding"
              :size="categories.iconSize"
              :text-color="categories.textColor"
            >
              <AppIcon name="game-icons:guitar-bass-head" class="tw-mr-4" />
              <span :class="`${categories.classTextSize}`"
                >Louvor e Adoração
              </span>
            </q-btn>
          </div>
        </AppContainer>
      </section>

      <h2 class="tw-text-xl tw-font-bold tw-text-genesis">
        Chegou a Hora da Leitura
      </h2>

      <div
        class="ebook-list tw-flex tw-flex-wrap tw-gap-10 tw-mt-10 tw-justify-center md:tw-justify-start"
      >
        <MaterialCard />
        <MaterialCard />
        <MaterialCard />
        <MaterialCard />
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