<template>
  <div class="usuario-detalhe">
    <h2>usuario detalhe</h2>
    <hr />
    <p>
      <strong>codigo</strong>
      {{id}}
    </p>
    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link
      tag="button"
      primario
      :to="{ name: 'editarUsuario', params: { id },
                query: { completo: false, lingua: 'en' },
                hash: '#rodape' }"
    >Editar</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style>
</style>
