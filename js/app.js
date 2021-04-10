'use strict'
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
<<<<<<< HEAD
let arrayHours = [`6 am `, `7 am `, `8 am `, `9 am `, `10 am `, `11 am `, `12 pm `,
  `1 pm `, `2 pm `, `3 pm `, `4 pm `, `5 pm `, `6 pm `, `7 pm `];


let stores = [];

let allBranches = function (name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.Avg = [];
  this.Total = 0;
  this.Arr = [];
  stores.push(this);
=======
let arrayHours = [`6 am `,`7 am `, `8 am `, `9 am `, `10 am `, `11 am `, `12 pm `,
  `1 pm `, `2 pm `, `3 pm `, `4 pm `, `5 pm `, `6 pm `, `7 pm `];


let stores= [];
let allBranches = function(name,min,max,avg) {
this.name = name;
this.min = min ;
this.max = max;
this.avg = avg;
this.Avg = [];
this.Total = 0;
this.Arr = [];
stores.push(this);
>>>>>>> e42292775a330ef058947c7e58381e4a19a3e899
}

let Seattle = new allBranches("Seattle", 23, 65, 6.3);
let Tokyo = new allBranches("Tokyo", 3, 24, 1.2);
let Dubai = new allBranches("Dubai", 11, 38, 6.7);
let Paris = new allBranches("Paris", 20, 38, 2.3);
let Lima = new allBranches("Lima", 2, 16, 4.6);
<<<<<<< HEAD
//let cities = [Seattle, Tokyo, Dubai, Paris, Lima];//

//first function to get random number and store it inside array (arr[])
allBranches.prototype.customer = function () {
  for (let i = 0; i < arrayHours.length; i++) {
    this.Arr.push(randomNumber(this.min, this.max))
  }
  console.log(this.Arr)
}

//get avg by multiple index of arr[] and avg using loop
allBranches.prototype.cookieSalesAvg = function () {
  for (let i = 0; i < arrayHours.length; i++) {
    this.Avg.push(Math.floor(this.Arr[i] * this.avg));
  } console.log(this.Avg)
}

// console.log('Hello from works',branchOne.Avg) 
// function for total 
allBranches.prototype.total = function () {
  for (let i = 0; i < this.Avg.length; i++) {
    this.Total += this.Avg[i];
  }
  console.log(this.Total)
}

//Table using DOM

let parent = document.getElementById('table');
console.log(parent);
let tableDetails = document.createElement('table');
parent.appendChild(tableDetails);


let addingRow = document.createElement('tr');
tableDetails.appendChild(addingRow);
allBranches.prototype.render = function () {
  let addingRow = document.createElement('tr');
  parent.appendChild(addingRow);

  //adding location name
  let addingTd = document.createElement('td')
  addingRow.appendChild(addingTd);
  addingTd.textContent = this.name;

  // add random number to cells 
  for (let i = 0; i < arrayHours.length; i++) {
    let cookieS = document.createElement('td');
    addingRow.appendChild(cookieS);
    cookieS.textContent = this.Avg[i];
  }
  // Add total add last cell in the row
  let totalTd = document.createElement('td')
  addingRow.appendChild(totalTd);
  totalTd.textContent = this.Total;

}

//add header
function Header() {

  let headerRow = document.createElement('tr');
  parent.appendChild(headerRow);

  let hoursHeader = document.createElement('th');
  // console.log(parent);
  parent.appendChild(hoursHeader);
  hoursHeader.textContent = 'Name';
//looping time
  for (let i = 0; i < arrayHours.length; i++) {
    let headerClock = document.createElement('th');
    parent.appendChild(headerClock)
    headerClock.textContent = arrayHours[i];
    
  }
// last column in header
  let TotalTh = document.createElement('th');
  parent.appendChild(TotalTh);
  TotalTh.textContent = "Daily Total";
  
}

// footer
function Footer() {

  let addRowFooter = document.createElement('tr');
  parent.appendChild(addRowFooter);

  let addTh = document.createElement('th');
  addRowFooter.appendChild(addTh);
  addTh.textContent = 'Totals';

// total for each hour
  let allTotal = 0;
  for (let i = 0; i < arrayHours.length; i++) {
    let totalCus = 0;
    for (let j = 0; j < stores.length; j++) {
      totalCus += stores[j].Avg[i];
      allTotal += stores[j].Avg[i];
    }
    console.log(totalCus);

    let addThFooter = document.createElement('th');
    addRowFooter.appendChild(addThFooter);
    addThFooter.textContent = totalCus;
  }
  let finalTh = document.createElement('th');
  addRowFooter.appendChild(finalTh);
  finalTh.textContent = allTotal;
}

// form
 let tableForm = document.getElementById('tableForm');
 console.log(tableForm);

tableForm.addEventListener('submit', submitter);

 function submitter(evt) {
   evt.preventDefault();
   console.log(evt);

   let nameField = evt.target.nameField.value;
   console.log(nameField);

  let maxField = evt.target.maxField.value;
  console.log(maxField);

  let minField = evt.target.minField.value;
  console.log(minField);
  
  let avgField = evt.target.avgField.value;
  console.log(avgField);

  let newName = new allBranches(nameField, minField,maxField, avgField);

  parent.textContent = '';

// calling the new submit
  Header();
   newName.customer();
   newName.cookieSalesAvg();
   newName.total();
 for (let i = 0; i < stores.length; i++) {

  stores[i].render();
   }
  Footer();
  }
// call the static location
Header();

for (let i = 0; i < stores.length; i++) {
  stores[i].customer();
  stores[i].cookieSalesAvg();
  stores[i].total();
  stores[i].render();
}

Footer();
=======
let cities = [Seattle,Tokyo,Dubai,Paris,Lima];

allBranches.prototype.customer = function() {
    for (let i = 0; i < arrayHours.length; i++){
      this.Arr.push(randomNumber(this.min, this.max)) 
    } 
     console.log(this.Arr)
}
allBranches.prototype.cookieSalesAvg = function(){
 for (let i = 0; i < arrayHours.length; i++) {
      this.Avg.push( Math.floor(this.Arr[i] * this.avg));
    } console.log(this.Avg)
  }
// console.log('Hello from works',branchOne.Avg) 
allBranches.prototype.total = function() {
    for (let i = 0; i < this.Avg.length; i++) {
      if (isNaN(this.Avg[i])) {
        continue;
      }
      this.Total += Number(this.Avg[i]);
    }
    console.log(this.Total)
  }

// branchOne.customer()
// branchTwo.customer()
// branchThree.customer()
// branchFour.customer()
// branchFive.customer()
// branchOne.cookieSalesAvg()
// branchTwo.cookieSalesAvg()
// branchThree.cookieSalesAvg()
// branchFour.cookieSalesAvg()
// branchFive.cookieSalesAvg()
// branchOne.total()
// branchTwo.total()
// branchThree.total()
// branchFour.total()
// branchFive.total()

function Header(){
let parent = document.getElementById('table');
console.log(parent);
let Table = document.createElement('table');
parent.appendChild(Table);

let hoursHeader = document.createElement('th') ;
    console.log(parent);

parent.appendChild(hoursHeader);
    hoursHeader.textContent='Name';
    for (let i = 0; i <arrayHours.length; i++) {
           let headerr = document.createElement('th') ;
           headerr.textContent = arrayHours[i] ;
           parent.appendChild(headerr) 
       }   
       let TotalTh = document.createElement('th');
       parent.appendChild(TotalTh);
       TotalTh.textContent = "Daily Total";
}


allBranches.prototype.render = function(){
  let addingRow = document.createElement('tr');
  table.appendChild(addingRow);
  let addingTd = document.createElement('td')
  addingRow.appendChild(addingTd);
  addingTd.textContent=this.name;

  for (let i=0 ; i<arrayHours.length;i++){
    let cookieS = document.createElement('td');

    addingRow.appendChild(cookieS);
    cookieS.textContent = this.Avg[i];
  }
  let totalTd = document.createElement('td')
  addingRow.appendChild(totalTd);
  totalTd.textContent=this.Total;

}

function Footer(){
  let addRowFooter = document.createElement('tr');

  table.appendChild(addRowFooter);

  let addTh = document.createElement('th');

  addRowFooter.appendChild(addTh);

  addTh.textContent='Totals';

  let totalCus;
  let allTotal=0;
  for(let i = 0 ; i<arrayHours.length;i++){
    let totalCus =0;
    for(let j= 0;j<stores.length;j++){
      totalCus += stores[j].Avg[i];
      allTotal +=stores[j].Avg[i];
    }
    console.log(totalCus);

    let addThFooter=document.createElement('th');
    addRowFooter.appendChild(addThFooter);
    addThFooter.textContent= totalCus;
    }
    let finalTh =document.createElement('th');
    addRowFooter.appendChild(finalTh);
    finalTh.textContent=allTotal;
}

Header();
for(let i =0;i<stores.length;i++){
  cities[i].customer();
  cities[i].cookieSalesAvg();
  cities[i].total(); 
  cities[i].render();
  
}
Footer();
>>>>>>> e42292775a330ef058947c7e58381e4a19a3e899
