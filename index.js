module.exports = function(el, onEnter, onExit) {
  init();

  function init() {
    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('mozfullscreenchange', onFullScreenChange);
    document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    document.addEventListener('MSFullscreenChange', onFullScreenChange);
    el.addEventListener('webkitendfullscreen', onExit);
  }

  function destroy() {
    document.removeEventListener('fullscreenchange', onFullScreenChange);
    document.removeEventListener('mozfullscreenchange', onFullScreenChange);
    document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
    document.removeEventListener('MSFullscreenChange', onFullScreenChange);
    el.removeEventListener('webkitendfullscreen', onExit);
  }

  function onFullScreenChange() {
    if (isFullScreen()) {
      onEnter && onEnter();
    } else {
      onExit && onExit();
    }
  }

  function isFullScreen() {
    return (
      document.fullscreen ||
      document.fullScreen ||
      document.webkitIsFullScreen ||
      document.mozFullScreen ||
      (document.msFullscreenElement !== undefined && document.msFullscreenElement !== null)
    );
  }

  return {
    enter: function() {
      var requestFullScreen = (
        el.requestFullScreen ||
        el.mozRequestFullScreen ||
        el.webkitRequestFullScreen ||
        el.webkitRequestFullscreen ||
        el.webkitEnterFullScreen ||
        el.msRequestFullscreen ||
        el.requestFullscreen
      );
      requestFullScreen && requestFullScreen.call(el);
    },
    exit: function() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (el.webkitExitFullScreen) {
        el.webkitExitFullScreen();
      }
    },
    isFullScreen: isFullScreen,
    destroy: destroy
  };
};
