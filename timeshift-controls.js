$ = (query) => {
    return document.querySelector(query);
}
const clock = $('.timeshift-clock');
//const clockClasses = $('.timeshift-clock').classList;

// Fullscreen
const elem = document.documentElement;
$('.btn-fullscreen').addEventListener('click', function() {
    if(elem.requestFullscreen) {
        clock.requestFullscreen();
        clock.classList.toggle('fullscreen-mode');
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
        //$('.timeshift-clock').classList.remove('fullscreen-mode');
    }
})