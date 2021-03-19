function playaudio(){
    var music = document.querySelector(".active audio");
    music.play();
}

function pauseaudio(){
    var music = document.querySelector(".active audio");
    music.pause();
}

function stopaudio(){
    var music = document.querySelector(".active audio");
    music.pause();
    music.currentTime = 0;
}
