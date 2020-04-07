new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor igual' : 'valor diferente'
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
});