'use strict'

// 1. Добавить модальное окно "игра окончена". 
// В этом окне должно быть написано
// количество кротов, которые появились за время игры, 
// сколько кротов было поймано 
// и кнопка закрыть

// 2. Добавить уровни сложности (уменьшать или увеличивать время, которое крот проводит на поверхности)

// 3. Добавить таблицу рейтинга. 
// Выводить последние 10 игр. 
// В таблице должно быть шапка и колонки с именем и количеством очков.

// 4. Добавить валидацию на поле с именем. 
// Чтобы мы не могли начать игру, пока имя не ввели. 
// А если нажимать на кнопку старт, 
// то справа от инпута появляется красная надпись вроде "Введите имя"


// 5. Сделайте ещё одну страницу, 
// на которой будет меню с кнопками старт, 
// выбором уровня и таблицей рейтинга.

// Сделать минимум 4 пункта.



const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const score = document.querySelector('.score');
const startBtn = document.querySelector('.start');
const menu = document.querySelector('.menu');
const currentName = document.querySelector('#name');
const popup = document.querySelector('.popup');
const popupResult = document.querySelector('.popupResult');
const close = document.querySelector('.popup_close');
const popupResultClose = document.querySelector('.popupResult_close');
const body = document.querySelector('body');
const table = document.querySelector('tbody');
let label = document.querySelector('label');

let choiceLevel = document.querySelector('.level');
let appearMoleInfo = document.querySelector('.appearMole');
let catchMoleInfo = document.querySelector('.catchMole');
let levelOfGame = document.querySelector('.levelOfGame');
let result = document.querySelector('.result');

let isPlaying = false;
let numCountMoles = 0;
let numCatchMoles = 0;

let tr;

startBtn.addEventListener('click', startGame)
moles.forEach((mole) => {
    mole.addEventListener('click', catchMole)
})

function catchMole() {
    numCatchMoles++;
    score.textContent = numCatchMoles;
    this.parentElement.classList.remove('up');
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const id = Math.floor(Math.random() * holes.length);
    const hole = holes[id];
    return hole;
}

function showMole() {
    let time = '';

    switch (choiceLevel.value) {
        case 'easy':
            time = randomTime(1000, 2000);
            break;

        case 'normal':
            time = randomTime(750, 1500);
            break;

        case 'hard':
            time = randomTime(300, 600);
            break;

        default:
            time = randomTime(1000, 2000);
    }


    const hole = randomHole(holes);
    hole.classList.add('up');
    numCountMoles++;

    setTimeout(() => {
        hole.classList.remove('up');
        if (isPlaying) {
            showMole();
        }
        else {
            finishGame();
        }
    }, time)
}

function startGame() {
    if (currentName.value !== '') {
        menu.style.display = 'none';

        showMole();
        isPlaying = true;
        setTimeout(() => {
            isPlaying = false;
        }, 3000)
    }

    else {
        label.classList.add('error');
    }

}

function finishGame() {
    menu.style.display = 'block';
    let list = JSON.parse(localStorage.getItem('usersList')) || [];

    list.push({
        name: currentName.value,
        appear: numCountMoles,
        count: numCatchMoles,
        level: choiceLevel.value
    })

    localStorage.setItem('usersList', JSON.stringify(list));

    body.classList.add('popup_bg');
    popup.classList.add('popup_open');
    appearMoleInfo.textContent = numCountMoles;
    catchMoleInfo.textContent = numCatchMoles;
    levelOfGame.textContent = choiceLevel.value;

    numCountMoles = 0;
    numCatchMoles = 0;
    score.textContent = 0;
    currentName.value = '';
    label.classList.remove('error');
}


// close popup by clicking on close
close.addEventListener('click', function () {
    popup.classList.remove('popup_open');
    body.classList.remove('popup_bg');
})


// close popup by clicking outside popup
document.addEventListener('click', function (event) {
    let isClickInsidePopup = popup.contains(event.target);

    if (!isClickInsidePopup) {
        popup.classList.remove('popup_open');
        body.classList.remove('popup_bg');
    }
});


// open popup by clicking on result
result.addEventListener('click', function () {
    popupResult.classList.add('popupResult_open');
    body.classList.add('popupResult_bg');

    let list = JSON.parse(localStorage.getItem('usersList')) || [];
    localStorage.setItem('usersList', JSON.stringify(list));

    for (let i = 0; i < 11; i++) {
        tr = `<tr>
                <td><b>${[i + 1]}  - </b></td>
                <td>${list[i].name}</td>
                <td>${list[i].level}</td>
                <td>${list[i].appear}</td>
                <td>${list[i].count}</td>
              </tr>`;

        table.insertAdjacentHTML('beforeend', tr);
    }
});


// close popup by clicking on close
popupResultClose.addEventListener('click', function () {
    popupResult.classList.remove('popupResult_open');
    body.classList.remove('popupResult_bg');
    table.innerHTML = '';
})