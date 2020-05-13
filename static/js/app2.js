// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach((ufosighting) => {
  var row = tbody.append("tr");
  Object.entries(ufosighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var form = d3.select("#form-group");
var button = d3.select("#filter-btn");

button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputdate = d3.select("#datetime");
  var inputcity = d3.select("#city");
  var inputstate = d3.select("#state");
  var inputcountry = d3.select("#country");
  var inputshape = d3.select("#shape");
  
  // Get the value property of the input element
  var inputdateValue = inputdate.property("value");
  var inputcityValue = inputcity.property("value");
  var inputstateValue = inputstate.property("value");
  var inputcountryValue = inputcountry.property("value");
  var inputshapeeValue = inputshape.property("value");

  var filteredData = tableData.filter(item => {
   return (item.datetime === inputdateValue || !inputdateValue) &&
   (item.city === inputcityValue || !inputcityValue) && 
   (item.state === inputstateValue || !inputstateValue) && 
   (item.country === inputcountryValue || !inputcountryValue) && 
   (item.shape === inputshapeeValue || !inputshapeeValue)
  });

  console.log(filteredData);

  tbody = d3.select("tbody");
  tbody.html("");

  console.log("hello");

  filteredData.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};