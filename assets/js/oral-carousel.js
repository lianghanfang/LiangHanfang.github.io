document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.oral-carousel-track');
  if (!track) return;
  const images = Array.from(track.children);
  const prevBtn = document.querySelector('.oral-carousel-btn.prev');
  const nextBtn = document.querySelector('.oral-carousel-btn.next');
  let current = 0;
  const show = 1; // 每次显示一张

  function updateCarousel() {
    const width = images[0].clientWidth + 8; // 8px margin-right
    track.style.transform = `translateX(-${current * width}px)`;
  }

  prevBtn.onclick = function() {
    current = (current - 1 + images.length) % images.length;
    updateCarousel();
  };
  nextBtn.onclick = function() {
    current = (current + 1) % images.length;
    updateCarousel();
  };

  // 触摸滑动支持
  let startX = 0;
  let isDown = false;
  track.addEventListener('touchstart', e => {
    isDown = true;
    startX = e.touches[0].clientX;
  });
  track.addEventListener('touchend', e => {
    isDown = false;
  });
  track.addEventListener('touchmove', e => {
    if (!isDown) return;
    let moveX = e.touches[0].clientX - startX;
    if (Math.abs(moveX) > 50) {
      if (moveX > 0) prevBtn.click();
      else nextBtn.click();
      isDown = false;
    }
  });

  // 自适应窗口resize
  window.addEventListener('resize', updateCarousel);
  updateCarousel();
}); 