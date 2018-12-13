function  MenuItem(title,href,className,subUlClassName) {
	this.domObj = null;
	this.title = title;
	this.href = href;
	this.className = className;
	this.subUlClassName = subUlClassName;//子菜单容器的class
	this.subMenus=[];
}	

//方法：
MenuItem.prototype.appendChildMenu = function(menuItemObj) {
	this.subMenus.push(menuItemObj);
};

MenuItem.prototype.removeChildMenu = function(menuItemObj) {
	let index = this.subMenus.indexOf(menuItemObj);
	this.subMenus.splice(index,1);
};

MenuItem.prototype.createUI = function(parentDom){
	this.domObj = document.createElement("li");
	this.domObj.className = this.className;
	parentDom.appendChild(this.domObj);
	
	let aDom = document.createElement("a");
	aDom.href = this.href;
	aDom.innerHTML = this.title;
	this.domObj.appendChild(aDom);
	
	//子一级菜单的处理
	if(this.subMenus.length>0){
		//1、给子菜单创建容器
		let ulDom = document.createElement("ul");
		ulDom.className = this.subUlClassName;
		this.domObj.appendChild(ulDom);
		//2、循环所有的子菜单对象，调用它们的createUI函数，让它们自己创建自己的外观。
		for(let i=0;i<this.subMenus.length;i++){
			this.subMenus[i].createUI(ulDom);
		}
	}
}

//根
function RootMenu(subUlClassName){
	this.subUlClassName = subUlClassName;
	this.subMenus=[];
}	

//方法：
RootMenu.prototype.appendChildMenu = function(menuItemObj) {
	this.subMenus.push(menuItemObj);
};

RootMenu.prototype.createUI = function(parentDom){
	//子一级菜单的处理
	if(this.subMenus.length>0){
		//1、给子菜单创建容器
		let ulDom = document.createElement("ul");
		ulDom.className = this.subUlClassName;
		parentDom.appendChild(ulDom);
		//2、循环所有的子菜单对象，调用它们的createUI函数，让它们自己创建自己的外观。
		for(let i=0;i<this.subMenus.length;i++){
			this.subMenus[i].createUI(ulDom);
		}
	}
}

window.onload = function(){
	let rootMenu = new RootMenu("one");

	//1、创建一级菜单
	let menu01 = new MenuItem('一级菜单01',"#","oneli","two");
	rootMenu.appendChildMenu(menu01);
	let menu02 = new MenuItem('一级菜单02',"#","oneli","two");
	rootMenu.appendChildMenu(menu02);
	let menu03 = new MenuItem('一级菜单03',"#","oneli","two");
	rootMenu.appendChildMenu(menu03);
	

	//2、创建二级菜单
	//2.1
	let menu0101 = new MenuItem('二级菜单0101',"#","twoli","three");
	menu01.appendChildMenu(menu0101);
	let menu0102 = new MenuItem('二级菜单0102',"#","twoli","three");
	menu01.appendChildMenu(menu0102);
	let menu0103 = new MenuItem('二级菜单0103',"#","twoli","three");
	menu01.appendChildMenu(menu0103);

	//2.2、
	let menu0201 = new MenuItem('二级菜单0201',"#","twoli","three");
	menu02.appendChildMenu(menu0201);
	let menu0202 = new MenuItem('二级菜单0202',"#","twoli","three");
	menu02.appendChildMenu(menu0202);
	let menu0203 = new MenuItem('二级菜单0203',"#","twoli","three");
	menu02.appendChildMenu(menu0203);

	//3、创建三级菜单
	//3.1
	let menu010101 = new MenuItem('百度一下',"http://www.baidu.com","threeli","");
	menu0101.appendChildMenu(menu010101);
	let menu010102 = new MenuItem('千锋',"http://www.1000phone.com","threeli","");
	menu0101.appendChildMenu(menu010102);	
	let menu010103 = new MenuItem('淘宝',"http://www.taobao.com","threeli","");
	menu0101.appendChildMenu(menu010103);

	//3.2
	let menu020101 = new MenuItem('小游戏',"http://www.4399.com","threeli","");
	menu0201.appendChildMenu(menu020101);
	let menu020102 = new MenuItem('打游戏',"http://www.lol.com","threeli","");
	menu0201.appendChildMenu(menu020102);

	//二、创建界面
	rootMenu.createUI(document.body);	

}

