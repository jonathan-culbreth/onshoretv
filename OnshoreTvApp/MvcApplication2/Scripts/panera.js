
var w = window.innerWidth;
var h = window.innerHeight;
$('body').css('width', w);
$('body').css('height', h);

centerDelay();
centerLady();
placeText();
$('#names').hide();
$('#lady').hide().show('puff', 2000);
$('#line1').hide().show('drop', 2000, placeText);
$('#line2').hide().show('drop',{direction:'right'}, 2000, placeText);
$('#lady').delay(1000).hide('scale', 2000);
$('#welcome').delay(4000).fadeOut(500);
$('#names').delay(4000).fadeIn(2000);
$('#panera').delay(4500).fadeTo('slow', 1);

function centerLady() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var lw = $('#ladyContainer').width();
  var lh = $('#ladyContainer').height();
  
  $('#ladyContainer').css({
    'top': ((h/2-lh/2)-50).toString() + "px",
    'left': (w/2-lw/2).toString() + "px"
  })
}

function placeText() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var lw = $('#ladyContainer').width();
  var lh = $('#ladyContainer').height();
  var ww = $('#welcome').width();
  
  $('#welcome').css({
    'top' : ((h/2+lh/2)-50).toString() + 'px',
    'left' : (w/2-ww/2).toString() + 'px'
  })
}

function centerDelay() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var dw = $('#delayed').width();
  var dh = $('#delayed').height();
  
  $('#delayed').css({
    'top': (h/2-dh/2).toString() + "px",
    'left': (w/2-dw/2).toString() + "px"
  })
}