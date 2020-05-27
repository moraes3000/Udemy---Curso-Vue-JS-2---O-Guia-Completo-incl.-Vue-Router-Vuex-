<template>
  <div class="usuario">
      <h2>usuario</h2>
      <hr>

      <router-view />

      <!-- <p><strong> codigo </strong> {{id}}</p> -->
      <button sucesso @click="irParaInicio()" class="">voltar</button>
  </div>
</template>

<script>
export default {
  // props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   },
  // },
  methods: {
    irParaInicio() {
      // this.$router.push("/");
      // this.$router.push({ path: "/" });
      this.$router.push({ name: "inicio" });
    },
  },
};
</script>

<style>
</style>
