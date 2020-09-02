window.onresize = function(){
		//当窗口改变大小的时候---执行函数里面的内容
		document.documentElement.style.fontSize = 
		document.documentElement.clientWidth*20/640 + "px";
	}

$(function(){
	// 点击小叉,弹出确认删除广告的对话框
	(function(){
		$('.poster span').click(function(){
			$('.poster').remove();
		})
	})();
	
	(function(){
		$('#del').click(function(){
			var txt = confirm('请确认是否删除历史记录')
			if (txt==true) {
				$('.history').remove();
			}
		})
	})();
})
