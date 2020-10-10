$(document).ready(function(){
    var labPipes = document.getElementsByClassName("labPipe");
    for (var i = 0; i < labPipes.length; i++) {
        labPipes[i].onclick = function() {
            var element_to_scroll_to = $('.labsubteam')[0];
            element_to_scroll_to.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
        };
    }

    var hpPipes = document.getElementsByClassName("hpPipe");
    for (var i = 0; i < hpPipes.length; i++) {
        hpPipes[i].onclick = function() {
            var element_to_scroll_to = $('.humansubteam')[0];
            element_to_scroll_to.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
        };
    }

    var mathPipes = document.getElementsByClassName("mathPipe");
    for (var i = 0; i < mathPipes.length; i++) {
        mathPipes[i].onclick = function() {
            var element_to_scroll_to = $('.mathsubteam')[0];
            element_to_scroll_to.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
        };
    }
});