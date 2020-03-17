const photoSizes = {
  WIDTH: 400,
  HEIGHT: 250,
}

const form = document.querySelector('.order');

const selectPizza = form.querySelector('.order__pizza');
const amountOfPizza = form.querySelector('.order__amount--pizza').querySelectorAll('input');
const selectDrinks = form.querySelector('.order__drinks');
const amountOfDrinks = form.querySelector('.order__amount--drinks').querySelectorAll('input');
const selectFries = form.querySelector('.order__fries');
const amountOfFries = form.querySelector('.order__amount--fries').querySelectorAll('input');
const selectSalad = form.querySelector('.order__salad');
const amountOfSalad = form.querySelector('.order__amount--salad').querySelectorAll('input');

const photoOfPizza = form.querySelector('.order__pizza-photo');

let nameOfClient = form.querySelector('.order__name-input');
let addressOfClient = form.querySelector('.order__address-input');
let phoneOfClient = form.querySelector('.order__phone-input');

const totalPriceOutput = form.querySelector('.order__total-price');
let orderOverview = form.querySelector('.order__overview');
const formSubmit = form.querySelector('.order__btn');

const priceOfPizzas = {
  la: 24.50,
  sf: 16,
  ny: 18.35,
  m: 21,
  d: 12.45,
}

const priceOfDrinks = {
  s: 2,
  m: 3,
  b: 4,
  bxl: 5,
  bxxl: 7,
}

const priceOfFries = {
  s: 3,
  m: 4,
  b: 5,
}

const priceOfSalads = {
  s: 2.50,
  m: 3,
  b: 4,
}

getNameOfOfItem = (select) => {
  let nameOfItem = select.options[select.selectedIndex].text;  
  return nameOfItem;
}

checkPriceOfPizza = (property) => {
  if (property === 'any') { 
    photoOfPizza.src = ``;
    photoOfPizza.width = 0;
    photoOfPizza.height = 0;
  }
  if (property === '1') { 
    photoOfPizza.src = `img/pizza${property}.png`;
    photoOfPizza.width = photoSizes.WIDTH;
    photoOfPizza.height = photoSizes.HEIGHT;
    getNameOfOfItem(selectPizza);
    return priceOfPizzas.la;
  }
  if (property === '2') {
    photoOfPizza.src = `img/pizza${property}.png`;
    photoOfPizza.width = photoSizes.WIDTH;
    photoOfPizza.height = photoSizes.HEIGHT;
    getNameOfOfItem(selectPizza);
    return priceOfPizzas.sf;
  }
  if (property === '3') {
    photoOfPizza.src = `img/pizza${property}.png`;
    photoOfPizza.width = photoSizes.WIDTH;
    photoOfPizza.height = photoSizes.HEIGHT;
    getNameOfOfItem(selectPizza);
    return priceOfPizzas.ny;
  }
  if (property === '4') {
    photoOfPizza.src = `img/pizza${property}.png`;
    photoOfPizza.width = photoSizes.WIDTH;
    photoOfPizza.height = photoSizes.HEIGHT;
    getNameOfOfItem(selectPizza);
    return priceOfPizzas.m;
  }
  if (property === '5') {
    photoOfPizza.src = `img/pizza${property}.png`;
    photoOfPizza.width = photoSizes.WIDTH;
    photoOfPizza.height = photoSizes.HEIGHT;
    getNameOfOfItem(selectPizza);
    return priceOfPizzas.d;
  }
}

ckeckpriceOfDrinks = (property) => {
  if (property === '1') {
    getNameOfOfItem(selectDrinks);
    return priceOfDrinks.s;
  }
  if (property === '2') {
    getNameOfOfItem(selectDrinks);
    return priceOfDrinks.m;
  }
  if (property === '3') {
    getNameOfOfItem(selectDrinks);
    return priceOfDrinks.b;
  }
  if (property === '4') {
    getNameOfOfItem(selectDrinks);
    return priceOfDrinks.bxl;
  }
  if (property === '5') {
    getNameOfOfItem(selectDrinks);
    return priceOfDrinks.bxxl;
  }
}

