$(document).ready(function(){
    document.getElementById("colourscheme").onclick = function() {
        $('main').css('background-color', 'blue')
        $('main').css('color', 'white')
        $('main p').css('color', 'white')
    };
});