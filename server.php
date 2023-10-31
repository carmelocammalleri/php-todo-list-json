<?php

$str_json = file_get_contents('todoList.json');

// il var dump legge dentro il file server.php quindi nel local host bisogna inserire il nome del server per vederlo
// var_dump($str_json);

// trasformo in array
$list = json_decode($str_json);
// var_dump($list);

if(isset ($_POST['taskItem'])){
  $newItem = $_POST['taskItem'];
  $list[]= $newItem;

  file_put_contents('todoList.json', json_encode($list));
}

//rendere il file php come un file json
header('Content-Type: application/json');
echo json_encode($list);