 $(document).ready(function(){
   setTimeout(function(){
   $(".mega-menu").hover(function(){
      	$('.mega-menu-overlay').css("opacity", "1");
     	$('.mega-menu-overlay').css("visibility", "visible");
      }, function(){
     	$('.mega-menu-overlay').css("opacity", "0");
     	$('.mega-menu-overlay').css("visibility", "hidden");
    });

   },2000)
 
 });