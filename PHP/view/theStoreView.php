<?php include 'view/top.php';?>
<div id="sideBody">
    <div id="filters">
    <h1>FILTERS</h1>
        <form action="index.php?action=theStore" method="get">
            <h4>Choose a catergory:</h4>
            <?php foreach($filterResults as $label) : ?>
                <div id="indivFilter">
                    <label for="filters[]"><?=$label[0]?>:</label>
                    <input type="checkbox" name="filters[]" value="<?=$label[0]?>" 
                          <?php if(in_array($label[0],$filters))echo'checked';?> />
                </div>
            <?php endforeach; ?>
            <input type="submit" value="Apply">
        </form>
    </div>
</div>

<div id="mainBody">
    <?php if(empty($_COOKIE['visited'])): ?>
        <div id="promo">
            YOU HAVE BEEN SELECTED<br/>FOR A 10% DISCOUNT OFF YOUR NEXT ORDER 
            OF $75 OR MORE!!<br/>Type in promo code: TestScore100 
        </div>
    <?php endif; ?>

    <table id="inventory">
        <thead>
            <tr>
                <th>Id</th>
                <th>Product name</th>
                <th>Section</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($results as $item): ?>
                <div>
                    <tr>
                        <td><?=$item['id']?></td>
                        <td><?=$item['name']?></td>
                        <td><?=$item['section']?></td>
                        <td><?=$item['price']?></td>
                    </tr>
                </div>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>

<?php include 'view/bottom.php';?>