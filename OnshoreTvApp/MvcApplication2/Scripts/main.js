$(document).ready(function () {
    loadNext();
    $('.main').css('height', (window.innerHeight) + 'px');
    timedRefresh(648000);
});


var pictures = ['.jpg'];
var videos = [];
var links = ["newJLL1.html", "newJLL2.html", "newPanera1.html", "newPanera2.html", "leaders.html", "offices.html", "agileprinciples.html", "definescrum.html", "malwareprevention.html", "passSec.html", "portableelectronics.html"];
var counter = 0;

function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
}

function loadNext() {
    $('.main').fadeTo('slow', .001, function () {
        var file = links[counter % links.length];
        var extension = substrio(file, '.');
        var delay = 20000;
        if (pictures.indexOf(extension) != -1) {
            var image = new Image();
            image.src = file;
            image = resizeImage(image);
            $('.main').append($(image));
            setTimeout(loadNext, delay);
        } else if (videos.indexOf(extension) != -1) {
            var video = $('<video controls></video>');
            var source = $('<source></source>');
            source.attr('src', file);
            $('.main').append(video);
            setTimeout(loadNext, delay);
        } else {

            $('.main').load(file, function () {
                var delayElement = $('.delay');
                if (delayElement && delayElement.val()) {
                    delay = delayElement.val();
                }
                setTimeout(loadNext, delay);
            });
        }
        counter++;
        $('.main').fadeTo('slow', 1);
    });
}

function substrio(str, chr) {
    return str.substring(str.indexOf(chr));
}

function resizeImage(image) {
    var screenRatio = window.innerWidth / window.innerHeight;
    var imageRatio = image.width / image.height;
    image = $(image);
    if (screenRatio > imageRatio) {
        image.css('height', '100%');
    } else {
        image.css('width', '100%');
    }
    return image;
}
