var musicList = [
    ['01. I. Lent et douloureux', '02. II. Lent et triste', '03. III. Lent et grave'],
    ['01. No.1 in B-Flat Minor', '02. No.2 in E-Flat Major. Andante', '03. No.3 in B Major'],
    ['01. Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 Moonlight I. Adagio sostenuto',
     '02. Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 Moonlight II. Allegretto',
     '03. Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 Moonlight III. Presto agitato']
];
var albumList = ['Satie: Favorite Music', 'Chopin: Nocturnes (1999 remastered)', 'Beethoven: Sonatas'];
var backgroundList = ['whitesmoke', 'rgba(179, 195, 195, 0.5)', 'rgba(101, 117, 142, 0.5)', 'rgba(132, 180, 182, 0.5)'];
var audio = document.getElementById('audio');

// 播放器进度条
audio.addEventListener('timeupdate', function () {
    var curTime = audio.currentTime;
    var duration = audio.duration;

    var bar = document.getElementById('bar');
    bar.style.width = curTime / duration * 100 + '%';
});

function playMusic(event) {
    // 阻止跳转
    event.preventDefault();
    // 获得音乐名
    var link = event.target;
    var musicName = link.textContent;

    // 载入音乐
    // var audio = document.getElementById('audio');
    var filePath = 'music/' + musicName + '.mp3';
    audio.setAttribute('src', filePath);

    // 查找专辑
    var albumName = 'Null';
    var albumIndex = 0;
    for(var i = 0; i < musicList.length; i ++) {
        for (var j = 0; j < musicList[i].length; j ++) {
            if(musicList[i][j] == musicName) {
                albumName = albumList[i];
                albumIndex = i + 1;
                break;
            }
        }
    }

    // 更新播放器信息
    // 更新音乐、专辑信息
    var musicNameShow = document.getElementById('music-name');
    var albumNameShow = document.getElementById('album-name');
    var albumFolderShow = document.getElementById('album-folder');
    musicNameShow.textContent = musicName;
    albumNameShow.textContent = albumName;

    // 更新封面
    var albumFolder = 'images/music_list_folder' + albumIndex + '.jpg';
    albumFolderShow.style.backgroundImage = 'url(' + albumFolder +')';

    // 更新背景颜色
    var musicPlayer = document.getElementById('music-player');
    musicPlayer.style.backgroundColor = backgroundList[albumIndex];

    // 音乐名字滚动
    if(musicNameShow.offsetWidth >= 800) {
        musicNameShow.classList.add('music-name-marquee');
    } else {
        musicNameShow.classList.remove('music-name-marquee');
    }
}