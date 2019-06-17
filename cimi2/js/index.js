var swiper1 = new Swiper('.productList1 .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.productList1 .swiper-button-next',
    prevEl: '.productList1 .swiper-button-prev',
  },
});
var swiper2 = new Swiper('.productList2 .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.productList2 .swiper-button-next',
    prevEl: '.productList2 .swiper-button-prev',
  },
});


var certifySwiper = new Swiper('#certify .swiper-container', {
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  loopedSlides: 5,
  speed:1000,
  autoplay: {
    delay:5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    //clickable :true,
  },
  on: {
    progress: function (progress) {
      for (i = 0; i < this.slides.length; i++) {
        var slide = this.slides.eq(i);
        var slideProgress = this.slides[i].progress;
        modify = 1;
        if (Math.abs(slideProgress) > 1) {
          modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
        }
        translate = slideProgress * modify * 260 + 'px';
        scale = 1 - Math.abs(slideProgress) / 5;
        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
        slide.css('zIndex', zIndex);
        slide.css('opacity', 1);
        if (Math.abs(slideProgress) > 3) {
          slide.css('opacity', 0);
        }
      }
    },
    setTransition: function (transition) {
      for (var i = 0; i < this.slides.length; i++) {
        var slide = this.slides.eq(i)
        slide.transition(transition);
      }

    }
  }

})


$(document).scroll(function() {
  var scroH = $(document).scrollTop();
  console.log(scroH);
  if(scroH>300 && scroH<1000){
    $('.news').addClass('animated  zoomIn');
    $('.news .enTitle').addClass('animated  zoomIn delay-0_5s');
    $('.news .newsList').addClass('animated  zoomIn delay-0_5s');
  }else if(scroH>1000 && scroH<1800){
    $('.aboutusBg').addClass('animated  zoomIn');
    $('.aboutusBg .enTitle').addClass('animated  zoomIn delay-0_5s');
    $('.aboutusBg .aboutus_left p').eq(0).addClass('animated  zoomIn delay-0_5s');
    $('.aboutusBg .aboutus_left p').eq(1).addClass('animated  zoomIn delay-1s');
    $('.aboutusBg .aboutus_left p').eq(2).addClass('animated  zoomIn delay-1s');
    $('.aboutusBg .aboutus_left p').eq(3).addClass('animated  zoomIn delay-1_5s');
    $('.aboutusBg .aboutus_right').addClass('animated  zoomIn delay-1_5s');
    $('.aboutusBg .aboutus_right p').addClass('animated  zoomIn delay-1_5s');
    
  }else if(scroH>1800){
    $('.case').addClass('animated  zoomIn');
    $('.case .enTitle').addClass('animated  zoomIn delay-0_5s');
    $('.case .caseList').addClass('animated  zoomIn delay-1s');
  }


});