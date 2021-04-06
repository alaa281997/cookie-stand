
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let arrayHours = [`7 am `, `8 am `, `9 am `, `10 am `, `11 am `, `12 pm `,
  `1 pm `, `2 pm `, `3 pm `, `4 pm `, `5 pm `, `6 pm `, `7 pm `];


let stores= [];
let allBranches = function(name,min,max,avg) {
this.name = name;
this.min = min ;
this.max = max;
this.avg = avg;
this.Avg = [];
stores.push(this);
this.Total = 0;
this.Arr = [];
}

let branchOne = new allBranches("Seattle", 23, 65, 6.3);
let branchTwo = new allBranches("Tokyo", 3, 24, 1.2);
let branchThree = new allBranches("Dubai", 11, 38, 6.7);
let branchFour = new allBranches("Paris", 20, 38, 2.3);
let branchFive = new allBranches("Lima", 2, 16, 4.6);


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
console.log('Hello from works',branchOne.Avg)
allBranches.prototype.total = function() {
    for (let i = 0; i < this.Avg.length; i++) {
      if (isNaN(this.Avg[i])) {
        continue;
      }
      this.Total += Number(this.Avg[i]);
    }
    console.log(this.Total)
  }

branchOne.customer()
branchTwo.customer()
branchThree.customer()
branchFour.customer()
branchFive.customer()
branchOne.cookieSalesAvg()
branchTwo.cookieSalesAvg()
branchThree.cookieSalesAvg()
branchFour.cookieSalesAvg()
branchFive.cookieSalesAvg()
branchOne.total()
branchTwo.total()
branchThree.total()
branchFour.total()
branchFive.total()

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
  stores[i].render();
}
Footer();