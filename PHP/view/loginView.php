<?php include 'view/top.php';?>
<form class="squares"action="index.php?action=admin" method="post">
    <?php if(!empty($error)){
        foreach($error as $e)echo'<div class="error"><h5>'.$e.'</h5></div>';} ?> 
    <div>
        <label for="user">User name:</label>
        <input type="text" placeholder="YOUR NAME"name="user"
                value="<?php if(!empty($user))echo $user?>"/>
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" placeholder="PASSWORD"name="password"/>
    </div>
    <input type="submit" value="login"/>

</form>
<div>
    <a href="index.php?action=theStore"><button>back</buttton></a>
</div>
<?php include 'view/bottom.php';?>