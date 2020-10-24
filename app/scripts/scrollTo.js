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
    pipeScroll("probspacePipe", ".probspace");
    pipeScroll("considPipe", ".considerations");
    pipeScroll("nextPipe", ".nextsteps");
    pipeScroll("safePipe", ".safe");
    pipeScroll("ourlabPipe", ".ourlab");
    pipeScroll("guidePipe", ".guidelines");
    pipeScroll("humpracPipe", ".humprac");
    pipeScroll("labdesPipe", ".labdes");
    pipeScroll("mathmodPipe", ".mathmod");
    pipeScroll("copperPipe", ".copper");
    pipeScroll("cellulosePipe", ".cellulose");
    pipeScroll("copperconcPipe", ".copperconc");
    pipeScroll("modynPipe", ".molecdyna");
    pipeScroll("prototypePipe", ".prototype");
});