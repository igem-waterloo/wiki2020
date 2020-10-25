window.onload=function(){
  document.getElementById("play").onclick = function() {play('article')};
  document.getElementById("pause").onclick = function() {pause()};
  document.getElementById("restart").onclick = function() {restart('article')};
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