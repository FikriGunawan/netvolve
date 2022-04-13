$(document).ready(function() {
  AOS.init({
    duration: 1200
   });
  $('.menu-icon').click(function() {
    $('.side-menu').addClass("active");
  })
  $('.close-menu-icon').click(function() {
    $('.side-menu').removeClass("active");
  })
});
  //  Favor
$('.home-isp').addClass('owl-carousel owl-theme').owlCarousel({
  loop: false,
  navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
  responsive:{
   0: {
     items: 1,
     dots: true,
     nav: false,
     autoHeight: true,
     stagePadding: 50,
     loop: true,
     margin: 20
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
     stagePadding: 250,
     margin: 30,
     items: 1,
     dots: true,
     loop: true,
     nav: true
   }
 }
})
$('.car-testi').addClass('owl-carousel owl-theme').owlCarousel({
  loop: false,
  navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
  responsive:{
   0: {
     items: 1,
     dots: true,
     nav: true,
     autoHeight: true,
     stagePadding: 50,
     margin: 20
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
    left: -200,
     stagePadding: 200,
     margin: 25,
     items: 2,
     dots: false,
     loop: false,
     nav: true
   }
 }
})
$('.car-promotion').addClass('owl-carousel owl-theme').owlCarousel({
  animateOut: 'fadeOut',
  navText: ["<i class='text-white far fa-chevron-left'></i>","<i class='text-white far fa-chevron-right'></i>"],
  autoplay:false,
  autoplayTimeout: 5000,
  loop: true,
  responsive:{
   0: {
     items: 1,
     dots: true,
     nav: false,
     autoplay:true,
     autoplayTimeout:5000,
     mouseDrag: true,
    touchDrag: true
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
     items: 1,
     dots: true,
     nav: true,
     mouseDrag: true,
     touchDrag: true
   }
 }
})
$('.car-magazine').addClass('owl-carousel owl-theme').owlCarousel({
  loop: false,
  navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
  responsive:{
   0: {
     items: 1,
     dots: false,
     nav: true,
     autoHeight: true,
     stagePadding: 30,
     margin: 10
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
     stagePadding: 200,
     margin: 25,
     items: 3,
     dots: false,
     loop: false,
     nav: true,
    left: -200
   }
 }
})
$('.carousel-mobile-visi').addClass('owl-carousel owl-theme').owlCarousel({
  navText: ["<img src='images/chevron-left-square-orange-04.png'>","<img src='images/chevron-right-square-orange-04.png'>"],
  responsive:{
   0: {
     items: 1,
     dots: false,
     nav: true,
     mouseDrag: false,
     touchDrag: false,
     loop: true,
     margin: 20
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
     items: 1,
     dots: false
   }
 }
})
$('.carousel-mobile-stagepadding').addClass('owl-carousel owl-theme').owlCarousel({
  responsive:{
   0: {
    items: 1,
    stagePadding: 20,
    margin: 10,
    dots: false,
    nav: false
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
     items: 1,
     dots: false
   }
 }
})
 /*Animation: Moving Ornament on Scroll*/

  $(window).scroll(function(){
    windowTop = $(window).scrollTop();

    $('.move-right').css({
      'transform':'translateX('+(windowTop) * 0.1  +'px)'
    });

    $('.move-left').css({
      'transform':'translateX('+(windowTop) * -0.1 +'px)'
    });

    $('.move-top').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
    $('.move-topcontact').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
  });
 // 
 var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter-wrapper').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.number-counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

jQuery(document).ready(function($){
	//open interest point description
	$(".popup_btn").hover(function () {
		var selectedPoint = $(this);
		if(selectedPoint.hasClass('open') ) {
			selectedPoint.removeClass('open');
		} else {
			selectedPoint.addClass('open').siblings('.popup_btn.open').removeClass('open');
		}
	});  
});
  
