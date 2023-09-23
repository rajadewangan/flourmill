<?php
require_once("../import/dbconnect.php");
$query = "SELECT * FROM `category_info`";
$rsCategory = mysqli_query($con, $query);
if (mysqli_num_rows($rsCategory) > 0) {
    $catArray = [];
    while ($row = mysqli_fetch_assoc($rsCategory)) {
        $catData = array(
            "catId" => $row['category_id'],
            "catName" => $row['category_name'],
            "catPrice" => $row['category_price'],
            "catImage" => $row['category_image']
        );
        array_push($catArray, $catData);
    }
    $jsonCatArray = json_encode($catArray);
    echo $jsonCatArray;
} else {
    echo "1";
}
?>
