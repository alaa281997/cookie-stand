'use strict'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let arrayHours = [`7 am `, `8 am `, `9 am `, `10 am `, `11 am `, `12 pm `,
  `1 pm `, `2 pm `, `3 pm `, `4 pm `, `5 pm `, `6 pm `, `7 pm `];

let Seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  Arr: [],
  Avg: [],
  Total: 0,
  getBuy: function () {
    for (let i = 0; i < arrayHours.length; i++) {
      this.Arr[i] = randomNumber(this.min, this.max)
    } console.log(this.Arr)
  },
  getAvg: function () {
    for (let i = 0; i < arrayHours.length; i++) {
      this.Avg[i] = Math.floor(this.Arr[i] * this.avg);

    } console.log(this.Avg)
  },
  getTotal: function () {

    for (let i = 0; i < this.Avg.length; i++) {
      if (isNaN(this.Avg[i])) {
        continue;
      }
      this.Total += Number(this.Avg[i]);
    }
    console.log(this.Total)
  },


render: function() {
  let parent = document.getElementById('parent');
  console.log(parent);

  let shopName = document.createElement('h3');
  parent.appendChild(shopName);
  shopName.textContent = this.name;

  let ulElement = document.createElement('ul');
  parent.appendChild(ulElement);
  for(let i=0;i<arrayHours.length;i++){
    let liElement = document.createElement('li')
    ulElement.appendChild(liElement);
    liElement.textContent=`${arrayHours[i]}:${this.Arr[i]} cookies`;
  }
  let totalElement =document.createElement('li');
  ulElement.appendChild(totalElement);
  totalElement.textContent=`Total: ${this.Total} cookies`
}
}

Seattle.getBuy();
Seattle.getAvg();
Seattle.getTotal();
Seattle.render();

let Tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  Arr: [],
  Avg: [],
  Total: 0,
  getBuy: function () {
    for (let i = 0; i < arrayHours.length; i++) {
      this.Arr[i] = randomNumber(this.min, this.max)

    } console.log(this.Arr)
  },
  getAvg: function () {
    for (let i = 0; i < arrayHours.length; i++) {
      this.Avg[i] = Math.floor(this.Arr[i] * this.avg);

    }
    console.log(this.Avg)
  },
  getTotal: function () {

    for (let i = 0; i < this.Avg.length; i++) {
      if (isNaN(this.Avg[i])) {
        continue;
      }
      this.Total += Number(this.Avg[i]);
    }
    console.log(this.Total)
  },

  render: function(){
    
      let parent = document.getElementById('parent');
      console.log(parent);
    
      let shopName = document.createElement('h3');
      parent.appendChild(shopName);
      shopName.textContent = this.name;
    
      let ulElement = document.createElement('ul');
      parent.appendChild(ulElement);
      for(let i=0;i<arrayHours.length;i++){
        let liElement = document.createElement('li')
        ulElement.appendChild(liElement);
        liElement.textContent=`${arrayHours[i]}:${this.Arr[i]} cookies`;
      }
      let totalElement =document.createElement('li');
      ulElement.appendChild(totalElement);
      totalElement.textContent=`Total: ${this.Total} cookies`
    
    }
}
Tokyo.getBuy();
Tokyo.getAvg();
Tokyo.getTotal();
Tokyo.render();




let Dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  Arr: [],
  Avg: [],
  Total: 0,
  getBuy: function () {
    for (let i = 0; i < arrayHours.length; i++) {
      this.Arr[i] = randomNumber(this.min, this.max)

    } console.log(this.Arr)
  },
  getAvg: function () {
    for (let i = 0; i < arrayHours.length; i++) {
      this.Avg[i] = Math.floor(this.Arr[i] * this.avg);

    }
    console.log(this.Avg)
  },
  getTotal: function () {
    let total = 0;
    for (let i = 0; i < this.Avg.length; i++) {
      if (isNaN(this.Avg[i])) {
        continue;
      }
      total += Number(this.Avg[i]);
    }
    console.log(total)
  },
  render: function(){
    
    let parent = document.getElementById('parent');
    console.log(parent);
  
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    shopName.textContent = this.name;
  
    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for(let i=0;i<arrayHours.length;i++){
      let liElement = document.createElement('li')
      ulElement.appendChild(liElement);
      liElement.textContent=`${arrayHours[i]}:${this.Arr[i]} cookies`;
    }
    let totalElement =document.createElement('li');
    ulElement.appendChild(totalElement);
    totalElement.textContent=`Total: ${this.Total} cookies`
  
  }
}

Dubai.getBuy();
Dubai.getAvg();
Dubai.getTotal();
Dubai.render();



let Paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  Arr: [],
  Avg: [],
  Total: 0,
  getBuy: function () {
    for (let i = 0; i < arrayHours.length; i++) {
      this.Arr[i] = randomNumber(this.min, this.max)

    } console.log(this.Arr)
  },
  getAvg: function () {
    for (let i = 0; i < arrayHours.length; i++) {
      this.Avg[i] = Math.floor(this.Arr[i] * this.avg);

    }
    console.log(this.Avg)
  },
  getTotal: function () {
    for (let i = 0; i < this.Avg.length; i++) {
      if (isNaN(this.Avg[i])) {
        continue;
      }
      this.Total += Number(this.Avg[i]);
    }
    console.log(this.Total)
  },
  render: function(){
    
    let parent = document.getElementById('parent');
    console.log(parent);
  
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    shopName.textContent = this.name;
  
    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for(let i=0;i<arrayHours.length;i++){
      let liElement = document.createElement('li')
      ulElement.appendChild(liElement);
      liElement.textContent=`${arrayHours[i]}:${this.Arr[i]} cookies`;
    }
    let totalElement =document.createElement('li');
    ulElement.appendChild(totalElement);
    totalElement.textContent=`Total: ${this.Total} cookies`
  
  }
}

Paris.getBuy();
Paris.getAvg();
Paris.getTotal();
Paris.render();

let Lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  Arr: [],
  Avg: [],
  Total: 0,
  getBuy: function () {
    for (let i = 0; i < arrayHours.length; i++) {
      this.Arr[i] = randomNumber(this.min, this.max)

    } console.log(this.Arr)
  },
  getAvg: function () {
    for (let i = 0; i < arrayHours.length; i++) {
      this.Avg[i] = Math.floor(this.Arr[i] * this.avg);

    }
    console.log(this.Avg)
  },
  getTotal: function () {
    for (let i = 0; i < this.Avg.length; i++) {
      if (isNaN(this.Avg[i])) {
        continue;
      }
      this.Total += Number(this.Avg[i]);
    }
    console.log(this.Total)
  },
  render: function(){
    
    let parent = document.getElementById('parent');
    console.log(parent);
  
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    shopName.textContent = this.name;
  
    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for(let i=0;i<arrayHours.length;i++){
      let liElement = document.createElement('li')
      ulElement.appendChild(liElement);
      liElement.textContent=`${arrayHours[i]}:${this.Arr[i]} cookies`;
    }
    let totalElement =document.createElement('li');
    ulElement.appendChild(totalElement);
    totalElement.textContent=`Total: ${this.Total} cookies`
  
  }
}

Lima.getBuy();
Lima.getAvg();
Lima.getTotal();
Lima.render();

