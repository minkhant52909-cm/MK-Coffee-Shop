const navbar = document.getElementById("mynav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

let slideIndex = 0;
showSlides();
function showSlides(){
let slides = document.getElementsByClassName("slide");
for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
}
slideIndex++;
if(slideIndex > slides.length){
    slideIndex = 1;
}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 3000);
}

 // Show modal when page loads
  window.onload = function() {
    document.getElementById("myModal").style.display = "block";
  };

  // Close modal when clicking the "x"
  document.querySelector(".close").onclick = function() {
    document.getElementById("myModal").style.display = "none";
  };

  // Close modal when clicking outside the box
  window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  };

// ADD TO CART
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name: name, price: price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}

// DISPLAY CART (runs only on cart page)
function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  let cartContainer = document.getElementById("cart-items");

  if (!cartContainer) return; // prevents error on other pages

  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("cart-item");

    let text = document.createElement("span");
    text.innerText = item.name + " - $" + item.price;

    let btn = document.createElement("button");
    btn.innerText = "Remove";

    btn.onclick = function () {
      removeItem(index);
    };

    div.appendChild(text);
    div.appendChild(btn);

    cartContainer.appendChild(div);

    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

// REMOVE ITEM
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

// CLEAR CART
function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

// AUTO RUN when page loads
window.onload = displayCart;
