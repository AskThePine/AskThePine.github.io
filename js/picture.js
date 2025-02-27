var slideIndex = 0;
var slides = document.querySelector('.picture-list').getElementsByTagName('li');

// 下一页
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    updateSlides();
}

// 上一页
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    updateSlides();
}

function updateSlides() {
    const totalWidth = slides[0].offsetWidth;
    const transformValue = -(slideIndex * totalWidth);
    document.querySelector('.picture-list').style.transform = `translateX(${transformValue}px)`;

    // 文字更新
    var imfo = document.querySelector('.picture-imfo').getElementsByTagName('li');
    for(var i = 0; i < imfo.length; i ++) {
        imfo[i].style.display = 'none';
    }
    imfo[slideIndex].style.display = 'block';
}

updateSlides();

var prevLink = document.querySelector('.prev');
var nextLink = document.querySelector('.next');
var autoPlay;

// 自动播放
document.addEventListener('DOMContentLoaded', function () {
    var autoPlayTime = 3000;    // 自动播放时间
    autoPlay = setInterval(nextSlide, autoPlayTime);
})

prevLink.addEventListener('click', function (event) {
    clearInterval(autoPlay);    // 清除自动播放
    event.preventDefault();     // 关闭跳转
    prevSlide();
});

nextLink.addEventListener('click', function (event) {
    clearInterval(autoPlay); 
    event.preventDefault();
    nextSlide();
});

