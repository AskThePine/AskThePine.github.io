var index = 0;

document.getElementById('next').onclick = function () {
    var lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);

    index ++;
    if(index >= lists.length) {
        index -= lists.length;
    }
    setContent();
}

document.getElementById('prev').onclick = function () {
    var lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);

    index --;
    if (index < 0) {
        index = lists.length - 1;
    }
    setContent();
}


function setContent() {
    var contentList = document.querySelector('.content-list').getElementsByTagName('li');;
    for(var i = 0; i < contentList.length; i ++) {
        contentList[i].style.display = 'none';
        contentList[i].classList.remove('active');
    }
    contentList[index].style.display = 'inline';
    
    setTimeout(function() {
        contentList[index].classList.add('active');
    }, 500);
}