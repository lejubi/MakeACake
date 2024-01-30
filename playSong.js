let playing = true;
function playSong() {
    if (playing == true) {
        themeSong.muted = true;
        playing = false;
    }
    else {
        themeSong.play()
        playing = true;
    }
}