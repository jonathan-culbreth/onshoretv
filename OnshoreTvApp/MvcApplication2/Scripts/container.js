centerContainer();

function centerContainer() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var cw = $('.container').width();
  var ch = $('.container').height();
  
  $('.container').css({
    'margin-top': "35px",
    'margin-left': (w/2-cw/2).toString() + "px"
  })
}