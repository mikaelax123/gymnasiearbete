var index = 0;
var urlList = ["<video id=\"myvideo\" width=\"720\" height=\"480\"><source src=\"media/potato.mp4\" type=\"video/mp4\"> Your browser does not support the video tag.</video>", "<img id=\"bild\" src=\"http://monodepth.duckdns.org/images/no-image.jpg\">", "<img id=\"bild\"  src=\"http://monodepth.duckdns.org/uploads/images/DLPljV4x.png\">", "<img id=\"bild\"  src=\"http://monodepth.duckdns.org/uploads/images/EZdCEAKB.jpeg\">", "<img id=\"bild\"  src=\"http://monodepth.duckdns.org/uploads/images/jFXijqNf.png\">", "<img id=\"bild\"  src=\"http://monodepth.duckdns.org/uploads/images/7ICSuy3R.png\">"];
$('#media').html(urlList[index]);
$('#myvideo').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls");
    } else {
        this.setAttribute("controls", "controls");
    }
});
$('#left').click(function switchleft() {
    index = index - 1;
    if (index < 0) {
        index = urlList.length - 1;
    }
    $('#media').html(urlList[index]);
});
