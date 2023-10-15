<template>
  <header
    class="tw-flex tw-flex-row tw-gap-4 md:tw-flex-row tw-items-center tw-px-5 tw-py-5"
  >
    <div class="logo tw-flex tw-justify-center">
      <img
        src="~/assets/img/logo-branca.png"
        class="tw-h-[75px] tw-object-contain"
      />
    </div>
    <div
      class="navbar tw-flex tw-w-1/2 tw-items-center tw-justify-center tw-grow"
    >
      <div
        class="menu-mobile-wrapper lg:tw-hidden"
        :class="{
          'tw-fixed tw-bg-black tw-z-30 tw-w-screen tw-h-screen':
            menuDrawer.value === true,
        }"
      >
        <q-drawer side="left" v-model="menuDrawer" overlay>
          <q-btn
            class="tw-absolute tw-right-2 tw-top-2 tw-z-20"
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
                <q-item
                  v-for="(item, index) in Menu"
                  :key="`menu-mobile-${index}`"
                  clickable
                  v-ripple
                  :to="item.link"
                >
                  <q-item-section> {{ item.label }} </q-item-section>
                </q-item>
              </q-list>
            </nav>
          </q-scroll-area>
        </q-drawer>

        <q-btn flat icon="menu" label="MENU" @click="toggeMenu()" />
      </div>

      <nav class="tw-hidden lg:tw-flex">
        <q-btn
          flat
          :color="checkLinkIsActiveState(item.link) ? 'primary' : 'white'"
          v-for="(item, index) in Menu"
          :key="`menu-desktop-${index}`"
          :label="item.label"
          :to="item.link"
        />
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
import Menu from "@/services/menu";

const route = useRoute();

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

function clickOutOfMenu() {
  hideMenu();
}

function checkLinkIsActiveState(link: string) {
  if (route.fullPath !== link) {
    return false;
  }

  return true;
}
</script>



<style>
</style>
