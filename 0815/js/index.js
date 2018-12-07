for (var i = 0; i < 10; i++) {
    $('.maplogostar').eq(i).css({
        'opacity': Math.random(),
        'left': Math.random() * 5 + 'vw'
    });
}
setInterval(function() {

    $('.maplogostar').animate({
        'opacity': Math.random(),
    }, 1000);

}, 100)


// logo消失
setTimeout(function() {
    $('.logo').css('display', 'none');
}, 9200)

// 熊行走
var bearNum = 1;
setInterval(function() {
    bearNum++;
    if (bearNum == 4) {
        bearNum = 1;
    }
    // console.log(bearNum);

    $('.bear').attr({
        'src': './imgs/bear_' + bearNum + '.png'
    })
}, 300);