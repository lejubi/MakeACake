let bg = 0;
const bgimgs = ["", "url('img/bg1.png')", "url('img/bg2.png')"]
function changeBg() {
    bg++;
    if (bg >= bgimgs.length) {
        bg = 0;
    }
    document.body.style.backgroundImage = bgimgs[bg];
}