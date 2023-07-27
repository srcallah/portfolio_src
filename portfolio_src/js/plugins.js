
const srcPort = new Swiper('.swiper-container', {
  lazy: true,
  effect: 'fade',
  loop: 'true',
  direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
              clickable: true,
              renderFraction: function (currentClass, totalClass) {
                  return '<span class="' + currentClass + '"></span>' +
                          ' / ' +
                          '<span class="' + totalClass + '"></span>';
              },
          },
          
          on: {
  init: function () {
      const active = document.querySelector('.swiper-slide-visible');
      const static = document.querySelector('.invt, .designer-info');
      const mix = active.classList.contains('mix');
      
      if (mix == true) {
          static.classList.add('blend-mode');
      } else {
          static.classList.remove('blend-mode');
      }
          
  },
  },
      });
  
  srcPort.on('slideChange', function () {
      const active = document.querySelector('.swiper-slide-visible');
      const static = document.querySelector('.invt, .designer-info');
      const mix = active.classList.contains('mix');
  
      if (mix == true) {
          static.classList.add('blend-mode');
      } else {
          static.classList.remove('blend-mode');
      }
  });
  
      divElem = document.querySelector(".designer-info");
      elemHgt = divElem.offsetHeight;
      var divs = document.querySelectorAll('.fig-frame');
      for (var i = 0; i < divs.length; i++) {
      divs[i].style.height = 'calc(100% - ' + elemHgt + 'px)';
      }
  
  function resize() {
     divElem = document.querySelector(".designer-info");
     elemHgt = divElem.offsetHeight;
      var divs = document.querySelectorAll('.fig-frame');
      for (var i = 0; i < divs.length; i++) {
      divs[i].style.height = 'calc(100% - ' + elemHgt + 'px)';
      }
  }
  window.onresize = resize;
  
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  srcPort.on('click',function(swiper,event){ swiper.slideNext(); }); 