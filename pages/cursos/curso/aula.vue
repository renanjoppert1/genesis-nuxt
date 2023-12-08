<template>
  <section class="page_aula tw-w-full tw-min-h-screen tw-flex">
    <!-- Sidebar -->
    <div
      class="tw-bg-white tw-h-screen tw-w-[350px] tw-hidden lg:tw-flex lg:tw-flex-col"
    >
      <LessonMenu />
    </div>

    <q-drawer
      side="left"
      v-model="menuDrawer"
      overlay
      :dark="false"
      :width="350"
    >
      <q-btn
        class="tw-absolute tw-right-2 tw-top-2 tw-z-20 tw-text-zinc-900"
        flat
        round
        dense
        icon="close"
        @click="hideMenu()"
      />
      <LessonMenu />
    </q-drawer>
    <!-- ./ Sidebar -->

    <!-- Lesson Content -->

    <div
      class="tw-flex tw-flex-col tw-grow tw-py-8 tw-pr-0 tw-px-10 tw-h-screen"
    >
      <q-scroll-area class="fit tw-pr-8">
        <div class="menu-button tw-flex lg:tw-hidden">
          <q-btn flat icon="menu" label="MENU" @click="toggeMenu()" />
        </div>
        <div
          class="title-wrapper tw-flex tw-flex-col md:tw-flex-row md:tw-items-center"
        >
          <h1
            class="tw-font-extrabold tw-text-white tw-text-2xl tw-w-full md:tw-w-1/2"
          >
            Nome da Aula
          </h1>
          <div class="tw-w-full md:tw-w-1/2 md:tw-text-right">
            <q-btn
              class="tw-mt-4 tw-font-bold"
              color="primary"
              style="color: goldenrod"
              outline
            >
              <div class="tw-w-full tw-flex items-center">
                <AppIcon
                  name="akar-icons:check-box"
                  class="tw-text-lg tw-mr-2"
                />
                Marcar Aula Como Concluída
              </div>
            </q-btn>
          </div>
        </div>

        <div class="lesson__content tw-w-full">
          <iframe
            class="tw-w-full tw-h-[650px] tw-mt-10"
            src="https://www.youtube-nocookie.com/embed/gumqIq4JBgY?si=jfluJ9YnhDd8Qrpn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div class="btn-group tw-flex">
            <div class="tw-w-1/2">
              <q-btn class="tw-mt-4 tw-font-bold" color="primary">
                <div class="tw-w-full tw-flex items-center tw-text-black">
                  <AppIcon
                    name="ooui:previous-ltr"
                    class="tw-text-lg tw-mr-2"
                  />
                  Ir Para Aula Anterior
                </div>
              </q-btn>
            </div>
            <div class="tw-w-1/2 tw-text-right">
              <q-btn class="tw-mt-4 tw-font-bold" color="primary">
                <div class="tw-w-full tw-flex items-center tw-text-black">
                  Ir Para a Próxima Aula
                  <AppIcon name="ooui:next-ltr" class="tw-text-lg tw-ml-2" />
                </div>
              </q-btn>
            </div>
          </div>

          <div class="description tw-flex tw-flex-col tw-gap-6">
            <h2 class="tw-text-2xl tw-font-bold tw-mt-8">Descrição da Aula</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper
            </p>
            <p>
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod quis nostrud exerci tation ullamcorper
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod quis nostrud exerci tation ullamcorper
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod quis nostrud exerci tation ullamcorper
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <h2 class="tw-text-2xl tw-font-bold tw-mt-8">Anexos da Aula</h2>

            <div class="tw-w-full">
              <!-- List Group -->
              <ul
                class="tw-flex tw-flex-col tw-justify-end text-start tw--space-y-px"
              >
                <li
                  class="tw-flex tw-items-center tw-gap-x-2 tw-p-3 tw-text-sm tw-bg-white tw-border tw-text-gray-800 first:tw-rounded-t-lg first:tw-mt-0 last:tw-rounded-b-lg dark:bg-slate-900 dark:tw-border-gray-700 dark:tw-text-gray-200"
                >
                  <div class="tw-w-full tw-flex tw-justify-between tw-truncate">
                    <span class="me-3 tw-flex-1 tw-w-0 tw-truncate">
                      resume_web_ui_developer.csv
                    </span>
                    <button
                      type="button"
                      class="tw-flex tw-items-center tw-gap-x-2 tw-text-gray-500 hover:tw-text-genesis tw-whitespace-nowrap dark:focus:tw-outline-none dark:focus:tw-ring-1 dark:focus:tw-ring-gray-600"
                    >
                      <svg
                        class="tw-flex-shrink-0 tw-w-4 tw-h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                        ></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                      </svg>
                      Download
                    </button>
                  </div>
                </li>
              </ul>
              <!-- End List Group -->
            </div>
          </div>
        </div>
      </q-scroll-area>
    </div>
    <!-- ./ Lesson Content -->
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "lesson",
});

const menuDrawer = ref(false);

function showMenu() {
  menuDrawer.value = true;
}

function toggeMenu() {
  menuDrawer.value = !menuDrawer.value;
}

function hideMenu() {
  menuDrawer.value = false;
}
</script>

<style>
</style>