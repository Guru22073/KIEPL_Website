document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
    let autoPlayInterval;
    let isVideoPlaying = false;
  
    slides.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('carousel-indicator');
      indicator.addEventListener('click', () => goToSlide(index, true));
      indicatorsContainer.appendChild(indicator);
    });
  
    function updateIndicators() {
      document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }
  
    function goToSlide(index, force = false) {
      const currentVideo = slides[currentIndex].querySelector('video');
      
      if (currentVideo && !currentVideo.paused) {
        currentVideo.pause();
        isVideoPlaying = false;
      }
      
      slides[currentIndex].classList.remove('active');
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add('active');
      updateIndicators();
  
      const video = slides[currentIndex].querySelector('video');
      if (video) {
        clearInterval(autoPlayInterval);
        isVideoPlaying = true;
        video.currentTime = 0;
        video.play()
          .then(() => {
            video.onended = () => {
              isVideoPlaying = false;
              startAutoPlay();
            };
          })
          .catch(() => {
            isVideoPlaying = false;
            startAutoPlay();
          });
      } else {
        isVideoPlaying = false;
        startAutoPlay();
      }
    }
  
    function startAutoPlay() {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(() => {
        if (!isVideoPlaying) goToSlide(currentIndex + 1);
      }, 5000);
    }
  
    prevButton.addEventListener('click', () => {
      goToSlide(currentIndex - 1, true);
    });
  
    nextButton.addEventListener('click', () => {
      goToSlide(currentIndex + 1, true);
    });
  
    updateIndicators();
    startAutoPlay();
    const initialVideo = slides[0].querySelector('video');
    if (initialVideo) {
      isVideoPlaying = true;
      initialVideo.play().finally(() => {
        if (initialVideo.ended) {
          isVideoPlaying = false;
          startAutoPlay();
        }
      });
    }
  });