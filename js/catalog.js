/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.

var cart =  new Cart(JSON.parse(localStorage.getItem('cart'))|| []);

console.log(cart);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {
    var option = document.createElement('option');
    option.value = Product.allProducts[i].name;
    option.textContent = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  
console.log('submit was clicked');
  // TODO: Prevent the page from reloading
  event.preventDefault();
  var amountOfItems = parseInt(document.getElementById('quantity').value);
  if (isNaN(amountOfItems)){
    alert('Please enter a Quantity!');
  }else {

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  }
}
var newCartItem = [];
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  var selectedItem = document.getElementById('items').value;
  // console.log(selectedItem);
  // TODO: get the quantity
  var amountOfItems = parseInt(document.getElementById('quantity').value);
  // console.log(amountOfItems);
  // TODO: using those, add one item to the Cart
   newCartItem = [selectedItem, amountOfItems];
  console.log(newCartItem);
  cart.addItem(newCartItem[0], newCartItem[1]);
  console.log(cart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var cartCounter = document.getElementById('itemCount');
  cartCounter.textContent = ` ${cart.items.length} Items`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var cartContents = document.getElementById('cartContents');
  var newParagraph = document.createElement('p');
  newParagraph.textContent = `Item: ${newCartItem[0]}   Quantity: ${newCartItem[1]}` 
  cartContents.appendChild(newParagraph);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();