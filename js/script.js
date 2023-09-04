const currentPageName = window.location.pathname.split('/').pop();
console.log(currentPageName);

if (currentPageName=="adminMenu.php") {
    window.addEventListener('load', loadCategory);

// function to load category in a page 
function loadCategory(){
     var main = document.getElementsByTagName("main")[0];
     var xml = new XMLHttpRequest();
     xml.onreadystatechange=function() {
        if(xml.readyState== 4 && xml.status==200)
        {
          
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
       

     }
     xml.open("POST", "./bgpage/loadCategory.php", true);
     xml.send();
}
    
}
const categoryDataArray = []; // Array to store category data
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
const categoryData = {
        categoryName: catNameInput.value,
        categoryPrice: newInput.value,
        
    };   
    categoryDataArray.push(categoryData)

}

//function to insert category into a database 
function insertCat() {
    const formElement = document.querySelector('form[action="insertCategory.php"][method="post"]');
    const formData = new FormData();
    // Convert the array of category data into a JSON string
    const jsonCategoryData = JSON.stringify(categoryDataArray);
    // Append the JSON data to FormData
    formData.append('jsonCategoryData', jsonCategoryData);

    // Use fetch for AJAX (replacing jQuery's $.ajax)
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
        console.log(error);
    });
}