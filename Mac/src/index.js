
const fieldsOrder = ['completed','id','title','userId'];

function renderDataInTheTable(todos) {
 const mytable = document.getElementById("html-data-table");

 todos.forEach((todo) => {
   let newRow = document.createElement("tr");
  
   fieldsOrder.forEach((field) => {
     let cell = document.createElement("td");
     cell.innerText = todo[field];

     newRow.appendChild(cell);
   });

   mytable.appendChild(newRow);
 });
}

document.getElementById('click').addEventListener('click', function() {
 fetch('https://jsonplaceholder.typicode.com/todos')
 .then(function (response) {
   return response.json();
 }).then(function (apiJsonData) {
   renderDataInTheTable(apiJsonData);
 })
});

