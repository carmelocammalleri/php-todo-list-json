<?php

$str_json = file_get_contents('todoList.json');

// il var dump legge dentro il file server.php quindi nel local host bisogna inserire il nome del server per vederlo
// var_dump($str_json);

// trasformo in array
$list = json_decode($str_json, true);
// var_dump($list);

if(isset ($_POST['taskItem'])){
  $newItem = $_POST['taskItem'];
  $list[] = array('text' => $newItem, 'done' => false);
}

//cancellare task dal json e stampare la nuova lista
if(isset ($_POST['deleteTaskItem'])){
  $deleteTaskItem= $_POST['deleteTaskItem'];

  //controllo se è stata svolto o meno la task
  if($list[$deleteTaskItem]["done"]){
    array_splice($list, $deleteTaskItem, 1);
  }
}

// toggle task fatte
if(isset($_POST["toggleDone"])){
  $toggleDone= $_POST['toggleDone'];
  $list[$toggleDone]["done"] = !$list[$toggleDone]['done'];
}

//rendere il file php come un file json
header('Content-Type: application/json');
echo json_encode($list);


file_put_contents('todoList.json', json_encode($list));