const app = Vue.createApp({

    data() {
        return {
            alert: 'This is an alert!',
            pText: '',
            pText2: ''

        }
    },

    methods: {

        getpText(event) {
            this.pText = event.target.value;
        },

        getpTexte(event) {
            this.pText2 = event.target.value;

        },

        showAlert() {
            alert(this.alert);
        }
    }
});

app.mount('#assignment')