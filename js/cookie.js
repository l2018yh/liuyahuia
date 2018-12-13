function setCookie(key,value,day){
    var d = new Date();
    d.setDate(d.getDate() + day);
    document.cookie = key + "=" + value + ';expires=' + d.toGMTString();
}

function getCookie(key){
    var arr1 = document.cookie.split('; ');//这里是分号+空格分隔
    for( var i = 0 , len = arr1.length ; i < len ; i++ ){
        var arr2 = arr1[i].split('=');
        if( arr2[0] == key ){
            return decodeURI(arr2[1]);
        }
    }
}

function removeCookie(key){
    setCookie(key,'',-1);//调用上面的setCookie方法
}