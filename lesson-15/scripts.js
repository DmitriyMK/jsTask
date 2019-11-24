// Из практики предлагаю доделать плеер. Там не хватает:
// 1. Возможности менять скорость воспроизведения (playbackRate) +
// 2. Возможности перематывать +25 секунд / -10 секунд (currentTime)
// 3. Изменение иконочки с play на pause и обратно. ( ►  /  ❚ ❚  - это шрифтовые иконки, можете скопировать их в код)

// Доп задачи
// 4. Реализуйте перематывание видоса. Когда вы зажимаете прогресс бар и меняете текущее время. 
// 5. Отображайте текущее время  и общее время видоса.




const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const time = document.querySelector('#time');
const timeAll = document.querySelector('#timeAll');
const volume = document.querySelector('[name="volume"]');
const playbackRateButton = document.querySelector('[name="playbackRate"]');
const changeTimeButton = document.querySelectorAll('.changeTime');



function toggleVideo() {
    video.paused ? video.play() : video.pause();
    timeAll.value = convertToDataFormat(parseFloat(video.duration));

    if (video.play) {
        video.classList.toggle('pause');
    }
}


function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    time.value = convertToDataFormat(parseFloat(video.currentTime));
    progressBar.style.flexBasis = percent + '%';
}


function getProgress(time) {
    const percent = time.offsetX * 100 / parseFloat(progress.offsetWidth);
    video.currentTime = video.duration * percent / 100;
    progressBar.style.flexBasis = percent + '%';

    console.log(time.offsetX);
    console.log(progress.offsetWidth);
}


changeTimeButton.forEach((time) => {
    time.addEventListener('click', function () {
        video.currentTime += parseFloat(time.dataset.skip);
    });
});


function handleVolume() {
    video.volume = volume.value;
}


function speedOfVideo() {
    video.playbackRate = +playbackRateButton.value;
}


function convertToDataFormat(time) {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor((time / 60) % 60);
    let hours = Math.floor((time / (60 * 60)) % 24);

    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');
}


toggle.addEventListener('click', toggleVideo);
progress.addEventListener('click', getProgress);
video.addEventListener('timeupdate', handleProgress);
volume.addEventListener('input', handleVolume);
playbackRateButton.addEventListener('click', speedOfVideo);
