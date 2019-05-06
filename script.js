$ = (query) => {
    return document.querySelector(query);
}

function runTimer() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "am";

    if(h > 12) {
        h -= 12;
        ampm = "pm";
    } else if (h===0)
        h = 12;

    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const ampm2 = ampm;
    const time = h + ":" + m + ":" + s; //ommitted ampm on purpose
    $('#time').innerText=time;
    //$('#ampm').innerText=ampm2;    
}

runTimer(); //used to fix error of 1 second time delay
setInterval(runTimer, 1000);

function addAlarm(time) {

}

$('.menu-btn').addEventListener('click', function() {
    $('.nav-drawer').classList.toggle('clicked');
    $('.menu-btn').classList.toggle('clicked');
});