'use strict'

var storesArray = [];
// array that store the objects 
var time = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12am ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', 'Total'];





function Store(name, min, max, avg) { // creating a constructor function 
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesHour = [];
  this.dailyTotal = 0;

}

Store.prototype.setcookies = function () { // set a prototype function that gonna return an array  of rundom numbers of cookies sold per hour
  for (var i = 0; i < 14; i++) {
    this.cookiesHour[i] = getRandomInt(this.min, this.max, this.avg);
  }
}

Store.prototype.setTotal = function () {// set a prototype function that gonna return a total cookies sold per day
  for (var i = 0; i < 14; i++) {

    this.dailyTotal += this.cookiesHour[i];// sum the number cookies per hour 
  }
}

Store.prototype.dataRender = function () { // Render function for body element 

  var storeTable = document.getElementById('storeTable');
  var tbody = document.createElement('tbody');// create the tbody element 
  tbody.setAttribute('id', 'table-body');// give tbody an id 
  storeTable.appendChild(tbody); // appendchild t body to the storetable
  var tr = document.createElement('tr');//creating a tr element
  tbody.appendChild(tr);// appendchild it to the body

  var td = document.createElement('td');// Creating td element for the name of the stores
  td.textContent = this.name; //
  tr.appendChild(td);

  for (var i = 0; i < this.cookiesHour.length; i++) { // loop to create tds that contain the number of cookies per hour 
    var td = document.createElement('td');
    td.textContent = this.cookiesHour[i];
    tr.appendChild(td);

  }

  td = document.createElement('td'); // creating a td for the total of cookies sold per hour for each store
  td.textContent = this.dailyTotal;
  tr.appendChild(td);

}


function getRandomInt(min, max, avg) {// Fonction that return a rundom number of cookies sold per hours
  return Math.floor((Math.random() * (max - min) + min) * avg);
}

createHeader();


var store1 = new Store('Seattle', '23', '65', '6.3');  // creating new instance of store named store1
store1.setcookies(); // call the function setcokies
store1.setTotal(); // call function settotal that sum the number of cookies sold per hour 
store1.dataRender(); // call the function setTotal
storesArray.push(store1);
var store2 = new Store('Tokyo', '3', '24', '1.2');// creating new instance of store named store2
store2.setcookies();
store2.setTotal();
store2.dataRender();
storesArray.push(store2);
var store3 = new Store('Dubai', '11', '38', '3.7');// creating new instance of store named store3
store3.setcookies();
store3.setTotal();
store3.dataRender();
storesArray.push(store3);
var store4 = new Store('Paris', '20', '38', '2.3');// creating new instance of store named store4
store4.setcookies();
store4.setTotal();
store4.dataRender();
storesArray.push(store4);
var store5 = new Store('Lima', '2', '16', '4.6');// creating new instance of store named store5
store5.setcookies();
store5.setTotal();
store5.dataRender();
storesArray.push(store5);


createFooter();



/////// ////////// ////////////////////////////// DOM Element//////////////////////////////////////////////////////////////


function createHeader() { // function for the header element 

  var storeTable = document.getElementById('storeTable');
  var thead = document.createElement('thead');// creating the thead element 
  storeTable.appendChild(thead); // appendchild the thead element to the table 
  var tr = document.createElement('tr');
  thead.appendChild(tr);

  var th = document.createElement('th'); // creating an empty th element 
  tr.appendChild(th);

  for (var i = 0; i < time.length; i++) {// loop to create the th element for each hour 

    th = document.createElement('th');
    th.textContent = time[i];
    tr.appendChild(th);
  }
}

function createFooter() {// footer function 
  var storeTable = document.getElementById('storeTable');
  var tfooter = document.createElement('tfoot');
  tfooter.setAttribute('id', 'table-footer');// give the tfoot an id named table-footer
  storeTable.appendChild(tfooter);
  tfooter = document.getElementById('table-footer');

  var tr = document.createElement('tr');// creating a tr element 
  tfooter.appendChild(tr);// appendchild tr to the footer
  var td = document.createElement('td');// create td element 
  td.textContent = 'Total';// td take a value total 
  tr.appendChild(td);// appendchild td to tr

  console.log(storesArray);
  var total = 0;
  for (var x = -0; x < time.length - 1; x++)// loop through the time array 
  {
    td = document.createElement('td');// create a td element 
    var sum = 0;
    for (var i = 0; i < storesArray.length; i++) {// loop through the strore array 
      sum = sum + storesArray[i].cookiesHour[x];// sum the number of cookies sold per hour for each store 
    }
    td.textContent = sum; // td take the value sum 
    tr.appendChild(td);// appendchild td to tr  
    total += sum;// sum the total of the totals for  all stores 

  }
  td = document.createElement('td');// create  td 
  td.textContent = total;// td take the value total
  tr.appendChild(td);// ppendchild td to the tr 
}

function deleteFooter (){ // function that delate footer row

  var element = document. getElementById('table-footer');
  element.remove();

}



function handleFormSubmitted(event) {// function that submit the form

  event.preventDefault();

  var nameInput = document.getElementById('name').value; 


  var minInput = parseInt(document.getElementById('min').value);


  var maxInput = parseInt(document.getElementById('max').value);


  var avgInput = parseInt(document.getElementById('avg').value);


  var newStore = new Store(nameInput, minInput, maxInput, avgInput);
  newStore.setcookies();// call the function that create a rundom number of cookies 
  newStore.setTotal();// call the function that gonna set the total by store
  newStore.dataRender();// call the render function 

  storesArray.push(newStore);// push the new store in to the stores array 
  deleteFooter ();// call the function delete footer
  createFooter();// call the function that create a new footer




  var form = document.getElementById("new-store");
  form.reset();
}
var formElement = document.getElementById('new-store');
formElement.addEventListener('submit', handleFormSubmitted);
