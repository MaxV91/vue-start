const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  computed: {
    fullname() {
      console.log('run');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'One';
    }
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('submitted');
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = ''
    },
    outputFullname() {

    }
  }
});

app.mount('#events');
