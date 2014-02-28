
$('#cupcake').fadeIn(2500, function () {
    $(this).css('display', 'block');

});

$(function () {
    var dest = $('#hapbirth');
    dest.append("Happy Birthday!");
    dest.css("display", "block");
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