window.onresize = function(){
		//当窗口改变大小的时候---执行函数里面的内容
		document.documentElement.style.fontSize = 
		document.documentElement.clientWidth*20/640 + "px";
	}