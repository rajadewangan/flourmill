<?php
@session_start();

$email = $_REQUEST['email'];
$password = $_REQUEST['password'];
require_once("../import/dbconnect.php");

$query1 = "SELECT * FROM `owner_info` WHERE owner_email = '$email'";
$rsowner = mysqli_query($con, $query1);

if(mysqli_num_rows($rsowner) == 1) {
    $query2 = "SELECT * FROM `owner_info` WHERE owner_password = '$password'";
    $rsowner = mysqli_query($con, $query2);

    if(mysqli_num_rows($rsowner) == 1) {
        $_SESSION['username']=$email;
        echo "3";
    } else {
        echo "2";
    }
} else {
    echo "1";
}


?>