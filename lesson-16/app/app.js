'use strict'

let input = document.getElementById('search-input');
let result = document.getElementById('search-result');
let searchArray = ['cat', 'dog', 'chupacabra', 'crocodile', 'elephant', 'cow', 'raccoon', 'dragon', 'eagle', 'iguana', 'sphinx'];


function autoComplete(searchArray, wordToSearch) {
  return searchArray.filter(search => search.toLowerCase().includes(wordToSearch.toLowerCase()))
}


function getValue(value) {
  let data = autoComplete(searchArray, value);


  data.forEach((item) => {
    const itemResult = item;
    const itemSearch = `<ul><li><a href="#"> ${itemResult} </a></li></ul>`;

    result.insertAdjacentHTML('beforeend', itemSearch);
  });
}


function clearValue() {
  result.innerHTML = '';
}


input.addEventListener('keyup', function () {
  clearValue();
  getValue(this.value);
});



