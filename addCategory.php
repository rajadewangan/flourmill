<?php
require_once("./import/header.php");
?>
<section id="addCategory">
     <div id="categoryForm">
     <form action="insertCategory.php" method="post" enctype="multipart/form-data">
        <div class="form-group">
            <label for="txtCatName">Enter Category Name</label>
            <input type="text" class="form-control" id="txtCatName" aria-describedby="emailHelp" name="txtCatName" required>
        </div>

        <div class="col-auto">
        <label class="sr-only" for="numCatPrice">Enter Category Price</label>
        <div class="input-group mb-2">
            <div class="input-group-prepend">
            <div class="input-group-text">Rs.</div>
            </div>
            <input type="number" name="numCatPrice" class="form-control" id="numCatPrice" required>
        </div>
        </div>
        <div class="form-group">
            <label for="imgCatImage">Choose Category Image</label>
            <input type="file" name="imgCatImage" class="form-control-file" id="imgCatImage" required>
        </div>
    </form>
    <div id="addCatButtons" class="m-2">
        <button type="button" onclick="addCat();" class="btn btn-outline-success ">Add More</button>   
        <button type="button" onclick="insertCat();" class="btn btn-outline-primary">Submit</button>
        <button type="button" class="btn btn-outline-danger">Cancel</button>
    </div>
     </div> 
</section><!--end of addCategory-->

<?php
require_once("./import/footer.php");
?>