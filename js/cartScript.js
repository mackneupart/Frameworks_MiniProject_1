// Waiting to load the js file until the HTML file is done.
document.addEventListener("DOMContentLoaded", function () {
  // get the number button element
  const numberBtn = document.getElementById("basketNumber");

  // retrieve the product count from local storage, or initialize it to 0 if it's not present
  let productCount = localStorage.getItem("productCount") || 0;

  // set the initial value of the number button
  numberBtn.innerText = productCount;

  // add a click event listener to the AddProduct button
  document.getElementById("AddProduct").addEventListener("click", function () {
    // increment the value of the number button
    productCount++;
    numberBtn.innerText = productCount;

    // retrieve the title and price of the product
    const title = document.getElementById("product-title").innerText;
    const price = document.getElementById("product-price").innerText;

    // retrieve the existing cart data from local storage, or initialize it to an empty array if it's not present
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

    // add the current product to the cart data array
    cartData.push({ title: title, price: price });

    // store the updated product count and cart data in local storage
    localStorage.setItem("productCount", productCount);
    localStorage.setItem("cartData", JSON.stringify(cartData));
  });
});

// Updating the items of products on the cart page -> the functions is being run on the cart.html page
function updateCartItems() {
  let productItmes = JSON.parse(localStorage.cartData);
  let newdiv;
  let divIdName;
  for (let i = 0; i < productItmes.length; i++) {
    let title = productItmes[i].title;
    let price = productItmes[i].price;
    newdiv = document.createElement("div");
    divIdName = i;
    newdiv.setAttribute("id", divIdName);
    newdiv.innerHTML =
      '<li class="product-item d-flex justify-content-between lh-condensed"> <div class="purchase-item"><div><img src="/images/products/and1.jpeg" width="120px"></div><div><p class="product-name">' +
      title +
      '</p><p class="text-muted">ID: 127</p><button onclick="removeItem()">fjern fra kurv</button></div></div><span>1</span><span>' +
      price +
      "</span></li>";
    document.getElementById("product-update-script").appendChild(newdiv);
  }
}

//sletter lige pt alle elementerne fra kurven
function removeItem() {
  let productItmes = JSON.parse(localStorage.cartData);
  for (let i = 0; i < productItmes.length; i++) {
    let d = document.getElementById("product-update-script");
    let d_nested = document.getElementById(i);
    d.removeChild(d_nested);
  }
}

function addUserName() {
  const userName = window.localStorage.getItem("name");
  if (userName !== null) {
    document.getElementById("welcome-text").innerHTML =
      "Goddag " + userName + "!";
    let x = document.getElementById("login-btn");
    x.style.display = "none";
    let y = document.getElementById("logout-btn");
    y.style.display = "block";
  } else {
    document.getElementById("welcome-text").innerHTML = "";
    let x = document.getElementById("logout-btn");
    x.style.display = "none";
  }
}

function getData() {
  updateCartItems();
  addUserName();
}
