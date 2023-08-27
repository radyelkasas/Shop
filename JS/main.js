let home = document.getElementById('home-nav');
let shop = document.getElementById('shop-nav');
let contact = document.getElementById('contact-nav');
let parantBox = document.querySelector('.parantBox');
let listCard = document.querySelector('tbody');
let delet = document.getElementById('delet');
let quantity = document.querySelector('.quantity');
let total = document.getElementById('total');


window.onscroll = function(){
    if(scrollY > 450){
        home.classList.remove('active');
        shop.classList.add('active');
        if(scrollY >= 2820){
            contact.classList.add('active');
            shop.classList.remove('active')
        }else{
            contact.classList.remove('active');
        }
    }else{
        home.classList.add('active');
        shop.classList.remove('active');
    }
}



let bag = document.getElementById('bag');
let navSide = document.getElementById('nav-side');
let closebtn = document.getElementById('close');

bag.onclick = function() {
    navSide.classList.toggle('nav-active');
    closebtn.onclick = function() {
        navSide.classList.toggle('nav-active');
    }
}

// Add To Cart

let products = [
  {
    id : 1,
    name : 'Cartoon Astronaut T-Shirts',
    image : 'Img/products/f1.jpg',
    price : 78
  },
  {
    id : 2,
    name : 'Cartoon Astronaut T-Shirts',
    image : 'Img/products/f2.jpg',
    price : 78
  },
  {
    id : 3,
    name : 'Cartoon Astronaut T-Shirts',
    image : 'Img/products/f3.jpg',
    price : 78
  },
  {
    id : 4,
    name : 'Cartoon Astronaut T-Shirts',
    image : 'Img/products/f4.jpg',
    price : 78
  }
]

let listCards = [];

function initApp(){
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('pro');
    newDiv.classList.add('col');

    newDiv.innerHTML = `
      <div>
        <img class="w-100 pro-image" src="${value.image}" alt="Product Image">
      </div>
      <div class="text">
          <span class="text-black-50">adidas</span>
          <h1 class="pt-3 pro-title" >${value.name}</h1>
          <div class="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
          </div>
          <div class="pb-3">
              <span class="pro-price">$${value.price.toLocaleString()}</span>
              <button onclick="addToCard(${key})">Add To Card</button>
          </div>
      </div>
    `;
    parantBox.appendChild(newDiv);
  })
}
initApp()

function addToCard(key){
  if(listCards[key] == null ){
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function reloadCard(){
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value,key)=> {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if(value != null){
      let newDiv = document.createElement('tr');
      newDiv.innerHTML = `
      <th><img src="${value.image}" alt="...."></th>
      <th>${value.name}</th>
      <th>${value.price}</th>
      <th>
        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
        <div class="count">${value.quantity}</div>
        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
      </th>
      `
      total.innerHTML = `
      Total : <span>${totalPrice}</span>
      `
      listCard.appendChild(newDiv);

      delet.addEventListener('click',()=> {
        
      })
    }
  })

  quantity.innerText = count;
  total.innerHTML = `Total :` + totalPrice;
}


function changeQuantity(key, quantity){
  if(quantity == 0){
      delete listCards[key];
  }else{
      listCards[key].quantity = quantity;
      listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
delet.addEventListener('click',()=> {
  listCards.splice(0)
  reloadCard()
})




