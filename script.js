$ = (query) => {
    return document.querySelector(query);
}

/* clock */
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

    const time = h + ":" + m + ":" + s; //ommitted ampm on purpose
    $('#clock').innerText=time;
    //$('#ampm').innerText=ampm;    
}

runTimer(); //used to fix error of 1 second time delay
setInterval(runTimer, 1000);

/*function addAlarm(time) {

}*/

/* menu btn, menu-drawer toggler */
$('.menu-btn').addEventListener('click', function() {
    $('.nav-drawer').classList.toggle('clicked');
    $('.menu-btn').classList.toggle('clicked');
});

/* alarm items */
const alarmArray = document.getElementsByClassName('alarm-item');
for(let i=0; i<alarmArray.length; i++) {
    alarmArray[i].addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
}

/* log entries */
const logArray = document.getElementsByClassName('log-entry');
for(let i=0; i<logArray.length; i++) {
    logArray[i].addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
}

/* expand / contract alarms/logs section */
$('.timeshift-toggle').addEventListener('click', function() {
    $('#timeshift').classList.toggle('clicked');
});
$('.alarms-toggle').addEventListener('click', function() {
    $('#alarms').classList.toggle('clicked');
});
$('.log-toggle').addEventListener('click', function() {
    $('#log').classList.toggle('clicked');
});

/* navbar scroll */
let position = 0;
window.addEventListener('scroll', function() {
    if (position < window.pageYOffset) {
        if(!$('.nav-drawer').classList.contains('clicked'))
            $('.shrink-on-scroll').classList.add('hide');
    }
    else {
        $('.shrink-on-scroll').classList.remove('hide');
    }
    position = window.pageYOffset;
})

/* navbar toggle visibility */
$('.drawer-list').addEventListener('click', function() {
    $('.nav-drawer').classList.toggle('clicked');
    $('.menu-btn').classList.toggle('clicked');
});

/* event listener for nav-list2 */
$('.nav-list2').addEventListener('click', function(e) {
    if(e.target) {
        if(e.target.matches("a.a-clock"))
            //clock stuff
            $('#timeshift').classList.remove('clicked');
        else if(e.target.matches("a.a-alarm"))
            //alarm stuff
            $('#alarms').classList.remove('clicked');
        else if(e.target.matches("a.a-log"))
            //log stuff
            $('#log').classList.remove('clicked');
    }
    else
        console.log('target not recognized');
})