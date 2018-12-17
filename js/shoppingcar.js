$(function(){
    //获取ajax请求获取所有的商品
    $.ajax({
        type:"post",
        url:"php/getGoodsList.php",
        dataType:"json",
        async:true,
        data:{},
        success:function(data){
            console.log(data);
            for(let i =0; i<data.length;i++){
                let str = "<tr><td><input class = 'checkt' type = 'checkbox'/></td>\
                <td><div><img src = '"+data[i].beiyong6+"'></div>\
                <div><p>恋爱云端</p><p>礼物颜色：薄荷绿</p></div></td>\
                <td class = 'proPrice'>￥<span>"+data[i].goodsPrice+"</span></td><td class='jishu'>\
                <span class='jian'>-</span><input type='text' value ='1' readonly='readonly'/>\
                <span class='jia'>+</span></td><td><span>"+data[i].goodsDesc+"</span></td>\
                <td class = 'money'>￥<span class='proMoney'>"+data[i].goodsPrice+"</span></td>\
                <td class = 'del'><a href = '##'></a></td></tr>";
                $(".tb_tr").append(str);
            }
        }
    })
})