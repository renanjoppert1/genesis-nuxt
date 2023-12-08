<template>
  <section class="page__dashboard">
    <AppContainer class="tw-flex-col tw-gap-10">
      <AppPageTitle title="Certificados" />

      <StudentAreaNavbar />

      <div
        class="tw-bg-white/[0.05] tw-rounded-md tw-w-full tw-p-4 tw-text-base"
      >
        <p class="tw-font-semibold tw-text-xl tw-my-6">Meus Certificados</p>

        <q-card class="tw-mb-10">
          <q-card-section>
            <div
              class="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-5 tw-gap-5 tw-items-center"
            >
              <div class="course-thumbnail">
                <img
                  src="@/assets/img/course-cover-1200-610.svg"
                  class="tw-w-full tw-rounded-md"
                />
              </div>
              <div
                class="course-data md:tw-col-span-4 tw-flex tw-flex-col tw-gap-2"
              >
                <p class="tw-text-white tw-text-lg">Nome do Curso</p>
                <p>Finalizado em: 08/12/2023</p>
                <p>Carga Horária: 05 horas</p>
                <div class="tw-w-full">
                  <q-btn
                    color="primary"
                    label="Baixar Certificado"
                    class="!tw-text-black"
                  />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
</script>

<style>
</style>