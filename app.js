var app = angular.module('basicApp', []);

app.controller('BasicController', function() {
  console.log('BasicController loaded');
  var self = this;

  self.employees = [];

  self.createEmployee = function() {
    console.log('Submitted employee:', self.employee);
    self.employees.push(angular.copy(self.employee));
    calcExp();
  };
  self.expenditure = 0;
  var calcExp = function() {
    //go through emp array, get salary info, add together, divide by 12
    self.expenditure += self.employees.salary / 12;
  };
});
