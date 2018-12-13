// 跳转到登界面
$(".right_deng").click(function(){
    window.open("login.html");
});

//划过效果
//登录购物车
    $(".right_aa ul").css({"display":"none"});
        $(".right_aa").hover(
            function(){
                $(this).find("ul").show();
            },
            function(){
                $(this).find("ul").hide();
            }
    );

//关于我们
    $("#one").mouseenter(function(){
        $(this).css({"background-position":"0 -251px"})
    });
    $("#one").mouseleave(function(){
        $(this).css({"background-position":"0 -276px"})
    });
    $("#two").mouseenter(function(){
        $(this).css({"background-position":" -29px -251px"})
    })
    $("#two").mouseleave(function(){
        $(this).css({"background-position":" -29px -276px"})
    })
    $("#three").mouseenter(function(){
        $(this).css({"background-position":" -54px -251px"})
    })
    $("#three").mouseleave(function(){
        $(this).css({"background-position":"-54px -276px"})
    })
//回到顶部
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".top").fadeIn(500);
        }else{
            $(".top").fadeOut(500);
        }
    });
    $(".icn_b").click(function(){
        $("body,html").animate({scrollTop:0},500);
        return false;
    })



