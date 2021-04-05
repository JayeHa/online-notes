"use strict";
console.log('hi');
var menu = document.querySelector('.header__categories');
var modal = document.querySelector('.modal');
menu.addEventListener("click", function (e) {
    var target = e.target;
    if (target.classList.contains('category__midea')) {
        modal.classList.add('active');
    }
    else if (target.classList.contains('category__text')) {
    }
});
modal.addEventListener("click", function (e) {
    var target = e.target;
    // console.log(target.className);
    if (target.className && target.classList.contains('modal-close')) {
        modal.classList.remove('active');
    }
});
