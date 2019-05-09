$ = (query) => {
    return document.querySelector(query);
}

/* clock */
const tsclock = $('#clock');
function runTimer() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    //let ampm = "am";

    if(h > 12) {
        h -= 12;
        //ampm = "pm";
    } else if (h===0)
        h = 12;

    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const time = h + ":" + m + ":" + s; //ommitted ampm on purpose
    //$('#clock').innerText=time;
    tsclock.innerText = time;  //optimized
    //$('#ampm').innerText=ampm;    
}

runTimer(); //used to fix error of 1 second time delay
setInterval(runTimer, 1000);

/*function addAlarm(time) {

}*/

/* menu btn, menu-drawer toggler */
const navDrawer = $('.nav-drawer');
const menuBtn = $('.menu-btn');
menuBtn.addEventListener('mouseup', function() {
    navDrawer.classList.toggle('clicked');
    menuBtn.classList.toggle('clicked');
});

/* navbar scroll */
let position = 0;
const shrinkOnScroll = $('.shrink-on-scroll');
const mywindow = window;
window.addEventListener('scroll', function() {
    if (position < mywindow.pageYOffset) {
        if(!navDrawer.classList.contains('clicked'))
            shrinkOnScroll.classList.add('hide');
    }
    else {
        shrinkOnScroll.classList.remove('hide');
    }
    position = mywindow.pageYOffset;
})

/* navbar toggle visibility */
$('.drawer-list').addEventListener('mousedown', function() {
    navDrawer.classList.toggle('clicked');
    menuBtn.classList.toggle('clicked');
});

// alarm items
/*const alarmArray = document.getElementsByClassName('alarm-item');
let len, i;
for(let i=0, len=alarmArray.length; i<len; i++) {
    alarmArray[i].addEventListener('mouseup', function() {
        this.classList.toggle('clicked');
    });
}

// log entries
const logArray = document.getElementsByClassName('log-entry');
for(let i=0, len=logArray.length; i<len; i++) {
    logArray[i].addEventListener('mouseup', function() {
        this.classList.toggle('clicked');
    });
}*/

// expand / contract alarms/logs section
const timeshift = $('#timeshift');
const alarms = $('#alarms');
const log = $('#log');
$('.timeshift-toggle').addEventListener('mousedown', function() {
    timeshift.classList.toggle('clicked');
});
$('.alarms-toggle').addEventListener('mousedown', function() {
    alarms.classList.toggle('clicked');
});
$('.log-toggle').addEventListener('mousedown', function() {
    log.classList.toggle('clicked');
});

/* event listener for large screens nav-list2 */
$('.nav-list2').addEventListener('mousedown', function(e) {
    if(e.target) {
        if(e.target.matches("a.a-clock"))
            timeshift.classList.remove('clicked');
        else if(e.target.matches("a.a-alarm"))
            alarms.classList.add('clicked');
        else if(e.target.matches("a.a-log"))
            log.classList.add('clicked');
    }
    else
        console.log('target not recognized');
})
/* small screens nav-list (drawer) */
$('.nav-list').addEventListener('mousedown', function(e) {
    if(e.target) {
        if(e.target.matches("a.a-clock"))
            timeshift.classList.remove('clicked');
        else if(e.target.matches("a.a-alarm"))
            alarms.classList.add('clicked');
        else if(e.target.matches("a.a-log"))
            log.classList.add('clicked');
    }
    else
        console.log('target not recognized');
})