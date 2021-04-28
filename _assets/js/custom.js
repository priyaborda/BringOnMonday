$(document).ready(function(){
  // slider with filter
  $('ul.academyTabs li a').on('click' , function(){
    var tabActiveFilter = $(this).parent('li').data('id');
    console.log(tabActiveFilter);
    var thisParent = $(this).parent('li');
    if(thisParent.hasClass('is-active')){
      thisParent.removeClass('is-active');
    }else{
      $('ul.academyTabs li').removeClass('is-active');
      thisParent.addClass('is-active');
    }
    var key = "."+ tabActiveFilter;
    $('.academySlider').slick('slickUnfilter');
    $('.academySlider').slick('slickFilter',key).slick('refresh');
    $('.academySlider').slick('slickGoTo', 0);
    var activeSlider = $('.academySlider li.academyMainBlock').length;
    if( activeSlider <= 3 ){$('.slick-dots,.scrollMore').hide();
    }else{$('.slick-dots,.scrollMore').show();}
    var windowWidth = $(window).width();
    if(windowWidth <= 576){
      if( activeSlider <= 2 ){$('.academySlider .slick-dots,.scrollMore').hide();
      }else{$('.academySlider .slick-dots,.scrollMore').show();}
    } 
    if(windowWidth <= 320){
      if( activeSlider <= 1 ){$('.slick-dots,.scrollMore').hide();
      }else{$('.slick-dots,.scrollMore').show();}
    }
  });
  // slider
  $('.academySlider').slick({
    infinite: false,
    dots:true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
  $('.kindWordQuoteSlider').slick({
    infinite: false,
    dots:true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.kindWordsfor').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    for: 'li',
    asNavFor: '.kindWordsnav'
  });
  $('.kindWordsnav').slick({
    slidesToShow:5,
    slidesToScroll: 1,
    asNavFor: '.kindWordsfor',
    dots: false,
    arrows: false,
    for: 'li',
    centerMode: false,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          centerPadding: '40px',
          slidesToShow:4
        }
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  $('.logoSlider ul').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    for:'li',
    arrows:false,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow:6
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow:4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow:2
        }
      }
    ]
  });
  $('.ourCertificateSlider').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    for:'li',
    arrows:false,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow:6
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow:4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow:2
        }
      }
    ]
  });
  $('.peopleSlider').slick({
    infinite: false,
    dots:true,
    arrows: false,
    for:'li',
    slidesToShow:4,
    slidesToScroll: 1,
    speed: 600,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow:3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
  // on mouse wheel change slider
  // $('.academySlider,.kindWordQuoteSlider,.peopleSlider,.logoSlider ul,.ourCertificateSlider').on('wheel', (function(e) {
  //   e.preventDefault();
  //   if (e.originalEvent.deltaY < 0) {
  //     $(this).slick('slickPrev');
  //   } else {
  //     $(this).slick('slickNext');
  //   }
  // }));
  // on click attach video
  $('.video_stop_btn').hide();
  $('.play_btn').on('click' , function(e){
    e.preventDefault();
    var val = $('.bg_video div').attr('data-id');
    $('.kindWordsfor li').append('<iframe src="https://www.youtube.com/embed/_9VUPq3SxOc?autoplay=1&mute=1" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
    $('.video_stop_btn').show();
  });

  $('.video_stop_btn').on('click' , function(){
    $('iframe').hide();
    $(this).hide();
  });
  // on load
  $(window).on('load', function(){
    var ulLen = $('ul.slick-dots').width();
    var liLen = $("ul.slick-dots li").length;
    var calc = ulLen / liLen;
    $("ul.slick-dots li").css('width',calc + 'px');
    $('.slick-arrow').text('');
  });
});
// bom academy filter
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("academyMainBlock");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
