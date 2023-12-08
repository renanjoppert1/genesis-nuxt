<template>
  <header>
    <AdminPageTitle
      page-title="Usuários"
      module-name="Usuários"
      module-link="/admin/users"
      page-name="Listagem"
      page-link="/admin/users"
    />
  </header>

  <div
    class="tw-bg-white/5 tw-rounded-lg tw-p-6 tw-box-border tw-shadow-lg tw-mt-8"
  >
    <div class="tw-w-full tw-grid md:tw-grid-cols-2 tw-gap-4">
      <div class="tw-order-2 md:tw-order-1">
        <q-input v-model="searchField" filled bottom-slots label="Buscar">
          <template v-slot:prepend>
            <q-icon
              v-if="searchField.length > 0"
              name="close"
              @click="searchField = ''"
              class="cursor-pointer"
            />
          </template>
          <template v-slot:append>
            <q-icon name="search" class="cursor-pointer" />
          </template>

          <!-- <template v-slot:hint>
          <span class="tw-mb-4 tw-flex tw-w-full">Field hint</span>
        </template> -->
        </q-input>
      </div>
      <div class="tw-w-full tw-flex md:tw-justify-end tw-order-1 md:tw-order-2">
        <div>
          <q-btn
            color="primary"
            class="!tw-text-black tw-text-base tw-mt-2"
            to="/admin/users/novo"
          >
            <div class="tw-w-full tw-flex tw-items-center tw-gap-2">
              <AppIcon name="mdi-light:plus-box" class="tw-text-2xl" />
              <span>Adicionar Usuário</span>
            </div></q-btn
          >
        </div>
      </div>
    </div>
    <q-separator class="tw-mt-4" />
    <!-- component -->
    <div class="tw-flex tw-items-center tw-justify-center">
      <div class="tw-overflow-x-auto tw-w-full">
        <table class="tw-min-w-full tw-w-full tw-shadow-md tw-rounded-xl">
          <thead>
            <tr class="bg-blue-gray-100">
              <th class="tw-py-3 tw-px-4 tw-text-left">Nome</th>
              <th class="tw-py-3 tw-px-4 tw-text-left">E-mail</th>
              <th class="tw-py-3 tw-px-4 tw-text-left tw-px-4 tw-w-1/4">
                Ações
              </th>
            </tr>
          </thead>
          <tbody class="text-blue-gray-900">
            <tr class="tw-border-b tw-border-blue-gray-200">
              <td class="tw-py-3 tw-px-4">Usuário Teste</td>
              <td class="tw-py-3 tw-px-4">renanljp@gmail.com</td>
              <td class="tw-py-3 tw-flex tw-gap-4">
                <q-btn color="primary">
                  <AppIcon name="mdi:eye" class="tw-text-black tw-text-lg" />
                  <q-tooltip
                    anchor="top middle"
                    self="center middle"
                    class="tw-bg-black/80"
                  >
                    <span class="tw-text-base">Ver</span>
                  </q-tooltip>
                </q-btn>
                <q-btn color="primary">
                  <AppIcon
                    name="tabler:edit"
                    class="tw-text-black tw-text-lg"
                  />
                  <q-tooltip
                    anchor="top middle"
                    self="center middle"
                    class="tw-bg-black/80"
                  >
                    <span class="tw-text-base">Editar</span>
                  </q-tooltip>
                </q-btn>
                <q-btn color="primary">
                  <AppIcon
                    name="tabler:trash"
                    class="tw-text-black tw-text-lg"
                  />
                  <q-tooltip
                    anchor="top middle"
                    self="center middle"
                    class="tw-bg-black/80"
                  >
                    <span class="tw-text-base">Excluir</span>
                  </q-tooltip>
                </q-btn>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="tw-w-full">
          <div
            class="tw-grid min-h-[140px] tw-w-full tw-place-items-center tw-overflow-x-scroll tw-rounded-lg tw-p-6 lg:tw-overflow-visible"
          >
            <nav>
              <ul class="tw-flex">
                <li>
                  <q-btn
                    class="tw-mx-1 tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-blue-gray-100 tw-bg-transparent tw-p-0 tw-text-sm text-blue-gray-500 tw-transition tw-duration-150 tw-ease-in-out hover:bg-light-300"
                    aria-label="Previous"
                  >
                    <span class="material-icons tw-text-sm"
                      >keyboard_arrow_left</span
                    >
                  </q-btn>
                </li>
                <li>
                  <q-btn
                    class="tw-mx-1 tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-md tw-bg-genesis tw-p-0 tw-text-sm tw-text-white tw-shadow-md tw-transition tw-duration-150 tw-ease-in-out"
                    >1</q-btn
                  >
                </li>
                <li>
                  <q-btn
                    class="tw-mx-1 tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-blue-gray-100 tw-bg-transparent tw-p-0 tw-text-sm text-blue-gray-500 tw-transition tw-duration-150 tw-ease-in-out hover:bg-light-300"
                    >2</q-btn
                  >
                </li>
                <li>
                  <q-btn
                    class="tw-mx-1 tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-blue-gray-100 tw-bg-transparent tw-p-0 tw-text-sm text-blue-gray-500 tw-transition tw-duration-150 tw-ease-in-out hover:bg-light-300"
                    >3</q-btn
                  >
                </li>
                <li>
                  <q-btn
                    class="tw-mx-1 tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-blue-gray-100 tw-bg-transparent tw-p-0 tw-text-sm text-blue-gray-500 tw-transition tw-duration-150 tw-ease-in-out hover:bg-light-300"
                    aria-label="Next"
                  >
                    <span class="material-icons tw-text-sm"
                      >keyboard_arrow_right</span
                    >
                  </q-btn>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
});

const searchField = ref("");
</script>

<style>
</style>

