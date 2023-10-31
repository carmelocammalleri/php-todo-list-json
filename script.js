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

      //chiamata axios
      axios.get('server.php')
      .then(result => {
        // console.log(result.data);
        this.list= result.data;
      })
    }
  },
  mounted(){
    this.getApiList();
  }
}).mount('#app')