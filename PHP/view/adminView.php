<?php include 'view/top.php';?>
<div id="adminSquare">
    <h1>What would you like to do</h1>
    <a href="index.php?action=adjustments&command=addItem"><button>Add an item</button></a>
    <a href="index.php?action=adjustments&command=addSection"><button>Add a catergory</button></a>
    <a href="index.php?action=adjustments&command=editItem"><button>Edit an item</button></a>
    <a href="index.php?action=adjustments&command=editSection"><button>Edit a catergory</button></a>
    <a href="index.php?action=adjustments&command=deleteItem"><button>Delete an item</button></a>
    <a href="index.php?action=adjustments&command=deleteSection"><button>Delete a catergory</button></a>
</div>

<a href="index.php?action=theStore">back</a>
<?php include 'view/bottom.php';?>