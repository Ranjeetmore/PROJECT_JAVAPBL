var cart = [];

function ranjeet() {
  if (localStorage.cart) {
    cart = JSON.parse(localStorage.cart);
    showCart();
  }
}

function addToCart() {
  console.log('AddToCart');
  //   var price = document.getElementById('#products').value;
  var price = document.querySelector('#btnAdd').parentNode.childNodes[5]
    .innerText;
  var qty = document.getElementById('#qty').value;
  console.log('AddToCart');
  // update qty if product is already present
  for (var i in cart) {
    if (cart[i].Product == name) {
      cart[i].Qty = qty;
      showCart();
      saveCart();
      return;
    }
  }

  // create JavaScript Object
  var item = { Product: name, Price: price, Qty: qty };
  cart.push(item);
  saveCart();
  showCart();
}
addToCart();

function deleteItem(index) {
  cart.splice(index, 1); // delete item at index
  showCart();
  saveCart();
}

function saveCart() {
  if (window.localStorage) {
    localStorage.cart = JSON.stringify(cart);
  }
}

function showCart() {
  var cart0 = document.querySelector('#cart');
  if (cart.length == 0) {
    cart0.style.visibility = 'hidden';
    return;
  }

  cart0.style.visibility = 'visible';

  var cartBody = document.querySelector('#cartBody');
  empty(cartBody);

  for (var i in cart) {
    var item = cart[i];
    var row =
      '<tr><td>' +
      item.Product +
      '</td><td>' +
      item.Price +
      '</td><td>' +
      item.Qty +
      '</td><td>' +
      item.Qty * item.Price +
      '</td><td>' +
      "<button onclick='deleteItem(" +
      i +
      ")'>Delete</button></td></tr>";

    cartBody.appendChild(row);
  }
}

function empty(element) {
  // Get the element's children as an array
  var children = Array.prototype.slice.call(element.childNodes);

  // Remove each child node
  children.forEach(function (child) {
    element.removeChild(child);
  });
}
