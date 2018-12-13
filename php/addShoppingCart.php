<?php
	//添加到购物车
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$goodsId = $_REQUEST['goodsId'];
	$src = $_REQUEST['goodsImg'];
	$goodsName = $_REQUEST['goodsName'];
	$goodsPrice = $_REQUEST['goodsPrice'];
	$count = $_REQUEST['count'];
	//echo ("<script>console.log('".$goodsId."');console.log('".$src."');console.log('".$goodsName."')</script>");
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("liwuyou",$conn)){
		die("数据库选择失败".mysql_error());
	};
	
	//3）、传输数据（过桥）
	//先执行查询语句，判断数据库中是否存在该组数据
	$result = mysql_query("select * from shoppcart where src='".$src."' and recentprice='".$goodsPrice."'",$conn);
	//3.1)先查找该商品是否在购物车中存在
	$sqlstr = "";
	if(mysql_num_rows($result)>0){
		//如果存在，则使用update语句
	   	$sqlstr = "update shoppcart set count=count+".$count." where src='".$src."' and recentprice='".$goodsPrice."'";
	}else{
		//如果不存在，则使用insert语句	
		$sqlstr = "insert into shoppcart values('".$goodsId."','".$src."','".$goodsPrice."','".$goodsName."','".$count."')";
	}
	
    $result1=mysql_query($sqlstr,$conn);
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	if(!$result){
		die("添加失败".mysql_error());
	}
	
	//3、给客户端返回（响应） 1：表示添加成功 0：表示添加失败
	if($result){
		echo 1;
	}else{
		echo 0;
	}
?>