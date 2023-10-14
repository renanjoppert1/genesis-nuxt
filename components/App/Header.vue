<template>
  <header
    class="tw-flex tw-flex-row tw-gap-4 md:tw-flex-row tw-items-center tw-px-5 tw-py-5"
  >
    <div class="logo tw-w-1/2 tw-grow tw-flex tw-justify-center">
      <img
        src="~/assets/img/logo-branca.png"
        class="tw-h-[75px] tw-object-contain"
      />
    </div>
    <div
      class="navbar tw-flex tw-w-1/2 tw-items-center tw-justify-center tw-grow"
    >
      <div class="menu-mobile-wrapper">
        <q-drawer side="left" v-model="menuDrawer" overlay>
          <q-btn
            class="tw-absolute tw-right-2 tw-z-20"
            flat
            round
            dense
            icon="close"
            @click="hideMenu()"
          />
          <q-scroll-area class="fit">
            <div class="logo-wrapper tw-w-full tw-p-4">
              <img
                src="~/assets/img/logo-branca.png"
                class="tw-h-[60px] tw-object-contain"
              />
            </div>

            <nav class="tw-p-4 tw-flex tw-flex-col">
              <q-list padding>
                <q-item clickable v-ripple>
                  <q-item-section> Página Inicial </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section> Todos os Cursos </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section> Materiais </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section> Planos </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section> Sobre Nós </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section> Contato </q-item-section>
                </q-item>
              </q-list>
            </nav>
          </q-scroll-area>
        </q-drawer>

        <q-btn flat round dense icon="menu" @click="showMenu()" />
      </div>

      <nav class="tw-hidden lg:tw-flex">
        <q-btn flat color="white" label="Página Inicial" />
        <q-btn flat color="white" label="Todos os Cursos" />
        <q-btn flat color="white" label="Materiais" />
        <q-btn flat color="white" label="Planos" />
        <q-btn flat color="white" label="Sobre Nós" />
        <q-btn flat color="white" label="Contato" />
      </nav>
    </div>
    <div class="cta-group flex">
      <q-btn text-color="primary" class="tw-m-2" outline>
        <AppIcon class="tw-mr-3" name="tabler:user" />
        <span class="tw-font-bold">Entrar</span>
      </q-btn>
      <q-btn color="primary" text-color="black" class="tw-m-2 row">
        <AppIcon class="tw-mr-3" name="jam:plus" />
        <span class="tw-font-bold">Cadastre-se</span>
      </q-btn>
    </div>
  </header>
</template>

<script lang="ts" setup>
const menuDrawer = ref(false);

function showMenu() {
  menuDrawer.value = true;
}

function hideMenu() {
  menuDrawer.value = false;
}
</script>



<style>
</style>
