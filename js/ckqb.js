// 搜索栏
$('.header .header2>.bd>form>.ip1').focus(function(){
	$(this).css('border-color','#ff6700');
	$('.header .header2>.bd>form>.ip2').css('border-color','#ff6700');
	$('.header .header2>.bd>form>.text').fadeOut();
	$('.header .header2>.bd>form>.boxtext').css('display','block');
}).blur(function(){
	$(this).css('border-color','#e0e0e0');
	$('.header .header2>.bd>form>.ip2').css('border-color','#e0e0e0');
	$('.header .header2>.bd>form>.text').fadeIn();
	$('.header .header2>.bd>form>.boxtext').css('display','none');
})



//瀑布流
$(function(){
			var data=[
			{"id":"kbl","title":"一面技术，一面艺术","pic":"images/kbl.jpg"},
			{"id":"kbl","title":"听雷总讲述小米7年工艺探索之路","pic":"images/kbl1.jpg"},
			{"id":"kbl","title":"漂亮的米兔故事机，能讲故事还能微信互动","pic":"images/kbl2.jpg"},
			{"id":"kbl","title":"60秒看懂小米Note 有多酷","pic":"images/kbl3.jpg"},
			{"id":"kbl","title":"《去探索》小米年度品牌视频","pic":"images/kbl4.jpg"},
			{"id":"kbl","title":"小米MIX 品牌阐述","pic":"images/kbl5.jpg"},
		]
		//console.log(data);
		
		//监听滚动事件
		$(document).scroll(function(){
			
			//判断滚动条高度 到一半的位置 加载数据
			//获取文档的滚动高度
			var a=$(document).height();
			//alert(a);
			
			//总体的一半位置 加载数据
			if($(document).scrollTop()>=a/2){
				//只要发生滚动事件就添加数据
				var  str='';
				//那数据遍历添加
				for(var i in data){
				//console.log(data[i]);
				
				//str重新赋值
				str+='<div class="imgs">';
				str+='<img src="'+data[i]['pic']+'">';
				str+='<div class="jies">';
				str+='<p>'+data[i]['title']+'</p>';
				str+='</div>';
				str+='<div class="bof">';
				str+='</div>';
				str+='</div>';
				}
				
				//拿到数据给.main>.content>.kubu尾部添加
				$('.main>.content>.kubu').append(str);
			}

			//滚到4000停止
			if ($(document).scrollTop()>=4000) {
				$(document).off();
			}
		});
		
	})