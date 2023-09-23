<?php if ($_SERVER['REQUEST_METHOD'] === 'POST' ) {
    require_once('../import/dbconnect.php');
  
        $categoryName = $_REQUEST['txtCatName'];
        $categoryPrice = $_REQUEST['numCatPrice'];

        

       
            $tempFilePath = $_FILES['imgCatImage']['tmp_name'];
            $originalFileName = $_FILES['imgCatImage']['name'];
            $uploadDirectory = '../images/category_image/';
            $finalFilePath = $uploadDirectory . $originalFileName;

            // Move the uploaded image to the final directory
            move_uploaded_file($tempFilePath, $finalFilePath);

            // Insert category data into your database, including the image path
            $sql = "INSERT INTO `category_info`(`category_name`, `category_price`, `category_image`) VALUES ('$categoryName','$categoryPrice','$originalFileName')";
           $var=mysqli_query($con, $sql) or die("Can't insert data into the database");
        
    }
    if($var)
      header("location:../addCategory.php?resmsg=1");
    else
      header("location:../addCategory.php?resmsg=2");

?>
