//Instructions
//Your job is to build a department store's web page that lists products, the name of the department each one is in, and the price.

//The two JSON representations above should be in two files: products.json, and categories.json (see below). Use Javascript's XMLHttpRequest() method to read the data from those files, and then build HTML representations of the data.

// Work Process //
// load data
//send a request to a var


//"use strict";

let productDataRequest = new XMLHttpRequest();

productDataRequest.addEventListener("load", dataRequestComplete);
productDataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event) {
    console.log("Does the store info show?", event)
    let productData = JSON.parse(event.target.responseText);
    console.log("Products Data", productData);
    showData(productData);
}

function showData(event) {
    let productItem = document.getElementById("dept-product-item");
    let productData = "";

    for(let item in event) {
        let productLoad = event[item];
        productData += `<div><h2>${productLoad.name}: ${productLoad.price}</h2></div>`
    };

    productItem.innerHTML = productData;
    console.log("Here's the list of products", productData);
}

function dataRequestFailed(event) {
    console.log("This data has failed to load.", event);
}


productDataRequest.open("GET", "products.json");
productDataRequest.send();

// Category Sales
// Put a XML Request on a var 
// Use a function to parse the JSON file
// show the data
// show it in html file by using getElementById
// create a function to catch error
// get and send

let categoryDataRequest = new XMLHttpRequest();

categoryDataRequest.addEventListener("load", catRequestComplete);
categoryDataRequest.addEventListener("error", catRequestFailed);

function catRequestComplete(event) {
    console.log("Is the category getting loaded?", event);
    let categoryData = JSON.parse(event.target.responseText);
    console.log("Is the categoryData showing?", categoryData);
    showCatData(categoryData);
}

function showCatData(event) {
    let deptCategory = document.getElementById("dept-cat-items");
    let categoryData = '';

    for(let category in catItem) {
        let categoryItem = catItem[category];
        categoryData += `<h2>${categoryItem.id}: ${categoryItem.name}: ${categoryItem.season_discount}: ${categoryItem.discount}</h2>`
    };

    deptCategory.innerHTML = categoryData;
    console.log("Check if the categories show up.", deptCategory);
}

function catRequestFailed(event) {
    console.log("The categories won't load.", event);
}

categoryDataRequest.open("GET", "categories.json");
categoryDataRequest.send();