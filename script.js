$ = (id) => {
    return document.getElementById(id);
}

function runTimer() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = 'am';

    if(h > 12) {
        h -= 12;
        ampm = "pm";
    } else if (h===0)
        h = 12;

    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const time = h + ":" + m + ":" + s + ampm;
    $('clock').innerText = time;
}

runTimer(); //used to fix error of 1 second time delay
setInterval(runTimer, 1000);