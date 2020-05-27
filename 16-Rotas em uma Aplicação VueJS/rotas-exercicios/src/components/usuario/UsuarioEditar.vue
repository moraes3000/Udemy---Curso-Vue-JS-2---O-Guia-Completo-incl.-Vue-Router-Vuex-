<template>
  <div class="usuario-editar">
    <h2>usuario editar</h2>
    <hr />
    <p>
      <strong>Código:</strong>
      {{ id }} / {{ $route.params.id }}
    </p>
    <hr />pegando paremetros pela url
    <p>
      <strong>Completo:</strong>
      {{ $route.query.completo ? 'Sim': 'Não' }}
    </p>
    <p>
      <strong>Língua:</strong>
      {{ $route.query.lingua }}
    </p>
    <button primario>confirmar</button>
    <div id="rodape">
      <h3>curso vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style>
#rodape {
  margin-top: 1000px;
}
</style>
