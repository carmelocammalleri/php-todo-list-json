const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: 'server.php',
      list:[],
      title: '- toDo list - '
    }
  }
}).mount('#app')