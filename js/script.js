// function to check owner email and password 
function checkLogin(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var xml = new XMLHttpRequest();
  
  xml.onreadystatechange = function() {
    if (xml.readyState == 4 && xml.status == 200) {
      if (xml.responseText == "3") {
        window.location.href = 'adminMenu.php';
      } else if(xml.responseText=="2") {
        // Handle invalid login credentials or other responses
        alert("Incorrect Password");

      }
      else if(xml.responseText=="1")
      {
        alert("Incorrect Username");
      }
    }
    
  };
  
  xml.open("POST", "./bgpage/checkLogin.php", true);
  xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  var data = "email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password);
  xml.send(data);
}

