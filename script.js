const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: 'server.php',
      list:[],
      title: '- toDo list - '
    }
  },
  methods:{
    getApiList(){
      //prova chiamata funzione
      console.log('ciao bello');
    }
  },
  mounted(){
    this.getApiList();
  }
}).mount('#app')