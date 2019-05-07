$ = (query) => {
    return document.querySelector(query);
}

// Fullscreen
const elem = document.documentElement;
$('.btn-fullscreen').addEventListener('click', function() {
    if(elem.requestFullscreen) {
        $('.timeshift-clock').requestFullscreen();
        $('.timeshift-clock').classList.toggle('fullscreen-mode');
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
        //$('.timeshift-clock').classList.remove('fullscreen-mode');
    }
})