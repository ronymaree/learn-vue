const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: ''
    };
  },
  methods: {
    increment(){
      return this.counter++;
    },
    decrement(){
      return this.counter--;
    },
    setName(event){
      this.name = event.target.value;
    }
  }
});

app.mount('#events');
