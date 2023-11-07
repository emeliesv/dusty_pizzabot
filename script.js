const pizzaMenu = [
  { name: "hawaiian", price: 80 },
  { name: "vegetarian", price: 80 },
  { name: "pepperoni", price: 80 },
  { name: "kebab", price: 80 },
  { name: "korv och ägg", price: 80 },
];

const menuItem = pizzaMenu.map((pizza) => pizza.name);

alert(`Hello! \nHappy to serve your pizza. \nOn our menu we have: ${menuItem}`);
const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);

const checkOrderName = (order) => {
  let pizza = order.toLowerCase();
  for (let i = 0; i < pizzaMenu.length; i++) {
    if (pizza === pizzaMenu[i].name) {
      pizza = pizzaMenu[i];
      return pizza;
    }
  }
  console.log("We don't serve that here");
  return false;
};

const calculatePizzas = (orderedPizza) => {
  const orderQuantity = prompt(`How many ${orderName} would you like?`);
  const cost = orderQuantity * orderedPizza.price;
  let time = 0;
  if (orderQuantity <= 2) {
    time = 10;
  } else if (orderQuantity >= 6) {
    time = 20;
  } else time = 15;
  const orderTotal = `Total order is ${orderQuantity} ${orderName}, it will cost ${cost} kr and take about ${time} minutes.`;
  return orderTotal;
};

const orderedPizza = checkOrderName(orderName);
const confimationMessage = calculatePizzas(orderedPizza);

alert(confimationMessage);

/* const checkOrderName = (order) => {
  const pizza = order.toLowerCase();
  for (let i = 0; i < pizzaMenu.length; i++) {
    if (pizza === pizzaMenu[i].name) {
      return pizzaMenu[i];
    }
  }
  console.log("We don't serve that here");
  return false;
};

let orderCorrect = false;
let orderName = "";

while (!orderCorrect) {
  orderName = prompt("Enter the name of the pizza you want to order today.");
  orderedPizza = checkOrderName(orderName);
}

const orderQuantity = prompt(`Okay, how many ${orderName} would you like?`);
const cost = orderQuantity * orderedPizza.price;
let time = 0;
if (orderQuantity <= 2) {
  time = 10;
} else if (orderQuantity >= 6) {
  time = 20;
} else time = 15;
console.log(
  `Total order is ${orderQuantity} ${orderName}, it will cost ${cost} kr and take about ${time} minutes.`
);
 */
