<?php include 'view/top.php';?>



<?php if($command == 'addItem'): ?>
<div class="squares">
    <h3>Add items to the inventory</h3>
    <?php if(isset($error)) foreach($error as $e) echo '<div class="error"><h5>'.$e.'</h5></div>';?>
    <form action="index.php?action=adminEntered" method="post">
        <div>
            <label for="name">Name of product:</label>
            <input type="text" name="name" value="<?php if(isset($post['name'])) echo $post['name'];?>"/>
        </div>
        <div>
            <span>Pick a catergory:</span>
            <select name="section">
                <?php foreach($distinctResults as $result): ?>
                    <option <?php if(isset($post['section'])&& $result[0] == $post['section'])echo'selected';?>><?=$result[0]?></option>
                <?php endforeach; ?>
            </select>
        </div>
        <div>
            <label for="price">Price:</label>
            <input type="text" name="price" value="<?php if(isset($post['price'])) echo $post['price'];?>"/>
        </div>
        <div>
             <input type="submit" value="Add"/>
        </div>
    </form>
</div>

<?php elseif($command == 'deleteItem'): ?>
<div class="squares">
    <h3>Delete items from the inventory</h3>
    <?php if(isset($error)) foreach($error as $e) echo '<div class="error"><h5>'.$e.'</h5></div>';?>
    <form action="index.php?action=adminEntered" method="post">
        <div>
            <select name="id">
            <?php foreach($results as $result):?>
                <option value="<?=$result['id']?>"<?php if(isset($post['id'])&& $result['id'] == $post['id'])echo'selected';?>
                        ><?=$result['name'].' in the '.$result['section'].' section at the price of $'.$result['price']?></option>
            <?php endforeach;?>
            </select>
        </div>
        <div>
            <input type="submit" value="Delete">
        </div>
    </form>
</div>

<?php elseif($command == 'editItem'): ?>
<div class="squares">
    <h3>Edit items in the inventory</h3>
    <?php if(isset($error)) foreach($error as $e) echo '<div class="error"><h5>'.$e.'</h5></div>';?>
    <form action="index.php?action=adminEntered" method="post">
        <div>
            <span>Step 1- Select the item which you want to change:</span>
            <select name="id">
                <?php foreach($results as $result):?>
                    <option value="<?=$result['id']?>"<?php if(isset($post['id'])&& $result['id'] == $post['id'])echo'selected';?>
                            ><?=$result['name'].' in the '.$result['section'].' section at the price of $'.$result['price']?></option>
                 <?php endforeach;?>
            </select>
        </div>
        <div>
            <h5>Step 2- please fill in all the fields, including the ones
            which you are not changing:</h5>
        </div>
        <div>
            <label for="name">New name:</label>
            <input type="text" name="name" value="<?php if(isset($post['name'])) echo $post['name'];?>"/>
        </div>
        <div>
            <span>New catergory:</span>
            <select name="section">
                 <?php foreach($distinctResults as $result): ?>
                    <option <?php if(isset($post['section'])&& $result[0] == $post['section'])echo'selected';?>><?=$result[0]?></option>
                 <?php endforeach; ?>
            </select>
        </div>
        <div>
            <label for="price">New Price:</label>
            <input type="text" name="price" value="<?php if(isset($post['price'])) echo $post['price'];?>"/>
        </div>
        <div>
             <input type="submit" value="Edit">
        </div>
    </form>
</div>

<?php elseif($command == 'addSection'): ?>
<div class="squares">
    <h3>Add a new category to the inventory</h3>
    <?php if(isset($error)) foreach($error as $e) echo '<div class="error"><h5>'.$e.'</h5></div>';?>
    <form action="index.php?action=adminEntered" method="post">
        <div>
            <label for="section">Name of catergory:</label>
            <input type="text" name="section"/>
        </div>
        <div>
             <input type="submit" value="Add">
        </div>
    </form>
</div>

<?php elseif($command == 'deleteSection'): ?>
<div class="squares">
    <h3>Delete a category from the inventory</h3>
    <?php if(isset($error)) foreach($error as $e) echo '<div class="error"><h5>'.$e.'</h5></div>';?>
    <form action="index.php?action=adminEntered" method="post">
        <div>
            <span>Pick a catergory you would like to delete</span>
            <select name="section">
                <?php foreach($distinctResults as $result): ?>
                    <option <?php if(isset($post['section'])&& $result[0] == $post['section'])echo'selected';?>><?=$result[0]?></option>
                 <?php endforeach; ?>
            </select>
       </div>
        <div>
             <input type="submit" value="Delete">
        </div>
    </form>
</div>

<?php elseif($command == 'editSection'): ?>
<div class="squares">
    <h3>Edit a category from the inventory</h3>
    <?php if(isset($error)) foreach($error as $e) echo '<div class="error"><h5>'.$e.'</h5></div>';?>
    <form action="index.php?action=adminEntered" method="post">
        <div>
            <span>Pick a catergory you would like to Edit</span>
            <select name="oldSection">
                <?php foreach($distinctResults as $result): ?>
                    <option <?php if(isset($post['oldSection'])&& $result[0] == $post['oldSection'])echo'selected';?>><?=$result[0]?></option>
                 <?php endforeach; ?>
            </select>
       </div>
       <div>
            <label for="section">The new name of the catergory:</label>
            <input type="text" name="section" value="<?php if(isset($post['section'])) echo $post['section'];?>"/>
        </div>
        <div>
             <input type="submit" value="Edit">
        </div>
    </form>
</div>

<?php else: 
    $error = 'thats not a legal command';
     endif; ?>
<div>
    <a href="index.php?action=admin"><button>Back</button></a>
    <a href="index.php?action=theStore"><button>The Store</button></a>
</div>
<?php include 'view/bottom.php';?>