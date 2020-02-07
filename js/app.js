'use strict'


var storesArray=[];// array that store the objects 
var time= ['6am :','7am :','8am :','9am :','10am :','11am :','12am :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total:']

var store1={  // creating store1 object
    storeName:'Seattle',
    min:23,
    max:65,
    avg:6.3,
    cookiesHour:[],  // an array for the number of cookies sold per hour
    dailyTotal:0, 
    setcookies: function() { // method that return a rundom number of cookies per hour 
 for (var i=0;i<14;i++){
    this.cookiesHour[i]=getRandomInt(this.min, this.max,this.avg);
    this.dailyTotal+=this.cookiesHour[i]; 
           }

           }
           }
 
store1.setcookies(); // call the function setcookies of the store1 object
storesArray.push(store1); // push the object store1 in to the storesArray

var store2={  // creating  store2 object
    storeName:'Tokyo',
    min:3,
    max:24,
    avg:1.2,
    cookiesHour:[],
    dailyTotal:0,
    setcookies: function() {
 for (var i=0;i<14;i++){
    this.cookiesHour[i]=getRandomInt(this.min, this.max,this.avg);
    this.dailyTotal+=this.cookiesHour[i];
            }
        }
        }

store2.setcookies();// call the function setcookies of the store2 object
storesArray.push(store2);// push the object store2 in to the storesArray

var store3={  // store3 object
    storeName:'Dubai',
    min:11,
    max:38,
    avg:3.7,
    cookiesHour:[],
    dailyTotal:0,
    setcookies: function() {
    for (var i=0;i<14;i++){
     this.cookiesHour[i]=getRandomInt(this.min, this.max,this.avg);
     this.dailyTotal+=this.cookiesHour[i];
           }
        }
        }
store3.setcookies();// call the function setcookies of the store3 object
storesArray.push(store3);// push the object store3 in to the storesArray

 var store4={  // store4 object
    storeName:'paris',
    min:20,
    max:38,
    avg:2.3,
    cookiesHour:[],
    dailyTotal:0,
    setcookies: function() {
    for (var i=0;i<14;i++){
      this.cookiesHour[i]=getRandomInt(this.min, this.max,this.avg);
      this.dailyTotal+=this.cookiesHour[i];
        }
         }
       }
            
 store4.setcookies();// call the function setcookies of the store4 object
 storesArray.push(store4);// push the object store4 in to the storesArray

 var store5={  // store5 object
    storeName:'Lima',
    min:2,
    max:16,
    avg:4.6,
    cookiesHour:[],
    dailyTotal:0,
    setcookies: function() {
     for (var i=0;i<14;i++){
    this.cookiesHour[i]=getRandomInt(this.min, this.max,this.avg);
     this.dailyTotal+=this.cookiesHour[i];
        }
        }
        }

 store5.setcookies();// call the function setcookies of the store5 object
 storesArray.push(store5);// push the object store5 in to the storesArray

    function getRandomInt(min, max,avg)  {      // Fonction that return a rundom number of cookies sold per hours
       var customer = Math.floor(Math.random() * (max - min)) + min;
        return Math.floor(customer*avg);
      }

     var parentElement= document.getElementById('parentElement');// creating a  variable parentElement that represent the id of the section element
     var h1 = document.createElement('h1');  //creating a h1 element
      h1.textContent = ' Welcome To The Salomon Cookie Store  '
      parentElement.appendChild(h1); 


      var logo = document.createElement('img'); //creating img element
      logo.setAttribute('src', '/images/salmon.png'); // adding the source 
      parentElement.appendChild(logo);
  
      var article = document.createElement('article');// creating the article element
      parentElement.appendChild(article);

      for( var i=0;i<storesArray.length ;i++){// for loop that go through the array of store objects
 
      var h2 = document.createElement('h2');// creating an h2 element for each object 
      h2.textContent = storesArray[i].storeName; // 
      article.appendChild(h2);
      var ul = document.createElement('ul');// creating a ul element 
      article.appendChild(ul);
      for(var x = 0; x <= storesArray[i].cookiesHour.length; x++){// loop through the cookieshour array
          var li = document.createElement('li');// creating an li element
          if(x=== storesArray[i].cookiesHour.length){//  add the total to the and of the list  
            li.textContent =  time[x]+storesArray[i].dailyTotal;
          }
         else{ li.textContent =  time[x]+storesArray[i].cookiesHour[x] ; 
         
        }
        ul.appendChild(li);
    } 
    }