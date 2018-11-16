$(function(){
    $("#header").load("header.html");
    //导航栏
$(".nav_wrap ul li a span").click(function(){
    $(".nav_wrap ul li a span").removeClass("now")
    $(this).addClass("now");
})
//经脉介绍无缝滚动
    var index=0;  //在这声明index这个变量是让他成为全局变量,
                // 在你所有的函数里都可以被调用也可以实时改变,
                //避免了你点击左右按钮和点击小点值不同步改变
    var width = $(".con").width();//获取子元素的宽,也是每一次left加或者减的值
    var Lis = $(".con").eq(0).clone();//克隆一个假的元素
    Lis.appendTo($(".slides_control"));//将这个元素添加到父元素的尾部
    $(".num").click(function () {
         index=$(this).parent().index();    //获取this父级的索引,
                                            //要是直接获取this的索引
                                            //因为你点击的对象在他所处在的环境下只有一个
                                            //系统给你返回的$(this).index()只能是0
                                            //所以要获取this父级的index
        $(".slides_control").animate({left: -index * width});     //让父级元素的left值,
                                                                    // 随着index的改变,
                                                                    //而左右移动

        $(".num").removeClass("now");                              //移除所有点点点击添加的样式
        $(this).addClass("now");                                   //给当前点击的添加样式
    });
    $(".prev").click(function () {
        index--;
        if (index < 0) {//当index小于0时,先让父级的left值变为子元素的length-1乘上子元素的宽,
                        // 因为有克隆的假元素所以我们减去一,让那张假元素显示出来
            $(".slides_control").css("left", -($(".con").length - 1) * width);
            index = $(".con").length - 2;//因为我们只要让他在0和1之间循环,
                                        // 索引让index等于子元素的length减二
                                        //补充:走完if语句,index就会被重置继续执行下面的代码
        }
        $(".slides_control").stop().animate({left: -index * width});
        $(".pagination li a").removeClass("now").eq(index).addClass("now");
});
    $(".next").click(function () {
        index++;
        if (index == $(".con").length - 1) {//如果index=2的时候,先让那张假图显示出来,
                                             // 并且让点点索引为0的添加样式,
                                             // 因为index0,1,0应该是这样循环,
                                            //index++时,index等于二的时候,
                                            //对应的应该给索引为0的添加样式
            $(".slides_control").stop().animate({left: -index * width});
            $(".pagination li a").removeClass("now").eq(0).addClass("now");
        } else if (index > $(".con").length - 1) {//如果index>2的时候,实际上就是等于三的时候,
                                                    // 0,1,2,3,对应0,1,0,1
                                                    //先让父级元素通过css()瞬间让第一张显示,
                                                    // 因为3对应着1在让index等于1
            $(".slides_control").css("left", 0);
            index = 1;
            $(".slides_control").stop().animate({left: -index * width});
            $(".pagination li a").removeClass("now").eq(index).addClass("now");
        } else {//下面代码对应index正常变化0或者1的时候的情况
            $(".pagination li a").removeClass("now").eq(index).addClass("now");
            $(".slides_control").stop().animate({left: -index * width});
        }
    })
    function right() {
        index++;
        if (index == $(".con").length - 1) {
            $(".slides_control").stop().animate({left: -index * width});
            $(".pagination li a").removeClass("now").eq(0).addClass("now");
        } else if (index > $(".con").length - 1) {
            $(".slides_control").css("left", 0);
            index = 1;
            $(".slides_control").stop().animate({left: -index * width});
            $(".pagination li a").removeClass("now").eq(index).addClass("now");
        } else {
            $(".pagination li a").removeClass("now").eq(index).addClass("now");
            $(".slides_control").stop().animate({left: -index * width});
        }
    }
    var timer = setInterval(right, 2000);
    $(".slides").mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        timer = setInterval(right, 2000);
    })
    var x=0;
    var data;
    //ajax请求
        $.ajax({
            url:"json/tsconfig.json",   //路径
//            url:"1.txt",
            type:"get",   //get post 两个参数                                                 //请求方式

            data:{            //往后台传输数据                                                 //数据存放

            },
            async:false,                                                                      //同步异步
            dataType:"json"                                                                  //数据类型
            //timeout:10000,                                                                    //几秒钟加载完成，网速好可以不写
        }).done(function(result){
            data=result[0].data.list;
            //console.log(result);//所有数据
            //console.log(data);
            let str=``;
            for (var i = 0; i < data.length; i++) {
                var{img}=data[i].imges[x];
                str+=`<li><a href="javascript:;"><img src="${img}" alt=""></a></li>`;
            };
            //console.log(str);
            $(".jm-box ul").html(str);

        });

        $(".jm-box ul li").live("click",function(){
        x=1;
        var y=$(this).index();
        console.log(y);
        console.log(x);
        $.ajax({
            url:"json/tsconfig.json",   //路径
//            url:"1.txt",
            type:"get",   //get post 两个参数                                                 //请求方式

            data:{            //往后台传输数据                                                 //数据存放

            },
            async:false,                                                                      //同步异步
            dataType:"json"                                                                  //数据类型
            //timeout:10000,                                                                    //几秒钟加载完成，网速好可以不写
        }).done(function(result){
            data=result[0].data.list;
            //console.log(result);//所有数据
            //console.log(data);
            let str1=``;
            var{img}=data[y].imges[x];
            str1+=`<a href="javascript:;"><img src="${img}" alt=""></a>`;
            console.log($(this));
            $(".jm-box ul li").eq(y).html(str1);
        });
    })

    $(".jm-box ul li").live("mouseover",function(){
        var h=$(this).index();
        $.ajax({
            url:"json/tsconfig.json",   //路径
//            url:"1.txt",
            type:"get",   //get post 两个参数                                                 //请求方式

            data:{            //往后台传输数据                                                 //数据存放

            },
            async:false,                                                                      //同步异步
            dataType:"json"                                                                  //数据类型
            //timeout:10000,                                                                    //几秒钟加载完成，网速好可以不写
        }).done(function(result){
            name=result[0].data.list[h].name;
            school=result[0].data.list[h].school;
            presentation=result[0].data.list[h].presentation;
            //console.log(result);//所有数据
            let str2=``;
            str2+=`<li><span>经脉名称：</span><a>${name}</a></li><li><span>所属门派：</span><a>${school}</a></li><li><span>经脉介绍：</span><a>${presentation}</a></li>`;
            $(".jm-tips ul").html(str2);
        });
        $(".jm-tips").show();
    });
    $(".jm-box ul li").live("mouseout",function(){
        $(".jm-tips").hide();
    })


//经脉详情盒子跟随鼠标移动
//    document.onmousemove=function fn(ev) {
//        var event=window.event||ev;
//        var oDiv=document.getElementsByTagName("jm-tips");
//            oDiv.style.left=event.clientX+100+"px";
//            oDiv.style.top=event.clientY+100+"px";
//    }














































































































});