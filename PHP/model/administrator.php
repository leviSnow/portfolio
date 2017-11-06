<?php

class Administrator{
    private static $instance;

    private function __construct(){
        if (empty($_SESSION['user'])) {
            $_SESSION['user'] = 'user';
        }
    }

    public static function getInstance(){
        if(empty(self::$instance)){
             self::$instance = new Administrator();
        }
        return self::$instance;
    }

    public function logOut(){
        unset($_SESSION['user']);
    }

}

?>