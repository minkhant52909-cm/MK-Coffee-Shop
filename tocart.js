document.addEventListener("DOMContentLoaded", function() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let cartItemsDiv = document.getElementById("cartItems");
  let total = 0;

  cart.forEach(item => {
    let div = document.createElement("div");
    div.textContent = item.name + " - $" + item.price;
    cartItemsDiv.appendChild(div);

    total += item.price;
  });

  document.getElementById("totalPrice").textContent = 
    "Total: $" + total;
});

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

