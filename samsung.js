let currentSlide = 0;
const slides = document.getElementsByClassName("slide");
const slideCount = slides.length;

function showSlide() {
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlide].style.display = "block";
  
  const currentVideo = slides[currentSlide].querySelector("video");
  if (currentVideo) {
    if (currentVideo.currentTime === currentVideo.duration) {
      currentVideo.currentTime = 0;
    }
    currentVideo.play();
  }
  
  currentSlide = (currentSlide + 1) % slideCount;
}

setInterval(showSlide, 4500);