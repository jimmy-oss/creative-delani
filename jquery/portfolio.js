// Portfolio section
$(document).ready(function() {
  $('.wrapper img').animate({'opacity':'0.5'});
  $('.wrapper img').hover(function(){
      $(this).stop().animate({'opacity':'1.0'});
  },function(){
    $(this).stop().animate({'opacity':'0.5'});
  });
  });