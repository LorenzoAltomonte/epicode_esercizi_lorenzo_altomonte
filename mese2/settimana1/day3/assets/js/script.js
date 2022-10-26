// hover avanti e mouseout
document.getElementById('avanti').addEventListener('mouseover', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi -= 25}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi -= 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi -= 0}deg)`;
});

document.getElementById('avanti').addEventListener('mouseout', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi += 25}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi += 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi += 0}deg)`;
})
// hover indietro e mouseout
document.getElementById('indietro').addEventListener('mouseover', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi += 25}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi += 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi += 0}deg)`;
});
document.getElementById('indietro').addEventListener('mouseout', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi -= 25}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi -= 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi -= 0}deg)`;
})
// click avanti
document.getElementById('avanti').addEventListener('click', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi -= 90}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi -= 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi -= 0}deg)`;
})
// click indietro
document.getElementById('indietro').addEventListener('click', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi += 90}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi += 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi += 0}deg)`;
})

var slideIndex = 0;
var playing = true;
var playButton = document.getElementById('play');

showSlides();

function showSlides() {
  if(playing) {
    var i;
    var slides = document.getElementsByClassName("cube");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.transform = "rotateY(90deg)" ;
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.transform = "rotateY(0deg)" ;
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
}

function toggleSlideshow() {
  if(playing) {
    playButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = false;
  } else {
    playButton.innerHTML = '&#9658;'; // play character
    playing = true;
    showSlides();
  }
}

playButton.addEventListener('click', toggleSlideshow);