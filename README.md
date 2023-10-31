# php-todo-list-json

**Descrizione**
Dobbiamo creare una web-app che permetta di leggere e scrivere una lista di Todo.
Deve essere anche gestita la persistenza dei dati leggendoli da, e scrivendoli in un file JSON.
**Stack**
Html, CSS, VueJS (importato tramite CDN), axios, PHP
**Consigli**
Nello svolgere l’esercizio seguite un approccio graduale.
Prima assicuratevi che la vostra pagina *index.php* (il vostro front-end) riesca a comunicare correttamente con il vostro script PHP (le vostre “API”).
Lo step successivo è quello di “testare” l’invio di un nuovo task, sapendo che manca comunque la persistenza lato server (ancora non memorizzate i dati da nessuna parte).
Solo a questo punto sarà utile passare alla lettura della lista da un file JSON.
****
**Bonus**
Mostrare lo stato del task → se completato, barrare il testo
Permettere di segnare un task come completato facendo click sul testo
Permettere il toggle del task (completato/non completato)
Abilitare l’eliminazione di un task

1. creare i file di lavoro
2. gestire il serverPHP come fosse un Api
3. collegare il file json al server
4. inviare i comandi al resto della pagina
    <!-- dopo aver fatto funzionare il passaggio dei dati -->
5. creare una strutura in html
6. collegare il form al server, in modo tale da fargli leggere le tasks che l'utente scrive
7. gestire le varie condizioni all'inserimento della nuova task
8. utilizzare una funzione che faccia eliminare le tasks già finite o che non servono più
  <!-- BONUS -->
9. barrare task completate
10. creare una funzione che elimini le tasks SOLO quando sono state completate (casella barrata)