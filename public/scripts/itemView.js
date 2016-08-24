itemView = {}

itemView.init = function() {
  $('.tab-content').hide()
  $('#home').show()
  form.addEventListener('submit', handleFormSubmit);

  makeAllItemRows();
  makeTotalRow();
}

var form = document.getElementById('item-form');

var table = document.querySelector('table');
var tbody = document.querySelector('tbody');
var tfoot = document.querySelector('tfoot');


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
