$(document).ready(function()
{
    $(window).scroll(function(){

        var offset = 160; // set offset here

        var posTop = $(window).scrollTop() - $('.container').offset().top
        if (posTop > offset)
        {
           $('.social-buttons').addClass('fixed');
       }
       else if (posTop < offset)
       {
           $('.social-buttons').removeClass('fixed');
       }
   });
});