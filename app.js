$(document).ready(function() {
// create empty employee array where submitted info will be stored
  var employee = [];
// create variable for total
  var total = 0;

// prevents submission info to populate in address bar
  $('#employeeInfo').on('submit', function(event) {
    event.preventDefault();
// turns submitted info into array
    var fields = $('#employeeInfo').serializeArray();
// iterates over submitted info to turn it into keys and values for array
    fields.forEach(function(element, index) {
      employee[element.name] = element.value;
    });
    console.log('employee object', employee);
// removes submitted info from fields when submit button is clicked
    $('#employeeInfo').find('input[type=text]').val('');
// calls function to append employee information to the DOM
    appendDom(employee);
  });

// function to append employee information to the DOM
  function appendDom(emp) {
// creates empty div for employee information
    var $emp = $('<tr class="employee"></tr>');
// table cells containing employee info are created, also delete button
    $emp.append('<td>' + emp.empFirstName + '</td>' + '<td>' + emp.empLastName + '</td>' + '<td>' + emp.empId + '</td>' + '<td>' + emp.title + '</td>' + '<td class="salary">' + emp.salary+ '</td>' + '<td><button id="delete">Delete</button></td>');

// employee data paragraph is appended to the empty div
    $('#empData').append($emp);
//  calculation function for annual salary is called
    annualSalaryCalc(emp);
  }

// function for delete button
  $('#empData').on('click', '#delete', function () {
// removes table row
        $(this).closest('tr').remove();
  });

// calculation for salary expenditure
  function annualSalaryCalc(emp) {
    console.log(emp.salary);
// sets salary variable
    var salary = Number(emp.salary);
    console.log(salary);
// sets total variable to monthly expenditure
    total += salary / 12;
    console.log('total', total);
// clears out old expenditure total
    $('#expenditure').empty();
// appends new total
    $('#expenditure').append('$' + Math.round(total));
  }
});
