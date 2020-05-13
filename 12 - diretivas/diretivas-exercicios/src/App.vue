<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'usando diretiva v-text'"></p>
    <p v-html="'usando diretiva <b>v-html</b>'"></p>
    <hr />
    <p v-destaque>usando diretiva personalizada</p>
    <p v-destaque="'red'">usando diretiva personalizada</p>
    <p v-destaque="cor">usando diretiva personalizada</p>
    <p v-destaque:fundo.atrasar="'blue'">teste</p>

    <hr />
    <p v-destaque-local>usando diretiva personalizada</p>
    <p v-destaque-local="'red'">usando diretiva personalizada</p>
    <p v-destaque-local="cor">usando diretiva personalizada</p>
    <p v-destaque-local:fundo.atrasar="'blue'">teste</p>
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el, binding) {
        // el.style.backgroundColor = "lightgreen";
        //pode passar argumento
        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = 3000;

        setTimeout(() => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, atraso);
      }
    }
  },
  data() {
    return {
      cor: "blue"
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
