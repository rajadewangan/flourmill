<?php
require_once("./import/header.php");
?>
<?php
  if(isset($_REQUEST['resmsg']))
  {
    if($_REQUEST['resmsg']==1)
    {
        echo('<script>
        alert("Category added successfully");
        </script>');
    }
    else if($_REQUEST['resmsg']==2)
    {
        
        echo('<script>
        alert("Some Error occurs");
        </script>');

    }
    else if($_REQUEST['resmsg']==3)
    {
        echo('<script>
        alert("Category Updated successfully");
        </script>');
    }
    else if($_REQUEST['resmsg']==4)
    {
        
        echo('<script>
        alert("Some Error occurs");
        </script>');

    }
  }
?>
<section id="addCategory">
     <div id="categoryForm">
     <form action="./bgpage/insertCategory.php" method="post" enctype="multipart/form-data">
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
            <input type="file" name="imgCatImage" class="form-control-file" id="imgCatImage" 
            accept="image/*" required>

        </div>
        <div id="addCatButtons" class="m-2">
            <!-- <button type="button"  class="btn btn-outline-success ">Add More</button>    -->
            <button type="submit" class="btn btn-outline-primary">Submit</button>
            <button  type="reset" class="btn btn-outline-danger">Cancel</button>
            <button type="button" class="btn btn-success" id="viewAllButton">View All</button>
        </div>
    </form>
     </div> 
</section><!--end of addCategory-->

<?php
require_once("./import/footer.php");
?>