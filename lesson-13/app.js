'use strict'


// Ваша задача написать приложение по распознаванию речи.
// Вы говорите, а приложение отрисовывает на странице то, что вы сказали. 

// SpeechRecognition в помощь.



window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new window.speechRecognition();
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const content = document.querySelector('.content');
let finalTranscript = '';

recognition.interimResults = true;
recognition.maxAlternatives = 10;
recognition.continuous = true;


start.addEventListener('click', startListen);
stop.addEventListener('click', endListen);


recognition.onresult = (event) => {
  let interimTranscript = '';

  for (let i = event.resultIndex, len = event.results.length; i < len; i++) {

    let transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      finalTranscript += transcript;
    } else {
      interimTranscript += transcript;
    }
  }

  content.innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
}


function startListen() {
  recognition.start();
}

function endListen() {
  recognition.stop();
}