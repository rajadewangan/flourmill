<?php
@session_start();
if(isset($_SESSION['username']))
{ 
    require_once("./import/header.php");
    echo("<script>window.onload=addCat</script>");
    // Add the rest of your content or code here
    if(isset($_REQUEST['resmsg']))
    {
        $resmsg = $_REQUEST['resmsg'];
        if($resmsg==1)
        {
            echo('<script>alert("Category Updated Successfully")</script>');
        }
        else if($resmsg==2)
        {
            echo('<script>alert("Can\'t update !!!")</script>');

        }
        else if($resmsg==3)
        {
            echo('<script>alert("Category Deleted Successfully")</script>');
        }
        else if($resmsg==4)
        {
            echo('<script>alert("Can\'t Delete !!!")</script>');

        }
    }
    echo('<script>loadCategory();</script>');
    require_once("./import/footer.php");
}
else {
    echo 'hnnn to tu meri website hack karega samle';
}
?>
