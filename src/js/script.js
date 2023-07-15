/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    /*========== sticky navbar ==========*/


    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/

};


/*========== swiper ==========*/


/*========== dark light mode ==========*/
 let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}; 

/* let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  console.log('Кнопка нажата!');
  page.classList.remove('bx-sun');
  page.classList.add('dark-mode');
};
 */

/*========== scroll reveal ==========*/
