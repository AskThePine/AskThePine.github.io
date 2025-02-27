window.onload = function () {
    document.body.classList.add('loaded');
    setBackgroundImage();
}

function setBackgroundImage() {
    var curDate = new Date();
    var background = document.getElementById('background');
    // 平安夜彩蛋
    if (curDate.getMonth() == 11 && curDate.getDate() == 14) {
        background.style.backgroundImage = 'url(../images/background_Christmas_Eve.jpg)';
    } else {
        background.style.backgroundImage = 'url(../images/background.jpg)';
    }
}
