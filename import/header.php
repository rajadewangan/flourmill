<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <!-- Include Cropper.js library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.css">

    <link href="./css/style.css" rel="stylesheet">
    <script src="./js/script.js"></script>

</head>
<body>
    <header> 
      <section id="headerImg">
        <img src="./images/header_background.png" alt="Flour Mill Img">
      </section>

      <section id="headerName">
        <p> Tarachand Dewangan Flour Mill </p>
      </section>

      <section id="headerLocation">
        <p><?php 
                 require_once("./import/dbconnect.php");
                 $query="SELECT * FROM `mill_info`";
                 $rsMillInfo=mysqli_query($con,$query);
                 $row=mysqli_fetch_array($rsMillInfo);
                 echo($row['mill_location']);
                 ?></p>
      </section>
      
    </header>
    <main>
    
