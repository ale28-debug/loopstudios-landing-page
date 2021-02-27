/******************
PROBLEM SOLVING
*****************/

// Di default, il mobile-menu nero è nascosto




var hamburger = document.getElementsByClassName('hamburger-menu')[0],
    mobileMenu = document.getElementsByClassName('mobile-menu')[0],
    box = document.getElementsByClassName('box')[0],
    creations = document.getElementById('creations'),
    html = document.getElementsByTagName('html')[0];


// 1° problema: Il mobile-menu dev'essere mostrato al click dell'hamburger-button
hamburger.addEventListener('click', function () {
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    }
    else {
        mobileMenu.style.display = 'block';
    }


    // 2° problema: Si devono nascondere tutte le sezioni
    box.classList.toggle('hide');
    creations.classList.toggle('hide');
    html.classList.toggle('html-overflow');
});