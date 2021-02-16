var btn = document.getElementById("btn");
var input = document.getElementById("input");
var main = document.getElementById("main");

function Add() {

    var para = document.createElement('p');
    var but = document.createElement('button');

    para.innerHTML = input.value;
    main.appendChild(para);
    input.value = "";

    para.appendChild(but);
    but.innerHTML = "Delete";
    but.classList.add("but");

    para.addEventListener('mouseover', () => {
        para.style.cursor = "pointer";
    })

    para.addEventListener('click', () => {
        para.style.textDecoration = "line-through";
    })

    but.addEventListener('click', () => {
        para.remove();
    })

}

$('input').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        Add();
    }
});
