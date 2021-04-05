
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let arrayHours = [`7 am `, `8 am `, `9 am `, `10 am `, `11 am `, `12 pm `,
  `1 pm `, `2 pm `, `3 pm `, `4 pm `, `5 pm `, `6 pm `, `7 pm `];


let allBranches = function(name,min,max,avg) {
this.name = name;
this.min = min ;
this.max = max;
this.avg = avg;
this.Arr = [];
this.Avg = [];
this.Total = 0;
}

let branchOne = new allBranches("Seattle", 23, 65, 6.3);
let branchTwo = new allBranches("Tokyo", 3, 24, 1.2);
let branchThree = new allBranches("Dubai", 11, 38, 6.7);
let branchFour = new allBranches("Paris", 20, 38, 2.3);
let branchFive = new allBranches("Lima", 2, 16, 4.6);


allBranches.prototype.customer = function() {
    for (let i = 0; i < arrayHours.length; i++){
      this.Arr[i] = randomNumber(this.min, this.max)
    } 
     console.log(this.Arr)
}
allBranches.prototype.cookieSalesAvg = function(){
 for (let i = 0; i < arrayHours.length; i++) {
      this.Avg[i] = Math.floor(this.Arr[i] * this.avg);

    } console.log(this.Avg)
  }

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


let parent = document.getElementById('parent');
console.log(parent);
let Table = document.createElement('table');
parent.appendChild(Table);

let hoursHeader = document.createElement('th') ;
    console.log(parent);
parent.appendChild(hoursHeader);
    for (let i = 0; i <arrayHours.length; i++) {
           let headerr = document.createElement('th') ;
           headerr.textContent = arrayHours[i] ;
           parent.appendChild(headerr) 
       }

       