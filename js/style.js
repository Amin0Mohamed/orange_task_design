setInterval( cairoTime,1000);
function cairoTime() {
    var time = new Date();
    var houre = time.getHours();
    var min = time.getMinutes();
    var en = 'AM';

    if (houre > 12){
        en = 'PM';
    }
    if (houre > 12){
        houre = houre - 12;
    }
    if (houre == 0){
        houre = 12;
    }
    if (houre < 10){
        houre = '0' + houre;
    }
    if (min < 10){
        min = '0' + min;
    }

    document.getElementById('cairo-time').innerHTML = houre + ":" + min + " " +en;
}

//**********************************************
setInterval( sanTime,1000);
function sanTime() {
    var time = new Date();
    var houre = time.getHours()+2;
    var min = time.getMinutes();
    var en = 'AM';

    if (houre > 12){
        en = 'PM';
    }
    if (houre > 12){
        houre = houre - 12;
    }
    if (houre == 0){
        houre = 12;
    }
    if (houre < 10){
        houre = '0' + houre;
    }
    if (min < 10){
        min = '0' + min;
    }

    document.getElementById('san-time').innerHTML = houre + ":" + min + " " +en;
}



