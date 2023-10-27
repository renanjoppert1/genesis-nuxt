<template>
  <section class="page-">
    <AppContainer class="tw-flex-col tw-gap-10">
      <div class="tw-py-6 sm:tw-tw-py-8 lg:tw-tw-py-12">
        <div class="tw-mx-auto tw-max-w-screen-2xl tw-px-4 md:tw-tw-px-8">
          <form class="tw-mx-auto tw-bg-[#121212] tw-max-w-lg tw-rounded-lg">
            <h2
              class="tw-mb-4 tw-text-center tw-text-2xl tw-font-bold md:tw-tw-mb-8 lg:tw-tw-text-3xl tw-pt-8"
            >
              Cadastre-se e Ganhe 30 Dias Grátis
            </h2>
            <div class="tw-flex tw-flex-col tw-gap-4 tw-p-4 md:tw-p-8">
              <div>
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="name"
                  label="Nome Completo"
                />
              </div>
              <div>
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="birthdate"
                  label="Data de Nascimento"
                />
              </div>
              <div>
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="email"
                  label="E-mail"
                />
              </div>

              <div class="tw-mb-4">
                <q-input
                  class="tw-col-span-2"
                  v-model="password"
                  filled
                  :type="isPwd ? 'password' : 'text'"
                  label="Senha"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>

              <p>Seu Endereço</p>

              <div>
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="cep"
                  label="CEP"
                />
              </div>
              <div>
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="address"
                  label="Endereço"
                />
              </div>
              <div>
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="neighborhood"
                  label="Bairro"
                />
              </div>
              <div>
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="city"
                  label="cidade"
                />
              </div>
              <div>
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="state"
                  label="Estado"
                />
              </div>

              <p class="tw-mt-4">Dados de Pagamento</p>
              <vue-credit-card
                :preview-enabled="true"
                v-model="creditCardForm"
                :card-types="myCustomCardTypes"
              >
              </vue-credit-card>

              <div>
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="holderName"
                  label="Nome no Cartão"
                />
              </div>
              <div>
                <q-input
                  class="tw-col-span-2"
                  filled
                  v-model="cardNumber"
                  label="Número do Cartão"
                />
              </div>

              <div class="tw-grid tw-grid-cols-2 tw-gap-4">
                <q-input
                  class="tw-col-span-1"
                  filled
                  v-model="dateExp"
                  label="Validade do Cartão"
                />
                <q-input
                  class="tw-col-span-1"
                  filled
                  v-model="cvv"
                  label="CVV"
                />
              </div>

              <p class="tw-font-medium tw-text-white">
                Não iremos cobrar os primeiros 30 dias. A próxima cobrança será
                dia 27/11/2023 no valor de R$36,90
              </p>

              <q-btn
                color="primary"
                class="tw-block tw-bg-gray-800 tw-px-8 tw-py-3 tw-text-center tw-text-sm tw-font-semibold !tw-text-black tw-outline-none tw-ring-gray-300 tw-transition tw-duration-100 tw-hover:tw-bg-gray-700 tw-focus-visible:tw-ring tw-active:tw-bg-gray-600 md:tw-text-base"
              >
                Iniciar Período de Avaliação
              </q-btn>
            </div>
          </form>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>

