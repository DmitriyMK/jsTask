'use strict'

// const btn1 = document.getElementById('hotels');
// const btn2 = document.getElementById('cars');
// const btn3 = document.getElementById('flights');
// const tab1 = document.querySelector('.hotels');
// const tab2 = document.querySelector('.cars');
// const tab3 = document.querySelector('.flights');


// btn1.addEventListener('click', function () {
//   tabsArray.forEach((node) => {
//     node.classList.remove('show');
//   })
//   tab1.classList.add('show');
// })
// btn2.addEventListener('click', function () {
//   tabsArray.forEach((node) => {
//     node.classList.remove('show');
//   })
//   tab2.classList.add('show');
// })
// btn3.addEventListener('click', function () {
//   tabsArray.forEach((node) => {
//     node.classList.remove('show');
//   })
//   tab3.classList.add('show');
// })



const tabs = document.querySelectorAll('.tab');
const btn = document.querySelectorAll('button');


for (let i = 0; i < btn.length; i++) {

  btn[i].addEventListener('click', function () {
    tabs.forEach((node) => {
      node.classList.remove('show');
    })

    tabs[i].classList.add('show');
  })
}