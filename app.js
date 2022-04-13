const app = Vue.createApp({
  data() {
    return {
      name: 'Max',
      age: 30,
      img: 'https://www.belanta.vet/vet-blog/wp-content/uploads/2019/09/5-4.jpg'
    };
  },
  methods: {
    getRand() {
      return Math.random().toString();
    }
  }
});

app.mount('#assignment');