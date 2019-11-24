// Из практики предлагаю доделать плеер. Там не хватает:
// 1. Возможности менять скорость воспроизведения (playbackRate) +
// 2. Возможности перематывать +25 секунд / -10 секунд (currentTime)
// 3. Изменение иконочки с play на pause и обратно. ( ►  /  ❚ ❚  - это шрифтовые иконки, можете скопировать их в код)

// Доп задачи
// 4. Реализуйте перематывание видоса. Когда вы зажимаете прогресс бар и меняете текущее время. 
// 5. Отображайте текущее время  и общее время видоса.




const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progressBar = document.querySelector('.progress__filled');
const time = document.querySelector('#time');
const volume = document.querySelector('[name="volume"]');
const playbackRateButton = document.querySelector('[name="playbackRate"]');
const changeTimeButton = document.querySelectorAll('.changeTime');


function toggleVideo() {
    video.paused ? video.play() : video.pause();
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + '%';
    time.value = parseInt(video.currentTime);
}

function handleVolume() {
    video.volume = volume.value;
}

function speedOfVideo() {
    video.playbackRate = +playbackRateButton.value;
}


changeTimeButton.forEach((time) => {
    time.addEventListener('click', function () {
        video.currentTime = video.currentTime + parseInt(time.dataset.skip);
    });
});






toggle.addEventListener('click', toggleVideo);
video.addEventListener('timeupdate', handleProgress);
volume.addEventListener('input', handleVolume);
playbackRateButton.addEventListener('click', speedOfVideo);
