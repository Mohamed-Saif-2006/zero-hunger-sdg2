function postFood() {
  let food = {
    name: foodName.value,
    quantity: quantity.value,
    location: location.value,
    expiry: expiry.value,
    contact: contact.value,
    date: new Date().toISOString().split("T")[0]
  };

  let foods = JSON.parse(localStorage.getItem("foods")) || [];
  foods.push(food);
  localStorage.setItem("foods", JSON.stringify(foods));

  alert("Thank you for donating food ❤️");
  window.location.href = "food-list.html";
}

function displayFood(list) {
  let container = document.getElementById("foodContainer");
  if (!container) return;

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p class='empty'>No food available</p>";
    return;
  }

  list.forEach(food => {
    container.innerHTML += `
      <div class="card">
        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe">
        <h3>${food.name}</h3>
        <p><strong>Location:</strong> ${food.location}</p>
        <p><strong>Quantity:</strong> ${food.quantity}</p>
        <p><strong>Expiry:</strong> ${food.expiry}</p>
        <a href="tel:${food.contact}" class="call-btn">📞 Contact</a>
      </div>
    `;
  });
}

function searchFood() {
  let search = document.getElementById("search").value.toLowerCase();
  let foods = JSON.parse(localStorage.getItem("foods")) || [];

  let today = new Date().toISOString().split("T")[0];
  foods = foods.filter(f => f.expiry >= today);

  let filtered = foods.filter(f =>
    f.location.toLowerCase().includes(search)
  );

  displayFood(filtered);
}

window.onload = () => {
  let foods = JSON.parse(localStorage.getItem("foods")) || [];
  displayFood(foods);
};
