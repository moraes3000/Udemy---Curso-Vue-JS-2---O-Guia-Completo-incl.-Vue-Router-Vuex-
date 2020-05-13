export default {
  data() {
    return {
      fruta: "",
      frutas: ["abacate"],
    };
  },
  methods: {
    add() {
      this.frutas.push(this.fruta);
      this.fruta = "";
    },
  },
};
