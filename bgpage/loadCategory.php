<?php
require_once("../import/dbconnect.php");
$query = "SELECT * FROM `category_info`";
$rsCategory=mysqli_query($con,$query);
if(mysqli_num_rows($rsCategory)>0)
{
    while($row=$rsCategory)
    {
        
    }
}
else{
    echo("1");
}
?>