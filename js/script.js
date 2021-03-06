// Javascript del menu 

addEventListener('DOMContentLoaded', () => {
  const navbar__btn = document.querySelector('.navbar__btn')
  if (navbar__btn) {
    navbar__btn.addEventListener('click', () => {
      const navbar__services = document.querySelector('.navbar__services')
      navbar__services.classList.toggle('show')
    })
  }
})

// jquery fot toogle dropdown menus 
$(document).ready(function(){
  //toggle sub.menus
  $(".sub-btn").click(function(){
    $(this).next(".sub-menu").slideToggle();
  });   
});



var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.nav-btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

 // Javascript for image slider autoplay navigation
 var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 7000);
  }
  repeater();
}
repeat();

