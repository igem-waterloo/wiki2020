function PipeLength(title1, title2, title3) {
    var top = $('.topElement')[0];
    var topRect = top.getBoundingClientRect();

    var element = $(title1)[0];
    var rect = element.getBoundingClientRect();
    var headerHeight = $('.pageHeader').height();
    var offset = headerHeight + 523;

    var val1 = rect.top - topRect.top - offset + 326.813;
    var val2 = rect.top - topRect.top - offset + 327.037;
    var val3 = rect.top - topRect.top - offset + 343.081;
    var val4 = rect.top - topRect.top - offset + 355.829;
    var val5 = rect.top - topRect.top - offset + 376.983;
    var val6 = rect.top - topRect.top - offset + 375.628;
    var val7 = rect.top - topRect.top - offset + 355.006;
    var val8 = rect.top - topRect.top - offset + 326.813;

    document.getElementById('pipe-one').setAttribute("d", 
    "M26.5 " + val1.toString() + "V1.5H43.7733V" 
    + val2.toString() + "C43.7733 " + val3.toString() + " 57.7816 " + val4.toString() +
    " 72.9369 " + val4.toString() + "H191.5V" + val5.toString() + "H72.9369C47.3448 " + 
    val6.toString() + " 26.5 " + val7.toString() + " 26.5 " + val8.toString() + "Z");

    val1 = rect.top - topRect.top - offset + 307.44;
    val2 = rect.top - topRect.top - offset + 301.5;

    document.getElementById('pipe-one-one').setAttribute("d", "M19.5 " + val1.toString() + 
    "V" + val2.toString() + "H51.9022V" + val1.toString() + "H19.5Z");


    val1 = rect.top - topRect.top - offset + 349.5;
    val2 = rect.top - topRect.top - offset + 383.787;

    document.getElementById('pipe-one-two').setAttribute("d", "M190.5 " + val1.toString() +
    "H195.989V" + val2.toString() + "H190.5V" + val1.toString() + "Z");

    val1 = rect.top - topRect.top - offset + 367;
    document.getElementById('circle-one').setAttribute("cy", val1.toString());

    var element2 = $(title2)[0];
    var rect2 = element2.getBoundingClientRect();


    offset = headerHeight + 1732;
    val1 = rect2.top - topRect.top - offset + 1538.13;
    val2 = rect2.top - topRect.top - offset + 1538.35;
    val3 = rect2.top - topRect.top - offset + 1554.39;
    val4 = rect2.top - topRect.top - offset + 1567.14;
    val5 = rect2.top - topRect.top - offset + 1587.05;
    val6 = rect2.top - topRect.top - offset + 1586.94;
    val7 = rect2.top - topRect.top - offset + 1566.32;
    val8 = rect2.top - topRect.top - offset + 1538.13;
    
    document.getElementById('pipe-two').setAttribute("d", 
    "M74.4998 " + val1.toString() + "V1.5H91.7731V" 
    + val2.toString() + "C91.7731 " + val3.toString() + " 105.781 " + val4.toString() +
    " 120.937 " + val4.toString() + "H191V" + val5.toString() + " H120.937C95.3446 " + 
    val6.toString() + " 74.4998 " + val7.toString() + " 74.4998 " + val8.toString() + "Z");

    val1 = rect2.top - topRect.top - offset + 1454.5;
    val2 = rect2.top - topRect.top - offset + 1460.44;

    document.getElementById('pipe-two-one').setAttribute("d", "M98.9021 " + val1.toString() + 
    "L98.9021 " + val2.toString() + "L66.4999 " + val2.toString() + "L66.4999 " + val1.toString()
    + "L98.9021 " + val1.toString() + "Z");

    val1 = rect2.top - topRect.top - offset + 936.869;
    val2 = rect2.top - topRect.top - offset + 942.81;

    document.getElementById('pipe-two-two').setAttribute("d", "M98.9021 " + val1.toString() + 
    "L98.9021 " + val2.toString() + "L66.4999 " + val2.toString() + "L66.4999 " + val1.toString()
    + "L98.9021 " + val1.toString() + "Z");

    val1 = rect2.top - topRect.top - offset + 367.066;
    val2 = rect2.top - topRect.top - offset + 373.007;

    document.getElementById('pipe-two-three').setAttribute("d", "M98.9021 " + val1.toString() + 
    "L98.9021 " + val2.toString() + "L66.4999 " + val2.toString() + "L66.4999 " + val1.toString()
    + "L98.9021 " + val1.toString() + "Z");

    val1 = rect2.top - topRect.top - offset + 1560.5;
    val2 = rect2.top - topRect.top - offset + 1594.79;

    document.getElementById('pipe-two-four').setAttribute("d", "M189.5 " + val1.toString() +
    "H194.989V" + val2.toString() + "H189.5V" + val1.toString() + "Z");

    val1 = rect2.top - topRect.top - offset + 1577;
    document.getElementById('circle-two').setAttribute("cy", val1.toString());

 
    var element3 = $(title3)[0];
    var rect3 = element3.getBoundingClientRect();

    offset = headerHeight + 3180;
    val1 = rect3.top - topRect.top - offset + 1.50001;
    val2 = rect3.top - topRect.top - offset + 2983.41;
    val3 = rect3.top - topRect.top - offset + 2999.45;
    val4 = rect3.top - topRect.top - offset + 3012.2;
    val5 = rect3.top - topRect.top - offset + 3032.11;
    val6 = rect3.top - topRect.top - offset + 3032;
    val7 = rect3.top - topRect.top - offset + 3011.38;
    val8 = rect3.top - topRect.top - offset + 2983.19;
    
    document.getElementById('pipe-three').setAttribute("d", "M139.773 1.50001L139.773 " 
    + val2.toString() + "C139.773 " + val3.toString() + " 153.781 " + val4.toString() +
    " 168.937 " + val4.toString() + "H194.801V" + val5.toString() + "H168.937C143.345 " 
    + val6.toString() + " 122.5 " + val7.toString() 
    + " 122.5 " + val8.toString() + "V1.50001"
    + "L139.773 1.50001" + "Z");

    // val1 = val4 + 200;
    // $('.pipe-three').height();
    // val4 + 200;
    // console.log(val1);

    // $('.pipecol svg').attr('height', val1.toString());
    // $('.pipecol svg').attr('viewbox', "0 0 227 " + val1.toString());

    val1 = rect3.top - topRect.top - offset + 3005.5;
    val2 = rect3.top - topRect.top - offset + 3039.79;

    document.getElementById('pipe-three-one').setAttribute("d", "M189.5 " + val1.toString() +
    "H194.989V" + val2.toString() + "H189.5V" + val1.toString() + "Z");

    val1 = rect3.top - topRect.top - offset + 662.377;
    val2 = rect3.top - topRect.top - offset + 668.318;

    document.getElementById('pipe-three-two').setAttribute("d", "M146.902 " + val1.toString() + 
    "L146.902 " + val2.toString() + "L114.5 " + val2.toString() + "L114.5 " + val1.toString()
    + "L146.902 " + val1.toString() + "Z");

    val1 = rect3.top - topRect.top - offset + 1975.77;
    val2 = rect3.top - topRect.top - offset + 1981.71;

    document.getElementById('pipe-three-three').setAttribute("d", "M146.902 " + val1.toString() + 
    "L146.902 " + val2.toString() + "L114.5 " + val2.toString() + "L114.5 " + val1.toString()
    + "L146.902 " + val1.toString() + "Z");

    val1 = rect3.top - topRect.top - offset + 2958.44;
    val2 = rect3.top - topRect.top - offset + 2964.38;

    document.getElementById('pipe-three-four').setAttribute("d", "M146.902 " + val1.toString() + 
    "L146.902 " + val2.toString() + "L114.5 " + val2.toString() + "L114.5 " + val1.toString()
    + "L146.902 " + val1.toString() + "Z");

    val1 = rect3.top - topRect.top - offset + 3022;
    document.getElementById('circle-three').setAttribute("cy", val1.toString());

};

function length() {
    if($('.descpage').length){
        PipeLength('.inspiration', '.problem', '.solution');
    }
    else if ($('.teampage').length) {
        PipeLength('.labsubteam', '.humansubteam', '.mathsubteam');
    }
}

window.addEventListener("load", function(){
    length();
});

window.addEventListener("resize", function(){
    length();
});

document.addEventListener("DOMContentLoaded", function(event) { 


    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            var setClasses = !this.classList.contains('active');

            if (setClasses) {
                setClass(acc, 'active', 'remove');
                setClass(panel, 'show', 'remove');
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
            length();
        }
    }

    for (var i = 0; i < panel.length; i++) {
        panel[i].onclick = function() {
            var setClasses = !this.classList.contains('show');

            if (!setClasses) {
                setClass(acc, 'active', 'remove');
                setClass(panel, 'show', 'remove');
            }
            length();
        }
    }

    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }

});