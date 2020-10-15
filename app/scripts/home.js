function background() {
    var home = $('#homepage');
    var width = home.width();

    var footer = $('footer');
    var footerHeight = footer.height();
    
    var homeDiv = $('#homepageDiv');
    homeDiv.css('height', width*4.1+footerHeight);
    height = homeDiv.height();

    var subtitleDiv = $('.subtitleBox');
    subtitleDiv.css('height', height/9);
};


window.addEventListener("load", function(){
    background();
});

window.addEventListener("resize", function(){
    background();
});