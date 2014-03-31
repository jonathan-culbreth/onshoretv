$('#cupcake').fadeIn(2500, function() {
    $(this).css('display', 'block');
});

setTimeout(
    function () {
      $('#name')
        .hide()
        .text("Brandon Coursey March 17th")
        .fadeTo(3000, 1)
        .fadeTo(3000, 0);
    },0
);
setTimeout(
    function () {
        $('#name')
          .hide()
          .text("Patricia Austin March 25th")
          .fadeTo(3000, 1)
          .fadeTo(3000, 0);
    }, 6000
);
setTimeout(
    function () {
        $('#name')
          .hide()
          .text("Jan Durrence March 15th")
          .fadeTo(3000, 1)
          .fadeTo(3000, 0);
    }, 12000
);
setTimeout(
    function () {
        $('#name')
          .hide()
          .text("Eric Ewing March 18th")
          .fadeTo(3000, 1)
          .fadeTo(3000, 0);
    }, 18000
);
$(function () {
    var dest = $('#hapbirth');
    dest.append("Happy Birthday!");
    dest.circleType({radius:384, fluid: true});
    var q = $('span[class^=char]').css('opacity', '.001').toArray();
    var c = 0;
    var i = setInterval(function () {
        $(q[c]).fadeTo('slow', 1);
        c += 1;
        if (c >= q.length) {
            clearInterval(i);
        }
    }, 500);
});