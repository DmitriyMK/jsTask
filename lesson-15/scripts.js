


const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progressBar = document.querySelector('.progress__filled');
const time = document.querySelector('#time');
const volume = document.querySelector('[name="volume"]');
// playbackRate - home

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
    console.log('video.volume', video.volume)
}

toggle.addEventListener('click', toggleVideo)
video.addEventListener('timeupdate', handleProgress)
volume.addEventListener('input', handleVolume)
