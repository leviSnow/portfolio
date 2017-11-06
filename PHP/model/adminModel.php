<?php
require_once 'model/db.php';
require_once 'model/administrator.php';
include_once 'model/getStoreInfo.php';

#checking password
if (!isset($_SESSION['user'])) {
    
    if(!empty($_POST['user'])){
        $user=$_POST['user'];
    }else{
        $error[] = "You must fill out the user name";
    }

    if(!empty($_POST['password'])){
        $password=$_POST['password'];
    }else{
        $error[] = "You must enter a password";
    }

   
   if(isset($user) && isset($password)){
         try{
            $query= 'SELECT password FROM logins WHERE user=:user';
            $statement = $db->prepare($query);
            $statement->bindValue(':user',$user);
            $statement->execute();
            $hash=$statement->fetch();
         }catch(PDOException $e) {
            $error = $e->getMessage();
            require 'view/error.php';
            exit;
         }
        if(password_verify($password,$hash[0])){
            $admin = Administrator::getInstance();
        }else{
            $error[]='incorrect password or username';
            include'model/loginModel.php';
            include'view/loginView.php';
            die();
        }
    }elseif(!isset($user) && !isset($password)){
         header("Location: index.php?action=theStore");
    }else{
        include'model/loginModel.php';
        include'view/loginView.php';
        exit;
    }

    
}
?>