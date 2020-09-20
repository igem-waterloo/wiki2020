$(document).ready(function(){
    $('input').on('input', function () {
        var v = $(this).val();
        $('p.resizefont').css('font-size', v + 'px')
    });
});