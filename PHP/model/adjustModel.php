<?php
require 'db.php';
include_once 'model/getStoreInfo.php';
require_once 'model/administrator.php';

#for non-admins
if (!isset($_SESSION['user'])) {
  header("Location: index.php?action=theStore");
}

#queries to set up the page so the admin can execute his command
#and the WHERE is so if adds a new catergory, it wont show up as an item
$query= "SELECT * FROM $store WHERE name != ''";
$results = $db->query($query);

$query= "SELECT DISTINCT section FROM $store";
$distinctResults = $db->query($query);

#coming to this page bec admin did a command
if($action=='adminEntered'){
    $error = [];
    foreach($_POST as $key =>$value){
        if(!empty($_POST[$key])){
            $post[$key] = $_POST[$key];
        }else{
            $error[] = "please fill out the $key field,";
        }
    }
    try{
        if($command=='addItem'&&isset($post['name'])&&isset($post['price'])&&isset($post['section'])){
            $query = "INSERT INTO $store (name,price,section) VALUES (:name,:price,:section)";
            $statement = $db->prepare($query);
            $statement->bindValue(':name',$post['name']);
            $statement->bindValue(':price',$post['price']);
            $statement->bindValue(':section',$post['section']);
            $inserts = $statement->execute();
            header('LOCATION:index.php?action=adjustments');
        }elseif($command=='deleteItem'&&isset($post['id'])){
            $query = "DELETE FROM $store WHERE id=:id";
            $statement = $db->prepare($query);
            $statement->bindValue(':id',$post['id']);
            $deletes = $statement->execute();
            header('LOCATION:index.php?action=adjustments');
        }elseif($command=='editItem'&&isset($post['name'])&&isset($post['price'])&&isset($post['section'])&&isset($post['id'])){
            $query = "UPDATE $store SET name=:name,price=:price,section=:section WHERE id=:id";
            $statement = $db->prepare($query);
            $statement->bindValue(':name',$post['name']);
            $statement->bindValue(':price',$post['price']);
            $statement->bindValue(':section',$post['section']);
            $statement->bindValue(':id',$post['id']);
            $updates = $statement->execute();
            header('LOCATION:index.php?action=adjustments');
        }elseif($command=='addSection'&&isset($post['section'])){
            $query = "INSERT INTO $store(section) VALUES(:section)";
            $statement = $db->prepare($query);
            $statement->bindValue(':section',$post['section']);
            $inserts = $statement->execute();
            header('LOCATION:index.php?action=adjustments');
        }elseif($command=='editSection'&&isset($post['section'])&&isset($post['oldSection'])){
            $query = "UPDATE $store SET section=:section WHERE section = :oldSection";
            $statement = $db->prepare($query);
            $statement->bindValue(':section',$post['section']);
            $statement->bindValue(':oldSection',$post['oldSection']);
            $updates = $statement->execute();
            header('LOCATION:index.php?action=adjustments');
        }elseif($command=='deleteSection'&&isset($post['section'])){
            $query = "DELETE FROM $store WHERE section = :section";
            $statement = $db->prepare($query);
            $statement->bindValue(':section',$post['section']);
            $deletes = $statement->execute();
            header('LOCATION:index.php?action=adjustments');
        }
    }catch(PDOException $e) {
        $error = $e->getMessage();
        include 'view/error.php';
        exit;
    }
}
?>