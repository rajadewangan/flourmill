<?php
@session_start();
if(isset($_SESSION['username']))
{ 
    require_once("./import/header.php");
    $id = $_REQUEST['id'];
    require_once('./import/dbconnect.php');
    $sql = "SELECT * FROM `category_info` WHERE `category_id`=$id";
    $rsCat = mysqli_query($con,$sql);
    $row = mysqli_fetch_array($rsCat) or die("query error");
?>
<div id="categoryForm">
    <form action="./editCategory.php" method="post" enctype="multipart/form-data">
        
            <img src="./images/category_image/<?=$row['category_image']?>" height="100" alt="">
    <input type="number" id="numCatId" name="numCatId" value="<?=$id?>" hidden>
  <div class="form-group">
    <label for="txtCatName">Category Name</label>
    <input type="text" class="form-control" id="txtCatName" name="txtCatName" aria-describedby="emailHelp" value="<?=$row['category_name']?>">
   
  </div>
  <div class="form-group">
    <label for="numCatPrice">Price</label>
    <input type="number" class="form-control" id="numCatPrice" name="numCatPrice" value="<?=$row['category_price']?>">
  </div>
  <div class="form-group" class="m-2">
    <label for="flCatImage">Change category image</label>
    <input type="file" class="form-control-file" id="flCatImage" name="flCatImage">
  </div>
  <div id="addCatButtons"  class="m-2">
  <button type="submit" class="btn btn-primary">Submit</button>
  <button type="reset" class="btn btn-outline-warning">Cancel</button>
  </div>
</form>  
<form action="./deleteCategory.php" method="post">
    <input type="hidden" name="catId" value="<?=$id?>">
    <button type="submit" class="btn btn-outline-danger">Delete Category</button>
</form>

</div> <!--end of categoryForm -->
<?php
    require_once("./import/footer.php");
}
else {
    echo 'hnnn to tu meri website hack karega samle';
}
?>
