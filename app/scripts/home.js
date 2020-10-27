function background() {
    var home = $('#homepageDiv');
    var width = home.width();

    var footer = $('footer');
    var footerHeight = footer.height();
    home.css('height', width*4.1+footerHeight);
};


window.addEventListener("load", function(){
    background();
});

window.addEventListener("resize", function(){
    background();
});