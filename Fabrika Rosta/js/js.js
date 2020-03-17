$(window).on('load', function() {
  $('.wrapper-preloader').fadeOut().end().delay(400).fadeOut('slow');
});

$(document).ready(function(){
	// Плавный скролл к 1 section 
	$('#scroll-arrow-down').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.section_1').offset().top }, 1000);
		e.preventDefault();
	});

	$('#scroll-arrow-up').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.section_5').offset().top }, 1000);
		e.preventDefault();
	});

	// начать

	$('#start').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.section_5').offset().top }, 1000);
		e.preventDefault();
	});

	var rellax = new Rellax('.rellax');

		var timeout = 1,
	    counters = $('.counter');
	counters.each(function(){
	  var that = $(this),
	      num = that.html();
	  that.html(0);
	  that.attr('data-num',num);
	});
	$(window).on('scroll', function(){
	  var scrolltop = $(this).scrollTop(),
	      wh = $(this).height();
	  counters.each(function(){
	    var that = $(this);
	    if (!that.data('start') && scrolltop >= that.offset().top - wh) {
	      that.attr('data-start', true);
	      var i = 1,
	        num = that.data('num'),
	        step = Math.round(1000 * timeout / num),
	        int = setInterval(function(){
	          if (i <= num) {
	            that.html(i);
	          }
	          else {
	            clearInterval(int);
	          }
	          i++;
	      },step);
	    }
	  });
	});
/*-----------------------------------------------*/
	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene);
	parallaxInstance.friction(0.2, 0.2);
/*----------------------------------------------*/
	var burger = $("#block-menu");
	burger.css("display", "none");

	$("#menu-open").click(function(){
		var burger = $("#block-menu");
		burger.addClass('active-animate');
		burger.fadeIn();
		var menuOpen = $('#menu-open');
		menuOpen.removeClass('animated fadeInRight');
		menuOpen.addClass('animated fadeOutRight');
		var menuClose = $('#menu-close');
		menuClose.removeClass('animated fadeOutUp');
		menuClose.addClass('animated fadeInDown');
	});

	$("#menu-close").click(function(){
		var burger = $("#block-menu");
		// burger.removeClass('');
		// burger.addClass('');
		burger.fadeOut();
		var menuClose = $('#menu-close');
		menuClose.removeClass('animated fadeInDown');
		menuClose.addClass('animated fadeOutUp');
		var menuOpen = $('#menu-open');
		menuOpen.removeClass('animated fadeOutRight');
		menuOpen.addClass('animated fadeInRight');
	});

	/*SCROL MENU #$136sc5295$#*/

	$('#home').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.header').offset().top }, 1000);
		e.preventDefault();
		$("#block-menu").fadeOut();
	});

	$('#about-project').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.section_1').offset().top }, 1000);
		e.preventDefault();
		$("#block-menu").fadeOut();
	});

	$('#opportunities').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.section_2').offset().top }, 1000);
		e.preventDefault();
		$("#block-menu").fadeOut();
	});

	$('#whom-we-waiting').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.section_3').offset().top }, 1000);
		e.preventDefault();
		$("#block-menu").fadeOut();
	});

	$('#questions').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.section_4').offset().top }, 1000);
		e.preventDefault();
		$("#block-menu").fadeOut();
	});

	$('#go').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.section_5').offset().top }, 1000);
		e.preventDefault();
		$("#block-menu").fadeOut();
	});

});
