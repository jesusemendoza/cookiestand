'use strict';

var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  randomCustomer: function () {
    return Math.random() * (this.max-this.min)+(this.min);
  }
};
