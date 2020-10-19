function description() {
    var width = $(window).width() - $('.pipecol').width() - 200;
    var contentcol = $('#contentcol');
    contentcol.css('width', width);

    var headercol2Width = $(window).width() - $('.headerCol').width()- 200;
    var headercol2 = $('.headerCol2');
    headercol2.css('width', headercol2Width);
};

window.addEventListener("load", function(){
    description();
});

window.addEventListener("resize", function(){
    description();
});