<?php
session_start();

$storeArray = ['shoes','grocery'];
$commandArray = ['addItem','editItem','deleteItem','addSection','editSection','deleteSection'];

#gets store name either cookie or get
if(!empty($_COOKIE['store'])){
    $store = $_COOKIE['store'];
}else{
    $store = 'shoes';
}

if(!empty($_GET['store'])){
    $store = $_GET['store'];
    setCookie('store',$store);
    if (!in_array($store, $storeArray)){
        $error = "$store is not one of our stores";
        include 'view/error.php';
        die;
    } 
}

#gets the command of the admin
if(!empty($_COOKIE['command'])){
    $command = $_COOKIE['command'];
}else{
    $command = 'addItem';
}

if(!empty($_GET['command'])){
   $command= $_GET['command'];
   setCookie('command',$command);
   if (!in_array($command, $commandArray)){
        $error = "$command is not an eligible command";
        include 'view/error.php';
        die;
    } 
}

?>