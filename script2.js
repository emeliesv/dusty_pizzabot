const pizzaBtn = document.getElementById("pizzaBtn");
const confirmationBox = document.getElementById("orderTotal");
const form = document.getElementById("formId");

const pizzaMenu = [
  { name: "hawaiian", price: 80 },
  { name: "vegetarian", price: 80 },
  { name: "peperoni", price: 80 },
  { name: "kebab", price: 80 },
  { name: "korv och ägg", price: 80 },
];

//const menuItem = pizzaMenu.map((pizza) => pizza.name);

const checkOrderName = (order) => {
  for (let i = 0; i < pizzaMenu.length; i++) {
    if (order === pizzaMenu[i].name) {
      order = pizzaMenu[i];
      return order;
    }
  }
  return null; //Är det dålig praxis att returnera en bool här istället för null?
};

const calculatePizzas = (pizzaobject, orderquantity) => {
  const cost = orderquantity * pizzaobject.price;
  console.log("sending in", pizzaobject);
  let time = 0;
  if (orderquantity <= 2) {
    time = 10;
  } else if (orderquantity >= 6) {
    time = 20;
  } else time = 15;
  const orderTotal = `Total order is ${orderquantity} ${pizzaobject.name}, it will cost ${cost} kr and take about ${time} minutes.`;
  return orderTotal;
};

const confirmTotalOrder = (ordername, orderquantity) => {
  const pizza = checkOrderName(ordername);
  confirmationBox.textContent = calculatePizzas(pizza, orderquantity);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const orderName = document.getElementById("pizzaMenuSelect").value;
  const orderQuantity = parseInt(
    document.getElementById("pizzaQuantity").value
  );
  confirmTotalOrder(orderName, orderQuantity);
}); //Denna behövs för att inte refresha sidan när man trycker på submit
