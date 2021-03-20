//declare variable for icon and  menu list
const burgerMenuList = document.querySelector('nav.burgerMenu ul');
const burgerIcon = document.querySelector('nav.burgerMenu .burgerIcon')

burgerIcon.addEventListener('click', function() {
    //make menu list height appear
    burgerMenuList.classList.toggle('addHeight');

    //make burgerIcon become x
    burgerIcon.classList.toggle('animateBurgerIcon');
});
