<?php
   if(!empty($_COOKIE['action'])){
        $action = $_COOKIE['action'];
    }else{
       $action = 'home';
   }

   if(!empty($_GET['action'])){
       $action= $_GET['action'];
   }

   switch($action){
       case 'home':
            include 'view/top.php';
            include 'view/bottom.php';
            exit;
       case 'theStore':
            include 'model/theStoreModel.php';
            include 'view/theStoreView.php';
            exit;
        case 'login':
            include 'model/loginModel.php';
            include 'view/loginView.php';
            exit;
        case 'admin':
            include 'model/adminModel.php';
            include 'view/adminView.php';
            exit;
        case 'adminEntered':
        case 'adjustments':
            include 'model/adjustModel.php';
            include 'view/adjustView.php';
            exit;
        case 'aboutUs':
            include 'view/aboutUs.php';
             exit;
        default:
            require_once 'model/getStoreInfo.php';
            include 'view/top.php';
            include 'view/bottom.php';
            exit;



   }


?>
