var auto = 1; // 0 will prompt to confirm, 1 will autoplay

clearInterval(scroller);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function confirmSelection(movie){
    if (auto){
        return movie[1];
    }
    if (confirm("Want to watch: " + movie[0] + '?') == true) {
        return movie[1];
    } else {
        return 'null';
    }
}

var DOMdata = document.querySelectorAll('.title-card [aria-label]');

var randInt = getRandomInt(0, DOMdata.length);

var randMovie = [DOMdata[randInt].getAttribute('aria-label'), "https://www.netflix.com" + DOMdata[randInt].getAttribute('href')];

var selection = confirmSelection(randMovie);

selection;
