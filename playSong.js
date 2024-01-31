function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
    this.sound.play();
    }
    this.stop = function(){
    this.sound.pause();
    }
}

localStorage.clear();
changeBgSound = new sound("sounds/changeBg.mp3");
clickOpSound = new sound("sounds/clickOp.mp3");
finishSound = new sound("sounds/finish.mp3");
themeSong = new sound("sounds/themeSong.mp3");

let playing = false;
function playSong() {
    if (playing == true) {
        themeSong.stop();
        playing = false;
    }
    else {
        themeSong.play()
        playing = true;
    }
}