var x=0;
var data;
//ajax请求
$.ajax({
    url:"https://www.easy-mock.com/mock/5bed8bd27939e615b8bbdd53/example/laoyangwotaonihouzi",   //路径
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

//        $(".jm-box ul li").live("click",function(){
//            x=1;
//            var y=$(this).index();
//            console.log(y);
//            console.log(x);
//            $.ajax({
//                url:"https://www.easy-mock.com/mock/5bed8bd27939e615b8bbdd53/example/laoyangwotaonihouzi",   //路径
////            url:"1.txt",
//                type:"get",   //get post 两个参数                                                 //请求方式
//
//                data:{            //往后台传输数据                                                 //数据存放
//
//                },
//                async:false,                                                                      //同步异步
//                dataType:"json"                                                                  //数据类型
//                //timeout:10000,                                                                    //几秒钟加载完成，网速好可以不写
//            }).done(function(result){
//                data=result[0].data.list;
//                //console.log(result);//所有数据
//                //console.log(data);
//                let str1=``;
//                    var{img}=data[y].imges[x];
//                    str1+=`<a href="javascript:;"><img src="${img}" alt=""></a>`;
//                console.log($(this));
//                $(".jm-box ul li").eq(y).html(str1);
//            });
//        })
//
//    $(".jm-box ul li").live("mouseover",function(){
//        var h=$(this).index();
//        $.ajax({
//            url:"https://www.easy-mock.com/mock/5bed8bd27939e615b8bbdd53/example/laoyangwotaonihouzi",   //路径
////            url:"1.txt",
//            type:"get",   //get post 两个参数                                                 //请求方式
//
//            data:{            //往后台传输数据                                                 //数据存放
//
//            },
//            async:false,                                                                      //同步异步
//            dataType:"json"                                                                  //数据类型
//            //timeout:10000,                                                                    //几秒钟加载完成，网速好可以不写
//        }).done(function(result){
//            name=result[0].data.list[h].name;
//            school=result[0].data.list[h].school;
//            presentation=result[0].data.list[h].presentation;
//            //console.log(result);//所有数据
//            let str2=``;
//            str2+=`<li><span>经脉名称：</span><a>${name}</a></li><li><span>所属门派：</span><a>${school}</a></li><li><span>经脉介绍：</span><a>${presentation}</a></li>`;
//            $(".jm-tips ul").html(str2);
//        });
//        $(".jm-tips").show();
//    });
//    $(".jm-box ul li").live("mouseout",function(){
//        $(".jm-tips").hide();
//    })


//经脉详情盒子跟随鼠标移动
//    document.onmousemove=function fn(ev) {
//        var event=window.event||ev;
//        var oDiv=document.getElementsByTagName("jm-tips");
//            oDiv.style.left=event.clientX+100+"px";
//            oDiv.style.top=event.clientY+100+"px";
//    }
