var isMobile = $.browser.mobile

$(document).ready(function(){

    //disable touch to call if not a mobile device
    if( !isMobile ){
        $('a.phone_number').click(function(){
            return false;
        });
    }

    $('a.fade').hover(function(){
        $(this).fadeTo('fast',.01);
    },
    function(){
        $(this).fadeTo('fast',1);
    });
    

});