<template>
  <div class="tw-w-full tw-flex tw-gap-5">
    <q-btn
      v-for="btn in links"
      :key="btn.link"
      color="primary"
      :label="btn.label"
      :outline="isCurrentPage(btn.link) == false"
      class="tw-text-black tw-text-base"
      :class="{
        'tw-text-primary': isCurrentPage(btn.link) === false,
        '!tw-text-black': isCurrentPage(btn.link),
      }"
      :to="btn.link"
    />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const links = ref([
  {
    label: "Meu Perfil",
    link: "/area-do-aluno/perfil",
  },
  {
    label: "Minha Senha",
    link: "/area-do-aluno/alteracao-senha",
  },
  {
    label: "Assinatura e Recibos",
    link: "/area-do-aluno/assinatura",
  },
  {
    label: "Certificados",
    link: "/area-do-aluno/certificados",
  },
]);

function isCurrentPage(link: string) {
  if (route.path.includes(link)) {
    return true;
  } else {
    return false;
  }
}
</script>

<style>
</style>