// side menu
$(function() {
  $('#slideR').hover(
    function(){
      $(this).animate({'marginRight':'120px'},500);
      $(this).children("#title").css("width","100%");
      $(this).children("#list").css("display","");
    },
    function () {
      $(this).animate({'marginRight':'0'},500);
      $(this).children("#title").css("width","30px");
      $(this).children("#list").css("display","none");
    }
  );
});