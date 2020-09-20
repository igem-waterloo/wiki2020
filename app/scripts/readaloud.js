window.onload=function(){
  document.getElementById("speakall").onclick = function() {speak('article')};
  document.getElementById("pause").onclick = function() {pause()};
  document.getElementById("resume").onclick = function() {resume()};
  document.getElementById("stop").onclick = function() {stop()};
}

function speak(obj) {
    $(obj).articulate('speak');
  };
  
  function pause() {
    $().articulate('pause');
  };
  
  function resume() {
    $().articulate('resume');
  };
  
  function stop() {
    $().articulate('stop');
  };