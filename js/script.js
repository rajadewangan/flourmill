


function addCat()
{
    var main = document.getElementsByTagName("main")[0];
    const a = document.createElement('a');
    a.setAttribute('href','./addCategory.php');
    const addCat = document.createElement('div');
    addCat.setAttribute('id', 'addCat');
    addCat.setAttribute('class', 'cat');
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "3rem");
    circle.setAttribute("cy", "4.5rem");
    circle.setAttribute("r", "2.5rem");
    circle.setAttribute("fill", "white");         
    svg.appendChild(circle);

    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line1.setAttribute("x1", "0.7rem");
    line1.setAttribute("y1", "4.4rem");
    line1.setAttribute("x2", "5.3rem");
    line1.setAttribute("y2", "4.4rem");
    line1.setAttribute("stroke", "#0085FF");
    line1.setAttribute("stroke-width", "0.2rem");
    svg.appendChild(line1);

    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line2.setAttribute("x1", "3rem");
    line2.setAttribute("y1", "2.2rem");
    line2.setAttribute("x2", "3rem");
    line2.setAttribute("y2", "6.8rem");
    line2.setAttribute("stroke", "#0085FF");
    line2.setAttribute("stroke-width", "0.2rem");
    svg.appendChild(line2);



    
    
    
    addCat.appendChild(svg);
    a.appendChild(addCat);
    main.appendChild(a);
}

// function to load category in a page 
function loadCategory(){
     var main = document.getElementsByTagName("main")[0];
     var xml = new XMLHttpRequest();
     xml.onreadystatechange=function() {
        if(xml.readyState== 4 && xml.status==200)
        {
            var jsonCatArray = JSON.parse(xml.responseText);
             if(jsonCatArray.length > 0)
             {
                 jsonCatArray.forEach((catData) => {
                    let a = document.createElement('a');
                    let catDiv = document.createElement("div");
                    let catName = document.createElement('p');
                    let catPrice = document.createElement('p');
                    let catImage = document.createElement('img');
                    
                    catName.textContent = catData.catName;
                    catPrice.textContent = 'Rs. : '+catData.catPrice+'/kg';
                    
                    catDiv.setAttribute('class', 'cat');
                    catImage.setAttribute('src','./images/category_image/'+ catData.catImage);




                    catDiv.appendChild(catImage);
                    catDiv.appendChild(catName);
                    catDiv.appendChild(catPrice);
                    a.setAttribute('href','./editCategoryForm.php?id='+catData.catId);
                    a.appendChild(catDiv);
                    main.appendChild(a);

                });
             }          

        }
       

     }
     xml.open("POST", "./bgpage/loadCategory.php", true);
     xml.send();
}
    

