//***************cairo timer******************************
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

//***************sanTime timer******************************
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
//*************************control of the height of landing page***********************************
setInterval(getResolution,500);
function getResolution() {

    if (window.innerHeight <= 530){
        document.querySelector('header').style.height='550px';
        document.querySelector('header .header_overlay').style.height='550px';
        document.querySelector('header .header_video').style.height='550px';
    }else {
        document.querySelector('header').style.height='100vh';
        document.querySelector('header .header_overlay').style.height='100vh';
        document.querySelector('header .header_video').style.height='100vh';
    }
}

//*****************navbar-toggler****************************
function toggle(e) {
    var ele = document.querySelector('.navbar-toggler');
    var nav = document.querySelector('nav');
    var one = document.querySelector('.navbar-toggler span:nth-child(1)');
    var two = document.querySelector('.navbar-toggler span:nth-child(2)');
    var three = document.querySelector('.navbar-toggler span:nth-child(3)');
    var nav_menu = document.querySelector('#navbarSupportedContent');
    var small_btn = document.querySelector('header nav .question_btn');
    if (ele.classList.contains("ss") ){
        ele.classList.remove('ss');
        nav.classList.add('nav_small');
        one.classList.add('one');
        two.classList.add('two');
        three.classList.add('three');
        nav_menu.classList.add('nav_menu');
        small_btn.classList.add('small_question_btn');
    }else{
        ele.classList.add('ss');
        ele.classList.remove('s');
        nav.classList.remove('nav_small');
        one.classList.remove('one');
        two.classList.remove('two');
        three.classList.remove('three');
        nav_menu.classList.remove('nav_menu');
        small_btn.classList.remove('small_question_btn');
    }
}

setInterval(getnav,500);
function getnav() {
    var nav = document.querySelector('nav');
    var ele = document.querySelector('.navbar-toggler');
    var nav_menu = document.querySelector('#navbarSupportedContent');
    var small_btn = document.querySelector('header nav .question_btn');

    if (window.innerWidth >= 992){
        nav.classList.remove('nav_small');
        nav_menu.classList.remove('nav_menu');
        small_btn.classList.remove('small_question_btn');
    }else {
        if (ele.classList.contains("ss") ){
            nav.classList.remove('nav_small');
        }else {
            ele.classList.add('s');
            ele.classList.remove('ss');
            nav.classList.add('nav_small');
            nav_menu.classList.add('nav_menu');
            small_btn.classList.add('small_question_btn');
        }
    }
}



