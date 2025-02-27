function show(musicType, event) {
    // 阻止跳转
    event.preventDefault();

    // 更改背景颜色
    var typeList = document.getElementById('type-list').getElementsByTagName('li');
    for (var i = 0; i < typeList.length; i++) {
        if (i + 1 == musicType[musicType.length - 1]) {
            typeList[i].classList.add('bg');
        } else {
            typeList[i].classList.remove('bg');
        }
    }
    
    // 更改内容
    var albumList = document.getElementsByClassName('album-list');
    for (var i = 0; i < albumList.length; i ++) {
        albumList[i].classList.remove('active');
    }

    var musicShow = document.getElementById(musicType);
    musicShow.classList.add('active');
}