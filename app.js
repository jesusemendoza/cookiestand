'use strict';

var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  randomCustomer: function () {
    return Math.random() * (this.max-this.min)+(this.min);
  },
  cookiesale: function() {
    return Math.round(this.randomCustomer() * this.avg);
  },
  saleprintout: function (){
    for (var i = 0; i<15; i++) {
      var arrayHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
      // create a new div element
      // and give it some content
      var newLi = document.createElement('li');
      var newContent = document.createTextNode(arrayHours[i] + ': ' + this.cookiesale() + ' cookies');
      newLi.appendChild(newContent); //add the text node to the newly created div.

      // add the newly created element and its content into the DOM
      var currentLi = document.getElementById('li1');
      document.body.insertBefore(newLi, currentLi);
    }
  }
};

pike.saleprintout();
//var arrayHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
