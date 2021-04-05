const app = Vue.createApp({
    data() {
        return {
            name: 'Rony Maree',
            age: 28,
            imageSource: 'https://images.unsplash.com/photo-1611095566888-f1446042c8fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2251&q=80'
        }
    },

    methods: {

        outputRnd() {
            const randomNumber = Math.random();

            return randomNumber;

        }
    }
})

app.mount('#assignment');