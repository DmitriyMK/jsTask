'use strict'


// Ваша задача написать приложение по распознаванию речи.
// Вы говорите, а приложение отрисовывает на странице то, что вы сказали. 
// SpeechRecognition в помощь.



const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const content = document.querySelector('.content');

recognition.interimResults = true;
recognition.lang = 'en-US';


start.addEventListener('click', startListen);
stop.addEventListener('click', endListen);


recognition.onresult = function (event) {
  let text = event.results[0][0].transcript;
  content.textContent = transcript;
}


function startListen() {
  recognition.start();
}

function endListen() {
  recognition.stop();
}