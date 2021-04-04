'use strict'
let arrayHours = [`7 am `,`8 am `, `9 am `,`10 am `,`11 am `, `12 pm `,
 `1 pm `, `2 pm `,`3 pm `,`4 pm `, `5 pm `, `6 pm `, `7 pm `];

let Seattle={
  name:'Seattle',
  min: 23,
  max: 65,
  avg:6.3,
  Arr:[],
  Avg:[],
  Total:0,
    getBuy:function () {
      for(let i = 0 ; i<arrayHours.length;i++){
        this.Arr[i]=randomNumber(this.min,this.max)
    }console.log(this.Arr)
},
getAvg:function(){
  for(let i= 0 ; i<arrayHours.length;i++){
    this.Avg[i] = Math.floor(this.Arr[i]*this.avg) ;
    
}
console.log(this.Avg)
},
getTotal: function () {
 let total = 0;
for (let i = 0; i < this.Avg.length; i++) {
   if (isNaN(this.Avg[i])) {
       continue; }
       total += Number(this.Avg[i]);
        }
      console.log(total)
    }
}

function randomNumber(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}
Seattle.getBuy();
Seattle.getAvg();
Seattle.getTotal();


let Tokyo={
    name:'Tokyo',
    min: 3,
    max: 24,
    avg:1.2,
    Arr:[],
    Avg:[],
    Total:0,
      getBuy:function () {
        for(let i = 0 ; i<arrayHours.length;i++){
          this.Arr[i]=randomNumber(this.min,this.max)
          
      }console.log(this.Arr)
  },
  getAvg:function(){
    for(let i= 0 ; i<arrayHours.length;i++){
      this.Avg[i] = Math.floor(this.Arr[i]*this.avg) ;
      
  }
  console.log(this.Avg)
  },
  getTotal: function () {
   let total = 0;
  for (let i = 0; i < this.Avg.length; i++) {
     if (isNaN(this.Avg[i])) {
         continue; }
         total += Number(this.Avg[i]);
          }
        console.log(total)
      }
  }
  
  Tokyo.getBuy();
  Tokyo.getAvg();
  Tokyo.getTotal();

let Dubai={
  name:'Dubai',
  min: 11,
  max: 38,
  avg:3.7,
  Arr:[],
  Avg:[],
  Total:0,
    getBuy:function () {
      for(let i = 0 ; i<arrayHours.length;i++){
        this.Arr[i]=randomNumber(this.min,this.max)
        
    }console.log(this.Arr)
},
getAvg:function(){
  for(let i= 0 ; i<arrayHours.length;i++){
    this.Avg[i] = Math.floor(this.Arr[i]*this.avg) ;
    
}
console.log(this.Avg)
},
getTotal: function () {
 let total = 0;
for (let i = 0; i < this.Avg.length; i++) {
   if (isNaN(this.Avg[i])) {
       continue; }
       total += Number(this.Avg[i]);
        }
      console.log(total)
    }
}

Dubai.getBuy();
Dubai.getAvg();
Dubai.getTotal();

let Paris={
    name:'Paris',
    min: 20,
    max: 38,
    avg:2.3,
    Arr:[],
    Avg:[],
    Total:0,
      getBuy:function () {
        for(let i = 0 ; i<arrayHours.length;i++){
          this.Arr[i]=randomNumber(this.min,this.max)
          
      }console.log(this.Arr)
  },
  getAvg:function(){
    for(let i= 0 ; i<arrayHours.length;i++){
      this.Avg[i] = Math.floor(this.Arr[i]*this.avg) ;
      
  }
  console.log(this.Avg)
  },
  getTotal: function () {
   let total = 0;
  for (let i = 0; i < this.Avg.length; i++) {
     if (isNaN(this.Avg[i])) {
         continue; }
         total += Number(this.Avg[i]);
          }
        console.log(total)
      }
  }
  
  Paris.getBuy();
  Paris.getAvg();
  Paris.getTotal();


  let Lima={
    name:'Lima',
    min: 2,
    max: 16,
    avg:4.6,
    Arr:[],
    Avg:[],
    Total:0,
      getBuy:function () {
        for(let i = 0 ; i<arrayHours.length;i++){
          this.Arr[i]=randomNumber(this.min,this.max)
          
      }console.log(this.Arr)
  },
  getAvg:function(){
    for(let i= 0 ; i<arrayHours.length;i++){
      this.Avg[i] = Math.floor(this.Arr[i]*this.avg) ;
      
  }
  console.log(this.Avg)
  },
  getTotal: function () {
   let total = 0;
  for (let i = 0; i < this.Avg.length; i++) {
     if (isNaN(this.Avg[i])) {
         continue; }
         total += Number(this.Avg[i]);
          }
        console.log(total)
      }
  }
  
  Lima.getBuy();
  Lima.getAvg();
  Lima.getTotal();

