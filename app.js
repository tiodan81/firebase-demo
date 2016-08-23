var allItems = [];
var grandTotals = {
  price: 0,
  tax: 0,
  total: 0
};

var socks = new Item('socks', 8.99);
var shoes = new Item('shoes', 49.99);
var pantaloons = new Item('pantaloons', 89.99);

var form = document.querySelector('form');

var table = document.querySelector('table');
var tbody = document.querySelector('tbody');
var tfoot = document.querySelector('tfoot');

function Item(name, price) {
  this.name = name;
  this.price = price;
  this.tax = 0;
  this.total = 0;
  allItems.push(this);
}

Item.prototype.calcTax = function() {
  this.tax = round(this.price * 0.095);
};

Item.prototype.calcTotal = function () {
  return this.total = round(this.price + this.tax);
};

Item.prototype.updateGrandTotals = function () {
  grandTotals.price += this.price;
  grandTotals.tax += this.tax;
  grandTotals.total += this.total;
};

Item.prototype.doAllTheMethods = function() {
  this.calcTax();
  this.calcTotal();
  this.updateGrandTotals();
};

function round(num) {
  return parseFloat(num.toFixed(2))
}

function updateObjects() {
  for (elem of allItems) {
    elem.doAllTheMethods();
  }
}

function makeItemRow(obj) {
  var row = document.createElement('tr');

  var nameCell = document.createElement('td');
  nameCell.textContent = obj.name;
  row.appendChild(nameCell);

  var priceCell = document.createElement('td');
  priceCell.textContent = obj.price;
  row.appendChild(priceCell);

  var taxCell = document.createElement('td');
  taxCell.textContent = obj.tax;
  row.appendChild(taxCell);

  var totalCell = document.createElement('td');
  totalCell.textContent = obj.total;
  row.appendChild(totalCell);

  tbody.appendChild(row);
}

function makeAllItemRows() {
  for (var item of allItems) {
    makeItemRow(item);
  }
}

function makeTotalRow() {
  var row = document.createElement('tr');

  var totalCell = document.createElement('th');
  totalCell.textContent = 'Total';
  row.appendChild(totalCell);

  for (var prop in grandTotals) {
    var cell = document.createElement('th');
    cell.textContent = round(grandTotals[prop]);
    row.appendChild(cell);
  }

  tfoot.appendChild(row);
}

function handleFormSubmit(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var price = parseFloat(event.target.price.value);

  var newItem = new Item(name, price);
  newItem.doAllTheMethods();

  makeItemRow(newItem);

  tfoot.innerHTML = '';
  makeTotalRow();

  event.target.name.value = null;
  event.target.price.value = null;
}

form.addEventListener('submit', handleFormSubmit);

updateObjects();
makeAllItemRows();
makeTotalRow();
