'use strict'

var storesArray=[];
// array that store the objects 
 var time= ['6am ','7am ','8am ','9am ','10am ','11am ','12am ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm ','Total'];





 function store(name,min,max,avg) { // creating a constructor function 
   this.name=name;
   this.min=min;
   this.max=max;
   this.avg=avg;
   this.cookiesHour=[];
   this.dailyTotal=0;
  
   
}
 

store.prototype.setcookies=function() { // set a prototype function that gonna return an array  of rundom numbers of cookies sold per hour
   for (var i=0;i<14;i++){
      this.cookiesHour[i]=getRandomInt(this.min, this.max,this.avg);
      
              }
             }
             
store.prototype.setTotal= function(){// set a prototype function that gonna return a total cookies sold per day
   for (var i=0;i<14;i++){

      this.dailyTotal+=this.cookiesHour[i];
              }
  }

store.prototype.dataRender=function(){

   var storesArray=[];
   var tbody=document.getElementById('table-body');
   var tr=document.createElement('tr');
      tbody.appendChild(tr);

   var td=document.createElement('td');
     td.textContent=this.name;
     tr.appendChild(td);

     for (var i=0;i<this.cookiesHour.length;i++){
      var td=document.createElement('td');
          td.textContent=this.cookiesHour[i];
          tr.appendChild(td);

     }

     td=document.createElement('td');
     td.textContent=this.dailyTotal;
     tr.appendChild(td);


      
      }
   

 function getRandomInt(min, max,avg)  {      // Fonction that return a rundom number of cookies sold per hours
                return Math.floor((Math.random() * (max-min) + min) * avg);
                
              }

 createHeader();
 createBody();

var store1= new store('Seattle','23','65','6.3');  // creating new instance of store named store1
store1.setcookies(); // call the function setcokies
store1.setTotal(); 
store1.dataRender(); // call the function setTotal
storesArray.push(store1);
var store2= new store('Tokyo','3','24','1.2');// creating new instance of store named store2
store2.setcookies();
store2.setTotal();
store2.dataRender();
storesArray.push(store2);
var store3= new store('Dubai','11','38','3.7');// creating new instance of store named store3
store3.setcookies();
store3.setTotal();
store3.dataRender();
storesArray.push(store3);
var store4= new store('Paris','20','38','2.3');// creating new instance of store named store4
store4.setcookies();
store4.setTotal();
store4.dataRender();
storesArray.push(store4);
var store5= new store('Lima','2','16','4.6');// creating new instance of store named store5
store5.setcookies();
store5.setTotal();
store5.dataRender();
storesArray.push(store5);


createFooter();



 /////// ////////// ////////////////////////////// DOM Element//////////////////////////////////////////////////////////////

     var parentElement= document.getElementById('parentElement');// creating a  variable parentElement that represent the id of the section element
     var h1 = document.createElement('h1');  //creating a h1 element
      h1.textContent = ' Welcome To The Salmon Cookie Store  ';
      parentElement.appendChild(h1); 


      var logo = document.createElement('img'); //creating img element
      logo.setAttribute('src', 'images/salmon.png'); // adding the source 
      parentElement.appendChild(logo);
  
      //var article = document.createElement('article');// creating the article element
     // parentElement.appendChild(article);

     function createHeader(){

      var storeTable=document.getElementById('storeTable');
      var thead=document.createElement('thead');
           storeTable.appendChild(thead);
      var tr=document.createElement('tr');
          thead.appendChild(tr);
         
      var th=document.createElement('th');
          tr.appendChild(th);

          for (var i=0;i<time.length;i++){

            th=document.createElement('th');
            th.textContent=time[i];
            tr.appendChild(th);
         }
         


     }
    
     function createFooter(){
      var storeTable=document.getElementById('storeTable');
      var tfooter=document.createElement('tfooter');
      tfooter.setAttribute('id', 'table-footer');
      storeTable.appendChild(tfooter);
      var tfooter=document.getElementById('table-footer');
      var tr=document.createElement('tr');
          tfooter.appendChild(tr);
      var td=document.createElement('td');
          td.textContent='Total';
          tr.appendChild(td);

       console.log(storesArray);

       for (var x=-0;x<=time.length;x++)
       
       {
         var td=document.createElement('td');

            for(var i=0;i<=storesArray.length;i=i+2){

              var sum=0;
              
               sum=sum+ storesArray[i].cookiesHour[x]+storesArray[i+1].cookiesHour[x];
               
                  }        
                  td.textContent=sum;

                  tr.appendChild(td);
        }
      }
      
     

      //     f{
      //       var storeTable=document.getElementById('storeTable');
      //       var td=document.createElement('td');
      //       var rows =storeTable.rows
      //       var cells= storeTable.cells
            
      //       for(var x=0;x<rows.length;i++)
      //       {
      //       var total=0;
      //       var cells = rows[x].cells[i];
      //       total += cells.textContent ;
            
      //   }
      //       td.textContent=total
      //     tr.appendChild(td);
      //     }
     
       

     function createBody(){
      var storeTable=document.getElementById('storeTable');
      var tbody=document.createElement('tbody');
      tbody.setAttribute('id', 'table-body');
      storeTable.appendChild(tbody); 

     }
