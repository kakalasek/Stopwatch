let hthsec = 0
let sec = 0
let min = 0
let on = false
let lp;

let disphth;
let dispsec;
let dispmin;

function formatTime(){
        hthsec += 1;
        if(hthsec > 99){
            hthsec = 0;
            sec += 1;
        }
        if(sec > 59){
            sec = 0;
            min += 1;
        }
        if(min > 59){
            stop();
            reset();
        }
        
        display()
}

function stop(){
    clearInterval(lp);
    on = false;
}

function start(){
    if(on == false){
        lp = setInterval(formatTime, 10)
        on = true
    }
}

function reset(){
    if(on != true){
    hthsec = 0
    sec = 0
    min = 0
    on = false
    document.querySelector("#sw").innerHTML = `0${min}:0${sec}:0${hthsec}`
    }
}

function display(){
    hthsec < 10 ? disphth = String(`0${hthsec}`) : disphth = hthsec
    sec < 10 ? dispsec = String(`0${sec}`) : dispsec = sec
    min < 10 ? dispmin = String(`0${min}`) : dispmin = min
    
    document.querySelector("#sw").innerHTML = `${dispmin}:${dispsec}:${disphth}`
}