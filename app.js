var app = angular.module('basicApp', []);

app.controller('BasicController', function() {
  console.log('BasicController loaded');
  var self = this;

  self.employees = [];

  self.expenditure = 0;

  self.totalExp = function() {
    self.expenditure = 0;
    self.employees.forEach(function(employee) {
      self.expenditure += employee.salary;
    });
    console.log(self.expenditure);
  };

  self.createEmployee = function() {
    console.log('Submitted employee:', self.employee);
    self.employees.push(angular.copy(self.employee));
    self.totalExp();
    self.employee = {};
  };
  self.deleteEmployee = function($index) {
    self.employees.splice($index, 1);
    self.totalExp();
  };
});
