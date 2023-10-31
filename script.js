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
      axios.get(this.apiUrl)
      .then(result => {
        // console.log(result.data);
        this.list= result.data;
      })
    },
    addTask(){
      // console.log(this.newTask);
      const data= new FormData();
      data.append ('taskItem', this.newTask)

      axios.post(this.apiUrl, data)
        .then(result =>{
          this.list= result.data;
          this.newTask= '';
        })
    },
    removeTask(){
      console.log('ciao ciao task');
    }
  },
  mounted(){
    this.getApiList();
  }
}).mount('#app')