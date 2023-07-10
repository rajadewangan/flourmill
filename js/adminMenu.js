window.addEventListener('load', loadCategory);

// function to load category in a page 
function loadCategory(){
     var xml = new XMLHttpRequest();
     xml.onreadystatechange=function() {
        if(xml.readyState== 4 && xml.status==200)
        {
         
        }

     }
     xml.open("POST", "./bgpage/loadCategory.php", true);
     xml.send();
}