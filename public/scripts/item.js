var item = {}
// var allItems = [];
var grandTotals = {
  price: 0,
  tax: 0,
  total: 0
};
item.save = function(i) {
  db.ref('/items/' + i.name).set({
    name: i.name,
    price: i.price
  })
}

item.init = function(ctx, next) {
  console.log(ctx);
   ctx.finishedData = []

  Object.keys(ctx.rawData).forEach(function(i) {
    var curItem = new item.Constructor(ctx.rawData[i].name, ctx.rawData[i].price)
    curItem.doAllTheMethods();
    ctx.finishedData.push(curItem)
  })

  next()
}

item.fetchAll = function(ctx, next) {
  ctx.rawData;
  db.ref('/items/').once('value')
    .then(function(snapshot) {
      ctx.rawData = snapshot.val();
      next()
    })

}

item.detectNewItem = function() {
  db.ref('/items/').on('child_added', function(data) {
    console.log('new item added');
  })
}

item.Constructor = function (name, price) {
  this.name = name;
  this.price = price;
  this.tax = 0;
  this.total = 0;
  // allItems.push(this);
}

item.Constructor.prototype.calcTax = function() {
  this.tax = round(this.price * 0.095);
};

item.Constructor.prototype.calcTotal = function () {
  return this.total = round(this.price + this.tax);
};

item.Constructor.prototype.updateGrandTotals = function () {
  grandTotals.price += this.price;
  grandTotals.tax += this.tax;
  grandTotals.total += this.total;
};

item.Constructor.prototype.doAllTheMethods = function() {
  this.calcTax();
  this.calcTotal();
  this.updateGrandTotals();
};

function round(num) {
  return parseFloat(num.toFixed(2))
}
