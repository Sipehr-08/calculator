
function insert(num) {
    var cal = document.form.textview.value;
    if ((!cal.includes('.') || num !== '.') && cal.length <= 1 ) {
        document.form.textview.value = (document.form.textview.value.replace(/0/gi,'') + num);
      } else if((!cal.includes('.') || num !== '.') && cal.length > 1 && cal.length <10) {
        document.form.textview.value = document.form.textview.value + num;
      }
    
    
}

function plusMinus() {
var cal = document.form.textview.value;
if(cal.substr(0,1) !== '-') {
    document.form.textview.value = "-" + eval(cal);
}else{
  document.form.textview.value = cal.replace(/-/gi,'');
}
}

function insertSymbol(symbol) {
    var cal = document.form.textview.value;
    if(cal.slice(-1) == symbol) {
        document.form.textview.value = document.form.textview.value + '';
    }else{
        document.form.textview.value = document.form.textview.value + symbol;
    }  
    
}
function clean () {
    
    document.form.textview.value = "0";
}

function back() {
    var ex = document.form.textview.value;

    if(ex.length > 1) {
    document.form.textview.value = ex.substring(0, ex.length - 1);
    }else{
        document.form.textview.value = "0";
    }
}

function equal () {
    var ex = document.form.textview.value;

    if (ex) {
        document.form.textview.value = eval(ex);
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
}
function dark() {
    $('.btn').removeClass('btn').addClass('but');
    $('.el_1').removeClass('el_1').addClass('el');
    $('.clean_1').removeClass('clean_1').addClass('clean');
    $('input').removeClass('inputType_1').addClass('inputType');
    $('.calCulator').removeClass('calCulator').addClass('calculator');
    document.body.style.backgroundColor = ' rgb(37, 37, 37)';
}

// функция для смены размер калькулятора
const cal = document.getElementById('calculator');

function small() {
    document.form.textview.style.width = '275px';
    document.form.textview.style.height = '60px';
    document.form.textview.style.fontSize = '30px';
    cal.style.maxWidth = '280px';
    cal.style.marginTop = '15%';
    cal.style.padding = '10px';
    cal.style.gridGap = '5px';
}
function middle() {
    document.form.textview.style.width = '360px';
    document.form.textview.style.height = '100px';
    document.form.textview.style.fontSize = '60px';
    cal.style.maxWidth = '360px';
    cal.style.marginTop = '10%';
    cal.style.padding = '30px';
    cal.style.gridGap = '10px';
}

function big() {
    document.form.textview.style.width = '450px';
    document.form.textview.style.height = '150px';
    document.form.textview.style.fontSize = '100px';
    cal.style.maxWidth = '450px';
    cal.style.marginTop = '5%';
    cal.style.padding = '40px';
    cal.style.gridGap = '15px';
}
