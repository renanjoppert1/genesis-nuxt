<template>
  <section class="page-">
    <AppContainer class="tw-flex-col tw-gap-10">
      <div class="tw-py-6 sm:tw-tw-py-8 lg:tw-tw-py-12">
        <form
          class="tw-max-w-screen-2xl tw-flex tw-flex-col lg:tw-flex-row tw-gap-10"
        >
          <div class="tw-bg-[#121212] tw-rounded-lg tw-w-full lg:tw-w-1/2">
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
                  label="Cidade"
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
            </div>
          </div>
          <div
            id="credit_card_view"
            class="tw-bg-[#121212] tw-rounded-lg tw-w-full lg:tw-w-1/2 tw-p-4 lg:tw-p-8 tw-flex tw-flex-col tw-gap-4"
          >
            <p class="tw-mt-4">Dados de Pagamento</p>

            <div class="tw-w-full card_wrapper tw-p-4">
              <div
                class="card__background tw-w-full tw-h-64 tw-relative !tw-text-black tw-shadow-2xl tw-transition-transform tw-transform"
              >
                <img
                  class="tw-relative tw-object-cover tw-w-full tw-h-full tw-rounded-xl"
                  src="@/assets/img/credit-card-bg.svg"
                />

                <div class="tw-w-full tw-px-8 tw-absolute tw-top-8">
                  <div class="tw-flex tw-justify-between">
                    <div class="">
                      <p class="tw-font-light tw-text-black">Nome</p>
                      <p
                        class="tw-font-medium tw-tracking-widest tw-text-black tw-p-2 tw-border-2 tw-border-transparent tw-transition-all"
                        :class="{
                          'tw-border-black/80 tw-rounded-md':
                            focusCardControl.holderName === true,
                        }"
                      >
                        <span
                          v-if="holderName === ''"
                          class="tw-h-[24px] tw-block"
                        ></span>
                        <span v-else>{{ holderName }}</span>
                      </p>
                    </div>
                    <img
                      class="tw-w-14 tw-h-14"
                      src="@/assets/img/icone-logo-preta.svg"
                    />
                  </div>

                  <div class="tw-pt-1">
                    <p class="tw-font-light tw-text-black">Número do Cartão</p>
                    <p
                      class="tw-font-medium tw-tracking-more-wider tw-text-black tw-p-2 tw-border-2 tw-border-transparent tw-transition-all"
                      :class="{
                        'tw-border-black/80 tw-rounded-md':
                          focusCardControl.cardNumber === true,
                      }"
                    >
                      <span
                        v-if="cardNumber === ''"
                        class="tw-h-[24px] tw-block"
                      ></span>
                      <span v-else>{{ cardNumber }}</span>
                    </p>
                  </div>
                  <div class="tw-pt-2 tw-pr-6">
                    <div class="tw-flex tw-justify-between">
                      <div class="">
                        <p class="tw-font-light tw-text-xs tw-text-black">
                          Validade
                        </p>
                        <p
                          class="tw-font-medium tw-tracking-wider tw-text-sm tw-text-black tw-p-2 tw-border-2 tw-border-transparent tw-transition-all"
                          :class="{
                            'tw-border-black/80 tw-rounded-md':
                              focusCardControl.expirationCard === true,
                          }"
                        >
                          <span
                            v-if="expirationCard === ''"
                            class="tw-h-[20px] tw-block"
                          ></span>
                          <span v-else>{{ expirationCard }}</span>
                        </p>
                      </div>

                      <div class="tw-w-[60px]">
                        <p class="tw-font-light tw-text-xs tw-text-black">
                          CVV
                        </p>
                        <div
                          class="tw-font-bold tw-tracking-more-wider tw-text-sm tw-text-black tw-p-2 tw-border-2 tw-border-transparent tw-transition-all tw-min-w-[75px] tw-w-full"
                          :class="{
                            'tw-border-black/80 tw-rounded-md':
                              focusCardControl.cvv === true,
                          }"
                        >
                          <div
                            class="tw-min-w-[70px] tw-h-[18px] tw-flex tw-gap-2"
                          >
                            <span v-for="n in cvv.length" :key="n">*</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <q-input
                class="tw-col-span-2"
                filled
                v-model="holderName"
                label="Nome no Cartão"
                @focus.prevent.stop="changeFocusStatus('holderName', true)"
                @blur.prevent.stop="changeFocusStatus('holderName', false)"
              />
            </div>
            <div>
              <q-input
                class="tw-col-span-2"
                filled
                v-model="cardNumber"
                label="Número do Cartão"
                @focus.prevent.stop="changeFocusStatus('cardNumber', true)"
                @blur.prevent.stop="changeFocusStatus('cardNumber', false)"
              />
            </div>

            <div class="tw-grid tw-grid-cols-2 tw-gap-4">
              <q-input
                class="tw-col-span-1"
                filled
                v-model="expirationCard"
                @focus.prevent.stop="changeFocusStatus('expirationCard', true)"
                @blur.prevent.stop="changeFocusStatus('expirationCard', false)"
                label="Validade do Cartão"
              />
              <q-input
                class="tw-col-span-1"
                filled
                v-model="cvv"
                label="CVV"
                @focus.prevent.stop="changeFocusStatus('cvv', true)"
                @blur.prevent.stop="changeFocusStatus('cvv', false)"
              />
            </div>

            <p class="tw-font-medium tw-text-white">
              Não iremos cobrar os primeiros 30 dias. A próxima cobrança será
              dia 27/11/2023 no valor de R$36,90.
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
    </AppContainer>
  </section>
</template>

<script lang="ts" setup>
const holderName = ref("");
const cardNumber = ref("");
const expirationCard = ref("");
const cvv = ref("");

const focusCardControl = ref({
  holderName: false,
  cardNumber: false,
  expirationCard: false,
  cvv: false,
});

function changeFocusStatus(name: any, value: boolean) {
  // Define all data false
  const objEntries = Object.entries(focusCardControl.value);
  objEntries.forEach((el) => {
    focusCardControl.value[el[0]] = false;
  });
  // Set a focus
  focusCardControl.value[name] = value;
}
</script>

<style lang="scss" scoped>
</style>

