<template>
  <section>
    <AppContainer class="tw-flex-col tw-gap-10 lg:tw-flex-row">
      <div class="lg:tw-w-3/12 tw-space-y-4 lg:tw-block tw-hidden">
        <div class="tw-flex tw-flex-col">
          <p class="tw-text-xl">Categorias</p>
          <q-select
            filled
            v-model="searchCategorieModel"
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            :options="searchOptions"
            style="width: 250px; padding-bottom: 32px"
            class="tw-mt-2"
            @filter="filterCategories"
            clearable
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Sem categorias
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-btn color="primary" size="md">
            <span
              class="tw-text-black tw-flex tw-justify-center tw-items-center tw-gap-2 tw-text-md"
            >
              <AppIcon name="iconoir:filter" />
              Filtrar</span
            >
          </q-btn>
        </div>
      </div>
      <div class="tw-w-full md:tw-space-y-10 tw-space-y-5">
        <CourseCard title="Teste" author="Renan Joppert" totalHours="0" />
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
interface CategorieOption {
  id: number;
  label: string;
}

const categoriesOptions: CategorieOption[] = [
  {
    id: 1,
    label: "Teologia",
  },
  {
    id: 2,
    label: "Intimidade com Deus",
  },
  {
    id: 3,
    label: "Evangelismo",
  },
  {
    id: 1,
    label: "Devocional",
  },
  {
    id: 4,
    label: "Ministração",
  },
  {
    id: 5,
    label: "Oratória",
  },
  {
    id: 6,
    label: "Comunicação",
  },
  {
    id: 7,
    label: "Homem",
  },
  {
    id: 8,
    label: "Mulher",
  },
  {
    id: 9,
    label: "Casados",
  },
  {
    id: 10,
    label: "Pais",
  },
  {
    id: 11,
    label: "Filhos",
  },
  {
    id: 12,
    label: "Relacionamento",
  },
  {
    id: 13,
    label: "Oração",
  },
  {
    id: 14,
    label: "Ministério de Louvor",
  },
  {
    id: 15,
    label: "Jejum",
  },
  {
    id: 16,
    label: "Ministério Infantil",
  },
  {
    id: 17,
    label: "Finanças Pessoais",
  },
];
const searchOptions = ref(categoriesOptions);

const searchCategorieModel = ref("");

function filterCategories(val: string, update: any, abort: any) {
  update(() => {
    const filtered = categoriesOptions.filter((v) => {
      return v.label.toLowerCase().includes(val.toLowerCase());
    });
    searchOptions.value = filtered;
  });
}
</script>

<style>
</style>

