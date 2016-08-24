var items = {}

items.init = function(cb) {
  var socks = new Item('socks', 8.99);
  var shoes = new Item('shoes', 49.99);
  var pantaloons = new Item('pantaloons', 89.99);
  updateObjects();
  cb();
}

var allItems = [];
var grandTotals = {
  price: 0,
  tax: 0,
  total: 0
};

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
  for (var elem of allItems) {
    elem.doAllTheMethods();
  }
}
