<template>
  <div>
    <p class="tw-text-lg tw-font-semibold tw-mb-3">
      Bem Vindo ao Escola Genesis Admin! 👋🏻
    </p>
    <p>Insira seu e-mail e senha abaixo para realizar o login</p>
    <q-form @submit.prevent.stop="onSubmit" class="q-gutter-lg">
      <q-input
        v-model="email"
        label="E-mail"
        :rules="[(val) => !!val || 'E-mail é obrigatório']"
      />

      <q-input
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        label="Senha"
        :rules="[(val) => !!val || 'Senha é obrigatória']"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-btn
        label="Entrar"
        type="submit"
        color="primary"
        class="tw-w-full !tw-text-black"
      />
    </q-form>
    <nuxt-link
      to="/admin/esqueci-minha-senha"
      class="tw-mt-4 tw-block tw-text-brand-primary tw-font-medium"
      >Esqueceu sua senha?</nuxt-link
    >
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

definePageMeta({
  layout: "auth-admin",
});

const router = useRouter();

const email = ref("");
const password = ref("");
const isPwd = ref(true);

function onSubmit() {
  authStore.login();
}
</script>

<style>
</style>

