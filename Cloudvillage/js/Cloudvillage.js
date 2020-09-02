window.onresize = function(){
		//当窗口改变大小的时候---执行函数里面的内容
		document.documentElement.style.fontSize = 
		document.documentElement.clientWidth*20/640 + "px";
	}

$(function(){
	(function(){
		// var fiexdTop = function(){
		// 	if($(document).scrollTop()!=0){
		// 		$('header').css({
		// 			'position':'fixed',
		// 			'left':'0',
		// 			'top':'0'
		// 		});
		// 	}else{
		// 		$('header').css('position','none');
		// 	}
		// }
		// $(document).on('scroll',fiexdTop);
		
		
		//Hammer
		// let bk = document.querySelector('#bk');
		// let hammer = new Hammer(bk);
		// hammer.on('tap',function(){
		// 	alert('我是tap点击事件');
		// 	var hea = document.querySelector('header');
		// 	hea.innerHTML = "我是tap点击事件";
		// });
		// hammer.on('press',function(){
		// 	alert('我是press长按点击事件');
		// 	var hea = document.querySelector('header');
		// 	hea.innerHTML = "我是press长按点击事件";
		// });
		// hammer.on('panstart',function(){
		// 	alert('拖动开始panstart');
		// })
		// hammer.on('panend',function(){
		// 	alert('拖动结束panend');
		// });
		// hammer.on('swipeup',function(){
		// 	alert('上滑swipeup');
		// })
		
		//点击显示,变背景为灰色;
		var res = true;
		$('#show img').click(function(){
			// res = false;
			if(res==true){
				$('#hide').css('display','block');
				$('body').addClass('changeBody');
				res = !res;
			}else{
				$('#hide').css('display','none');
				$('body').removeClass('changeBody');
				res = !res;
			}
		})
		
	})();
})
	