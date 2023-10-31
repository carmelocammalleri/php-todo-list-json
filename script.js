const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: 'server.php',
      list:[],
      title: '- toDo list - ',
      newTask: ''
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
    },
    addTask(){
      console.log(this.newTask);
      this.newTask= ''
    }
  },
  mounted(){
    this.getApiList();
    this.addTask();
  }
}).mount('#app')