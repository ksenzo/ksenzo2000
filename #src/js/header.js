"use strict";

let topSelect = document.getElementById('top');
let bottomSelect = document.getElementById('bottom');
let jacketsSelect = document.getElementById('jackets');
let elseSelect = document.getElementById('else');
let svgMenu = document.querySelector('.img__menu');
let menuBtn = document.getElementById('menu-btn');
let msgBtn = document.getElementById('msg-btn');
let bagBtn = document.getElementById('bag-btn');
let heartBtn = document.getElementById('heart-btn');


function headerSelectTopOver() {
   document.querySelector('.header__kind-select-top').style.display = "block";
}
function headerSelectTopOut() {
   document.querySelector('.header__kind-select-top').style.display = "none";
}
if(topSelect) {
    topSelect.addEventListener('mouseover', headerSelectTopOver);
    topSelect.addEventListener('mouseout', headerSelectTopOut);
}



function headerSelectBottomOver() {
   document.querySelector('.header__kind-select-bottom').style.display = "block";
}
function headerSelectBottomOut() {
   document.querySelector('.header__kind-select-bottom').style.display = "none";
}
if(bottomSelect) {
   bottomSelect.addEventListener('mouseover', headerSelectBottomOver);
   bottomSelect.addEventListener('mouseout', headerSelectBottomOut);
}



function headerSelectJacketsOver() {
   document.querySelector('.header__kind-select-jackets').style.display = "block";
}
function headerSelectJacketsOut() {
   document.querySelector('.header__kind-select-jackets').style.display = "none";
}
if(jacketsSelect) {
   jacketsSelect.addEventListener('mouseover', headerSelectJacketsOver);
   jacketsSelect.addEventListener('mouseout', headerSelectJacketsOut);
}



function headerSelectElseOver() {
   document.querySelector('.header__kind-select-else').style.display = "block";
}
function headerSelectElseOut() {
   document.querySelector('.header__kind-select-else').style.display = "none";
}
if(elseSelect) {
   elseSelect.addEventListener('mouseover', headerSelectElseOver);
   elseSelect.addEventListener('mouseout', headerSelectElseOut);
}



window.onscroll = function showHeader() {
   let fixedHeader = document.querySelector('.header');
   if(window.pageYOffset > 75) {
      fixedHeader.classList.add('header__fixed');
   } else {
      fixedHeader.classList.remove('header__fixed');
   }
};

function colorMenuBtnOver() {
   menuBtn.style.filter = 'invert(91%) sepia(21%) saturate(1678%) hue-rotate(287deg) brightness(102%) contrast(98%)';
}

function colorMenuBtnOut() {
   menuBtn.style.filter = 'invert(0%) sepia(0%) saturate(7%) hue-rotate(253deg) brightness(103%) contrast(100%)';
}

if(menuBtn) {
   menuBtn.addEventListener('mouseover', colorMenuBtnOver);
   menuBtn.addEventListener('mouseout', colorMenuBtnOut);
}



function colorMsgBtnOver() {
   msgBtn.style.filter = 'invert(91%) sepia(21%) saturate(1678%) hue-rotate(287deg) brightness(102%) contrast(98%)';
}

function colorMsgBtnOut() {
   msgBtn.style.filter = 'invert(0%) sepia(0%) saturate(7%) hue-rotate(253deg) brightness(103%) contrast(100%)';
}

if(msgBtn) {
   msgBtn.addEventListener('mouseover', colorMsgBtnOver);
   msgBtn.addEventListener('mouseout', colorMsgBtnOut);
}



function colorBagBtnOver() {
   bagBtn.style.filter = 'invert(91%) sepia(21%) saturate(1678%) hue-rotate(287deg) brightness(102%) contrast(98%)';
}

function colorBagBtnOut() {
   bagBtn.style.filter = 'invert(0%) sepia(0%) saturate(7%) hue-rotate(253deg) brightness(103%) contrast(100%)';
}

if(bagBtn) {
   bagBtn.addEventListener('mouseover', colorBagBtnOver);
   bagBtn.addEventListener('mouseout', colorBagBtnOut);
}



function colorHeartBtnOver() {
   heartBtn.style.filter = 'invert(91%) sepia(21%) saturate(1678%) hue-rotate(287deg) brightness(102%) contrast(98%)';
}
function colorHeartBtnOut() {
   heartBtn.style.filter = 'invert(0%) sepia(0%) saturate(7%) hue-rotate(253deg) brightness(103%) contrast(100%)';
}
if(heartBtn) {
   heartBtn.addEventListener('mouseover', colorHeartBtnOver);
   heartBtn.addEventListener('mouseout', colorHeartBtnOut);
}


if(menuBtn) {
   const menuActive = document.querySelector('.menu__active');
   menuBtn.addEventListener('click', function (e) {
      menuActive.classList.toggle('_active');
   });
}




