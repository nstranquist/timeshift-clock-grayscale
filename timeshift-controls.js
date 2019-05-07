$ = (query) => {
    return document.querySelector(query);
}

// Fullscreen
const elem = document.documentElement;
$('.btn-fullscreen').addEventHandler('click', function() {
    if(elem.requestFullscreen) {
        elem.requestFullscreen();
    }
    if (elem.exitFullscreen) {
        elem.exitFullscreen();
    }
})