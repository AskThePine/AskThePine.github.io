function setDownIconTitle() {
    var curDate = new Date();
    var downIcon = document.getElementById('down-icon');
    if (curDate.getDate() % 2) {
        downIcon.title = "Let's dive in.";
    } else {
        downIcon.title = 'LINK START!';
    }
}

setDownIconTitle();