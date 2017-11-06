<?php
include_once 'model/getStoreInfo.php';
require_once 'model/administrator.php';
#logging out
if (isset($_SESSION['user'])) {
    $admin =Administrator::getInstance();
    $admin->logOut();
  header("Location: index.php?action=theStore");
}
?>