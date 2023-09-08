const cow = document.getElementById("cow");
const chicken = document.getElementById("chicken");
const duck = document.getElementById("duck");
const dog = document.getElementById("dog");
const cat = document.getElementById("cat");
const pig = document.getElementById("pig");
const goat = document.getElementById("goat");
const body = document.body;

// Sounds
var goatSound = new Audio('689407__saha213131__goat.mp3');
var pigSound = new Audio('391306__fernandesbljr__pig.wav');
var catSound = new Audio('274989__theshaggyfreak__cat-meowing.mp3');
var dogSound = new Audio('327666__juan_merie_venter__dog-bark.wav');
var duckSound = new Audio('242664__reitanna__quack.wav');
var chickenSound = new Audio('316920__rudmer_rotteveel__chicken-single-alarm-call.wav');
var cowSound = new Audio('58277__benboncan__cow.wav');

var currentSound = null;

function stopAndPlay(sound) {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0; 
    }
    currentSound = sound;
    sound.play();
}

cow.addEventListener('click', function() {
    stopAndPlay(cowSound);
    setBodyBackground("daniel-quiceno-m-4MQtWCxUrYc-unsplash.jpg");
})

chicken.addEventListener('click', function() {
    stopAndPlay(chickenSound);
    setBodyBackground("chicken.jpg");
})

duck.addEventListener('click', function() {
    stopAndPlay(duckSound);
    setBodyBackground("duck.jpg");
})

dog.addEventListener('click', function() {
    stopAndPlay(dogSound);
    setBodyBackground("dog.jpg");
})

cat.addEventListener('click', function() {
    stopAndPlay(catSound);
    setBodyBackground("cat.jpg");
})

pig.addEventListener('click', function() {
    stopAndPlay(pigSound);
    setBodyBackground("pig.jpg");
})

goat.addEventListener('click', function() {
    stopAndPlay(goatSound);
    setBodyBackground("goat.jpg");
})

function setBodyBackground(imageUrl) {
    body.style.backgroundImage = `url('${imageUrl}')`;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";
    body.style.margin = "0";
    body.style.height = "100vh";
    body.style.width = "100vw";
    body.style.transition = "3s ease";
}
