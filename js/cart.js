/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(Array.isArray(cartItems));
  cart = new Cart(cartItems);
  console.log(cart.items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  // clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var cartLocation = document.getElementById('cart');
  for (var i = 0; i < cart.items.length; i++) {
        var tableRow = document.createElement('tr');
        var firstTD = document.createElement('td');
        firstTD.textContent = "x"
        var quantityTD = document.createElement('td');
        quantityTD.textContent = cart.items[i].quantity;
        // console.log(cart.items[i].quantity);
        var itemTD = document.createElement('td');
        itemTD.textContent = cart.items[i].product;
        tableRow.appendChild(firstTD);
        tableRow.appendChild(quantityTD);
        tableRow.appendChild(itemTD);
        cartLocation.appendChild(tableRow);
  }

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();