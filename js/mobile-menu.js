/******************
PROBLEM SOLVING
*****************/

// Di default, il mobile-menu nero è nascosto

// 1° problema: Il mobile-menu dev'essere mostrato al click dell'hamburger-button
// 2° problema: Si devono nascondere tutte le sezioni

var hamburger = document.getElementsByClassName('hamburger-menu')[0],
    mobileMenu = document.getElementsByClassName('mobile-menu')[0],
    box = document.getElementsByClassName('box')[0],
    creations = document.getElementById('creations'),
    html = document.getElementsByTagName('html')[0];


hamburger.addEventListener('click', function () {
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    }
    else {
        mobileMenu.style.display = 'block';
    }

    box.classList.toggle('hide');
    creations.classList.toggle('hide');
    html.classList.toggle('html-overflow');
});