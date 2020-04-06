new Vue({
    el: '#desafio',
    data: {
        nome: "Bruno Barbeiro Moraes",
        idade: 31,
        img: 'foto.jpg',
    },
    methods: {
        multiplicarPorTres() {
            return this.idade * 3
        },
        sortear() {
            return Math.random()
        },

    }

})