let mainNavLinks = document.querySelectorAll(".nav .wrap-position a");
let mainSections = document.querySelectorAll(".wrap-about-content .container-fluid");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".wrap-positoin", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $(".wrap-position a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

$(function(){
  $('#psm, #esp').modal({
      show: false
  }).on('hidden.bs.modal', function(){
      $(this).find('video')[0].pause();
  });
});

    /**
 * jquery.dlmenu.js v1.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * https://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;
(function($, window, undefined) {

  'use strict';

  // global
  var Modernizr = window.Modernizr,
    $body = $('body');

  $.DLMenu = function(options, element) {
    this.$el = $(element);
    this._init(options);
  };

  // the options
  $.DLMenu.defaults = {
    // classes for the animation effects
    animationClasses: {
      classin: 'dl-animate-in-1',
      classout: 'dl-animate-out-1'
    },
    // callback: click a link that has a sub menu
    // el is the link element (li); name is the level name
    onLevelClick: function(el, name) {
      return false;
    },
    // callback: click a link that does not have a sub menu
    // el is the link element (li); ev is the event obj
    onLinkClick: function(el, ev) {
      return false;
    }
  };

  $.DLMenu.prototype = {
    _init: function(options) {

      // options
      this.options = $.extend(true, {}, $.DLMenu.defaults, options);
      // cache some elements and initialize some variables
      this._config();

      var animEndEventNames = {
          'WebkitAnimation': 'webkitAnimationEnd',
          'OAnimation': 'oAnimationEnd',
          'msAnimation': 'MSAnimationEnd',
          'animation': 'animationend'
        },
        transEndEventNames = {
          'WebkitTransition': 'webkitTransitionEnd',
          'MozTransition': 'transitionend',
          'OTransition': 'oTransitionEnd',
          'msTransition': 'MSTransitionEnd',
          'transition': 'transitionend'
        };
      // animation end event name
      this.animEndEventName = animEndEventNames[Modernizr.prefixed('animation')] + '.dlmenu';
      // transition end event name
      this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.dlmenu',
        // support for css animations and css transitions
        this.supportAnimations = Modernizr.cssanimations,
        this.supportTransitions = Modernizr.csstransitions;

      this._initEvents();

    },
    _config: function() {
      this.open = false;
      this.$trigger = this.$el.children('.dl-trigger');
      this.$menu = this.$el.children('ul.dl-menu');
      this.$menuitems = this.$menu.find('li:not(.dl-back)');
      this.$el.find('ul.dl-submenu').prepend('<li class="dl-back"><a href="#">back</a></li>');
      this.$back = this.$menu.find('li.dl-back');
      
      this.$el.find('ul.dl-submenu ul.dl-submenu').prepend('<li class="dl-back-top"><a href="#">back to Main</a></li>');
      this.$backTop = this.$menu.find('li.dl-back-top');
    },
    _initEvents: function() {

      var self = this;

      this.$trigger.on('click.dlmenu', function() {

        if (self.open) {
          self._closeMenu();
        } else {
          self._openMenu();
        }
        return false;

      });

      this.$menuitems.on('click.dlmenu', function(event) {

        event.stopPropagation();

        var $item = $(this),
          $submenu = $item.children('ul.dl-submenu');

        if ($submenu.length > 0) {

          var $flyin = $submenu.clone().css('opacity', 0).insertAfter(self.$menu),
            onAnimationEndFn = function() {
              self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('dl-subview');
              $item.addClass('dl-subviewopen').parents('.dl-subviewopen:first').removeClass('dl-subviewopen').addClass('dl-subview');
              $flyin.remove();
            };

          setTimeout(function() {
            $flyin.addClass(self.options.animationClasses.classin);
            self.$menu.addClass(self.options.animationClasses.classout);
            if (self.supportAnimations) {
              self.$menu.on(self.animEndEventName, onAnimationEndFn);
            } else {
              onAnimationEndFn.call();
            }

            self.options.onLevelClick($item, $item.children('a:first').text());
          });

          return false;

        } else {
          self.options.onLinkClick($item, event);
        }

      });

      this.$back.on('click.dlmenu', function(event) {

        var $this = $(this),
          $submenu = $this.parents('ul.dl-submenu:first'),
          $item = $submenu.parent(),

          $flyin = $submenu.clone().insertAfter(self.$menu);

        var onAnimationEndFn = function() {
          self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classin);
          $flyin.remove();
        };

        setTimeout(function() {
          $flyin.addClass(self.options.animationClasses.classout);
          self.$menu.addClass(self.options.animationClasses.classin);
          if (self.supportAnimations) {
            self.$menu.on(self.animEndEventName, onAnimationEndFn);
          } else {
            onAnimationEndFn.call();
          }

          $item.removeClass('dl-subviewopen');

          var $subview = $this.parents('.dl-subview:first');
          if ($subview.is('li')) {
            $subview.addClass('dl-subviewopen');
          }
          $subview.removeClass('dl-subview');
        });

        return false;

      });
      
      this.$backTop.on('click.dlmenu', function(event) {
				
			  var $this = $( this ),
					$submenu = $this.parents( 'ul.dl-submenu:first' ),
					$item = $submenu.parent(),

					$flyin = $submenu.clone().insertAfter( self.$menu );
				self._resetMenu();
				var onAnimationEndFn = function() {

					self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classin );
					$flyin.remove();
					
				};

				setTimeout( function() {
					$flyin.addClass( self.options.animationClasses.classout );
					self.$menu.addClass( self.options.animationClasses.classin );
					if( self.supportAnimations ) {
						self.$menu.on( self.animEndEventName, onAnimationEndFn );
					}
					else {
						onAnimationEndFn.call();
					}

					$item.removeClass( 'dl-subviewopen' );
					
					var $subview = $this.parents( '.dl-subview:first' );
					if( $subview.is( 'li' ) ) {
						$subview.addClass( 'dl-subviewopen' );
					}
					$subview.removeClass( 'dl-subview' );
				} );

				return false;

			});

    },
    closeMenu: function() {
      if (this.open) {
        this._closeMenu();
      }
    },
    _closeMenu: function() {
      var self = this,
        onTransitionEndFn = function() {
          self.$menu.off(self.transEndEventName);
          self._resetMenu();
        };

      this.$menu.removeClass('dl-menuopen');
      this.$menu.addClass('dl-menu-toggle');
      this.$trigger.removeClass('dl-active');

      if (this.supportTransitions) {
        this.$menu.on(this.transEndEventName, onTransitionEndFn);
      } else {
        onTransitionEndFn.call();
      }

      this.open = false;
    },
    openMenu: function() {
      if (!this.open) {
        this._openMenu();
      }
    },
    _openMenu: function() {
      var self = this;
      // clicking somewhere else makes the menu close
      $body.off('click').on('click.dlmenu', function() {
        self._closeMenu();
      });
      this.$menu.addClass('dl-menuopen dl-menu-toggle').on(this.transEndEventName, function() {
        $(this).removeClass('dl-menu-toggle');
      });
      this.$trigger.addClass('dl-active');
      this.open = true;
    },
    // resets the menu to its original state (first level of options)
    _resetMenu: function() {
      this.$menu.removeClass('dl-subview');
      this.$menuitems.removeClass('dl-subview dl-subviewopen');
    }
  };

  var logError = function(message) {
    if (window.console) {
      window.console.error(message);
    }
  };

  $.fn.dlmenu = function(options) {
    if (typeof options === 'string') {
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function() {
        var instance = $.data(this, 'dlmenu');
        if (!instance) {
          logError("cannot call methods on dlmenu prior to initialization; " +
            "attempted to call method '" + options + "'");
          return;
        }
        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
          logError("no such method '" + options + "' for dlmenu instance");
          return;
        }
        instance[options].apply(instance, args);
      });
    } else {
      this.each(function() {
        var instance = $.data(this, 'dlmenu');
        if (instance) {
          instance._init();
        } else {
          instance = $.data(this, 'dlmenu', new $.DLMenu(options, this));
        }
      });
    }
    return this;
  };

})(jQuery, window);


			$(function() {
				$( '#dl-menu' ).dlmenu({
					animationClasses : { classin : 'dl-animate-in-4', classout : 'dl-animate-out-4' }
				});
			});