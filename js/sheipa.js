

// 輪播
$(function() {
    var $slider_image = $('.slider_img').find('.item'),
        $slider_txt = $('.slider_txt').find('.item'),

        showIndex = 0,
        fadeOutSpeed = 2000, 
        fadeInSpeed = 2000, 
        defaultZ = 10, 
        timer = 8000;           //輪播時間
        imglength  = $slider_image.length;
    setInterval(function sequentialImg() {
        $slider_image.eq(showIndex).stop().fadeTo(fadeInSpeed, 1).css('zIndex', defaultZ).siblings('div').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
        $slider_txt.eq(showIndex).stop().fadeTo(fadeInSpeed, 1).css('zIndex', defaultZ).siblings('div').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
        
        showIndex++;
        console.log(showIndex);
        if (showIndex >= imglength) showIndex = 0;   
    }, timer);
});


// Menu 選單
$(window).scroll(function(){
    var heigh = $(window).scrollTop();
    if (heigh > 900) {
        $("#mainNav").css("opacity",1).fadeTo('slow');
    }else if (heigh < 900){
        $("#mainNav").css("opacity",0).fadeTo('slow');
    }
});
