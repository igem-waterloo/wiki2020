$(document).ready(function(){
    document.getElementById("mainpath").onclick = function() {
        var element_to_scroll_to = $('.mathsubteam')[0];
        element_to_scroll_to.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
    };
});