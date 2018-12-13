$(function(){
    //发送ajax请求获取所有的商品
    $.ajax({
        type:"post",
        url:"php/addShoppingCart.php",
        async:true,
        data:{},
        success:function(data){
            for(let i =0; i<data.length;i++){
                let str = "<td><input type = 'checkbox'/></td>\
                <td><div><img src = '"+data[i].goodsImg+"'/>\
                </div><p>"+data[i].goodsName+"</p><p>礼物颜色：薄荷绿</p></div></td>\
                <td>￥<span>"+data[i].recentprice+"</span></td>\
                <td calss = 'jishu'><span calss ='jian'>-</span><input type='text' value='"+data[i].count+"' readonly/>\
                <span calss = 'jia'>+</span></td><td><span>"+data[i].goodsDesc+"</span></td>\
                <td>￥<span calss ='zhongshu'></span></td>\
                <td id = 'del'><a href = '##'></a></td></tr>"
                $(".tb_tr").append("str");
            }
        }
    })
})