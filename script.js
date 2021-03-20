//declare variable for icon and  menu list
const burgerMenuList = document.querySelector('nav.burgerMenu ul');
const burgerIcon = document.querySelector('nav.burgerMenu i')

burgerIcon.addEventListener('click', function() {
    burgerMenuList.classList.toggle('addHeight');
});
