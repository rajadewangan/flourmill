<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['jsonCategoryData'])) {
    require_once('../import/dbconnect.php');
    $jsonCategoryData = $_REQUEST['jsonCategoryData'];
    $categoryDataArray = json_decode($jsonCategoryData, true); // Convert JSON to PHP array

    // Iterate through the array and process each category
    foreach ($categoryDataArray as $index => $categoryData) {
        $categoryName = $categoryData['categoryName'];
        $categoryPrice = $categoryData['categoryPrice'];
        // ... (other properties you may have included)

        // Handle the uploaded image
        $imageFieldName = "imageFile_$index";
        if (isset($_FILES[$imageFieldName]) && $_FILES[$imageFieldName]['error'] === UPLOAD_ERR_OK) {
            $imageData = file_get_contents($_FILES[$imageFieldName]['tmp_name']);
            // Save $imageData to your database using appropriate methods
             $uploadDirectory = '../images/category_image/';
             $tempFilePath = $_FILES['imageData']['tmp_name'];
             $originalFileName = $_FILES['imageData']['name'];
                   

        // Construct the final file path
        $finalFilePath = $uploadDirectory . $newFileName;
        move_uploaded_file($tempFilePath, $finalFilePath);
        }

        // Insert category data into your database
        $sql = "INSERT INTO `category_info`(`category_name`, `category_price`, `category_image`) VALUES ('$categoryName','$categoryPrice','$originalFileName')";
        mysqli_query($con,$sql) or die("Can't insert data into a database");
        
    }

}
?>
