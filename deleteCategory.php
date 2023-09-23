<?php if ($_SERVER['REQUEST_METHOD'] === 'POST' ) {
    require_once('./import/dbconnect.php');
        $catId = $_REQUEST['catId'];
       

       
            $sql = "DELETE FROM `category_info` WHERE `category_id`=$catId";
            $var=mysqli_query($con, $sql) or die("Can't delete data into the database");
            if($var)
            header("location:./adminMenu.php?resmsg=3");
            else
            header("location:./adminMenu.php?resmsg=4");
        } 
    
        else
    {
        echo('kya hi karu ab mai');
    }  

?>
