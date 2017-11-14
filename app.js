'use strict';

var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  salesResults: [],
  totalDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomer: function () {
    return Math.random() * (this.max-this.min)+(this.min);
  },
  cookieSales: function() {
    return Math.round(this.randomCustomer() * this.avg);
  },
  saleprintout: function() {
    var output = [];
    for(var i = 0; i < 16; i++) {
      if (i < 15) {
        output.push (Math.round(this.avg * this.randomCustomer()));
        this.totalDay += this.cookieSales();
        this.salesResults.push(this.cookieSales());
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + this.cookieSales() + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li1');
        document.body.insertBefore(newLi, current);
      } else {
        var newLi = document.createElement('li');
        var newContent = document.createTextNode('Total: ' + this.totalDay);
        newLi.appendChild(newContent);
        var current = document.getElementById('li1');
        document.body.insertBefore(newLi, current);
        break;
      }
    }
  },
};

pike.saleprintout();

var seaTac = {
  min: 3,
  max: 24,
  avg: 1.2,
  salesResults: [],
  totalDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomer: function () {
    return Math.random() * (this.max-this.min)+(this.min);
  },
  cookieSales: function() {
    return Math.round(this.randomCustomer() * this.avg);
  },
  saleprintout: function() {
    var output = [];
    for(var i = 0; i < 16; i++) {
      if (i < 15) {
        output.push (Math.round(this.avg * this.randomCustomer()));
        this.totalDay += this.cookieSales();
        this.salesResults.push(this.cookieSales());
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + this.cookieSales() + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li2');
        document.body.insertBefore(newLi, current);
      } else {
        var newLi = document.createElement('li');
        var newContent = document.createTextNode('Total: ' + this.totalDay);
        newLi.appendChild(newContent);
        var current = document.getElementById('li2');
        document.body.insertBefore(newLi, current);
        break;
      }
    }
  },
};

seaTac.saleprintout();

var seaCenter = {
  min: 11,
  max: 48,
  avg: 3.7,
  salesResults: [],
  totalDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomer: function () {
    return Math.random() * (this.max-this.min)+(this.min);
  },
  cookieSales: function() {
    return Math.round(this.randomCustomer() * this.avg);
  },
  saleprintout: function() {
    for(var i = 0; i < 16; i++) {
      if (i < 15) {
        var cookieSale = this.cookieSales();
        this.totalDay += cookieSale;
        this.salesResults.push(cookieSale);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li3');
        document.body.insertBefore(newLi, current);
      } else {
        var newLi = document.createElement('li');
        var newContent = document.createTextNode('Total: ' + this.totalDay);
        newLi.appendChild(newContent);
        var current = document.getElementById('li3');
        document.body.insertBefore(newLi, current);
        break;
      }
    }
  },
};

seaCenter.saleprintout();

var capHill = {
  min: 20,
  max: 38,
  avg: 2.3,
  salesResults: [],
  totalDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomer: function () {
    return Math.random() * (this.max-this.min)+(this.min);
  },
  cookieSales: function() {
    return Math.round(this.randomCustomer() * this.avg);
  },
  saleprintout: function() {
    for(var i = 0; i < 16; i++) {
      if (i < 15) {
        var cookieSale = this.cookieSales();
        this.totalDay += cookieSale;
        this.salesResults.push(cookieSale);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSale + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li4');
        document.body.insertBefore(newLi, current);
      } else {
        var newLi = document.createElement('li');
        var newContent = document.createTextNode('Total: ' + this.totalDay);
        newLi.appendChild(newContent);
        var current = document.getElementById('li4');
        document.body.insertBefore(newLi, current);
        break;
      }
    }
  },
};

capHill.saleprintout();

var alki = {
  min: 2,
  max: 24,
  avg: 1.2,
  salesResults: [],
  totalDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomer: function () {
    return Math.random() * (this.max-this.min)+(this.min);
  },
  cookieSales: function() {
    return Math.round(this.randomCustomer() * this.avg);
  },
  saleprintout: function() {
    var output = [];
    for(var i = 0; i < 16; i++) {
      if (i < 15) {
        output.push (Math.round(this.avg * this.randomCustomer()));
        this.totalDay += this.cookieSales();
        this.salesResults.push(this.cookieSales());
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + this.cookieSales() + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li5');
        document.body.insertBefore(newLi, current);
      } else {
        var newLi = document.createElement('li');
        var newContent = document.createTextNode('Total: ' + this.totalDay);
        newLi.appendChild(newContent);
        var current = document.getElementById('li5');
        document.body.insertBefore(newLi, current);
        break;
      }
    }
  },
};

alki.saleprintout();
