let currentIndex = 0; //Para controlar o slide atual
const slides = document.querySelector('.slides') //Seleciona a classe slides. o container dos slide

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3; //Alterna entre os 3 slides
    slides.style.transform =  `translateX(-${currentIndex * 33.32}%)`; //Move o container
}
    setInterval(nextSlide, 3000); //Chama a função nextSlide a cada 3 segundos