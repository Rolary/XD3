$(function(){
    $("#header").load("header.html")

var aA = document.querySelectorAll('.banner-nav a');
var aDiv = document.getElementsByClassName('banner-nav-box');
var oBox1 = document.getElementsByClassName('banner-nav-box');
var aLi = oBox1[0].querySelectorAll('.banner-nav-box-ul li');
var aImg = oBox1[0].querySelectorAll('.banner-nav-box img');
var aI = oBox1[0].getElementsByClassName('ib-txt1');
var aI1 = oBox1[0].getElementsByClassName('i-line');
var oBox = document.getElementsByClassName('col-box')[0];
var aLi1 = oBox1[1].querySelectorAll('.banner-nav-box-ul li');
var aImg1 = oBox1[1].querySelectorAll('.banner-nav-box img');
var aI2 = oBox1[1].getElementsByClassName('ib-txt1');
var aLi2 = document.querySelectorAll('.ovh-box-ul li');
var aDiv1 = document.getElementsByClassName('news-item');
var aNews = document.getElementsByClassName('news-nav');
var aCol = document.getElementsByClassName('col-box-02')[0];
var aA1 = aNews[0].querySelectorAll('.news-nav a');
var aDiv3 = aCol.querySelectorAll('.slide-wrap');
var aTk = document.getElementsByClassName('ovh-box-tk')[0];
var aA2 = aNews[1].querySelectorAll('.news-nav a');
var aDiv4 = aTk.querySelectorAll('.tk-slide-wrap');
var aSs = document.getElementById('ssxx');
var aA3 = aSs.querySelectorAll('.news-nav a');
var aDiv5 = document.getElementsByClassName('bssp-item');
var oXvjx = document.getElementById('xbjx');
var aA4 = oXvjx.querySelectorAll('.news-nav a');
var aDiv6 = document.getElementsByClassName('txt-list2');
var aA5 = document.querySelectorAll('.public-nav a');
var aDiv7 = document.getElementsByClassName('public-item');
var oLtrt = document.getElementById('ltrt');
var aA6 = oLtrt.querySelectorAll('.news-nav a');
var aDiv8 = oLtrt.getElementsByClassName('slide-wrap');
var oBox1 = document.getElementById('brand-box');
var aLi9 = document.querySelectorAll('.ppzq-banner-nav-box-ul li');
var aImg9 = document.querySelectorAll('.brand-box img');
var aI09 = document.querySelectorAll('.ppzq-banner-nav-box-ul .ib-txt1');
var aI9 = document.querySelectorAll('.ppzq-banner-nav-box-ul .i-line');
var aJsa = document.querySelectorAll('.jszs-ul>li>a');
var aJsl = document.querySelectorAll('.jszs-ul>li');
var jszs1 = document.getElementById('jszs-ul-li1');
var aJsa1 = jszs1.querySelectorAll('.group-item>li>a');
var aJsl1 = jszs1.querySelectorAll('.group-item>li');
var aJsi1 = jszs1.querySelectorAll('.group-item>li>a>.role-img');
var aJsi2 = jszs1.querySelectorAll('.group-item>li>a>.role-line');
var jszs2 = document.getElementById('jszs-ul-li2');
var aJsa2 = jszs2.querySelectorAll('.group-item>li>a');
var aJsl2 = jszs2.querySelectorAll('.group-item>li');
var aJsi3 = jszs2.querySelectorAll('.group-item>li>a>.role-img');
var aJsi4 = jszs2.querySelectorAll('.group-item>li>a>.role-line');
var jszs3 = document.getElementById('jszs-ul-li3');
var aJsa3 = jszs3.querySelectorAll('.group-item>li>a');
var aJsl3 = jszs3.querySelectorAll('.group-item>li');
var aJsi5 = jszs3.querySelectorAll('.group-item>li>a>.role-img');
var aJsi6 = jszs3.querySelectorAll('.group-item>li>a>.role-line');
var yy = document.getElementById('yy');
for (var i = 0; i < aA.length; i++) {
    aA[i].index = i;
    aA[i].onclick = function () {
        for (var j = 0; j < aDiv.length; j++) {
            aA[j].classList.remove('now');
            aDiv[j].style.display = 'none';
        }
        aA[this.index].classList.add('now');
        aDiv[this.index].style.display = 'block';
    }
}
function xxx(q, w, e, r) {
    for (var i = 0; i < q.length; i++) {
        q[i].index = i;
        q[i].onmouseover = function () {
            for (var j = 0; j < w.length; j++) {
                for (var k = 0; k < e.length; k++) {
                    for (var l = 0; l < r.length; l++) {
                        q[k].classList.remove('now');
                        w[k].style.display = 'none';
                        e[k].classList.remove('now');
                        r[k].style.display = 'block';
                    }
                }
            }
            q[this.index].classList.add('now');
            w[this.index].style.display = 'block';
            e[this.index].classList.add('now');
            r[this.index].style.display = 'none';
            a = [this.index];
            b = [this.index];
        }
    }
}
xxx(aLi, aImg, aI, aI1);
xxx(aLi9, aImg9, aI09, aI9);

dsq();
var time;
var a = 0;
function dsq() {
    time = setInterval(function () {
        a++;
        if (a > aLi.length - 1) {
            a = 0;
        }
        for (var i = 0; i < aLi.length; i++) {
            for (var j = 0; j < aImg.length; j++) {
                for (var k = 0; k < aI.length; k++) {
                    for (var l = 0; l < aI1.length; l++) {
                        aLi[l].classList.remove('now');
                        aImg[l].style.display = 'none';
                        aI[l].classList.remove('now');
                        aI1[l].style.display = 'block';
                    }
                }
            }
            aLi[a].classList.add('now');
            aImg[a].style.display = 'block';
            aI[a].classList.add('now');
            aI1[a].style.display = 'none';
        }
    }, 1000)
}
oBox.onmouseover = function () {
    clearInterval(time);
}
oBox.onmouseout = function () {
    dsq();
}

ds();
var sj;
var b = 0;
function ds() {
    sj = setInterval(function () {
        b++;
        if (b > aLi9.length - 1) {
            b = 0;
        }
        for (var i = 0; i < aLi9.length; i++) {
            for (var j = 0; j < aImg9.length; j++) {
                for (var k = 0; k < aI09.length; k++) {
                    for (var l = 0; l < aI9.length; l++) {
                        aLi9[l].classList.remove('now');
                        aImg9[l].style.display = 'none';
                        aI09[l].classList.remove('now');
                        aI9[l].style.display = 'block';
                    }
                }
            }
            aLi9[b].classList.add('now');
            aImg9[b].style.display = 'block';
            aI09[b].classList.add('now');
            aI9[b].style.display = 'none';
        }
    }, 1000)
}
oBox1.onmouseover = function () {
    clearInterval(sj);
}
oBox1.onmouseout = function () {
    ds();
}


for (var i = 0; i < aLi1.length; i++) {
    aLi1[i].index = i
    aLi1[i].onmouseover = function () {
        for (var j = 0; j < aImg1.length; j++) {
            for (var k = 0; k < aI2.length; k++) {
                aLi1[k].classList.remove('now');
                aImg1[k].style.display = 'none';
                aI2[k].classList.remove('now');
            }
        }
        aLi1[this.index].classList.add('now');
        aImg1[this.index].style.display = 'block';
        aI2[this.index].classList.add('now');
    }
}
function xxk(x, y) {
    for (var i = 0; i < x.length; i++) {
        x[i].index = i;
        x[i].onmouseover = function () {
            for (var j = 0; j < y.length; j++) {
                x[j].classList.remove('now');
                y[j].style.display = 'none';
            }
            x[this.index].classList.add('now');
            y[this.index].style.display = 'block';
        }
    }
}
xxk(aLi2, aDiv1);
xxk(aA1, aDiv3);
xxk(aA2, aDiv4);
xxk(aA3, aDiv5);
xxk(aA4, aDiv6);
xxk(aA6, aDiv8);
for (var i = 0; i < aA5.length; i++) {
    aA5[i].index = i;
    aA5[i].onmouseover = function () {
        for (var j = 0; j < aDiv7.length; j++) {
            aDiv7[j].style.display = 'none';
        }
        aDiv7[this.index].style.display = 'block';
    }
}
for (var i = 0; i < aJsa.length; i++) {
    aJsa[i].index = i;
    aJsa[i].onclick = function () {
        for (var j = 0; j < aJsl.length; j++) {
            aJsa[j].classList.remove('now');
            aJsl[j].classList.remove('now');
        }
        aJsa[this.index].classList.add('now');
        aJsl[this.index].classList.add('now');
    }
}

function dj(q, w, e, r) {
    for (var i = 0; i < q.length; i++) {
        q[i].index = i;
        q[i].onclick = function () {
            for (var j = 0; j < w.length; j++) {
                for (var k = 0; k < e.length; k++) {
                    for (var l = 0; l < r.length; l++) {
                        q[j].classList.remove('now');
                        w[j].classList.remove('now');
                        e[j].classList.remove('now');
                        r[j].classList.remove('now');
                    }
                }
            }
            q[this.index].classList.add('now');
            w[this.index].classList.add('now');
            e[this.index].classList.add('now');
            r[this.index].classList.add('now');

        }
    }
}
dj(aJsa1, aJsl1, aJsi1, aJsi2);
dj(aJsa2, aJsl2, aJsi3, aJsi4);
dj(aJsa3, aJsl3, aJsi5, aJsi6);

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    console.log(scrollTop);
    if (scrollTop >= 2250) {
        yy.play();
    } else if (scrollTop < 1800) {
        yy.pause();
    }
}

})
