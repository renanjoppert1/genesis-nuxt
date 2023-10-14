<template>
  <header class="row items-center q-px-lg q-py-lg">
    <div class="logo">
      <img src="~/assets/img/logo-branca.png" class="h-[75px]" />
    </div>
    <div class="navbar row items-center justify-center col-grow">
      <q-btn flat color="white" label="Página Inicial" />
      <q-btn flat color="white" label="Todos os Cursos" />
      <q-btn flat color="white" label="Materiais" />
      <q-btn flat color="white" label="Planos" />
      <q-btn flat color="white" label="Sobre Nós" />
      <q-btn flat color="white" label="Contato" />
    </div>
    <div class="cta-group row">
      <q-btn text-color="primary" class="q-ma-sm" outline>
        <AppIcon class="q-mr-sm" name="tabler:user" />
        <span class="font-bold">Entrar</span>
      </q-btn>
      <q-btn color="primary" text-color="black" class="q-ma-sm row">
        <AppIcon class="q-mr-sm" name="jam:plus" />
        <span class="font-bold">Cadastre-se</span>
      </q-btn>
    </div>
  </header>
</template>

<script lang="ts" setup>
</script>



<style>
</style>
