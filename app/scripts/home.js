function background() {
    var home = $('#homepage');
    var width = home.width();

    var footer = $('.footer-name');
    var footerHeight = footer.height();
    
    var homeDiv = $('#homepageDiv');
    homeDiv.css('height', width*4.72+footerHeight);
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

var tabs = document.getElementsByClassName('subheading');

var highlightParent = function() {
    console.log('hi');
};

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('mouseover', highlightParent);
}


// $('header #navbar ul li a').on('mouseover', function(){
//     console.log('hi');
//     $(this).parent().parent().siblings()[0].css("background", "#003551");
// }).on('mouseout', function(){
//     $(this).parent().parent().siblings()[0].css("background", "#42748E");
// })