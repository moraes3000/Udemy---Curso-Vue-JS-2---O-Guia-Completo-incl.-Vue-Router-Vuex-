<template>
  <div>
    <h1>calcular imc</h1>
    <input type="number" name id v-model="altura" />
    <br />
    <input type="number" v-model="peso" />
    <br />
    <br />
    <button v-on:click="calcualarImc">calcular</button>
    {{ calculo }}
    <!-- {{altura}}
    {{peso}}-->
    <p>
      Abaixo de 18,5 = abaixo do peso ideal
      <br />Entre 18,5 e 24,9 = peso ideal
      <br />Entre 25,0 e 29,9 = sobrepeso
      <br />Entre 30,0 e 34,9 = obesidade grau I
      <br />Entre 35,0 e 39,9 = obesidade grau II
      <br />Entre 40 e acima = obesidade grau III
      <br />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      altura: "",
      peso: "",
      imc: ""
    };
  },
  methods: {
    calcualarImc: () => {
      let alt = this.altura / 100;
      let calculo = this.peso / (alt * alt);
      this.imc = calculo;
      this.altura = "";
      this.peso = "";
    }
  }
};
</script>

<style>
</style>