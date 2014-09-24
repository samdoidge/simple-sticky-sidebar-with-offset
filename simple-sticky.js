$(document).ready(function()
{
    $(window).scroll(function(){

        var offset = 160 // set offset here

        var posTop = $(window).scrollTop() - $('.container').offset().top
        if (posTop > 160)
        {
           $('.social-buttons').addClass('fixed');
       }
       else if (posTop < 160)
       {
           $('.social-buttons').removeClass('fixed');
       }
   });
});