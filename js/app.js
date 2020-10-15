let sel = 0;
let status = 0;
let state = true;
let condition = 0;

function toggle() {
    let imageToggle = document.getElementsByClassName('image-toggle')[0];
    let textToggle = document.getElementById('text-toggle');
    if (sel == 0) {
        sel++;
        imageToggle.src = 'moon.svg';
        textToggle.style.color = "rgb(0,0,0)";
        textToggle.innerHTML = 'Dark';
        light();
    } else {
        sel = 0;
        imageToggle.src = 'sun.svg';
        textToggle.style.color = "white";
        textToggle.innerHTML = 'Light';
        dark();
    }
}

var archive = document.form.archive.value;


function insert(num) {
    var cal = document.form.textview.value;
    if (cal.length <= 1 && state === true) {
        document.form.textview.value = (document.form.textview.value.replace(/0/, '') + num);
        status = 1;
    } else if (cal.length > 1 && cal.length < 12 && state === true) {
        document.form.textview.value = document.form.textview.value + num;
    }
}


function dot() {
    var cal = document.form.textview.value;

    if (cal.length <= 1 && status === 0) {
        cal = '0.';
        status = 0;
        state = false;
    } else if (status === 1) {
        cal += '.';
        status = 0;
    } else {
        cal += '';
    }
    document.form.textview.value = cal;
}

function plusMinus() {
    var cal = document.form.textview.value;
    if (cal.substr(0, 1) !== '-') {
        document.form.textview.value = "-" + eval(cal);
    } else {
        document.form.textview.value = cal.replace(/-/gi, '');
    }
}

function insertSymbol(symbol) {
    var cal = document.form.textview.value;
    var archive = document.form.archive.value;
    if (archive == '') {
        document.form.archive.value = document.form.textview.value.replace(/=/,'') + symbol;
        document.form.textview.value = 0;
    }else if(state === false) {
        document.form.archive.value = document.form.textview.value.replace(/=/,'') + symbol;
        document.form.textview.value = 0;
        state = true;
    }else if(cal !== 0) {

        equal();
        document.form.archive.value = document.form.textview.value.replace(/=/,'') + symbol;
        document.form.textview.value = 0;
        state = true;
    }
console.log(state);
}

function clean() {

    document.form.textview.value = "0";
    status = 0;
    state = true;
    document.form.archive.value = '';
}

function back() {
    var ex = document.form.textview.value;

    if (ex.length >= 1 && state === true) {
        document.form.textview.value = ex.substring(0, ex.length - 1);
    } else if(state === true){
        document.form.textview.value = "0";
        status = 0;
    } 
}

function equal() {
    var a = document.form.textview.value;
    var b = document.form.archive.value;
    console.log(b.slice(-1));

    if (b && a !== 0 && b.slice(-1) == '+') {
        document.form.archive.value = b + a;
        document.form.textview.value ='=' + Math.round((parseFloat(document.form.archive.value) + parseFloat(a))*100000000)/100000000;
        state = false;
    }else if (a && b && b.slice(-1) == '-') {
        document.form.archive.value = b + a;
        document.form.textview.value = Math.round((parseFloat(document.form.archive.value) - parseFloat(a))*100000000)/100000000;
    }else if (a && b && b.slice(-1) == '*') {
        document.form.archive.value = b + a;
        document.form.textview.value = Math.round((parseFloat(document.form.archive.value) * parseFloat(a))*100000000)/100000000;
    }else if (a && b && b.slice(-1) == '/') {
        document.form.archive.value = b + a;
        document.form.textview.value = Math.round((parseFloat(document.form.archive.value) / parseFloat(a))*100000000)/100000000;
    }
}



// функция для смены темы

function light() {


    $('.but').removeClass('but').addClass('btn');
    $('.el').removeClass('el').addClass('el_1');
    $('.clean').removeClass('clean').addClass('clean_1');
    $('input').removeClass('inputType').addClass('inputType_1');
    $('.calculator').removeClass('calculator').addClass('calCulator');
    document.body.style.backgroundColor = ' rgb(152, 146, 146)';
    $('.header-color').removeClass('header-color').addClass('header-color_1');
    $('.mode-color').removeClass('mode-color').addClass('mode-color_1');
}

function dark() {
    $('.btn').removeClass('btn').addClass('but');
    $('.el_1').removeClass('el_1').addClass('el');
    $('.clean_1').removeClass('clean_1').addClass('clean');
    $('input').removeClass('inputType_1').addClass('inputType');
    $('.calCulator').removeClass('calCulator').addClass('calculator');
    document.body.style.backgroundColor = ' rgb(37, 37, 37)';
    $('.header-color_1').removeClass('header-color_1').addClass('header-color');
    $('.mode-color_1').removeClass('mode-color_1').addClass('mode-color');
}

// // функция для смены размер калькулятора
// const cal = document.getElementById('calculator');

// function small() {
//     document.form.textview.style.width = '275px';
//     document.form.textview.style.height = '60px';
//     document.form.textview.style.fontSize = '30px';
//     cal.style.maxWidth = '280px';
//     cal.style.marginTop = '15%';
//     cal.style.padding = '10px';
//     cal.style.gridGap = '5px';
// }
// function middle() {
//     document.form.textview.style.width = '360px';
//     document.form.textview.style.height = '100px';
//     document.form.textview.style.fontSize = '60px';
//     cal.style.maxWidth = '360px';
//     cal.style.marginTop = '10%';
//     cal.style.padding = '30px';
//     cal.style.gridGap = '10px';
// }

// function big() {
//     document.form.textview.style.width = '450px';
//     document.form.textview.style.height = '150px';
//     document.form.textview.style.fontSize = '100px';
//     cal.style.maxWidth = '450px';
//     cal.style.marginTop = '5%';
//     cal.style.padding = '40px';
//     cal.style.gridGap = '15px';
// }


