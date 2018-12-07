$('.car').animate({
  left: '-3850px'
}, 5000)
setInterval(function () {
  $('.car').css({
    left:'2000px'
  })
  $('.car').animate({
    left: '-3850px'
  }, 5000)
}, 6000)

var index=0;
setInterval(function(){
  $('.bannner').children('div').eq(index).fadeOut(1000);
    index++;
    if(index>3){
    index=0;
  }
  $('.bannner').children('div').eq(index).fadeIn(2000);
},10000)