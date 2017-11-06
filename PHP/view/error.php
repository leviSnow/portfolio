<?php #include 'model/getStoreInfo.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="view/test.css" rel="stylesheet"/>
</head>
<body>
    <?php
    if(!empty($error)){
        echo "<h1>ERROR!</h1><br/>";
        echo $error;
        echo "<br/><a href=\"index.php?action=theStore\"><button>The store</button></a>";
    }   
?>
</body>
</html>