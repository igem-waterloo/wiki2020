function pipeScroll(pipeClass, headerClass) {
    var pipes = document.getElementsByClassName(pipeClass);
    for (var i = 0; i < pipes.length; i++) {
        pipes[i].onclick = function() {
            var element_to_scroll_to = $(headerClass)[0];
            var topElement = $('.topElement')[0];
            var topElementPosition = topElement.getBoundingClientRect().top;
            var headerOffset = 70;
            var elementPosition = element_to_scroll_to.getBoundingClientRect().top - topElementPosition;
            var offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        };
    }
}

$(document).ready(function(){
    pipeScroll("labPipe", ".labsubteam");
    pipeScroll("hpPipe", ".humansubteam");
    pipeScroll("mathPipe", ".mathsubteam");
    pipeScroll("inspPipe", ".inspiration");
    pipeScroll("probPipe", ".problem");
    pipeScroll("solPipe", ".solution");
});