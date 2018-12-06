(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        // .layout-changer
        $(".boxed-layout").on("click", function(){
            $("body").addClass("boxed-layout").removeClass("wide-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
        });
        $(".wide-layout").on("click", function(){
            $("body").addClass("wide-layout").removeClass("boxed-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
        });

        // Slicknav responsive menu
        $("#nav").slicknav();

        // wow.js
        new WOW().init();

        //jQuery for sticky header
        $(".header-area").sticky({ topSpacing: 0 });


        //jQuery smooth scroll
        $( 'li.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '78';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            
            event.preventDefault();
        });

        $('body').scrollspy({
            target : '.mainmenu',
            offset : 95
        });
        /* End jQuery Easing Menu */

        //jQuery for mailchimp-form
        $(".mailchimp-form").ajaxChimp({
            url: 'http://rrfoundation.us13.list-manage.com/subscribe/post?u=2c0d96fafcbda7d270e484096&amp;id=914722ad7b'
        });

        //jQuery for magnificPopup
        $(".hover-icons").magnificPopup({
            type:'image',
        });

        //jQuery for portfolio section
        $("ul.portfolio-menu li").on('click', function(){

            $("ul.portfolio-menu li").removeClass("active");
            $(this).addClass("active");


            var selector =  $(this).attr("data-filter");

            $(".project-list").isotope({
                filter: selector,
            });

        });

        //jQuery for isotope
        $(".project-list").isotope({
            type: 'image'
        });



		//owlCarousel for homepage slide
        if ($.fn.owlCarousel) {
            $(".team-carousel").owlCarousel({
                items: 4,
                autoplay: false,
                loop: true,
                margin: 20,
                mouseDrag: true,
                dots: false,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            });
        }

        //owlCarousel for review item
        if ($.fn.owlCarousel) {
            $(".customer-review-carousel").owlCarousel({
                items: 1,
                autoplay: false,
                loop: true,
                dots: true,
                nav: false
            });
        }

        //jQuery for Progressbar
        $(document).ready(function(){
            $('#bar1').barfiller({
                barColor: '#ffffff'
            });
        });
        $(document).ready(function(){
            $('#bar2').barfiller({
                barColor: '#ffffff'
            });
        });
        $(document).ready(function(){
            $('#bar3').barfiller({
                barColor: '#ffffff'
            });
        });
		
		// JS for scroll to top btn
		$('.scroll-top-btn').click(function(event){
		var target = $('html');
		event.preventDefault();
			$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
		});
        $(window).on("scroll", function(){
            if($(this).scrollTop() > 300) {
                $(".scroll-top-btn").addClass("fadein");
            } else{
                $(".scroll-top-btn").removeClass("fadein");
            }
        });



        // Styles Switcher
        $('.open-switcher').click(function () {
            
            if($(this).hasClass('show-switcher')) {
                $('.switcher-box').css({'right':0});
                $('.open-switcher').removeClass('show-switcher');
                $('.open-switcher').addClass('hide-switcher');
            } else if ($(this).hasClass('hide-switcher')) {
                $('.switcher-box').css({'right':'-212px'});
                $('.open-switcher').removeClass('hide-switcher');
                $('.open-switcher').addClass('show-switcher');
            };
            
        });
        



    });


    jQuery(window).load(function(){

        // JS for preloader
        jQuery(".site-preloader").fadeOut(500);

        
    });


}(jQuery));	



// Styles Switcher JS
function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
    