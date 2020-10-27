function background() {
    var home = $('#homepageDiv');
    var width = home.width();
    var height = window.innerHeight

    var footer = $('footer');
    var footerHeight = footer.height();
    home.css('height', width*4.1+footerHeight);

    var main = $('main');
    var mainHeight = main.height();
    var extraHeight = height - mainHeight - footerHeight - 100;
    if (extraHeight > 0) {
        main.css('margin-bottom', extraHeight)
    } else {
        main.css('margin-bottom', 0)
    }
};


window.addEventListener("load", function(){
    background();
});

window.addEventListener("resize", function(){
    background();
});