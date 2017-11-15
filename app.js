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
new Store('Alki', 2, 24, 1.2);

Store.prototype.randomCustomer = function() {
  return Math.random() * (this.max-this.min)+(this.min);
};

Store.prototype.cookieSales = function () {
  return Math.round(this.randomCustomer() * this.avg);
};


// Store.prototype.saleprintout = function () {
//   for(var i = 0; i < 16; i++) {
//     var cookieSale = this.cookieSales();
//     var newLi = document.createElement('li');
//     var newContent = document.createTextNode( ': ' + cookieSale + ' cookies');
//     newLi.appendChild(newContent);
//     var current = document.getElementById('li1');
//     document.body.insertBefore(newLi, current);
//   }
// };

//for(var i = 0; i < 5; i++) {
//}

Store.tableHours = function() {
  //gets main table element and assigns it to tblEl
  var tblEl = document.getElementById('main-table');
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbod';
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
  for(var i = 0; i <= 15; i++) {
    var cookieSale = this.cookieSales();
    totalDay += cookieSale;
    tdEl = document.createElement('td');
    var cookies = cookieSale;
    tdEl.textContent = cookies;
    trEl.appendChild(tdEl);
  }
  var trTotal = document.createElement('td');
  tdEl.textContent = totalDay;
  tableEl.appendChild(trTotal);
};

for(var j = 0; j < 5; j++){
  stores[j].saleprintout();
}
//for(var i = 0; i < 5; i++) {
//var store = new Store(' name', i + 25);
//console.log('scott was here', store);
//stores.push(store);
//}

//var pike = {
//  min: 23,
//  max: 65,
//  avg: 6.3,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li1');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li1');
//         return Math.round(this.randomCustomer() * this.avg);document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// pike.saleprintout();
//
// var seaTac = {
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li2');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li2');
//         document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// seaTac.saleprintout();
//
// var seaCenter = {
//   min: 11,
//   max: 48,
//   avg: 3.7,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var cu  salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li1');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li1');
//         return Math.round(this.randomCustomer() * this.avg);document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// pike.saleprintout();
//
// var seaTac = {
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li2');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li2');
//         document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// seaTac.saleprintout();
//
// var seaCenter = {
//   min: 11,
//   max: 48,
//   avg: 3.7,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li3');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newCon  salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li1');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li1');
//         return Math.round(this.randomCustomer() * this.avg);document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// pike.saleprintout();
//
// var seaTac = {
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li2');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li2');
//         document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// seaTac.saleprintout();
//
// var seaCenter = {
//   min: 11,
//   max: 48,
//   avg: 3.7,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li3');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li3');
//         document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// seaCenter.saleprintout();
//
// var capHill = {
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li4');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li4');
//         document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// capHill.saleprintout();
//
// var alki = {
//   min: 2,
//   max: 24,
//   avg: 1.2,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li5');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li5');
//         document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// alki.saleprintout();
// tent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li3');
//         document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// seaCenter.saleprintout();
//
// var capHill = {
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li4');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li4');
//         document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// capHill.saleprintout();
//
// var alki = {
//   min: 2,
//   max: 24,
//   avg: 1.2,
//   salesResults: [],
//   totalDay: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCustomer: function () {
//     return Math.random() * (this.max-this.min)+(this.min);
//   },
//   cookieSales: function() {
//     return Math.round(this.randomCustomer() * this.avg);
//   },
//   saleprintout: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieSale = this.cookieSales();
//         this.totalDay += cookieSale;
//         this.salesResults.push(cookieSale);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li5');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode('Total: ' + this.totalDay);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li5');
//         document.body.insertBefore(newLi, current);
//         break;
//       }
//     }
//   },
// };
//
// alki.saleprintout();
// rrent = document.getElementById('li3');
// //         document.body.insertBefore(newLi, current);
// //       } else {
// //         var newLi = document.createElement('li');
// //         var newContent = document.createTextNode('Total: ' + this.totalDay);
// //         newLi.appendChild(newContent);
// //         var current = document.getElementById('li3');
// //         document.body.insertBefore(newLi, current);
// //         break;
// //       }
// //     }
// //   },
// // };
// //
// // seaCenter.saleprintout();
// //
// // var capHill = {
// //   min: 20,
// //   max: 38,
// //   avg: 2.3,
// //   salesResults: [],
// //   totalDay: 0,
// //   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
// //   randomCustomer: function () {
// //     return Math.random() * (this.max-this.min)+(this.min);
// //   },
// //   cookieSales: function() {
// //     return Math.round(this.randomCustomer() * this.avg);
// //   },
// //   saleprintout: function() {
// //     for(var i = 0; i < 16; i++) {
// //       if (i < 15) {
// //         var cookieSale = this.cookieSales();
// //         this.totalDay += cookieSale;
// //         this.salesResults.push(cookieSale);
// //         var newLi = document.createElement('li');
// //         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
// //         newLi.appendChild(newContent);
// //         var current = document.getElementById('li4');
// //         document.body.insertBefore(newLi, current);
// //       } else {
// //         var newLi = document.createElement('li');
// //         var newContent = document.createTextNode('Total: ' + this.totalDay);
// //         newLi.appendChild(newContent);
// //         var current = document.getElementById('li4');
// //         document.body.insertBefore(newLi, current);
// //         break;
// //       }
// //     }
// //   },
// // };
// //
// // capHill.saleprintout();
// //
// // var alki = {
// //   min: 2,
// //   max: 24,
// //   avg: 1.2,
// //   salesResults: [],
// //   totalDay: 0,
// //   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
// //   randomCustomer: function () {
// //     return Math.random() * (this.max-this.min)+(this.min);
// //   },
// //   cookieSales: function() {
// //     return Math.round(this.randomCustomer() * this.avg);
// //   },
// //   saleprintout: function() {
// //     for(var i = 0; i < 16; i++) {
// //       if (i < 15) {
// //         var cookieSale = this.cookieSales();
// //         this.totalDay += cookieSale;
// //         this.salesResults.push(cookieSale);
// //         var newLi = document.createElement('li');
// //         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
// //         newLi.appendChild(newContent);
// //         var current = document.getElementById('li5');
// //         document.body.insertBefore(newLi, current);
// //       } else {
// //         var newLi = document.createElement('li');
// //         var newContent = document.createTextNode('Total: ' + this.totalDay);
// //         newLi.appendChild(newContent);
// //         var current = document.getElementById('li5');
// //         document.body.insertBefore(newLi, current);
// //         break;
// //       }
// //     }
// //   },
// // };
// //
// // alki.saleprintout();
