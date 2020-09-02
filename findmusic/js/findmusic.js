
window.onresize = function(){
		//当窗口改变大小的时候---执行函数里面的内容
		document.documentElement.style.fontSize = 
		document.documentElement.clientWidth*20/640 + "px";
		console.log(document.documentElement.clientWidth);
	}
	
$(function(){
	// 轮播图
	(function(){
		var timer = null;
		function run(){
			timer = setInterval(function(){
				// let ban_left = $('#ban').scrollLeft();
				// $('#ban').scrollLeft(ban_left+30*20+3);
				var timer1 = setInterval(function(){
					let ban_left = $('#ban').scrollLeft();
					$('#ban').scrollLeft(ban_left+30*20/100);
					if($('#ban').scrollLeft()%(30*20)===0){
						clearInterval(timer1);
					}else if($('#ban').scrollLeft()>=(30*20*9)){
						$('#ban').scrollLeft(0);
					}
				},5)
			},3000)
		}
		run();
		// 手机版不好使
		// 鼠标移动上图片停止滑动;
		// $('#ban').mouseover(function(){
		// 	clearInterval(timer);
		// })
		// //鼠标移开继续移动
		// $('#ban').mouseout(function(){
		// 	run();
		// });
		
		//手指长按停止轮播;
		document.getElementById('ban').press = function(){
			clearInterval(timer);
		}
		document.getElementById('ban').pressup = function(){
			run();
		}
		
		$(document).scroll(function(){
			if($(document).scrollTop()===0){
				$('#returnTop').css('display','none');
			}else{
				$('#returnTop').css('display','block');
			}
		})
		var timer2 = null;
		$('#returnTop').click(function(){
			timer2 = setInterval(function(){
				var scrollTop = $(document).scrollTop();
				$(document).scrollTop(scrollTop-50);
				if($(document).scrollTop()===0){
					clearInterval(timer2);
					$('#returnTop').css('display','none');
				}
			},10)
		})
		
	})();
	
})