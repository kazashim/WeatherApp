$(function(){
    $('.close').click(function(){
        alert('clicked');
        $('#error-cover').fadeOut();
    });
    $('a').bind('copy paste cut',function(e){
        e.preventDefault();
    });
    $('html').on('contextmenu', function(e){
         return false;
    });

    
});