ckeckPriceOfFries = (property) => {
  if (property === '1') {
    getNameOfOfItem(selectFries);
    return priceOfFries.s;
  }
  if (property === '2') {
    getNameOfOfItem(selectFries);
    return priceOfFries.m;
  }
  if (property === '3') {
    getNameOfOfItem(selectFries);
    return priceOfFries.b;
  }
}

ckeckPriceOfSalad = (property) => {
  if (property === '1') {
    getNameOfOfItem(selectSalad);
    return priceOfSalads.s;
  }
  if (property === '2') {
    getNameOfOfItem(selectSalad);
    return priceOfSalads.m;
  }
  if (property === '3') {
    getNameOfOfItem(selectSalad);
    return priceOfSalads.b;
  }
}

countTotalPrice = (pizzaPrice = 0, pizzaAmount = 1, drinksPrice = 0, drinksAmount = 0, friesPrice = 0, friesAmount = 0, saladPrice = 0, saladAmount = 0 ) => {
  let totalPriceOfOrder = 0;
  
  totalPriceOfOrder = (pizzaPrice * pizzaAmount) + (drinksPrice * drinksAmount) + (friesPrice * friesAmount) + (saladPrice * saladAmount);

  return Math.floor((totalPriceOfOrder * 100) / 100 );
}

getAmountOfItem = (array) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.checked === true) {      
      return element.value;
    }
  }
}

form.addEventListener('change', () => {
  let totalPrice = 0;
  totalPrice = countTotalPrice(checkPriceOfPizza(selectPizza.value), getAmountOfItem(amountOfPizza), ckeckpriceOfDrinks(selectDrinks.value), getAmountOfItem(amountOfDrinks), ckeckPriceOfFries(selectFries.value), getAmountOfItem(amountOfFries), ckeckPriceOfSalad(selectSalad.value), getAmountOfItem(amountOfSalad));
  
  totalPriceOutput.textContent = `Total: ${totalPrice} $`;

  orderOverview.innerHTML = '';
  let html = `
    <li class="overview__item overview__item--pizza">
      <span>Pizza:</span> ${getNameOfOfItem(selectPizza)} x ${getAmountOfItem(amountOfPizza)}
    </li>
    <li class="overview__item overview__item--drinks">
      <span>Drinks:</span> ${getNameOfOfItem(selectDrinks)} x ${getAmountOfItem(amountOfDrinks)}
    </li>
    <li class="overview__item overview__item--fries">
      <span>Fries:</span> ${getNameOfOfItem(selectFries)} x ${getAmountOfItem(amountOfFries)} 
    </li>
    <li class="overview__item overview__item--salad">
      <span>Salad:</span> ${getNameOfOfItem(selectSalad)} x ${getAmountOfItem(amountOfSalad)}
    </li>
  `;

  orderOverview.innerHTML += html;
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const orderedAt = new Date();

  const order = {
    pizza: getNameOfOfItem(selectPizza),
    pizza_amount: getAmountOfItem(amountOfPizza),
    drinks: getNameOfOfItem(selectDrinks),
    drinks_amount: getAmountOfItem(amountOfDrinks),
    fries: getNameOfOfItem(selectFries),
    fries_amount: getAmountOfItem(amountOfFries),
    salad: getNameOfOfItem(selectSalad),
    salad_amount: getAmountOfItem(amountOfSalad),
    name: nameOfClient.value.trim(),
    street: addressOfClient.value.trim(),
    phone: phoneOfClient.value.trim(),
    total: countTotalPrice(checkPriceOfPizza(selectPizza.value), getAmountOfItem(amountOfPizza), ckeckpriceOfDrinks(selectDrinks.value), getAmountOfItem(amountOfDrinks), ckeckPriceOfFries(selectFries.value), getAmountOfItem(amountOfFries), ckeckPriceOfSalad(selectSalad.value), getAmountOfItem(amountOfSalad)), 
    ordered_at: firebase.firestore.Timestamp.fromDate(orderedAt), 
  }

  db.collection('orders').add(order).then(() => {
    console.log('added');
  }).catch((err) => {
    console.log(err);
  })

  form.reset();
  photoOfPizza.src = `img/pizza-icon.png`;
  totalPriceOutput.textContent = 'Total: 0 $';
});