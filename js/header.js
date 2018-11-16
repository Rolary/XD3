$(function(){
    //头部广告hover
    $(".advertising").hover(function(){
        $(".advertising-a").hide(500);
        $(".advertising-box").show(500);
    },function(){
        $(".advertising-box").hide(500);
        $(".advertising-a").show(500);
    })
    //头部严选滚动
    setInterval(function(){
        $(".treasure-in").html("游戏充值9.8折");
    },1900)
    setInterval(function(){
        $(".treasure-in").html("领取网页严选宝箱");
    },3900)
    //头部菜单click
    var a=true;
    var b=true;
    $("#gdrmdy").click(function(){
        if (a){
            $(this).html("<<");
            $(this).addClass("now");
            $(".short").addClass("now")
            a=!a;
        }else {
            $(this).html("更多热门端游");
            $(this).removeClass("now");
            $(".short").removeClass("now")
            a=!a;
        }
    });
    $("#gdrmsy").click(function(){
        if (b){
            $(this).html("<<");
            $(this).addClass("now");
            $(".sjyx").addClass("now");
            $(".news").addClass("now");
            $(".hot").addClass("now");
            b=!b;

        }else {
            $(this).html("更多热门手游");
            $(this).removeClass("now");
            $(".sjyx").removeClass("now");
            $(".news").removeClass("now");
            $(".hot").removeClass("now");
            b=!b;
        }
    });















})


