const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  methods: {

    setName(event) {
      this.name = event.target.value;
    },

    incrementNum(num) {
      this.counter = this.counter + num;
    },

    decrementNum(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
