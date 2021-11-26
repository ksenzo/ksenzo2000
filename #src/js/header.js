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
let topActive = document.getElementById('top_active');
let closeTopAvtive = document.getElementById('span_menu_active_top');
let bottomActive = document.getElementById('bottom_active');
let closeTopActive = document.getElementById('span_menu_active_top');
let closeBottomActive = document.getElementById('span_menu_active_bottom');
let closeActiveMenu = document.getElementById('span_menu_active');
//let selector = document.querySelector('.header__kind-select-top');
//let displayValue = 'block';

function headerSelect(selector, displayValue) {
   selector.style.display = displayValue;
}
if (topSelect) {
   topSelect.addEventListener('mouseover', () => headerSelect(
      document.querySelector('.header__kind-select-top'), 'block'));
   topSelect.addEventListener('mouseout', () => headerSelect(
      document.querySelector('.header__kind-select-top'), 'none'));
}

if (bottomSelect) {
   bottomSelect.addEventListener('mouseover', () => headerSelect(
      document.querySelector('.header__kind-select-bottom'), 'block'));
   bottomSelect.addEventListener('mouseout', () => headerSelect(
      document.querySelector('.header__kind-select-bottom'), 'none'));
}

if (jacketsSelect) {
   jacketsSelect.addEventListener('mouseover', () => headerSelect(
      document.querySelector('.header__kind-select-jackets'), 'block'));
   jacketsSelect.addEventListener('mouseout', () => headerSelect(
      document.querySelector('.header__kind-select-jackets'), 'none'));
}

if (elseSelect) {
   elseSelect.addEventListener('mouseover', () => headerSelect(
      document.querySelector('.header__kind-select-else'), 'block'));
   elseSelect.addEventListener('mouseout', () => headerSelect(
      document.querySelector('.header__kind-select-else'), 'none'));
}


window.onscroll = function showHeader() {
   let fixedHeader = document.querySelector('.header');
   if (window.pageYOffset > 75) {
      fixedHeader.classList.add('header__fixed');
   } else {
      fixedHeader.classList.remove('header__fixed');
   }
};


function colorMenuBtn(selector, filterValue) {
   selector.style.filter = filterValue;
}

if (menuBtn) {
   menuBtn.addEventListener('mouseover', () => 
   colorMenuBtn(menuBtn, 'invert(91%) sepia(21%) saturate(1678%) hue-rotate(287deg) brightness(102%) contrast(98%)'));
   menuBtn.addEventListener('mouseout', () => 
   colorMenuBtn(menuBtn, 'invert(0%) sepia(0%) saturate(7%) hue-rotate(253deg) brightness(103%) contrast(100%)'));
}

if (msgBtn) {
   msgBtn.addEventListener('mouseover', () => 
   colorMenuBtn(msgBtn, 'invert(91%) sepia(21%) saturate(1678%) hue-rotate(287deg) brightness(102%) contrast(98%)'));
   msgBtn.addEventListener('mouseout', () => 
   colorMenuBtn(msgBtn, 'invert(0%) sepia(0%) saturate(7%) hue-rotate(253deg) brightness(103%) contrast(100%)'));
}

if (bagBtn) {
   bagBtn.addEventListener('mouseover', () => 
   colorMenuBtn(bagBtn, 'invert(91%) sepia(21%) saturate(1678%) hue-rotate(287deg) brightness(102%) contrast(98%)'));
   bagBtn.addEventListener('mouseout', () => 
   colorMenuBtn(bagBtn, 'invert(0%) sepia(0%) saturate(7%) hue-rotate(253deg) brightness(103%) contrast(100%)'));
}

if (heartBtn) {
   heartBtn.addEventListener('mouseover', () => 
   colorMenuBtn(heartBtn, 'invert(91%) sepia(21%) saturate(1678%) hue-rotate(287deg) brightness(102%) contrast(98%)'));
   heartBtn.addEventListener('mouseout', () => 
   colorMenuBtn(heartBtn, 'invert(0%) sepia(0%) saturate(7%) hue-rotate(253deg) brightness(103%) contrast(100%)'));
}

if (bagBtn) {
   bagBtn.addEventListener('mouseover', () => 
   colorMenuBtn(bagBtn, 'invert(91%) sepia(21%) saturate(1678%) hue-rotate(287deg) brightness(102%) contrast(98%)'));
   bagBtn.addEventListener('mouseout', () => 
   colorMenuBtn(bagBtn, 'invert(0%) sepia(0%) saturate(7%) hue-rotate(253deg) brightness(103%) contrast(100%)'));
}

if (heartBtn) {
   heartBtn.addEventListener('mouseover', () => 
   colorMenuBtn(heartBtn, 'invert(91%) sepia(21%) saturate(1678%) hue-rotate(287deg) brightness(102%) contrast(98%)'));
   heartBtn.addEventListener('mouseout', () => 
   colorMenuBtn(heartBtn, 'invert(0%) sepia(0%) saturate(7%) hue-rotate(253deg) brightness(103%) contrast(100%)'));
}

if (menuBtn) {
   const menuActive = document.querySelector('.menu__active');
   menuBtn.addEventListener('click', function (e) {
      menuActive.classList.toggle('_active');
   });
}

if (menuBtn) {
   const menuActive = document.querySelector('.menu__active');
   menuBtn.addEventListener('click', function (e) {
      menuActive.classList.toggle('_active');
   });
}


if(menuBtn) {
   const menuActive = document.querySelector('.menu__active');
   menuBtn.addEventListener('click', function (e) {
      menuActive.classList.add('_active');
   });
}

if(topActive) {
   const menuActiveTop = document.querySelector('.menu__active-top');
   topActive.addEventListener('click', function(e) {
      menuActiveTop.classList.add('_active');
   });
}

if (closeTopAvtive) {
   const menuActiveTop = document.querySelector('.menu__active-top');
   closeTopAvtive.addEventListener('click', function(e) {
      menuActiveTop.classList.remove('_active');
   });
}


if(menuBtn) {
   const menuActive = document.querySelector('.menu__active');
   menuBtn.addEventListener('click', function (e) {
      menuActive.classList.add('_active');
   });
}

if(topActive) {
   const menuActiveTop = document.querySelector('.menu__active-top');
   topActive.addEventListener('click', function(e) {
      menuActiveTop.classList.add('_active');
   });
}

if (closeTopActive) {
   const menuActiveTop = document.querySelector('.menu__active-top');
   closeTopActive.addEventListener('click', function(e) {
      menuActiveTop.classList.remove('_active');
   });
}

if(bottomActive) {
   const menuActiveBottom = document.querySelector('.menu__active-bottom');
   bottomActive.addEventListener('click', function(e) {
      menuActiveBottom.classList.add('_active');
   });
}

if (closeBottomActive) {
   const menuActiveBottom = document.querySelector('.menu__active-bottom');
   closeBottomActive.addEventListener('click', function(e) {
      menuActiveBottom.classList.remove('_active');
   });
}

if (closeActiveMenu) {
   const menuActive = document.querySelector('.menu__active');
   closeActiveMenu.addEventListener('click', function (e) {
      menuActive.classList.remove('_active');
   });
}





