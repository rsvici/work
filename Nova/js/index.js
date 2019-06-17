 // Pretty simple huh?
 var scene1 = document.getElementById('scene1');
 var scene2 = document.getElementById('scene2');
 var scene3 = document.getElementById('scene3');
 var scene4 = document.getElementById('scene4');
 var scene5 = document.getElementById('scene5');
 var parallax1 = new Parallax(scene1),
     parallax2 = new Parallax(scene2),
     parallax3 = new Parallax(scene3),
     parallax4 = new Parallax(scene4),
     parallax5 = new Parallax(scene5);


 //  $(".container").mouseleave(function() {
 //      parallax1.disable();
 //      parallax2.disable();
 //      parallax3.disable();
 //      parallax4.disable();
 //      parallax5.disable();
 //  });

 $("#container1").mouseenter(function () {
     parallax1.enable();
     parallax2.disable();
     parallax3.disable();
     parallax4.disable();
     parallax5.disable();
 });
 $("#container2").mouseenter(function () {
     parallax1.disable();
     parallax2.enable();
     parallax3.disable();
     parallax4.disable();
     parallax5.disable();
 });
 $("#container3").mouseenter(function () {
     parallax1.disable();
     parallax2.disable();
     parallax3.enable();
     parallax4.disable();
     parallax5.disable();
 });
 $("#container4").mouseenter(function () {
     parallax1.disable();
     parallax2.disable();
     parallax3.disable();
     parallax4.enable();
     parallax5.disable();
 });
 $("#container5").mouseenter(function () {
     parallax1.disable();
     parallax2.disable();
     parallax3.disable();
     parallax4.disable();
     parallax5.enable();
 });


 //swiper 
 var mySwiper = new Swiper('.swiper-container', {
     loop: true,
     initialSlide: 0,
     speed: 1000,
     grabCursor: true,
     // 如果需要分页器
     pagination: {
         el: '.swiper-pagination',
     },
     autoplay: true,
     on: {
         init: function () {
             swiperAnimateCache(this); //隐藏动画元素 
             swiperAnimate(this); //初始化完成开始动画
         },
         slideChangeTransitionEnd: function () {
             swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
         }
     }
 })

 //鼠标覆盖停止自动切换
 mySwiper.el.onmouseover = function () {
     mySwiper.autoplay.stop();
 }


 for (var i = 0; i < 10; i++) {
     $('.maplogostar').eq(i).css({
         'opacity': Math.random(),
         'left': Math.random() * 5 + 'vw'
     });
 }
 setInterval(function () {

     $('.maplogostar').animate({
         'opacity': Math.random(),
     }, 1000);

 }, 100)

 $('.logo1').css('display', 'none');

 // 熊行走
 var bearNum = 1;
 setInterval(function () {
     bearNum++;
     if (bearNum == 4) {
         bearNum = 1;
     }
     // console.log(bearNum);

     $('.bear').attr({
         'src': './imgs/bear_' + bearNum + '.png'
     })
 }, 300);



function newFunction() {
    setTimeout(function () {
    }, 9200);
}
//  $('.animateTitle1').animatext({
//     speed: 600,
//     effect: 'flipInY',
//     reverse: false,
//     infinite:true,
//     timeToRelaunch:6.6e3,
// });
