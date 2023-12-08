<template>
  <section class="page__dashboard">
    <AppContainer class="tw-flex-col tw-gap-10">
      <AppPageTitle title="Minha Assinatura e Recibos" />

      <StudentAreaNavbar />

      <div
        class="tw-bg-white/[0.05] tw-rounded-md tw-w-full tw-p-4 tw-text-base"
      >
        <p class="tw-font-semibold tw-text-xl tw-my-6">Minha Assinatura</p>

        <q-card class="tw-mb-10">
          <q-card-section>
            <div class="text-h6">Plano Ativo</div>
          </q-card-section>
          <q-card-section
            class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-10"
          >
            <div class="tw-order-2 md:tw-order-1">
              <p>
                Seu plano atual é
                <strong class="tw-text-genesis">Plano de Teste</strong>
              </p>
              <p>
                Ele estará ativo até dia
                <strong class="tw-text-genesis">08/01/2024</strong>
              </p>
              <p>
                A próxima renovação você pagará
                <strong class="tw-text-genesis">R$39,90</strong>
              </p>
              <p>
                O cartão cadastrado é o do final
                <strong class="tw-text-genesis">8859</strong>
              </p>
              <div class="tw-w-full tw-flex tw-gap-2">
                <q-btn
                  color="primary"
                  class="tw-mt-8 !tw-text-black"
                  label="Trocar Cartão"
                />
                <q-btn
                  color="primary"
                  class="tw-mt-8 !tw-text-primary"
                  outline
                  label="Cancelar Plano"
                />
              </div>
            </div>
            <div class="tw-order-1 md:tw-order-2">
              <div class="tw-w-full tw-flex">
                <div class="tw-w-1/2">Dias</div>
                <div class="tw-w-1/2 tw-text-right">24 de 30 dias</div>
              </div>
              <div class="tw-w-full tw-flex">
                <q-linear-progress
                  rounded
                  size="15px"
                  :value="0.5"
                  color="warning"
                  class="q-mt-sm"
                />
              </div>
              <div class="tw-w-full">
                6 dias restantes antes da renovação do plano
              </div>
            </div>
          </q-card-section>
        </q-card>

        <p class="tw-font-semibold tw-text-xl tw-my-6">
          Meus Recibos de Pagamento
        </p>

        <div class="tw-w-full">
          <q-table :rows="rows" :columns="columns" row-key="name" />
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
const columns = [
  { name: "id", label: "#", field: "id" },
  { name: "plano", label: "Plano", field: "plano" },
  { name: "valor", label: "Valor", field: "valor" },
  { name: "pago_em", label: "Pago Em", field: "pago_em" },
  { name: "status", label: "Status", field: "status" },
];

const rows = [];
</script>

<style>
</style>