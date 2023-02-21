
// Waiting to load the js file until the HTML file is done.
document.addEventListener("DOMContentLoaded", function() {
    // get the number button element
const numberBtn = document.getElementById('basketNumber');

// retrieve the product count from local storage, or initialize it to 0 if it's not present
let productCount = localStorage.getItem('productCount') || 0;

// set the initial value of the number button
numberBtn.innerText = productCount;

// add a click event listener to the AddProduct button
document.getElementById('AddProduct').addEventListener('click', function() {
  // increment the value of the number button
  productCount++;
  numberBtn.innerText = productCount;

  // retrieve the title and price of the product
  const title = document.getElementById('product-title').innerText;
  const price = document.getElementById('product-price').innerText;

  // retrieve the existing cart data from local storage, or initialize it to an empty array if it's not present
  let cartData = JSON.parse(localStorage.getItem('cartData')) || [];

  // add the current product to the cart data array
  cartData.push({ title: title, price: price });

  // store the updated product count and cart data in local storage
  localStorage.setItem('productCount', productCount);
  localStorage.setItem('cartData', JSON.stringify(cartData));
});

// add a click event listener to the display button
document.getElementById('display-btn').addEventListener('click', function() {
  // display the value of the number button in the console
  console.log(productCount);

  // display the cart data in the console
  console.log(JSON.parse(localStorage.getItem('cartData')));
});

});