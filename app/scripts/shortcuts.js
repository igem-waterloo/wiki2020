Mousetrap.bind('command+shift+k', function() { speak('article') });

function speak(obj) {
    $(obj).articulate('speak');
  };