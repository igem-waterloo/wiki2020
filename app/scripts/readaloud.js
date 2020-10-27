window.onload=function(){
  document.getElementById("play").onclick = function() {
    if ($('#homepageDiv').length) {
      play('h1, p');
    }
    else {
      play('article')
    }
  };

  document.getElementById("pause").onclick = function() {
    pause()
  };

  document.getElementById("restart").onclick = function() {
    if ($('#homepageDiv').length) {
      restart('h1, p')
    }
    else {
      restart('article')
    }
  };

  document.getElementById("minus").onclick = function() {
    if (!$('#homepageDiv').length && !$('.teampage').length) {
      var v = parseInt($('article p').css('font-size')) - 2;
      if (v >= 10){
        $('#top article .contentcol .info p').attr('style', 'font-size: ' + v + 'px !important')
        $('#top article .contentcol .info ol li p').attr('style', 'font-size: ' + v + 'px !important')
        $('#top article .contentcol .info ol li').attr('style', 'font-size: ' + v + 'px !important')
        $('#top article .contentcol .info ul li').attr('style', 'font-size: ' + v + 'px !important')
        $('#top article .overview').attr('style', 'font-size: ' + v + 'px !important')
        $('#top article .text p').attr('style', 'font-size: ' + v + 'px !important') 
      }
    }
  }

  document.getElementById("plus").onclick = function() {
    if (!$('#homepageDiv').length && !$('.teampage').length) {
      var v = parseInt($('article p').css('font-size')) + 2;
      if (v <=36){
        $('#top article .contentcol .info p').attr('style', 'font-size: ' + v + 'px !important')
        $('#top article .contentcol .info ol li p').attr('style', 'font-size: ' + v + 'px !important')
        $('#top article .contentcol .info ol li').attr('style', 'font-size: ' + v + 'px !important')
        $('#top article .contentcol .info ul li').attr('style', 'font-size: ' + v + 'px !important')
        $('#top article .overview').attr('style', 'font-size: ' + v + 'px !important')
        $('#top article .text p').attr('style', 'font-size: ' + v + 'px !important') 
      }
    }
  }
}

Mousetrap.bind(['command+alt+r', 'ctrl+alt+r'], function() { 
  if ($('#homepageDiv').length) {
    restart('h1, p')
  }
  else {
    restart('article')
  }
});

Mousetrap.bind(['command+shift+l', 'ctrl+shift+l'], function() { 
  if($().articulate('isPaused') || !$().articulate('isSpeaking')) {
    if ($('#homepageDiv').length) {
      play('h1, p')
    }
    else {
      play('article')
    }
  }
  else if (!$().articulate('isPaused')) {
    pause()
  }
});


  function play(obj) {
    var speaking = $().articulate('isSpeaking');
    var paused = $().articulate('isPaused');
  
    if (speaking) {
      if (paused) {
        $().articulate('resume');
      } 
    } else {
      $(obj).articulate('speak');
    };
  };
  
  function pause() {
    $().articulate('pause');
  }; 

  function restart(obj) {
    var speaking = $().articulate('isSpeaking');
    if (speaking) {
      $().articulate('stop');
      $(obj).articulate('speak');
    }
    else {
      $(obj).articulate('speak');
    }
  }; 


  Mousetrap.bind(['command+shift+a', 'ctrl+shift+a'], function() { 
    if ($('.toolbar-read').css("visibility") == "hidden") {
        $('.toolbar-read').css("visibility", "visible");
        $('.toolbar-size').css("visibility", "visible");
        $('.accessibility-tool .fixed').css('height', "283px");
        $('.arrow').css('transform', 'rotate(0deg)');  
    }
    else {
        $('.toolbar-read').css("visibility", "hidden");
        $('.toolbar-size').css("visibility", "hidden");
        $('.accessibility-tool .fixed').css('height', "78px");
        $('.arrow').css('transform', 'rotate(180deg)'); 
    }  
});
