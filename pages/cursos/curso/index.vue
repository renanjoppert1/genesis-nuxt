<template>
  <section class="page_curso">
    <div
      class="tw-w-full tw-bg-genesis tw-min-h-[200px] tw-py-10 tw-text-black"
    >
      <AppContainer class="tw-flex tw-flex-col">
        <h1 class="tw-text-xl tw-font-bold lg:tw-text-3xl tw-mb-4">
          Nome do Curso
        </h1>
        <ul class="tw-text-base tw-flex tw-flex-col">
          <li class="tw-flex tw-items-center tw-gap-4">
            <AppIcon name="lucide:users" /> 48 alunos matriculados
          </li>
          <li class="tw-flex tw-items-center tw-gap-4">
            <AppIcon name="formkit:time" /> 18 horas de conteúdo
          </li>
          <li class="tw-flex tw-items-center tw-gap-1">
            <AppIcon name="solar:tag-line-duotone" class="tw-mr-3" />
            <NuxtLink>Devocional</NuxtLink>, <NuxtLink>Teologia</NuxtLink>,
            <NuxtLink>Estudo Bíblico</NuxtLink>
          </li>
        </ul>
      </AppContainer>
    </div>

    <AppContainer>
      <div class="row tw-w-full tw-grid tw-gap-6 tw-grid-cols-5 tw-box-border">
        <div
          class="book-quick-info tw-bg-white/[0.05] tw-rounded-md tw-col-span-5 md:tw-col-span-3 tw-grow tw-gap-5 tw-box-border tw-p-4 tw-space-y-2 tw-text-base"
        >
          <div class="tw-flex tw-flex-col tw-w-full md:tw-hidden tw-mb-10">
            <img
              src="@/assets/img/course-cover.svg"
              class="tw-w-full tw-rounded-md tw-mb-4"
            />

            <q-btn
              color="primary"
              class="tw-w-full tw-mt-3 !tw-text-black tw-font-bold tw-text-base"
              to="/cursos/curso/aula"
            >
              Começar o Curso
            </q-btn>
          </div>

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

          <h2 class="tw-text-lg tw-font-semibold tw-pt-6 tw-block">Aulas</h2>

          <div class="tw-w-full">
            <q-expansion-item expand-separator group="somegroup" default-opened>
              <template v-slot:header>
                <q-item-section avatar>
                  <AppIcon name="bi:play-btn" />
                </q-item-section>

                <q-item-section> Nome do Módulo </q-item-section>

                <q-item-section side>
                  <div class="row items-center">04:00 Horas de Conteúdo</div>
                </q-item-section>
              </template>

              <q-card>
                <q-card-section>
                  <ul class="tw-text-base tw-leading-9">
                    <li class="tw-flex tw-items-center tw-gap-3">
                      <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                        <AppIcon name="fa6-solid:check" /> Como lidar com
                        crianças
                      </div>
                      <div>15:25 Minutos</div>
                    </li>
                    <li class="tw-flex tw-items-center tw-gap-3">
                      <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                        <AppIcon name="fa6-solid:check" /> Como lidar com
                        crianças
                      </div>
                      <div>15:25 Minutos</div>
                    </li>
                    <li class="tw-flex tw-items-center tw-gap-3">
                      <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                        <AppIcon name="fa6-solid:check" /> Como lidar com
                        crianças
                      </div>
                      <div>15:25 Minutos</div>
                    </li>
                    <li class="tw-flex tw-items-center tw-gap-3">
                      <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                        <AppIcon name="fa6-solid:check" /> Como lidar com
                        crianças
                      </div>
                      <div>15:25 Minutos</div>
                    </li>
                  </ul>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item expand-separator group="somegroup">
              <template v-slot:header>
                <q-item-section avatar>
                  <AppIcon name="bi:play-btn" />
                </q-item-section>

                <q-item-section> Nome do Módulo </q-item-section>

                <q-item-section side>
                  <div class="row items-center">04:00 Horas de Conteúdo</div>
                </q-item-section>
              </template>

              <q-card>
                <q-card-section>
                  <ul class="tw-text-base tw-leading-9">
                    <li class="tw-flex tw-items-center tw-gap-3">
                      <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                        <AppIcon name="fa6-solid:check" /> Como lidar com
                        crianças
                      </div>
                      <div>15:25 Minutos</div>
                    </li>
                    <li class="tw-flex tw-items-center tw-gap-3">
                      <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                        <AppIcon name="fa6-solid:check" /> Como lidar com
                        crianças
                      </div>
                      <div>15:25 Minutos</div>
                    </li>
                    <li class="tw-flex tw-items-center tw-gap-3">
                      <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                        <AppIcon name="fa6-solid:check" /> Como lidar com
                        crianças
                      </div>
                      <div>15:25 Minutos</div>
                    </li>
                    <li class="tw-flex tw-items-center tw-gap-3">
                      <div class="tw-flex tw-items-center tw-grow tw-gap-3">
                        <AppIcon name="fa6-solid:check" /> Como lidar com
                        crianças
                      </div>
                      <div>15:25 Minutos</div>
                    </li>
                  </ul>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </div>

        <div
          class="course-quick-info tw-bg-white/[0.05] lg:tw-bg-[#171517] tw-rounded-md tw-col-span-5 md:tw-col-span-2 tw-flex md:tw-flex-col tw-gap-5 tw-box-border tw-p-4 lg:-tw-mt-60"
        >
          <div
            class="book-thumbnail tw-flex tw-w-1/3 md:tw-w-full tw-justify-center tw-hidden md:tw-block"
          >
            <img
              src="@/assets/img/course-cover.svg"
              class="tw-w-full tw-rounded-md tw-mb-4"
            />
          </div>

          <div class="book-information tw-w-2/3 md:tw-w-full">
            <ul class="tw-text-base tw-leading-9">
              <li>Data da Publicação do Curso: 12/10/2023</li>
              <li>Data da Última Atualização: 12/10/2023</li>
            </ul>

            <q-btn
              color="primary"
              class="tw-w-full tw-mt-3 !tw-text-black tw-font-bold tw-text-base tw-hidden md:tw-flex"
              to="/cursos/curso/aula"
            >
              Começar o Curso
            </q-btn>

            <h3
              class="tw-font-semibold tw-text-lg tw-mt-6 tw-flex tw-items-center tw-gap-3 tw-mb-3"
            >
              <AppIcon name="mdi:target-user" />Para Quem É Este Curso?
            </h3>
            <p>
              Este curso é ideal para pessoas que trabalham ativamente no
              ministério infantil, com crianças ou quer participar de ministério
              com estes propósitos.
            </p>

            <h3
              class="tw-font-semibold tw-text-lg tw-mt-6 tw-flex tw-items-center tw-gap-3 tw-mb-3"
            >
              <AppIcon name="fluent:learning-app-24-regular" />O Que Eu Vou
              Aprender?
            </h3>

            <ul class="tw-text-base tw-leading-9">
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Como lidar com crianças
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Vocação com as crianças
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Enfrentar problemas
                espirituais na área infantil
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Aprendizado Completo Um
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Aprendizado Completo Dois
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Aprendizado Completo Três
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Aprendizado Completo Quatro
              </li>
            </ul>

            <h3
              class="tw-font-semibold tw-text-lg tw-mt-6 tw-flex tw-items-center tw-gap-3 tw-mb-3"
            >
              <AppIcon name="carbon:list-boxes" />O Que Eu Terei no Curso?
            </h3>
            <ul class="tw-text-base tw-leading-9">
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Aulas em Vídeo
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Certificado
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Suporte do Conteúdo via
                Whatsapp
              </li>
              <li class="tw-flex tw-items-center tw-gap-3">
                <AppIcon name="fa6-solid:check" /> Todos os Materiais das Aulas
                em Anexo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AppContainer>

    <AppContainer class="tw-flex tw-flex-col tw-flex-row">
      <h2 class="tw-text-genesis tw-font-bold tw-text-3xl tw-mb-4">
        Cursos Relacionados
      </h2>
      <div class="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-3">
        <CourseCard />
        <CourseCard />
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
</script>

<style>
</style>

