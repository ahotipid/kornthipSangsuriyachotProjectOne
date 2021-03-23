// ///////////////burger menu function/////////////////
//declare variable for icon and  menu list
const burgerMenuList = document.querySelector('nav.burgerMenu ul');
const burgerIcon = document.querySelector('nav.burgerMenu .burgerIcon')

//menu appear on click, icon change to x and will go back and forth on click
burgerIcon.addEventListener('click', function() {
    //make menu list height appear
    burgerMenuList.classList.toggle('addHeight');

    //make burgerIcon become x
    burgerIcon.classList.toggle('animateBurgerIcon');
});



// ////////////////carousel function/////////////////////
//declare variable
const carouselSlide = document.querySelector('ul.carouselList');
const carouselImages = document.querySelectorAll('li.carouselImage');
const previousButton = document.querySelector('i.previous');
const nextButton = document.querySelector('i.next');
//counter to use with width of image, this will control how far to slide depend of order of images
let counter = 1;
//width of image to control how far each image will slide
const size = carouselImages[0].clientWidth;
//get the ul.carouselList to translate on x-axis so it shows first image (which is the second on the list in html)
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

//listen to button when click and slide the carousel
//next button
nextButton.addEventListener('click', function() {
    //prevent user to fast click and make counter error
    if (counter >= carouselImages.length - 1) {
        return; //function will not run
    }
    //give smooth slide
    carouselSlide.style.transition = `transform 2s ease-in-out`;
    counter++
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});
//previous button
previousButton.addEventListener('click', function() {
    //prevent user to fast click and make counter error
    if (counter <= 0) {
        return; //function will not run
    }
    //give smooth slide
    carouselSlide.style.transition = `transform 2s ease-in-out`;
    counter--
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

//make the carousel looping by listen to transitionend

carouselSlide.addEventListener('transitionend', function() {
    //at last image (firstClone), jump back to actual first image without seeing transition (both are same picture)
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        //set counter back to first image (which is 1) 
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    //at fist image (lastClone), jump back to actual last image without seeing transition (both are same picture)
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        //set counter back to last image (which is 3) 
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});






