$(document).ready(function(){
  //parallax
  $('.parallax-window').parallax();

});

var $item = $('.carousel .item');
var $wHeight = $(window).height();
var $active = 3;
var $dd = new Date();
var $dday = $dd.getDay();
var $indicator = $('.carousel .indicator');
$item.eq($dday-1).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');
$indicator.eq($dday-1).addClass('active');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});
