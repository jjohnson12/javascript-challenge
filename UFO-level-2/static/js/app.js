// from data.js
var table = data.js;


function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 3; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 4; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode("Cell " + i + "," + j));
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}
addTable();







// Create a custom filtering function. This might work for the filtering, but not sure how to make it dynamic.
// probably code in an HTML input variabled that modified the "selectYounger" (in this instance) filter.

function selectYounger(person) {
  return person.age < 25;
}

// filter() uses the custom function as its argument
var youngSimpsons = simpsons.filter(selectYounger);

// Test
console.log(youngSimpsons);
