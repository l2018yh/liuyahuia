
//从后端获取数据
$(function(){   
    $.ajax({
        type:"post",
        url:"php/getGoodsList.php",
        dataType:"json",
        async:true,
        data:{},
        success:function(data){
        // console.log(data);
            let length = data.length;
            for(i=0; i<length;i++){
                let str = "<li id='"+data[i].goodsId+"'>\
                <img src='"+data[i].goodsImg+"'/>\
                <p>"+data[i].goodsName+"</p>\
                <p>"+data[i].goodsPrice+"</p>\
                <p calss = 'pinggjia_a'><span>1</span>评价</p>\
                </li>";
                $(".fenlei_bb").append(str);
            console.log(data);
            }
        }
    })
})

//点击商品，到详情页面
$(function(){
    $(".fenlei_bb").on("click","li",function(){
        //点击的当前li的下标
        let goodsId = $(this).attr("id");
        console.log(goodsId);
        localStorage.goodsId = goodsId;
        location.href = "goods.html";
    })
})