const clock = document.getElementById('timeshift-clock');
const btnFullscrn = document.getElementById('btn-fullscreen');

// Fullscreen
const elem = document.documentElement;
btnFullscrn.addEventListener('click', function() {
    if(elem.requestFullscreen) {
        clock.requestFullscreen();
        clock.classList.toggle('fullscreen-mode');
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
        //$('.timeshift-clock').classList.remove('fullscreen-mode');
    }
})