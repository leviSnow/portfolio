<?php

	$cs= 'mysql:host=localhost;dbname=phptestdb';
	$dbuser='phpuser';
	$dbpassword='p@$$word';

	try{
		$db=new PDO($cs,$dbuser,$dbpassword);
	}catch(PDOException $e){
		$error = 'Was not able to connect';
		require 'view/error.php';
		exit;
	}

?>