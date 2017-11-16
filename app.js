'use strict';

var stores = [];
var hours = [ '6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm', 'Total'];

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  stores.push(this);
}

//Add store values
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 6.4);
new Store('Seattle Center', 11, 48, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 24,1.2);

Store.prototype.randomCustomer = function() {
  return Math.random() * (this.max-this.min)+(this.min);
};

Store.prototype.cookieSales = function () {
  return Math.round(this.randomCustomer() * this.avg);
};

Store.tableHours = function() {
  //gets main table element and assigns it to tblEl
  var tblEl = document.getElementById('main-table');
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbody';
  tblEl.appendChild(tbodyEl);
  var trEl = document.createElement('tr');
  tbodyEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  for(var i = 0; i < 16; i++) {
    tdEl = document.createElement('td');
    var time = hours[i];
    tdEl.textContent = time;
    trEl.appendChild(tdEl);
  }
};

Store.tableHours();

Store.prototype.saleprintout = function() {
  //gets main table element and assigns it to tblEl
  var totalDay = 0;
  var tableEl = document.getElementById('main-table');
  var tbody = document.createElement('tbody');
  tbody.id = 'tbody';
  tableEl.appendChild(tbody);
  var trEl = document.createElement('tr');
  tbody.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = stores[j].name;
  trEl.appendChild(tdEl);
  for(var i = 0; i < hours.length; i++) {
    var cookieSale = this.cookieSales();
    totalDay += cookieSale;
    tdEl = document.createElement('td');
    var cookies = cookieSale;
    tdEl.textContent = cookies;
    trEl.appendChild(tdEl);
  }
  tdEl.textContent = totalDay;
};

var j=0;

for( j = 0; j < stores.length ; j++){
  stores[j].saleprintout();
}

// begin day 3 listener code
var formEl = document.getElementById('main-form');

function onSubmit(event) {
  event.preventDefault();
  console.log('submit event', event.target.name.value);
  console.log('the form was submitted');
  var myFormData = {
    name: event.target.name.value,
    min: parseInt(event.target.min.value),
    max: parseInt(event.target.max.value),
    avg: parseInt(event.target.avg.value)
  };

  new Store(myFormData.name, myFormData.min, myFormData.max,myFormData.avg);
  stores[j].saleprintout();
  j++;
  console.log('my form data', myFormData);
  console.log('j value', j);
}

formEl.addEventListener('submit', onSubmit);
