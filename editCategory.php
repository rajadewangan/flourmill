<?php if ($_SERVER['REQUEST_METHOD'] === 'POST' ) {
    require_once('./import/dbconnect.php');
        $catId = $_REQUEST['numCatId'];
        $categoryName = $_REQUEST['txtCatName'];
        $categoryPrice = $_REQUEST['numCatPrice'];

        if(isset($_REQUEST['flCatImage']))
        {

            $tempFilePath = $_FILES['flCatImage']['tmp_name'];
            $originalFileName = $_FILES['flCatImage']['name'];
            $uploadDirectory = '../images/category_image/';
            $finalFilePath = $uploadDirectory . $originalFileName;
    
            // Move the uploaded image to the final directory
            move_uploaded_file($tempFilePath, $finalFilePath);
    
            // Insert category data into your database, including the image path
            $sql = "UPDATE `category_info` SET `category_name`=' $categoryName',`category_price`='$categoryPrice',`category_image`='$originalFileName' WHERE `category_id`=$id";
           $var=mysqli_query($con, $sql) or die("Can't update data into the database");
        
    
    if($var)
      header("location:./addCategory.php?resmsg=1");
    else
      header("location:./addCategory.php?resmsg=2");
        }

        else
        {
            $sql = "UPDATE `category_info` SET `category_name`=' $categoryName',`category_price`='$categoryPrice' WHERE `category_id`=$catId";
            $var=mysqli_query($con, $sql) or die("Can't update data into the database");
            if($var)
            header("location:./adminMenu.php?resmsg=1");
            else
            header("location:./adminMenu.php?resmsg=2");
        } 
    }
        else
    {
        echo('kya hi karu ab mai');
    }  

?>
