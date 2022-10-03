function evt_calcular(){
    var idade = document.getElementById("txtidade").value
    var div1 = document.getElementById("dias");
    var div2 = document.getElementById("horas");
    var div3 = document.getElementById("minutos");
    var div4 = document.getElementById("segundos");
    div1.innerHTML = "dias vividos: "+idade*365;
    div2.innerHTML = "horas vividas: "+idade*365*24;
    div3.innerHTML = "minutos vividos: "+idade*365*24*60;
    div4.innerHTML = "segundos vividos: "+idade*365*24*60*60;
}