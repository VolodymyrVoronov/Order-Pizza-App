const allOrders = document.querySelector('.orders');

addOrder = (order, id) => {
  const orderedWhen = dateFns.distanceInWordsToNow(
    order.ordered_at.toDate(), 
    { addSuffix: true }
  );

  let html = `
  <ul class="orders__items" data-id="${id}">
    <li class="orders__item orders__item--pizza">
      <span>Pizza:</span>
      ${order.pizza} x ${order.pizza_amount}
    </li>
    <li class="orders__item orders__item--drinks">
      <span>Drinks:</span>
      ${order.drinks} x ${order.drinks_amount}
    </li>
    <li class="orders__item orders__item--fries">
      <span>Fries:</span>
      ${order.fries} x ${order.fries_amount}
    </li>
    <li class="orders__item orders__item--salad">
      <span>Salad:</span>
      ${order.salad} x ${order.salad_amount}
    </li>
    <li class="orders__item orders__item--name">
      <span>Name:</span>
      ${order.name}
    </li>
    <li class="orders__item orders__item--street">
      <span>Street:</span>
      ${order.street}
    </li>
    <li class="orders__item orders__item--phone">
      <span>Phone:</span>
      ${order.phone}
    </li>
    <li class="orders__item orders__item--phone">
      <span>Total:</span>
      ${order.total} $
    </li>
    <li class="orders__item orders__item--ordered-at">
      <span>Time:</span>
      ${orderedWhen}
    </li>
    <button class="orders__btn" title="The order will be deleted!">Done!</button>
  </ul>
  `;

  allOrders.innerHTML += html;
  
}

deleteTheOrder = (id) => {
  const orders = document.querySelectorAll('ul');
  orders.forEach(order => {
    if (order.getAttribute('data-id') === id) {
      order.remove();
    }
  })
}

db.collection('orders').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(element => {
    const doc = element.doc;
    if (element.type === 'added') {
      addOrder(doc.data(), doc.id);
    } else if (element.type === 'removed') {
      deleteTheOrder(doc.id);
    }
  });
  
});

allOrders.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentElement.getAttribute('data-id');
    db.collection('orders').doc(id).delete();
  }
});