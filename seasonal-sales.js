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
    //console.log("Does the store info show?", event)
    let productData = JSON.parse(event.target.responseText);
    //console.log("What's in Products Data?", productData);
    showProdData(productData);

}
    
function showProdData(prodItem) {
    let productItem = document.getElementById("dept-product-item");
    //console.log("What's in ProdItem ? Has an array of products", prodItem);
    //console.log("What's in Products Item?", productItem);
    let productData = "";

    for(var j = 0; j < prodItem.products.length; j++) {
       let productItemValue = prodItem.products[j];
       //console.log("What's in productItemValue? has the whole array", productItemValue);
       for(let allProducts in productItemValue) {
           //console.log("What's in allProducts? Has Prop key.", allProducts);
           let prodObj = productItemValue[allProducts];
           //console.log("Now what does prodObj have?", prodObj);
           productData += `<h4>${allProducts}: ${prodObj}</h4>`
         //  console.log("Now, what's in productData?", productData);
       };
        productItem.innerHTML = productData;
        console.log("Here's the list of products", prodItem);


        //// Discount function needs to be worked on
        //// Spring Sale function
        function springSale() {
        var selectedItem = document.getElementById("dropdownMenu").selectedIndex;

        var currentProductPrice = 0;

            if (selectedItem[2] = true) {
                var springPrice = productData;
                console.log("What's showing in springPrice? ", SpringPrice);
                springAmount = springPrice - (springPrice * 15/100);
                console.log("What is winterPrice showing?", springAmount);
            }
        }
   }
   
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
    showCatData(categoryData);
    console.log("Is the categoryData showing?", categoryData);
}

function showCatData(catItem) {
    console.log("What is catItem?", catItem);
    let deptCategory = document.getElementById("dept-cat-items");
    let categoryData = '';
    console.log("What is deptCategory? ", deptCategory);
    
    

     // start a for loop to get all the 
    for(var i = 0; i < catItem.categories.length; i++){
            let catObject = catItem.categories[i];
            console.log("What is catObject? ", catObject);

       
        for(let category in catObject) {
            let categoryItem = catObject[category];
            console.log("What is in category? ", category);
            console.log("What is in categoryItem? ", categoryItem);
                categoryData += `<h2>${category}: ${categoryItem} </h2>`
                console.log("Now, what is in categoryData?", categoryData);
            };
    };   

    deptCategory.innerHTML = categoryData;
    console.log("Check if the categories show up.", deptCategory);
}
//}
function catRequestFailed(event) {
    console.log("The categories won't load.", event);
}

categoryDataRequest.open("GET", "categories.json");
categoryDataRequest.send();

/// Discount calculation

// selectedItem gives you the index of the item selected.


    //var prodPrice = 
    //var springSelection = https://seasonproject-8282e.firebaseio.com/;
    // split the springSelection into an array
    // pick the price and calculate
    //console.log("What is springSelection showing?", springSelection);
    // if (selectedItem[2] = true) {
    //     springSelection = 0;
    //     springPrice = productData;
    //     console.log("What;s showing in springPrice? ", SpringPrice);
    //     springAmount = springPrice - (springPrice * 15/100)
    //     console.log("What is winterPrice showing?", springAmount);
    // } else {}
//     if dropdown element spring = true;
//     then var discoutAmount = 
     