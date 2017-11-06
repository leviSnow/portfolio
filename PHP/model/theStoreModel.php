<?php
require 'model/db.php';
include_once 'model/getStoreInfo.php';

setCookie('visited','10% discount',time()+60*60*24*7);
setCookie('action',$action); #for formfilter(get) to work 

#for the filters
try{
    $query="SELECT DISTINCT section FROM $store";
    $filterResults = $db->query($query);
}catch(PDOException $e) {
	$error = $e->getMessage();
	require 'view/error.php';
	exit;
}

#checking if user sent request for filter
if(!empty($_GET['filters'])){
    $filters = $_GET['filters'];
}else{
    $filters = [];
}

#to display products in store
#where name!="" is for the new catergorys that does not have an item attached to it.
try{
    $query="SELECT * FROM $store WHERE (name!=''";
    $string = ' )AND (section=? ';
    if(!empty($filters)){
        foreach($filters as $filter){
            $query .= $string; 
            $string = ' OR section=? ';   
        }
        $query.=')';
        $statement = $db->prepare($query);
        $count = 1;
        foreach($filters as $filter){
            $statement->bindValue($count,$filter);
            $count++;
        }
    }else{
        $query.=')';
        $statement = $db->prepare($query);
    }
    $results= $statement->execute();
    $results= $statement->fetchAll();
} catch(PDOException $e) {
	$error = $e->getMessage();
	require 'view/error.php';
	exit;
}

?>