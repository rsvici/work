$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});


});
	
function login(){

	$('#myModal').modal('hide');
}

function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('注册');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function loginAjax(){
    /*   Remove this comments when moving to server
    $.post( "/login", function( data ) {
            if(data == 1){
                window.location.replace("/home");            
            } else {
                 shakeModal(); 
            }
        });
    */

/*   Simulate error message from the server   */
     shakeModal();
}

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}


/**
 * @desc 获取url参数
 * @param {String} paramName  想要获取的参数名字
 * @param {String} url   访问地址，可以为空：为空时默认为当前url
 */
function getParameter(paramName, url) {
	var seachUrl = window.location.search.replace("?", "");
	if (url != null) {
			var index = url.indexOf('?');
			url = url.substr(index + 1);
			seachUrl = url;
	}
	var ss = seachUrl.split("&");
	var paramNameStr = "";
	var paramNameIndex = -1;
	for (var i = 0; i < ss.length; i++) {
			paramNameIndex = ss[i].indexOf("=");
			paramNameStr = ss[i].substring(0, paramNameIndex);
			if (paramNameStr == paramName) {
					var returnValue = ss[i].substring(paramNameIndex + 1, ss[i].length);
					if (typeof(returnValue) == "undefined") {
							returnValue = "";
					}
					return returnValue;
			}
	}
	return "";
}

var objectId = getParameter("form-username") 
if(objectId){
	$('.noursrname').hide();
	$('.ursrname').show();
	$(".ursrname11 a").html(objectId);
	localStorage.setItem("name", objectId);
}else if(localStorage.getItem('name')){
	$(".ursrname11 a").html(localStorage.getItem('name'));
	$('.noursrname').hide();
	$('.ursrname').show();
}else{
	$('.noursrname').show();
	$('.ursrname').hide();
}

function loginout(){
	localStorage.setItem("name", '');
	window.location.href='index.html'
}