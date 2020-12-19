function background() {
    var home = $('#homepageDiv');
    var width = home.width();
    home.css('height', width*4.5);
};


window.addEventListener("load", function(){
    background();
});

window.addEventListener("resize", function(){
    background();
});

window.addEventListener('load', (event) => {
    $('#navbar .logo img').click(function() {
        location.href="https://2020.igem.org/Team:Waterloo";
    });
});