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
const close = document.querySelector('.popup_close');
const body = document.querySelector('body');

let appearMoleInfo = document.querySelector('.appearMole');
let catchMoleInfo = document.querySelector('.catchMole');

let isPlaying = false;
let numCountMoles = 0;
let numCatchMoles = 0;

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
    const time = randomTime(1000, 2000);
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
    menu.style.display = 'none';

    showMole();
    isPlaying = true;
    setTimeout(() => {
        isPlaying = false;
    }, 3000)
}

function finishGame() {
    menu.style.display = 'block';
    const list = JSON.parse(localStorage.getItem('usersList')) || [];
    list.push({
        name: currentName.value,
        count: numCatchMoles
    })

    localStorage.setItem('usersList', JSON.stringify(list))
    body.classList.add('popup_bg');
    popup.classList.add('popup_open');

    // Добавить колчичетсов кротов что появилось
    appearMoleInfo.textContent = numCountMoles;
    catchMoleInfo.textContent = numCatchMoles;

    numCatchMoles = 0;
    score.textContent = 0;
    currentName.value = '';
}

close.addEventListener('click', function () {

    // Добавить условие на закрытые если клике вне окна
    popup.classList.remove('popup_open');
    body.classList.remove('popup_bg');
})

























