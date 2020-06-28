// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Update table with a new dataset
function updateTable(dataset) {
    console.log("Table updated.");
    tbody.html('');
    dataset.forEach((toBeDefined) => {
    var row = tbody.append("tr");
    Object.entries(toBeDefined).forEach(([key,value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
  });
}


function filterByDate(dataset) {
    var filteredData = dataset.filter(function (d) {
        console.log(document.getElementById("datetime").value);
        return d.datetime === document.getElementById("datetime").value
    });
    return filteredData;
}


updateTable(tableData); 
d3.select("#filter-btn").on("click", clickFilter);

function clickFilter() {
    console.log("Button Clicked.");
    var result = filterByDate(tableData);
    updateTable(result);
  }