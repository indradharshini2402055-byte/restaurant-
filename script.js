let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;

  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((c) => {
    let li = document.createElement("li");
    li.textContent = `${c.item} - ₹${c.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").textContent = "Total: ₹" + total;
}
