(function($){
  'use strict';

  $('.content').hide();
  $('.listelement').on('click', function(){
    if(!($(this).children('.content').is(':visible'))){
      $('.content').slideUp();
      $(this).children('.content').slideDown();
    } else {
      $('.content').slideUp();
    }
  });

// $( "li.list-group-item" ).hover(function() {
//   $(this).css('background-color', "#A0C840");
//   $(this).css('background-color', "#6A6C71");
// });
//
//   $(".list-group-item").mouseover(function(){
//   	$(this).css(backgroundColor: "#A0C840");
//   });

}(jQuery));
