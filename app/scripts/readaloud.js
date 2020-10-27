window.onload=function(){
  document.getElementById("play").onclick = function() {
    if ($('#homepageDiv').length) {
      play('h1, p')
    }
    else {
      play('article')
    }
  };
  document.getElementById("pause").onclick = function() {pause()};
  document.getElementById("restart").onclick = function() {
    if ($('#homepageDiv').length) {
      restart('h1, p')
    }
    else {
      restart('article')
    }
  };
}

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