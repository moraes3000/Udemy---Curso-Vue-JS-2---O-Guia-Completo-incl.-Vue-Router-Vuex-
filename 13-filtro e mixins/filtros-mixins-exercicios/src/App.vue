<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <p>{{ cpf | cpfMask }}</p>
    <p>{{ cpf | cpfMask |inverter}}</p>
    <p>{{ 'batata frita'|cpfMask |inverter }}</p>
    <p>{{ 'batata frita'|inverter }}</p>
    <input type="text" :value="cpf |cpfMask " />
    <Frutas />
  </div>
</template>

<script>
import Frutas from "./Frutas.vue";

export default {
  components: { Frutas },

  filters: {
    cpfMask(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    }
  },
  data() {
    return {
      cpf: "12345678901"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
