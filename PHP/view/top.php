<?php require_once 'model/administrator.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?=$action?></title>
    <link href="view/test.css" rel="stylesheet"/>
</head>
<body>

    <header>
        <h1>
        <?php if($action!='home') : ?>
            <div id="storeName">
              <span id="title">The <?=$store?> store</span>
            </div>
                <!--header will look diff for an admin then a customer -->
               <nav id="navigate">
                    <a href="index.php?action=home"><button>Switch stores</button></a>
                    <?php if(!isset($_SESSION['user'])):?>
                        <a href="index.php?action=login"><button>Log in</button></a>
                        <a href="index.php?action=aboutUs"><button>About us</button></a>
                    <?php else: ?>
                        <a href="index.php?action=login"><button>Log out</button></a>
                        <a href="index.php?action=admin"><button>Admin page</button></a>
                    <?php endif; ?>
                    
               </nav>
        <?php else : ?>
                <div>
                    <h2>Choose your Store</h2>
                </div>
                <a href="index.php?action=theStore&store=shoes"><button>Shoe store</button></a>
                <a href="index.php?action=theStore&store=grocery"><button>Grocery store</button></a>
        <?php endif; ?>
        </h1>
    </header>
