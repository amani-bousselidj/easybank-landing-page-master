var navIcon = document.getElementById('navIcon');
var navItems = document.getElementById('navItems');
var navList = document.getElementById('navList');
navIcon.addEventListener('click', function() {
    if (navIcon.firstElementChild.getAttribute("src") == "images/icon-hamburger.svg") {
        navIcon.firstElementChild.setAttribute('src', "images/icon-close.svg");
        navItems.classList.toggle('nav-items-mobile');
        navList.style.gap = '1rem';
        navList.style.flexDirection = "column";
        navList.style.color = 'black'
    } else {
        navIcon.firstElementChild.setAttribute('src', "images/icon-hamburger.svg");
        navItems.classList.toggle('nav-items-mobile');

        navList.style.gap = '0rem';
        navList.style.flexDirection = "row";
    }
});