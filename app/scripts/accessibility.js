function checkOffset() {
    if($('main').offset().top + $('accessibility').height() >= $('footer').offset().top - 20) {
        $('.accessibility-tool .fixed').css('position', 'absolute');
    }
    if($(document).scrollTop() + window.innerHeight < $('footer').offset().top) {
        $('.accessibility-tool .fixed').css('position', 'fixed');
    }
}

$(document).scroll(function() {
    checkOffset();
});

window.addEventListener('load', (event) => {  
    $('.arrow').click(function() {
        if ($('.toolbar-read').css("visibility") == "hidden") {
            $('.toolbar-read').css("visibility", "visible");
            $('.toolbar-size').css("visibility", "visible");
            $('.accessibility-tool .fixed').css('height', "283px");
            $('.arrow').css('transform', 'rotate(180deg)');  
        }
        else {
            $('.toolbar-read').css("visibility", "hidden");
            $('.toolbar-size').css("visibility", "hidden");
            $('.accessibility-tool .fixed').css('height', "78px");
            $('.arrow').css('transform', 'rotate(0deg)'); 
        }  
    });
});