// function to load category in a home page 
function loadCategoryHome(){
    var main = document.getElementsByTagName("main")[0];
    var xml = new XMLHttpRequest();
    xml.onreadystatechange=function() {
       if(xml.readyState== 4 && xml.status==200)
       {
           var jsonCatArray = JSON.parse(xml.responseText);
           console.log(jsonCatArray)
            if(jsonCatArray.length > 0)
            {
                jsonCatArray.forEach((catData) => {
                   let catDiv = document.createElement("div");
                   let catName = document.createElement('p');
                   let catPrice = document.createElement('p');
                   let catImage = document.createElement('img');
                   
                   catName.textContent = catData.catName;
                   catPrice.textContent = 'Rs. : '+catData.catPrice+'/kg';
                   
                   catDiv.setAttribute('class', 'cat');
                   catImage.setAttribute('src','./images/category_image/'+ catData.catImage);




                   catDiv.appendChild(catImage);
                   catDiv.appendChild(catName);
                   catDiv.appendChild(catPrice);
                   main.appendChild(catDiv);

               });
            }          

       }
      

    }
    xml.open("POST", "./bgpage/loadCategory.php", true);
    xml.send();
}
document.getElementById("viewAllButton").addEventListener("click", function() {
    // Change the window location to adminMenu.php
    window.location.href = "./adminMenu.php";
}); 

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("imgCatImage");
    const image = document.getElementById("croppedImage");
    const croppedDataInput = document.getElementById("croppedImageData");

    input.addEventListener("change", function(e) {
        const file = e.target.files[0];
        if (file) {
            const cropper = new Cropper(image, {
                aspectRatio: 2/1, // Adjust the aspect ratio as needed
                viewMode: 1,   // Adjust the view mode as needed
                crop: function(event) {
                    const canvas = cropper.getCroppedCanvas();
                    const croppedData = canvas.toDataURL("image/jpeg"); // Change the format if needed
                    croppedDataInput.value = croppedData;
                }
            });

            const reader = new FileReader();
            reader.onload = function(e) {
                cropper.replace(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
});
/*
var index = 0;
// function to add more category forms  
function addCat()
{
    
    const formElement = document.querySelector('form[action="insertCategory.php"][method="post"]');
    formElement.appendChild(document.createElement('hr'));

// Create the newCat div
const newCat = document.createElement("div");
newCat.className = "form-group";

// Create label and input for category name
const catNameLabel = document.createElement("label");
catNameLabel.setAttribute('for','txtCatName');
catNameLabel.textContent = 'Category Name'; // Set the label text
newCat.appendChild(catNameLabel);
catNameLabel.textContent='Enter Category Name';

const catNameInput = document.createElement("input");
catNameInput.setAttribute('type','text');
catNameInput.className = "form-control";
catNameInput.id = 'txtCatName';
catNameInput.setAttribute('aria-describedby','emailHelp');
catNameInput.name = 'txtCatName';
catNameInput.required = true; // Set the required attribute
newCat.appendChild(catNameInput);

// Create the newDiv
const newDiv = document.createElement('div');
newDiv.classList.add('col-auto');

// Create a label element for category price
const newLabel = document.createElement('label');
newLabel.classList.add('sr-only');
newLabel.setAttribute('for', 'numCatPrice');
newLabel.textContent = 'Enter Category Price';

// Create the input group for category price
const newInputGroupDiv = document.createElement('div');
newInputGroupDiv.classList.add('input-group', 'mb-2');

// Create the prepend div for the input group
const newInputGroupPrependDiv = document.createElement('div');
newInputGroupPrependDiv.classList.add('input-group-prepend');

// Create the "Rs." text element
const newInputGroupTextDiv = document.createElement('div');
newInputGroupTextDiv.classList.add('input-group-text');
newInputGroupTextDiv.textContent = 'Rs.';

// Create the input for category price
const newInput = document.createElement('input');
newInput.type = 'number';
newInput.name = 'numCatPrice';
newInput.classList.add('form-control');
newInput.id = 'numCatPrice';
newInput.required = true;

// Construct the input group structure
newInputGroupPrependDiv.appendChild(newInputGroupTextDiv);
newInputGroupDiv.appendChild(newInputGroupPrependDiv);
newInputGroupDiv.appendChild(newInput);

// Append the label and input group to the newDiv
newDiv.appendChild(newLabel);
newDiv.appendChild(newInputGroupDiv);

// Create the newFormGroupDiv
const newFormGroupDiv = document.createElement('div');
newFormGroupDiv.classList.add('form-group');

// Create the label and input for category image
const newImageLabel = document.createElement('label');
newImageLabel.setAttribute('for', 'imgCatImage');
newImageLabel.textContent = 'Choose Category Image';

const newImageInput = document.createElement('input');
newImageInput.type = 'file';
newImageInput.name = 'imgCatImage';
newImageInput.classList.add('form-control-file');
newImageInput.id = 'imgCatImage';
newImageInput.required = true;

// Append the label and input to the newFormGroupDiv
newFormGroupDiv.appendChild(newImageLabel);
newFormGroupDiv.appendChild(newImageInput);

// Append all elements to the formElement
formElement.appendChild(newCat);
formElement.appendChild(newDiv);
formElement.appendChild(newFormGroupDiv);
 
index++;
}
const categoryDataArray = [];

// Function to add category data to the array when all fields are filled
function addCategory() {
    // Get the number of categories to process
    const index = categoryDataArray.length;
    
    // Validate and add data for each category
    for (let i = 0; i <= index; i++) {
        const catNameInput = document.querySelectorAll('input[name="txtCatName"]')[i];
        const catPriceInput = document.querySelectorAll('input[name="numCatPrice"]')[i];
        const catImageInput = document.querySelectorAll('input[name="imgCatImage"]')[i];

        if (catNameInput.value.trim() && catPriceInput.value.trim() && catImageInput.files.length > 0) {
            var categoryData = {
                categoryName: catNameInput.value,
                categoryPrice: catPriceInput.value,
                categoryImage: catImageInput.files[0] // Only one file per input
            };
            categoryDataArray.push(categoryData);
            console.log(categoryData);
        }
    }
}

// Function to insert categories into the database
function insertCat() {
    if (categoryDataArray.length > 0) {
        const formData = new FormData();
        const jsonCategoryData = JSON.stringify(categoryDataArray);
        formData.append('jsonCategoryData', jsonCategoryData);

        fetch('./bgpage/insertCategory.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(response => {
            // Handle server response
            console.log(response);
        })
        .catch(error => {
            // Handle errors
            console.log("error" + error);
        });
    } else {
        console.log('No valid category data to submit.');
    }
}
*/
