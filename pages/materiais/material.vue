<template>
  <section class="page_curso">
    <AppContainer>
      <div class="row tw-w-full tw-grid tw-gap-6 tw-grid-cols-5 tw-box-border">
        <div
          class="book-quick-info tw-bg-white/[0.05] tw-rounded-md tw-col-span-5 md:tw-col-span-2 tw-flex md:tw-flex-col tw-gap-5 tw-box-border tw-p-4"
        >
          <div
            class="book-thumbnail tw-flex tw-w-1/3 md:tw-w-full tw-justify-center"
          >
            <img
              src="@/assets/img/ebook-thumbnail.jpg"
              class="tw-w-full tw-rounded-md tw-mb-4"
            />
          </div>

          <div class="book-information tw-w-2/3 md:tw-w-full">
            <ul class="tw-text-base tw-leading-9">
              <li>Data da Publicação: 12/10/2023</li>
              <li>Total de Downloads: 48</li>
              <li>Categorias: Devocional, Teologia, Estudo Bíblico</li>
            </ul>

            <q-btn
              color="primary"
              class="tw-w-full tw-mt-3 !tw-text-black tw-font-bold tw-text-base"
            >
              Download
            </q-btn>
          </div>
        </div>

        <div
          class="book-quick-info tw-bg-white/[0.05] tw-rounded-md tw-col-span-5 md:tw-col-span-3 tw-grow tw-gap-5 tw-box-border tw-p-4 tw-space-y-2 tw-text-base"
        >
          <h1 class="tw-text-genesis tw-font-bold tw-text-3xl tw-mb-4">
            Nome do Livro
          </h1>

          <q-separator class="tw-mb-4" />
          <h2 class="tw-text-lg tw-font-semibold">Descrição</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper
          </p>
          <p>
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod quis nostrud exerci tation ullamcorper tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
            nisl ut aliquip ex ea commodo consequat.
          </p>
          <p>
            mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam,suscipit lobortis nisl ut aliquip ex ea commodo
            consequat
          </p>
          <b>
            Assum consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt</b
          >
          <p>
            Diam nonummy nibh euismod erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
            nisl ut aliquip ex ea commodo consequat
          </p>
          <p>
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            veniam
          </p>
          <h4>Book Information</h4>
          <p class="tw-mb-0"><strong>Page Count</strong>: 118</p>
          <p class="tw-mt-0"><strong>Word Count</strong>: 15872</p>
        </div>
      </div>
    </AppContainer>

    <AppContainer class="tw-flex tw-flex-col tw-flex-row">
      <h2 class="tw-text-genesis tw-font-bold tw-text-3xl tw-mb-4">
        Cursos Relacionados
      </h2>
      <div class="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-5 tw-gap-3">
        <MaterialCard />
        <MaterialCard />
        <MaterialCard />
        <MaterialCard />
        <MaterialCard />
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
</script>

<style>
</style>

