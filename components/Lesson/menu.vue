<template>
  <div class="wrapper tw-px-5 tw-pt-5">
    <q-btn flat color="primary">
      <span class="tw-flex tw-items-center tw-gap-4 tw-w-full">
        <AppIcon name="lets-icons:back" /> Voltar Para o Site
      </span>
    </q-btn>
    <h1 class="tw-font-extrabold tw-text-[#2e2e2e] tw-text-2xl">
      Nome da Aula
    </h1>
  </div>

  <q-separator color="dark" class="tw-my-4" />

  <div class="wrapper tw-px-5 tw-pt-5">
    <div class="tw-w-ful">
      <q-expansion-item
        :dark="false"
        expand-separator
        group="somegroup"
        default-opened
      >
        <template v-slot:header>
          <q-item-section avatar>
            <AppIcon
              name="bi:play-btn"
              class="tw-text-genesis tw-font-bold tw-text-lg"
            />
          </q-item-section>

          <q-item-section class="tw-text-genesis tw-font-bold tw-text-lg">
            Nome do Módulo
          </q-item-section>
        </template>

        <q-card class="tw-bg-transparent tw-text-zinc-900">
          <q-card-section>
            <ul class="tw-text-base tw-flex tw-flex-col tw-gap-4">
              <li
                class="tw-flex tw-items-center tw-gap-3 tw-text-genesis tw-font-extrabold"
              >
                <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                  <div class="icon">
                    <AppIcon name="icon-park-outline:check-one" />
                  </div>
                  <div class="content">
                    Como lidar com crianças
                    <br />
                    <span class="tw-text-sm">15 Minutos</span>
                  </div>
                </div>
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                  <div class="icon">
                    <AppIcon name="icon-park-solid:check-one" />
                  </div>
                  <div class="content">
                    Como lidar com crianças
                    <br />
                    <span class="tw-text-sm">15 Minutos</span>
                  </div>
                </div>
              </li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item :dark="false" expand-separator group="somegroup">
        <template v-slot:header>
          <q-item-section avatar>
            <AppIcon
              name="bi:play-btn"
              class="tw-text-zinc-700 tw-font-bold tw-text-lg"
            />
          </q-item-section>

          <q-item-section class="tw-text-zinc-700 tw-font-bold tw-text-lg">
            Nome do Módulo
          </q-item-section>
        </template>

        <q-card class="tw-bg-transparent tw-text-zinc-900">
          <q-card-section>
            <ul class="tw-text-base tw-flex tw-flex-col tw-gap-4">
              <li class="tw-flex tw-items-center tw-gap-3">
                <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                  <div class="icon">
                    <AppIcon name="icon-park-outline:check-one" />
                  </div>
                  <div class="content">
                    Como lidar com crianças
                    <br />
                    <span class="tw-text-sm">15 Minutos</span>
                  </div>
                </div>
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                  <div class="icon">
                    <AppIcon name="icon-park-solid:check-one" />
                  </div>
                  <div class="content">
                    Como lidar com crianças
                    <br />
                    <span class="tw-text-sm">15 Minutos</span>
                  </div>
                </div>
              </li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
</style>